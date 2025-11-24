"use client";

import { useEffect, useRef } from "react";

interface DitherArtProps {
  className?: string;
}

export function DitherArt({ className = "" }: DitherArtProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener("resize", resize);

    // Dither pattern matrices (Bayer 4x4)
    const bayerMatrix = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5],
    ];

    const pixelSize = 4;
    let time = 0;
    let animationId: number;

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Create flowing wave pattern with dithering
      for (let x = 0; x < width; x += pixelSize) {
        for (let y = 0; y < height; y += pixelSize) {
          // Create multiple overlapping waves
          const wave1 = Math.sin((x * 0.01) + (y * 0.005) + time * 0.5) * 0.5 + 0.5;
          const wave2 = Math.sin((x * 0.008) - (y * 0.01) + time * 0.3) * 0.5 + 0.5;
          const wave3 = Math.cos((x * 0.005) + (y * 0.008) - time * 0.4) * 0.5 + 0.5;

          // Combine waves and add distance-based fade
          const centerX = width / 2;
          const centerY = height / 2;
          const distX = Math.abs(x - centerX) / centerX;
          const distY = Math.abs(y - centerY) / centerY;
          const dist = Math.sqrt(distX * distX + distY * distY);
          const fade = Math.max(0, 1 - dist * 0.8);

          let value = ((wave1 + wave2 + wave3) / 3) * fade;

          // Apply Bayer dithering
          const bx = Math.floor(x / pixelSize) % 4;
          const by = Math.floor(y / pixelSize) % 4;
          const threshold = bayerMatrix[by][bx] / 16;

          if (value > threshold * 0.4) {
            // Gradient from emerald to white based on value
            const alpha = value * 0.35;
            const greenTint = value > 0.4 ? 0.5 : 0;
            ctx.fillStyle = `rgba(${160 + greenTint * 95}, ${230 + greenTint * 25}, ${180 + greenTint * 75}, ${alpha})`;
            ctx.fillRect(x, y, pixelSize - 1, pixelSize - 1);
          }
        }
      }

      time += 0.02;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}
