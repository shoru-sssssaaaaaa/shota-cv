import { useState } from "react";
import type { Lang } from "./i18n";
import { useTheme } from "./hooks/useTheme";
import { useDocumentLang } from "./hooks/useDocumentLang";
import { Controls } from "./components/Controls";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Tags } from "./components/Tags";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";

export default function ShotaCvProfilePage() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof navigator !== "undefined" && navigator.language.startsWith("ja")) return "ja";
    return "en";
  });
  const [theme, setTheme] = useTheme();
  useDocumentLang(lang);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-200 dark:bg-stone-950 dark:text-stone-100 dark:selection:bg-amber-900">
      <div className="h-1 bg-linear-to-r from-amber-600 via-orange-400 to-amber-500" />

      <Controls lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />

      <div className="mx-auto max-w-6xl px-6 pb-12 pt-6 md:px-12 lg:px-16">
        <Hero lang={lang} />
        <Highlights lang={lang} />
        <Tags lang={lang} />
        <About lang={lang} />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <Experience lang={lang} />
          <Sidebar lang={lang} />
        </div>

        <Footer lang={lang} />
      </div>
    </div>
  );
}
