import type { Lang } from "../types";
import { SHOW_LANG_SWITCH } from "../config";

export function Toolbar({ lang, onLang }: { lang: Lang; onLang: (l: Lang) => void }) {
  if (!SHOW_LANG_SWITCH) return null;
  return (
    <nav className="toolbar" aria-label="Language">
      {(["en", "es"] as const).map((l) => (
        <button key={l} type="button" aria-pressed={l === lang} onClick={() => onLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </nav>
  );
}
