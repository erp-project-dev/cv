import { useEffect, useState } from "react";
import type { Lang } from "./types";
import { SHOW_LANG_SWITCH } from "./config";

const read = (k: string) => { try { return localStorage.getItem(k); } catch { return null; } };
const write = (k: string, v: string) => { try { localStorage.setItem(k, v); } catch { /* storage blocked */ } };
const params = new URLSearchParams(location.search);

function initialLang(): Lang {
  const v = params.get("lang") ?? (SHOW_LANG_SWITCH ? read("lang") ?? navigator.language.slice(0, 2) : "en");
  return v === "es" ? "es" : "en";
}

export function useLang() {
  const [lang, setLang] = useState<Lang>(initialLang);
  useEffect(() => {
    document.documentElement.lang = lang;
    write("lang", lang);
  }, [lang]);
  return [lang, setLang] as const;
}
