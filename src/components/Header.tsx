import type { CV } from "../types";
import photo from "../assets/photo.webp";
import { useI18n } from "../i18n";
import { Icon } from "./Icon";

export function Header({ cv }: { cv: CV }) {
  const { t } = useI18n();
  // First two words on one line, the rest below ("Eduardo Rodríguez" / "Patiño").
  const words = cv.name.split(" ");
  return (
    <header className="header">
      <img className="avatar" src={photo} alt={cv.name} width={320} height={320} />
      <div className="header-main">
        <h1 className="name">{words.slice(0, 2).join(" ")}<br />{words.slice(2).join(" ")}</h1>
        <p className="role"><span className="prompt">~/</span>{cv.role.toLowerCase().replace(/\s+/g, "-")}</p>
      </div>
      <ul className="contact">
        <li><span>{t(cv.location)}</span><Icon name="pin" /></li>
        <li><a href={`tel:${cv.phone.replace(/\s/g, "")}`}>{cv.phone}</a><Icon name="phone" /></li>
        <li><a href={`mailto:${cv.email}`}>{cv.email}</a><Icon name="mail" /></li>
        {cv.links.map((l) => (
          <li key={l.url}>
            <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
            <Icon name={l.kind} />
          </li>
        ))}
      </ul>
    </header>
  );
}
