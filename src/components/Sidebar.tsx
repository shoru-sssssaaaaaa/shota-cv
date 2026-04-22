import type { Lang } from "../i18n";
import { translations } from "../i18n";
import { certifications } from "../data/certifications";
import { strengthChipClasses } from "../data/tagPalette";
import { SectionHeader } from "./SectionHeader";

type Props = { lang: Lang };

export function Sidebar({ lang }: Props) {
  const t = translations[lang];
  return (
    <aside className="animate-slide-up stagger-4 space-y-10">
      <section className="rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-stone-800 dark:bg-stone-900/70">
        <SectionHeader>{t.certifications}</SectionHeader>
        <div className="mt-5 space-y-0 divide-y divide-stone-100 dark:divide-stone-800">
          {certifications.map((cert) => (
            <div key={cert.name} className="group py-3 first:pt-0 last:pb-0">
              <div className="text-sm font-medium text-stone-800 transition group-hover:text-amber-800 dark:text-amber-50 dark:group-hover:text-amber-200">
                {cert.name}
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-400">
                <span className="rounded bg-stone-100 px-1.5 py-0.5 font-medium text-stone-500 dark:bg-stone-800 dark:text-stone-300">
                  {cert.issuer}
                </span>
                <span>{cert.date}</span>
                {cert.expires && <span className="text-stone-300 dark:text-stone-600">~ {cert.expires}</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-stone-800 dark:bg-stone-900/70">
        <SectionHeader>{t.focusAreas}</SectionHeader>
        <ul className="mt-5 space-y-3">
          {t.focusItems.map((item, i) => (
            <li key={item} className="group flex gap-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
              <span className="relative mt-1 flex h-5 w-5 shrink-0 items-center justify-center">
                <span className="absolute h-5 w-5 rounded-md bg-amber-100 transition group-hover:bg-amber-200 dark:bg-amber-900/40 dark:group-hover:bg-amber-800/60" />
                <span className="relative text-xs font-bold text-amber-700 dark:text-amber-200">{i + 1}</span>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-stone-800 dark:bg-stone-900/70">
        <SectionHeader>{t.coreStrengths}</SectionHeader>
        <div className="mt-5 flex flex-wrap gap-2">
          {t.strengths.map((item) => (
            <span
              key={item.label}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition hover:shadow-sm ${strengthChipClasses[item.color]}`}
            >
              {item.label}
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
}
