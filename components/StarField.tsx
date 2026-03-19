"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type StarFieldProps = {
  className?: string;
  density?: number;
  style?: CSSProperties;
};

type Star = {
  x: number;
  y: number;
  r: number;
  speed: number;
  alpha: number;
  alphaDir: number;
};

function hexToRgba(hex: string, alpha: number) {
  const normalized = hex.trim().replace("#", "");
  const full = normalized.length === 3
    ? normalized
        .split("")
        .map((char) => `${char}${char}`)
        .join("")
    : normalized;

  const parsed = Number.parseInt(full, 16);
  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function StarField({
  className = "",
  density = 0.00009,
  style,
}: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const rootStyles = getComputedStyle(document.documentElement);
    const starHex = rootStyles.getPropertyValue("--white-warm") || "#ede8ff";

    const createStars = (width: number, height: number) => {
      const count = Math.max(60, Math.floor(width * height * density));
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.35,
        speed: Math.random() * 0.06 + 0.01,
        alpha: Math.random() * 0.4 + 0.25,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createStars(rect.width, rect.height);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      for (const star of starsRef.current) {
        star.y += star.speed;
        star.alpha += star.alphaDir * 0.0025;

        if (star.alpha > 0.72) star.alphaDir = -1;
        if (star.alpha < 0.18) star.alphaDir = 1;
        if (star.y - star.r > height) {
          star.y = -4;
          star.x = Math.random() * width;
        }

        context.beginPath();
        context.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        context.fillStyle = hexToRgba(starHex, star.alpha);
        context.fill();
      }

      frameRef.current = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [density]);

  return <canvas ref={canvasRef} className={className} style={style} aria-hidden="true" />;
}
