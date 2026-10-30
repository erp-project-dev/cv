import type { Lang } from "../types";

export const labels = {
  en: {
    profile: "Profile",
    skills: "More skills",
    experience: "Recent experience",
    additional: "Additional Globant projects",
    education: "Education",
    languages: "Languages",
    download: "Download PDF",
    lastReview: "Last updated",
    stack: "Stack",
  },
  es: {
    profile: "Perfil",
    skills: "Más habilidades",
    experience: "Experiencia reciente",
    additional: "Otros proyectos en Globant",
    education: "Educación",
    languages: "Idiomas",
    download: "Descargar PDF",
    lastReview: "Última actualización",
    stack: "Stack",
  },
} satisfies Record<Lang, unknown>;

export type Labels = (typeof labels)["en"];
