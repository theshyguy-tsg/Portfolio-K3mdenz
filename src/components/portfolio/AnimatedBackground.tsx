import { useState, useEffect } from "react";
import { ParticleField } from "./ParticleField";
import { BlobMesh } from "./BlobMesh";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    setMounted(true);

    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!mounted) return null;

  return isMobile ? <BlobMesh /> : <ParticleField />;
}
