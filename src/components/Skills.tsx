import type { CV } from "../types";
import { useI18n } from "../i18n";
import { TagList } from "./Tag";

/** Highlighted core stack, shown right after the profile stats. */
export function CoreStack({ skills }: { skills: CV["skills"] }) {
  const { t } = useI18n();
  const core = skills.find((g) => g.highlight);
  if (!core) return null;
  return (
    <div className="core-stack">
      <span className="core-label">{t(core.name)}</span>
      <TagList items={core.items} strong />
    </div>
  );
}

/** The remaining skill groups as labelled rows. */
export function MoreSkills({ cv }: { cv: CV }) {
  const { t } = useI18n();
  return (
    <dl className="skill-rows">
      {cv.skills.filter((g) => !g.highlight).map((g) => (
        <div className="skill-row" key={g.name.en}>
          <dt>{t(g.name)}</dt>
          <dd><TagList items={g.items} /></dd>
        </div>
      ))}
    </dl>
  );
}
