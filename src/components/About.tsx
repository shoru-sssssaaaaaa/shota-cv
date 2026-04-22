import type { Lang } from "../i18n";
import { translations } from "../i18n";
import { SectionHeader } from "./SectionHeader";

type Props = { lang: Lang };

export function About({ lang }: Props) {
  const t = translations[lang];
  return (
    <section className="animate-slide-up stagger-2 mt-14">
      <SectionHeader>{t.about}</SectionHeader>
      <div className="mt-5 columns-1 gap-8 space-y-4 text-sm leading-relaxed text-stone-600 md:columns-2 dark:text-stone-300">
        {t.aboutParagraphs.map((p, i) => (
          <p key={p.slice(0, 40)}>
            {i === 0 && (
              <span className="float-left mr-1.5 mt-0.5 text-4xl font-bold leading-none text-amber-600 dark:text-amber-300">
                {p[0]}
              </span>
            )}
            {i === 0 ? p.slice(1) : p}
          </p>
        ))}
      </div>
    </section>
  );
}
