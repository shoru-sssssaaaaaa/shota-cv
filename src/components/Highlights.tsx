import type { Lang } from "../i18n";
import { translations } from "../i18n";
import { HighlightVisual } from "./HighlightVisual";

type Props = { lang: Lang };

export function Highlights({ lang }: Props) {
  const t = translations[lang];
  return (
    <section className="animate-slide-up stagger-1 mt-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {t.highlights.map((item) => (
          <div
            key={item.label}
            className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-amber-200 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-600"
          >
            <div className="absolute inset-0 bg-linear-to-br from-amber-50/0 to-amber-50/0 transition group-hover:from-amber-50 group-hover:to-orange-50/30 dark:group-hover:from-amber-950/20 dark:group-hover:to-orange-950/10" />
            <HighlightVisual variant={item.visual} />
            <div className="relative">
              <div className="text-3xl font-extrabold tracking-tight text-amber-700 dark:text-amber-300">{item.label}</div>
              <div className="mt-1.5 text-xs leading-relaxed text-stone-500 dark:text-stone-300">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
