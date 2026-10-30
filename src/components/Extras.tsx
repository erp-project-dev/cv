import type { CV } from "../types";
import { useI18n } from "../i18n";

export function Education({ items }: { items: CV["education"] }) {
  const { t } = useI18n();
  return (
    <ul className="list">
      {items.map((e) => (
        <li key={e.school}>
          <div><strong>{e.school}</strong> <span className="muted">· {t(e.degree)}</span></div>
          <span className="period">{e.year}</span>
        </li>
      ))}
    </ul>
  );
}

export function Languages({ items }: { items: CV["languages"] }) {
  const { t } = useI18n();
  return (
    <ul className="list">
      {items.map((l) => (
        <li key={l.name.en}>
          <strong>{t(l.name)}</strong>
          <span className="muted">{t(l.level)}</span>
        </li>
      ))}
    </ul>
  );
}
