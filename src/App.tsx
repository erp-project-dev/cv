import { cv } from "./data/cv";
import { labels } from "./data/labels";
import { LangProvider } from "./i18n";
import { useLang } from "./hooks";
import { Toolbar } from "./components/Toolbar";
import { Header } from "./components/Header";
import { CoreStack, MoreSkills } from "./components/Skills";
import { Education, Languages } from "./components/Extras";
import { Stats } from "./components/Stats";
import { Section } from "./components/Section";
import { RichText } from "./components/RichText";
import { JobCard } from "./components/JobCard";

export function App() {
  const [lang, setLang] = useLang();
  const L = labels[lang];

  return (
    <LangProvider value={lang}>
      <Toolbar onLang={setLang} />
      <div className="sheet">
        <Header cv={cv} />
        <main className="content">
          <Section title={L.profile}>
            <p className="profile"><RichText text={cv.profile[lang]} /></p>
            <Stats items={cv.stats} />
            <CoreStack skills={cv.skills} />
          </Section>
          <Section title={L.experience}>
            <ol className="jobs">
              {cv.experience.map((job) => (
                <JobCard key={job.company + job.period.en} job={job} />
              ))}
            </ol>
          </Section>
          <div className="band">
            <Section title={L.skills}>
              <MoreSkills cv={cv} />
            </Section>
            <div className="two-col">
              <Section title={L.education}><Education items={cv.education} /></Section>
              <Section title={L.languages}><Languages items={cv.languages} /></Section>
            </div>
          </div>
        </main>
      </div>
    </LangProvider>
  );
}
