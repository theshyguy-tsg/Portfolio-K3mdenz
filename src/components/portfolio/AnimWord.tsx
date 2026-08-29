import { motion } from "framer-motion";
import { charDrop } from "./motion-presets";

export function AnimWord({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-block overflow-hidden ${className ?? ""}`}>
      <motion.span variants={charDrop} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}
