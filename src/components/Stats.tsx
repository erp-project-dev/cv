import type { CV } from "../types";
import { useI18n } from "../i18n";

export function Stats({ items }: { items: CV["stats"] }) {
  const { t } = useI18n();
  return (
    <dl className="stats">
      {items.map((s) => (
        <div key={s.value} className="stat">
          <dt>{s.value}</dt>
          <dd>{t(s.label)}</dd>
        </div>
      ))}
    </dl>
  );
}
