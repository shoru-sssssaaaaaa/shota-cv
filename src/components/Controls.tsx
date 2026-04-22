import type { Lang } from "../i18n";
import type { Theme } from "../hooks/useTheme";
import { MoonIcon, SunIcon } from "./Icons";

type Props = {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
};

const nextTheme: Record<Theme, Theme> = { light: "dark", dark: "system", system: "light" };

const themeIcon: Record<Theme, React.ReactNode> = {
  light: <SunIcon />,
  dark: <MoonIcon />,
  system: (
    <>
      <SunIcon />
      <span className="text-stone-300 dark:text-stone-600">/</span>
      <MoonIcon />
    </>
  ),
};

export function Controls({ lang, setLang, theme, setTheme }: Props) {
  return (
    <div className="sticky top-0 z-40 flex justify-end gap-2 px-6 pt-4 md:px-12 lg:px-16">
      <div className="flex items-center gap-2 rounded-full border border-stone-200/80 bg-white/80 px-1 py-1 shadow-sm backdrop-blur-md dark:border-stone-700/80 dark:bg-stone-900/80">
        <button
          onClick={() => setTheme(nextTheme[theme])}
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs text-stone-500 transition hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200"
          aria-label="Toggle theme"
        >
          {themeIcon[theme]}
        </button>
        <div className="h-3 w-px bg-stone-200 dark:bg-stone-700" />
        <button
          onClick={() => setLang("en")}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${lang === "en" ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900" : "text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"}`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("ja")}
          className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${lang === "ja" ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900" : "text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"}`}
        >
          JA
        </button>
      </div>
    </div>
  );
}
