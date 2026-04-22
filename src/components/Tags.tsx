import type { Lang } from "../i18n";
import { translations } from "../i18n";
import { tagClasses } from "../data/tagPalette";

type Props = { lang: Lang };

export function Tags({ lang }: Props) {
  const t = translations[lang];
  return (
    <section className="animate-slide-up stagger-2 mt-5 flex flex-wrap gap-2">
      {t.tags.map((tag, i) => (
        <span
          key={tag.label}
          className={`animate-scale-in rounded-full border px-3 py-1.5 text-xs font-medium shadow-sm transition hover:shadow-md ${tagClasses[tag.color]}`}
          style={{ animationDelay: `${0.1 + i * 0.03}s` }}
        >
          {tag.label}
        </span>
      ))}
    </section>
  );
}
