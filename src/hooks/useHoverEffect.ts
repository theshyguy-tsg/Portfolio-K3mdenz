import { useCallback, useRef } from "react";
import { FX_LIST, type HoverEffectType } from "@/components/portfolio/data";

/**
 * Trả về handlers gắn vào element để mỗi lần hover sẽ áp 1 hiệu ứng.
 * Nếu truyền "random", hiệu ứng sẽ ngẫu nhiên (tránh lặp lại).
 * Nếu truyền tên hiệu ứng cụ thể, nó sẽ áp đúng hiệu ứng đó.
 */
export function useHoverEffect<T extends HTMLElement = HTMLElement>(effect: HoverEffectType = "random") {
  const lastRef = useRef<string | null>(null);

  const onMouseEnter = useCallback((e: React.MouseEvent<T>) => {
    const el = e.currentTarget;
    // Xoá toàn bộ class fx cũ
    FX_LIST.forEach((c) => el.classList.remove(c));
    // Force reflow để animation chạy lại
    void el.offsetWidth;
    
    let pick = effect;
    if (pick === "random") {
      pick = FX_LIST[Math.floor(Math.random() * FX_LIST.length)];
      if (pick === lastRef.current && FX_LIST.length > 1) {
        pick = FX_LIST[(FX_LIST.indexOf(pick) + 1) % FX_LIST.length];
      }
      lastRef.current = pick;
    }
    
    el.classList.add(pick);
  }, [effect]);

  const onAnimationEnd = useCallback((e: React.AnimationEvent<T>) => {
    const el = e.currentTarget;
    FX_LIST.forEach((c) => {
      if (e.animationName.startsWith(c)) el.classList.remove(c);
    });
  }, []);

  return { onMouseEnter, onAnimationEnd };
}
