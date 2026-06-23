import { useCallback, useRef } from "react";

const FX = [
  "hfx-jelly",
  "hfx-shake",
  "hfx-tilt",
  "hfx-pop",
  "hfx-skew",
  "hfx-spin",
  "hfx-bounce",
  "hfx-glow-pulse",
  "hfx-flip",
] as const;

/**
 * Trả về handlers gắn vào element để mỗi lần hover sẽ áp 1 hiệu ứng ngẫu nhiên.
 * Tránh lặp lại hiệu ứng vừa dùng để cảm giác đa dạng hơn.
 */
export function useRandomHover<T extends HTMLElement = HTMLElement>() {
  const lastRef = useRef<string | null>(null);

  const onMouseEnter = useCallback((e: React.MouseEvent<T>) => {
    const el = e.currentTarget;
    // Xoá toàn bộ class fx cũ
    FX.forEach((c) => el.classList.remove(c));
    // Force reflow để animation chạy lại
    void el.offsetWidth;
    // Pick ngẫu nhiên, tránh trùng lần trước
    let pick = FX[Math.floor(Math.random() * FX.length)];
    if (pick === lastRef.current && FX.length > 1) {
      pick = FX[(FX.indexOf(pick) + 1) % FX.length];
    }
    lastRef.current = pick;
    el.classList.add(pick);
  }, []);

  const onAnimationEnd = useCallback((e: React.AnimationEvent<T>) => {
    const el = e.currentTarget;
    FX.forEach((c) => {
      if (e.animationName.startsWith(c)) el.classList.remove(c);
    });
  }, []);

  return { onMouseEnter, onAnimationEnd };
}
