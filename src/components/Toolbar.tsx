import type { Lang } from "../types";
import { SHOW_LANG_SWITCH } from "../config";
import { useI18n } from "../i18n";
import { Icon } from "./Icon";
import { LastReview } from "./LastReview";

/** Top bar above the sheet: language switch · last update · download. Hidden in the PDF. */
export function Toolbar({ onLang }: { onLang: (l: Lang) => void }) {
  const { lang, L } = useI18n();
  return (
    <nav className="toolbar">
      <div className="toolbar-start">
        {SHOW_LANG_SWITCH && (
          <div className="lang-switch" role="group" aria-label="Language">
            {(["en", "es"] as const).map((l) => (
              <button key={l} type="button" aria-pressed={l === lang} onClick={() => onLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
      <LastReview />
      <div className="toolbar-end">
        <a className="download" href={`./cv-${lang}.pdf`} download={`Eduardo-Rodriguez-Patino-CV-${lang.toUpperCase()}.pdf`}>
          <Icon name="download" size={16} />
          {L.download}
        </a>
      </div>
    </nav>
  );
}
