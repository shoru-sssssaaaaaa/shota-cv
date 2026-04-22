import type { Lang } from "../i18n";
import { translations } from "../i18n";
import { SectionHeader } from "./SectionHeader";

type Props = { lang: Lang };

export function Experience({ lang }: Props) {
  const t = translations[lang];
  return (
    <main className="animate-slide-up stagger-3">
      <div className="flex items-baseline justify-between">
        <SectionHeader>{t.experience}</SectionHeader>
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-400">
          {t.careerTimeline}
        </span>
      </div>

      <div className="mt-8 space-y-12">
        {t.companies.map((company, ci) => (
          <div key={company.company}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-bold tracking-tight text-stone-800 dark:text-amber-50">
                {company.company}
              </h3>
              <span className="text-xs text-stone-400 dark:text-stone-400">{company.location}</span>
            </div>

            <div className="relative mt-5 ml-3 space-y-8 border-l-2 border-stone-200 pl-7 dark:border-stone-800">
              {company.roles.map((role) => (
                <div key={`${company.company}-${role.title}`} className="group relative">
                  <div className="absolute -left-[33px] top-1 flex h-5 w-5 items-center justify-center">
                    {role.current && (
                      <span className="absolute h-5 w-5 animate-ping rounded-full bg-amber-400/60 dark:bg-amber-500/50" />
                    )}
                    <div
                      className={`relative h-3 w-3 rounded-full border-2 shadow-sm transition group-hover:scale-125 ${
                        role.current
                          ? "border-amber-500 bg-amber-400 shadow-amber-300/60 dark:border-amber-300 dark:bg-amber-400 dark:shadow-amber-500/40"
                          : "border-amber-400 bg-white shadow-amber-200/50 group-hover:border-amber-500 group-hover:shadow-amber-300/50 dark:border-amber-500 dark:bg-stone-950 dark:shadow-amber-800/30"
                      }`}
                    />
                  </div>

                  <div className="rounded-2xl border border-transparent p-4 -ml-2 transition hover:border-stone-200 hover:bg-white hover:shadow-sm dark:hover:border-stone-800 dark:hover:bg-stone-900">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="font-semibold text-stone-800 dark:text-amber-50">{role.title}</h4>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-amber-200/50 dark:bg-amber-950/40 dark:text-amber-200 dark:ring-amber-700/30">
                        {role.current && <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse dark:bg-amber-300" />}
                        {role.period}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                      {role.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5">
                          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-amber-400 dark:bg-amber-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {ci < t.companies.length - 1 && (
              <div className="mt-12 flex items-center gap-4">
                <div className="h-px flex-1 bg-linear-to-r from-stone-200 via-stone-200 to-transparent dark:from-stone-800 dark:via-stone-800" />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
