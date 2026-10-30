import type { Job, Lang, Project, Role } from "../types";
import { useI18n } from "../i18n";
import { TagList } from "./Tag";

function Stack({ items }: { items: string[] }) {
  const { L } = useI18n();
  return (
    <div className="stack">
      <span className="stack-label">{L.stack}</span>
      <TagList items={items} />
    </div>
  );
}

function Bullets({ items }: { items?: Record<Lang, string[]> }) {
  const { lang } = useI18n();
  if (!items) return null;
  return (
    <ul className="bullets">
      {items[lang].map((b) => <li key={b}>{b}</li>)}
    </ul>
  );
}

function ProjectBlock({ project }: { project: Project }) {
  const { t } = useI18n();
  return (
    <div className="project">
      <h4 className="project-name">{project.name}</h4>
      {project.context && <p className="context">{t(project.context)}</p>}
      <p>{t(project.summary)}</p>
      <Bullets items={project.bullets} />
      <Stack items={project.stack} />
    </div>
  );
}

function RoleBlock({ role }: { role: Role }) {
  const { t } = useI18n();
  return (
    <div className="project">
      <div className="role-head">
        <h4 className="project-name">{role.title}</h4>
        <span className="period">{t(role.period)}</span>
      </div>
      {role.summary && <p>{t(role.summary)}</p>}
      <Bullets items={role.bullets} />
      <Stack items={role.stack} />
    </div>
  );
}

export function JobCard({ job }: { job: Job }) {
  const { t, L } = useI18n();
  return (
    <li className="job">
      <header className="job-head">
        <div className="job-title">
          <h3 className="company">{job.company}</h3>
          <span className="job-rule" aria-hidden="true" />
          <span className="period">{t(job.period)}</span>
        </div>
        <p className="job-meta">
          {job.role && <span className="job-role">{job.role}</span>}
          {job.context && <span className="context">{t(job.context)}</span>}
        </p>
      </header>
      {job.summary && <p>{t(job.summary)}</p>}
      <Bullets items={job.bullets} />
      {job.roles?.map((r) => <RoleBlock key={r.title} role={r} />)}
      {job.projects && (
        <div className="projects">
          {job.projects.map((p) => <ProjectBlock key={p.name} project={p} />)}
        </div>
      )}
      {job.additional && (
        <p className="additional"><strong>{L.additional}:</strong> {t(job.additional)}</p>
      )}
      {job.stack && <Stack items={job.stack} />}
    </li>
  );
}
