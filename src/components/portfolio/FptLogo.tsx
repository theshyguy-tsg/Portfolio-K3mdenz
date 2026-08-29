// FPT Polytechnic logo — uses the official asset at /LogoFPT.png (in public/).
// `showWordmark` kept for API compatibility; the PNG already contains the full
// FPT Education logo + "FPT POLYTECHNIC" wordmark. When false we crop the
// bottom wordmark via aspect-ratio + object-position, keeping only the top
// F·P·T logo.

type FptLogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function FptLogo({ className, showWordmark = true }: FptLogoProps) {
  if (showWordmark) {
    return (
      <img
        src="/LogoFPT.png"
        alt="FPT Polytechnic"
        className={className}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    );
  }

  // Crop to top half (F·P·T tiles only) by wrapping in a clipping container.
  // Source PNG is ~950x400, the top logo occupies roughly the first 55% of height.
  return (
    <div
      className={className}
      style={{
        aspectRatio: "950 / 220",
        overflow: "hidden",
      }}
      role="img"
      aria-label="FPT Education"
    >
      <img
        src="/LogoFPT.png"
        alt=""
        className="block h-auto w-full"
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
