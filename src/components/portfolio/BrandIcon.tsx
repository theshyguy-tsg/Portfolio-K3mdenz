// Brand-colored mini logos for the toolbelt marquee.
// Each glyph uses official-ish brand colors so the row reads as a real toolset.

type Props = { name: string; className?: string };

export function BrandIcon({ name, className = "h-7 w-7 sm:h-9 sm:w-9" }: Props) {
  const key = name.trim().toLowerCase();
  switch (key) {
    case "chatgpt":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path
            fill="#10A37F"
            d="M22.3 9.8a5.5 5.5 0 0 0-.5-4.5 5.6 5.6 0 0 0-6-2.7A5.6 5.6 0 0 0 7.3 3.8a5.5 5.5 0 0 0-3.7 2.7 5.6 5.6 0 0 0 .7 6.6 5.5 5.5 0 0 0 .5 4.5 5.6 5.6 0 0 0 6 2.7 5.5 5.5 0 0 0 4.2 1.9 5.6 5.6 0 0 0 5.4-3.9 5.5 5.5 0 0 0 3.7-2.7 5.6 5.6 0 0 0-1.8-6.8zM13 21a4.1 4.1 0 0 1-2.7-1l.1-.1 4.5-2.6c.2-.1.3-.4.3-.6V10l1.9 1.1v5.2c0 2.6-2.1 4.7-4.7 4.7zm-9.1-3.9a4.1 4.1 0 0 1-.5-2.8l.1.1 4.5 2.6c.2.1.5.1.7 0l5.5-3.2v2.2L9.7 18.7a4.7 4.7 0 0 1-5.8-1.6zM2.7 9.6a4.1 4.1 0 0 1 2.2-1.8v5.4c0 .2.1.5.3.6l5.5 3.2-1.9 1.1-4.5-2.6a4.7 4.7 0 0 1-1.6-5.9zm15.6 3.6L12.8 10l1.9-1.1 4.5 2.6a4.7 4.7 0 0 1-.7 8.4v-5.4c0-.2-.1-.4-.2-.5zm1.9-2.8-.1-.1-4.5-2.6a.7.7 0 0 0-.7 0L9.4 11v-2.2l4.5-2.6a4.7 4.7 0 0 1 7 4.9zM8.4 14.3 6.5 13.2V8c0-2.7 2.2-4.8 4.8-4.7 1 0 1.9.3 2.7.9l-.1.1-4.5 2.6c-.2.1-.3.4-.3.6v5.8zm1-2.2L12 10.6l2.6 1.5v3l-2.6 1.5L9.4 15v-3z"
          />
        </svg>
      );
    case "claude":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="12" fill="#D97757" />
          <path
            fill="#fff"
            d="M8.6 7.5h1.7l3 9h-1.6l-.7-2.1h-3.3L7 16.5H5.4l3.2-9zm.7 1.7-1.2 3.7h2.5l-1.3-3.7zm5.4-1.7h1.6v9h-1.6v-9z"
          />
        </svg>
      );
    case "gemini":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <defs>
            <linearGradient id="gemini-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="50%" stopColor="#9B72CB" />
              <stop offset="100%" stopColor="#D96570" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gemini-g)"
            d="M12 2c.3 5.4 4.6 9.7 10 10-5.4.3-9.7 4.6-10 10-.3-5.4-4.6-9.7-10-10C7.4 11.7 11.7 7.4 12 2z"
          />
        </svg>
      );
    case "lovable":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path
            fill="#FF4D7E"
            d="M12 21s-7-4.3-9.2-9A5.4 5.4 0 0 1 12 6.5a5.4 5.4 0 0 1 9.2 5.5C19 16.7 12 21 12 21z"
          />
        </svg>
      );
    case "antigravity":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="11" fill="#0F172A" />
          <path fill="#7DD3FC" d="M12 4l2.4 5L20 11l-4.5 3.5L17 20l-5-2.8L7 20l1.5-5.5L4 11l5.6-2L12 4z" />
        </svg>
      );
    case "cursor":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path fill="#000" d="M3 3l18 9-9 3-3 9L3 3z" />
        </svg>
      );
    case "n8n":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="11" fill="#EA4B71" />
          <path fill="#fff" d="M5 9h2v6H5zm4-2h2v10H9zm4 1h2v8h-2zm4-2h2v12h-2z" />
        </svg>
      );
    case "make":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect width="24" height="24" rx="5" fill="#6D00CC" />
          <path fill="#fff" d="M5 6l3 12h2l1.5-7L13 18h2l3-12h-2.2L14 14.5 12 6h-2l-2 8.5L6.2 6H5z" />
        </svg>
      );
    case "zapier":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="11" fill="#FF4A00" />
          <path fill="#fff" d="M14 11h6v2h-6l4 4-1.4 1.4-4-4v6h-2v-6l-4 4L5.2 17l4-4H3v-2h6.2l-4-4L6.6 5.6l4 4V3h2v6.6l4-4L18 7l-4 4z" />
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path fill="#000" d="M12 3l11 19H1L12 3z" />
        </svg>
      );
    case "netlify":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path fill="#00C7B7" d="M12 2 2 12l10 10 10-10L12 2zm0 4.5L17.5 12 12 17.5 6.5 12 12 6.5z" />
        </svg>
      );
    case "supabase":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path fill="#3ECF8E" d="M13 2v10h8L11 22V12H3L13 2z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path
            fill="#181717"
            d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.74.11 3.03.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.73 18.27.5 12 .5z"
          />
        </svg>
      );
    case "vs code":
    case "vscode":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path fill="#0098FF" d="M17 2 7 11 3 8 2 9v6l1 1 4-3 10 9 5-2V4l-5-2zm0 5.5v9L9.5 12 17 7.5z" />
        </svg>
      );
    case "intellij":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect width="24" height="24" rx="3" fill="#000" />
          <path fill="#FE2857" d="M3 3h6v2H7v8h2v2H3v-2h2V5H3z" />
          <path fill="#fff" d="M14 16h6v2h-6z" />
          <path fill="#FFB300" d="M14 6h6v2h-2v6h-2V8h-2z" />
        </svg>
      );
    case "netbeans":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path fill="#1B6AC6" d="M12 2 2 7v10l10 5 10-5V7L12 2zm0 2.4L19 8v8l-7 3.6L5 16V8l7-3.6z" />
        </svg>
      );
    case "sql server":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <ellipse cx="12" cy="5" rx="8" ry="2.5" fill="#CC2927" />
          <path fill="#CC2927" d="M4 7v10c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V7c0 1.4-3.6 2.5-8 2.5S4 8.4 4 7z" />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="1.2">
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path
            fill="#38BDF8"
            d="M12 6c-2.7 0-4.4 1.3-5 4 .8-1 1.8-1.5 3-1.2.7.2 1.2.7 1.7 1.3 1 1 2 2 4.3 2 2.7 0 4.4-1.3 5-4-.8 1-1.8 1.5-3 1.2-.7-.2-1.2-.7-1.7-1.3-1-1-2-2-4.3-2zm-5 7c-2.7 0-4.4 1.3-5 4 .8-1 1.8-1.5 3-1.2.7.2 1.2.7 1.7 1.3 1 1 2 2 4.3 2 2.7 0 4.4-1.3 5-4-.8 1-1.8 1.5-3 1.2-.7-.2-1.2-.7-1.7-1.3-1-1-2-2-4.3-2z"
          />
        </svg>
      );
    case "framer motion":
    case "framer":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path fill="#0055FF" d="M5 2h14v7h-7l7 7v6H5l7-7-7-7z" />
        </svg>
      );
    case "java":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path fill="#EA2D2E" d="M9 17c-3 .5-5 1.4-3 2.4 2 1 7 1 11 0 1-.3 2-.7 2.7-1.3l-2.2-.5c-.4.2-1 .4-1.7.5-2.5.5-5 .5-7 0-1-.2-.3-.5.2-.7L9 17z" />
          <path fill="#0074BD" d="M11 4S8 6 11 8.5c2 1.6 1 3-1 5 3-1.5 5.5-3.5 4-5.5C12.5 6.2 11 5.4 11 4z" />
          <path fill="#0074BD" d="M14 14s1.7-.4 1.5-2.5c-.2-2.4-1.5-3.6 1.5-5-2 0-3.6.8-3 3 .4 1.5 1.5 2.5 0 4.5z" />
          <path fill="#EA2D2E" d="M8 14.5c-3 .5-1 1.6 0 1.8 2 .4 6 .4 8-.2 1-.3.6-.6.6-.6s-.5.2-1 .3c-2 .4-5 .5-7 .1-.4-.1-1-.4 0-.6.5-.1.7-.2.7-.2L8 14.5z" />
        </svg>
      );
    case "c++":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path fill="#00599C" d="M12 2 3 7v10l9 5 9-5V7l-9-5zm-1 5.5a4.5 4.5 0 0 1 3.9 2.2l-1.7 1a2.5 2.5 0 1 0 0 2.6l1.7 1A4.5 4.5 0 1 1 11 7.5z" />
          <path fill="#fff" d="M17 11h1v-1h1v1h1v1h-1v1h-1v-1h-1zM14.5 11h1v-1h1v1h1v1h-1v1h-1v-1h-1z" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect width="24" height="24" rx="2" fill="#F7DF1E" />
          <path fill="#000" d="M9 18.4c.3.6.7 1 1.6 1 .8 0 1.3-.4 1.3-1.6V11h2v6.8c0 2.1-1.2 3-3 3-1.6 0-2.6-.8-3-1.8L9 18.4zm6.5-.2c.4.6 1 1.2 2 1.2.9 0 1.4-.4 1.4-1 0-.7-.5-1-1.5-1.4l-.5-.2c-1.5-.6-2.5-1.4-2.5-3 0-1.6 1.2-2.7 3-2.7 1.4 0 2.3.5 3 1.7l-1.6 1c-.3-.6-.7-.9-1.4-.9s-1.1.4-1.1 1c0 .6.4.9 1.4 1.3l.5.2c1.7.7 2.7 1.5 2.7 3.1 0 1.9-1.5 3-3.5 3-1.9 0-3.2-.9-3.8-2.1l1.9-1.2z" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path fill="#F24E1E" d="M8.5 2h3.5v6H8.5a3 3 0 1 1 0-6z" />
          <path fill="#FF7262" d="M12 2h3.5a3 3 0 1 1 0 6H12V2z" />
          <path fill="#A259FF" d="M12 8h3.5a3 3 0 1 1 0 6H12V8z" />
          <path fill="#1ABCFE" d="M12 11a3 3 0 1 1 3 3 3 3 0 0 1-3-3z" />
          <path fill="#0ACF83" d="M8.5 14H12v3a3 3 0 1 1-3-3z" />
        </svg>
      );
    case "notion":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect width="24" height="24" rx="3" fill="#fff" stroke="#000" />
          <path fill="#000" d="M7 6.5 16 5.7c1 0 1.4.4 1.4 1.4v9.6c0 .9-.4 1.5-1.5 1.6l-8.6.5c-.9 0-1.4-.3-1.4-1.4V8c0-.7.3-1 1.1-1.5z" />
          <path fill="#fff" d="M9 9v8l1.4.1V12l4 5.2 1.5-.1V9.1l-1.4.1v4.7L9.7 9H9z" />
        </svg>
      );
    case "postman":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="11" fill="#FF6C37" />
          <path fill="#fff" d="m13.5 7-5 5 1.5 1.5 5-5L13.5 7zm-2 7 1.5 1.5L8 19.8l-1.4-1.4L11.5 14z" />
        </svg>
      );
    default:
      return null;
  }
}
