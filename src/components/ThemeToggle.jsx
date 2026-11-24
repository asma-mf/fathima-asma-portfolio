import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : false,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="icon-btn"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={dark}
    >
      {dark ? <Sun className="h-[18px] w-[18px]" aria-hidden /> : <Moon className="h-[18px] w-[18px]" aria-hidden />}
    </button>
  );
}
