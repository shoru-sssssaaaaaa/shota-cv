import type { Lang } from "../i18n";
import { profile } from "../data/profile";

type Props = { lang: Lang };

export function Footer({ lang }: Props) {
  return (
    <footer className="mt-24 flex flex-col items-center gap-3 border-t border-stone-200 pb-8 pt-8 dark:border-stone-800">
      <div className="flex items-center gap-3 text-xs text-stone-400 dark:text-stone-400">
        <span>{lang === "ja" ? profile.nameJa : profile.name}</span>
        <span className="h-3 w-px bg-stone-200 dark:bg-stone-700" />
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
