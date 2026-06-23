import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Battery, Camera, Unlock, RotateCcw } from "lucide-react";

interface CameraLensIntroProps {
  onComplete: () => void;
  onBlurChange: (blurAmount: number) => void;
}

export function CameraLensIntro({ onComplete, onBlurChange }: CameraLensIntroProps) {
  const [rotation, setRotation] = useState(0); // 0 to -360 degrees
  const [isDragging, setIsDragging] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [systemStatus, setSystemStatus] = useState("LENS LOCK: SECURED");

  const lensRef = useRef<HTMLDivElement>(null);
  const dragStartAngleRef = useRef(0);
  const baseRotationRef = useRef(0);

  // Skip Intro
  const handleSkip = () => {
    onBlurChange(0);
    onComplete();
  };

  // Convert mouse/touch coordinates to angle relative to the center of the lens
  const getAngle = (clientX: number, clientY: number) => {
    if (!lensRef.current) return 0;
    const rect = lensRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    return Math.atan2(dy, dx) * (180 / Math.PI);
  };

  const handleStart = (clientX: number, clientY: number) => {
    if (isUnlocked) return;
    setIsDragging(true);
    const initialAngle = getAngle(clientX, clientY);
    dragStartAngleRef.current = initialAngle;
    baseRotationRef.current = rotation;
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging || isUnlocked) return;
    const currentAngle = getAngle(clientX, clientY);
    
    // Calculate difference in angle
    let delta = currentAngle - dragStartAngleRef.current;
    
    // Adjust for circular wrap-around (crossing the -180/180 boundaries)
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    // Unscrewing is a counter-clockwise movement (decreases angle, e.g. 0 -> -360)
    let newRotation = baseRotationRef.current + delta;

    // Cap the rotation between -360 and 0 to simulate unscrewing limits
    if (newRotation > 0) newRotation = 0;
    if (newRotation < -360) newRotation = -360;

    setRotation(newRotation);

    // Map rotation to background blur: 0deg = 40px blur, -360deg = 0px blur
    const progress = Math.abs(newRotation) / 360;
    const currentBlur = 40 - progress * 40;
    onBlurChange(currentBlur);

    // Update system log text
    if (newRotation === 0) {
      setSystemStatus("LENS LOCK: SECURED");
    } else if (newRotation > -360) {
      setSystemStatus(`UNSCREWING MOUNT: ${Math.round(progress * 100)}%`);
    } else {
      setSystemStatus("LENS MOUNT RELEASED · UNLOCKED");
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // Bind event listeners globally so dragging works smoothly even if pointer leaves the lens
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onMouseUp = () => {
      handleEnd();
    };

    const onTouchEnd = () => {
      handleEnd();
    };

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onTouchEnd);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging]);

  // Handle release mechanical trigger at 360 degrees
  useEffect(() => {
    if (rotation === -360 && !isUnlocked) {
      setIsUnlocked(true);
      setSystemStatus("LENS DISCONNECTED");
      
      const timer = setTimeout(() => {
        onComplete();
      }, 950);
      
      return () => clearTimeout(timer);
    }
  }, [rotation, isUnlocked, onComplete]);

  const progressPercent = Math.round((Math.abs(rotation) / 360) * 100);

  return (
    <AnimatePresence>
      {!isUnlocked && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#151210]/98 select-none font-mono text-xs overflow-hidden"
        >
          {/* Top HUD */}
          <div className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between opacity-80 sm:px-4">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <Camera size={14} className="text-[#D4BA96] animate-pulse" />
                <span className="tracking-[0.2em] text-[10px] text-white font-bold">HASSELBLAD X2D · 100C</span>
              </div>
              <span className="text-[8px] text-white/40 tracking-wider">MECHANICAL MOUNT INTERFACE</span>
            </div>
            
            <button
              onClick={handleSkip}
              className="px-3 py-1.5 border border-white/10 hover:border-white/40 bg-white/5 text-[9px] uppercase tracking-[0.2em] text-white/80 rounded transition-all hover:bg-white/10"
            >
              Skip Intro ↳
            </button>
          </div>

          {/* Camera Viewfinder Borders */}
          <div className="absolute inset-8 pointer-events-none border border-white/5">
            <div className="absolute -left-1 -top-1 w-6 h-6 border-l-2 border-t-2 border-white/30" />
            <div className="absolute -right-1 -top-1 w-6 h-6 border-r-2 border-t-2 border-white/30" />
            <div className="absolute -left-1 -bottom-1 w-6 h-6 border-l-2 border-b-2 border-white/30" />
            <div className="absolute -right-1 -bottom-1 w-6 h-6 border-r-2 border-b-2 border-white/30" />
          </div>

          {/* Viewfinder crosshairs */}
          <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
            <div className="w-12 h-[1px] bg-white" />
            <div className="h-12 w-[1px] bg-white absolute" />
          </div>

          {/* Main Mechanical Container */}
          <div className="relative flex flex-col items-center justify-center p-8">
            
            {/* FIXED CAMERA BODY MOUNT RING (Chrome bezel) */}
            <div className="absolute w-[350px] h-[350px] rounded-full border-[3px] border-[#36302e]/60 bg-gradient-to-tr from-[#1b1716] to-[#2b2523] shadow-[0_15px_50px_rgba(0,0,0,0.9),inset_0_2px_10px_rgba(255,255,255,0.1)] flex items-center justify-center pointer-events-none">
              
              {/* Outer Mount index mark (Fixed Red Dot at 12 o'clock) */}
              <div className="absolute top-2 flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)] border border-black" />
                <span className="text-[6px] text-red-500/80 tracking-widest mt-1">MOUNT INDEX</span>
              </div>

              {/* Bayonet socket slots visual details */}
              <div className="absolute inset-4 rounded-full border border-white/5 bg-[repeating-conic-gradient(from_0deg,#241e1c_0deg,#241e1c_30deg,transparent_30deg,transparent_60deg)] opacity-35" />
            </div>

            {/* ROTATABLE & DETACHABLE LENS ASSEMBLY */}
            <motion.div
              ref={lensRef}
              onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
              onTouchStart={(e) => {
                if (e.touches.length > 0) {
                  handleStart(e.touches[0].clientX, e.touches[0].clientY);
                }
              }}
              animate={isUnlocked ? {
                y: 900,
                rotate: rotation - 65,
                opacity: 0,
                scale: 0.9,
                transition: { duration: 0.85, ease: [0.32, 0, 0.67, 0] } // gravity-like drop acceleration
              } : {
                rotate: rotation,
                scale: isDragging ? 1.015 : 1,
              }}
              style={{ cursor: isUnlocked ? "default" : "grab" }}
              className="relative z-10 w-80 h-80 rounded-full border-[8px] border-[#221c19] bg-[#161210] shadow-[0_0_60px_rgba(0,0,0,0.85),inset_0_0_30px_rgba(0,0,0,0.8)] flex items-center justify-center transition-shadow select-none"
            >
              {/* Lens marker: White dot that rotates with the lens */}
              <div className="absolute top-2 z-20 flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white border border-black shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
                <span className="text-[5px] text-white/50 tracking-widest mt-0.5">RELEASE</span>
              </div>

              {/* Ribbed Focus Ring Grip Ridges */}
              <div className="absolute inset-1 rounded-full opacity-60 bg-[repeating-conic-gradient(from_0deg,#3a312e_0deg,#3a312e_2deg,transparent_2deg,transparent_4deg)]" />

              {/* Inner metallic barrel edge */}
              <div className="absolute inset-4 rounded-full border border-white/10 bg-gradient-to-tr from-[#1b1513] to-[#261f1c]" />

              {/* Lens core glass body */}
              <div className="absolute inset-10 rounded-full border-[4px] border-[#2c221e] bg-gradient-to-tr from-[#120d0c] to-[#0a0707] shadow-[inset_0_0_40px_rgba(0,0,0,0.95)] overflow-hidden flex items-center justify-center">
                
                {/* Simulated Lens Glare & Bokeh inside the glass */}
                <div className="absolute -inset-10 bg-gradient-to-br from-cyan-500/15 via-transparent to-[#D4BA96]/15 pointer-events-none mix-blend-screen opacity-65 animate-pulse" />
                <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent skew-y-[-12deg] pointer-events-none" />

                {/* Aperture blades details (aesthetic design overlay) */}
                <svg className="absolute w-44 h-44 pointer-events-none opacity-25 text-[#D4BA96]" viewBox="0 0 100 100">
                  <path d="M50 0 L100 50 L100 100 Z" fill="currentColor" className="origin-center" style={{ transform: `rotate(${rotation * 1.5}deg)` }} />
                  <path d="M100 50 L50 100 L0 100 Z" fill="currentColor" className="origin-center" style={{ transform: `rotate(${rotation * 1.5 + 90}deg)` }} />
                  <path d="M50 100 L0 50 L0 0 Z" fill="currentColor" className="origin-center" style={{ transform: `rotate(${rotation * 1.5 + 180}deg)` }} />
                  <path d="M0 50 L50 0 L100 0 Z" fill="currentColor" className="origin-center" style={{ transform: `rotate(${rotation * 1.5 + 270}deg)` }} />
                </svg>

                {/* Central lens core status info */}
                <div className="absolute z-10 flex flex-col items-center justify-center font-mono text-[9px] text-white/50 tracking-wider">
                  <span className="text-[14px] font-bold text-[#e8dec9] mb-1 font-sans">{progressPercent}%</span>
                  <span className="text-[7px] text-white/30 tracking-widest">UNSCREW</span>
                </div>
              </div>

              {/* Lens Text Markings around outer perimeter */}
              <div className="absolute inset-8 rounded-full border border-white/5 text-[7px] text-white/20 pointer-events-none flex items-center justify-center">
                <span className="absolute top-3 font-mono tracking-widest">GIABAO.LENS 1:1.2 50mm</span>
                <span className="absolute bottom-3 font-mono tracking-widest">MADE IN VIETNAM</span>
              </div>
            </motion.div>

            {/* INTERACTIVE ROTATION TOOLTIPS */}
            <div className="mt-10 flex flex-col items-center gap-2 max-w-[260px] text-center">
              <div className="flex items-center gap-2 text-white/40 text-[9px] uppercase tracking-[0.25em] animate-pulse">
                <RotateCcw size={10} className="text-[#D4BA96]" />
                <span>ROTATE COUNTER-CLOCKWISE</span>
              </div>
              <p className="text-[10px] text-white/55 leading-relaxed">
                Click & xoay tròn ống kính ngược chiều kim đồng hồ để tháo khóa khớp.
              </p>
            </div>
          </div>

          {/* Bottom HUD bar */}
          <div className="absolute left-6 right-6 bottom-6 z-20 flex flex-col sm:flex-row items-center justify-between opacity-80 gap-4 sm:px-4">
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${rotation === -360 ? "bg-green-500 animate-ping" : "bg-[#D4BA96] animate-pulse"}`} />
              <span className="tracking-widest text-[9px] text-[#e8dec9] uppercase font-bold">{systemStatus}</span>
            </div>

            <div className="flex items-center gap-5 text-white/60 text-[9px] uppercase tracking-widest">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-bold">F/1.2 LENS</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-bold">UNLOCK BY 360° SWEEP</span>
              <div className="flex items-center gap-1 font-bold">
                <Battery size={11} className="text-white/60" />
                <span>100%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
