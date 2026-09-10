"use client";

import { useEffect, useRef, useState } from "react";

const WIDTH = 600;
const HEIGHT = 360;
const PADDLE_H = 70;
const PADDLE_W = 10;
const BALL_SIZE = 8;
const WIN_SCORE = 11;

type Difficulty = "easy" | "normal" | "hard";

const AI_SPEED: Record<Difficulty, number> = {
  easy: 3.2,
  normal: 4.6,
  hard: 6.2,
};

export default function PingPongGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState<null | "player" | "ai">(null);
  const [difficulty, setDifficulty] = useState<Difficulty>("normal");

  const stateRef = useRef({
    playerY: HEIGHT / 2 - PADDLE_H / 2,
    aiY: HEIGHT / 2 - PADDLE_H / 2,
    ballX: WIDTH / 2,
    ballY: HEIGHT / 2,
    ballVX: 4,
    ballVY: 2.4,
    keys: { up: false, down: false },
    playerScore: 0,
    aiScore: 0,
    running: false,
    difficulty: "normal" as Difficulty,
  });

  // keep ref in sync so the animation loop (started once) sees live values
  useEffect(() => {
    stateRef.current.running = running;
  }, [running]);
  useEffect(() => {
    stateRef.current.difficulty = difficulty;
  }, [difficulty]);

  function resetBall(direction: number) {
    const s = stateRef.current;
    s.ballX = WIDTH / 2;
    s.ballY = HEIGHT / 2;
    s.ballVX = 4 * direction;
    s.ballVY = (Math.random() * 4 - 2) || 2;
  }

  function resetGame() {
    const s = stateRef.current;
    s.playerY = HEIGHT / 2 - PADDLE_H / 2;
    s.aiY = HEIGHT / 2 - PADDLE_H / 2;
    s.playerScore = 0;
    s.aiScore = 0;
    setPlayerScore(0);
    setAiScore(0);
    setGameOver(null);
    resetBall(Math.random() > 0.5 ? 1 : -1);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    resetBall(1);

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W")
        stateRef.current.keys.up = true;
      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S")
        stateRef.current.keys.down = true;
    }
    function onKeyUp(e: KeyboardEvent) {
      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W")
        stateRef.current.keys.up = false;
      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S")
        stateRef.current.keys.down = false;
    }
    function onPointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      const scale = HEIGHT / rect.height;
      const y = (e.clientY - rect.top) * scale;
      stateRef.current.playerY = Math.min(
        HEIGHT - PADDLE_H,
        Math.max(0, y - PADDLE_H / 2)
      );
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    canvas.addEventListener("pointermove", onPointerMove);

    let frameId: number;

    function draw() {
      // Re-narrow inside the closure: TS loses the outer `if (!ctx) return`
      // guard for a hoisted function passed to requestAnimationFrame.
      if (!ctx) return;
      const s = stateRef.current;

      if (s.running) {
        if (s.keys.up) s.playerY = Math.max(0, s.playerY - 6);
        if (s.keys.down)
          s.playerY = Math.min(HEIGHT - PADDLE_H, s.playerY + 6);

        const aiSpeed = AI_SPEED[s.difficulty];
        const aiCenter = s.aiY + PADDLE_H / 2;
        const targetY = s.ballY;
        if (Math.abs(aiCenter - targetY) > 4) {
          s.aiY += aiCenter < targetY ? aiSpeed : -aiSpeed;
        }
        s.aiY = Math.min(HEIGHT - PADDLE_H, Math.max(0, s.aiY));

        s.ballX += s.ballVX;
        s.ballY += s.ballVY;

        if (s.ballY <= 0 || s.ballY >= HEIGHT - BALL_SIZE) {
          s.ballVY *= -1;
          s.ballY = Math.min(HEIGHT - BALL_SIZE, Math.max(0, s.ballY));
        }

        // player paddle (left)
        if (
          s.ballX <= PADDLE_W &&
          s.ballX >= 0 &&
          s.ballY + BALL_SIZE >= s.playerY &&
          s.ballY <= s.playerY + PADDLE_H &&
          s.ballVX < 0
        ) {
          const hitPos =
            (s.ballY - s.playerY) / PADDLE_H - 0.5; // -0.5..0.5
          s.ballVX = Math.min(9, Math.abs(s.ballVX) * 1.06);
          s.ballVY = hitPos * 7;
          s.ballX = PADDLE_W;
        }

        // ai paddle (right)
        if (
          s.ballX + BALL_SIZE >= WIDTH - PADDLE_W &&
          s.ballY + BALL_SIZE >= s.aiY &&
          s.ballY <= s.aiY + PADDLE_H &&
          s.ballVX > 0
        ) {
          const hitPos = (s.ballY - s.aiY) / PADDLE_H - 0.5;
          s.ballVX = -Math.min(9, Math.abs(s.ballVX) * 1.06);
          s.ballVY = hitPos * 7;
          s.ballX = WIDTH - PADDLE_W - BALL_SIZE;
        }

        if (s.ballX < -BALL_SIZE) {
          s.aiScore += 1;
          setAiScore(s.aiScore);
          if (s.aiScore >= WIN_SCORE) {
            s.running = false;
            setRunning(false);
            setGameOver("ai");
          } else {
            resetBall(1);
          }
        } else if (s.ballX > WIDTH + BALL_SIZE) {
          s.playerScore += 1;
          setPlayerScore(s.playerScore);
          if (s.playerScore >= WIN_SCORE) {
            s.running = false;
            setRunning(false);
            setGameOver("player");
          } else {
            resetBall(-1);
          }
        }
      }

      // --- render ---
      ctx.fillStyle = "#0f1633";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      ctx.strokeStyle = "rgba(241,246,252,0.22)";
      ctx.setLineDash([6, 10]);
      ctx.beginPath();
      ctx.moveTo(WIDTH / 2, 0);
      ctx.lineTo(WIDTH / 2, HEIGHT);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = "#5b74ff";
      ctx.fillRect(0, s.playerY, PADDLE_W, PADDLE_H);
      ctx.fillStyle = "#12b3d8";
      ctx.fillRect(WIDTH - PADDLE_W, s.aiY, PADDLE_W, PADDLE_H);

      ctx.fillStyle = "#f1f6fc";
      ctx.beginPath();
      ctx.arc(
        s.ballX + BALL_SIZE / 2,
        s.ballY + BALL_SIZE / 2,
        BALL_SIZE / 2,
        0,
        Math.PI * 2
      );
      ctx.fill();

      frameId = requestAnimationFrame(draw);
    }

    frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  function handleStart() {
    if (gameOver) resetGame();
    setRunning(true);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex w-full max-w-[600px] items-center justify-between text-sm font-medium text-paper/70">
        <span>你的分數：{playerScore}</span>
        <span className="font-display tracking-[0.2em] text-paper/40">
          先得 {WIN_SCORE} 分獲勝
        </span>
        <span>電腦分數：{aiScore}</span>
      </div>

      <div className="relative w-full max-w-[600px]">
        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          className="w-full touch-none border border-white/10 bg-ink"
        />
        {!running && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink/80 text-center">
            {gameOver ? (
              <p className="text-lg font-semibold text-paper">
                {gameOver === "player" ? "🏓 你贏了！" : "電腦獲勝，再試一次！"}
              </p>
            ) : (
              <p className="text-sm text-paper/70">
                滑鼠 / 觸控拖曳，或用 ↑↓ / W S 移動左側球拍
              </p>
            )}
            <button
              onClick={handleStart}
              className="bg-accent px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              {gameOver ? "再玩一次" : "開始遊戲"}
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="text-paper/40">難度：</span>
        {(["easy", "normal", "hard"] as Difficulty[]).map((d) => (
          <button
            key={d}
            onClick={() => setDifficulty(d)}
            className={`px-3 py-1 font-medium transition-colors ${
              difficulty === d
                ? "bg-accent text-white"
                : "bg-white/10 text-paper/60 hover:bg-white/20"
            }`}
          >
            {d === "easy" ? "簡單" : d === "normal" ? "普通" : "困難"}
          </button>
        ))}
      </div>
    </div>
  );
}
