import { useEffect } from "react";
import type { Lang } from "../i18n";

export function useDocumentLang(lang: Lang) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
}
