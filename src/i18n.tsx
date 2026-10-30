import { createContext, useContext } from "react";
import { labels, type Labels } from "./data/labels";
import type { Lang, T } from "./types";

const LangContext = createContext<Lang>("en");
export const LangProvider = LangContext.Provider;

/** Returns the current language, its UI labels and a translator for `T` values. */
export function useI18n() {
  const lang = useContext(LangContext);
  const t = (value: T) => value[lang];
  return { lang, t, L: labels[lang] as Labels };
}
