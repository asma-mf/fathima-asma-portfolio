import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/** Accessible full-screen image viewer: Esc closes, arrow keys navigate, focus is trapped & restored. */
export function Lightbox({ images, captions, index, title, onChange, onClose }) {
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const many = images.length > 1;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && many) onChange((index + 1) % images.length);
      else if (e.key === "ArrowLeft" && many) onChange((index - 1 + images.length) % images.length);
      else if (e.key === "Tab" && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll("button");
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, images.length, many, onChange, onClose]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — screenshot viewer`}
      className="fade-in fixed inset-0 z-[90] flex flex-col bg-[#07110c]/95 text-white backdrop-blur-md"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-5" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0">
          <p className="truncate font-display text-lg">{title}</p>
          <p className="text-xs text-white/60" aria-live="polite">
            Screenshot {index + 1} of {images.length}
          </p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 sm:px-16">
        {many && (
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index - 1 + images.length) % images.length);
            }}
            className="absolute left-2 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/40 transition-colors hover:bg-white/15 sm:left-5"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden />
          </button>
        )}
        <img
          key={images[index]}
          src={images[index]}
          alt={captions[index]}
          onClick={(e) => e.stopPropagation()}
          className="fade-in max-h-full max-w-full rounded-xl object-contain shadow-2xl"
        />
        {many && (
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index + 1) % images.length);
            }}
            className="absolute right-2 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/40 transition-colors hover:bg-white/15 sm:right-5"
          >
            <ChevronRight className="h-6 w-6" aria-hidden />
          </button>
        )}
      </div>

      <p className="px-6 py-4 text-center text-sm text-white/75" onClick={(e) => e.stopPropagation()}>
        {captions[index]}
      </p>
    </div>
  );
}
