import type { Lang } from "../i18n";
import { translations } from "../i18n";
import { profile } from "../data/profile";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

type Props = { lang: Lang };

export function Hero({ lang }: Props) {
  const t = translations[lang];
  const avatarUrl = import.meta.env.BASE_URL + "images/profile.JPG";
  const resumePdf = import.meta.env.BASE_URL + "Shota_Sakaguchi_CV.pdf";

  const socialLinks = [
    { href: profile.linkedin, icon: <LinkedInIcon />, label: "LinkedIn", external: true },
    { href: profile.github, icon: <GitHubIcon />, label: "GitHub", external: true },
    { href: profile.email, icon: <MailIcon />, label: "Email", external: false },
  ];

  return (
    <header className="animate-fade-in relative mt-4">
      <div className="absolute -inset-x-4 top-8 bottom-0 -z-10 rounded-3xl bg-linear-to-br from-amber-50 via-orange-50/50 to-stone-50 dark:from-amber-950/20 dark:via-stone-900 dark:to-stone-950 md:-inset-x-8" />
      <div className="absolute -inset-x-4 top-8 bottom-0 -z-10 rounded-3xl dot-grid opacity-40 dark:opacity-20 md:-inset-x-8" />

      <div className="relative flex flex-col gap-8 pb-10 pt-8 md:flex-row md:gap-12 md:pb-12 md:pt-12">
        <div className="relative shrink-0 self-start">
          <div className="absolute -bottom-2 -right-2 h-full w-full rounded-2xl bg-linear-to-br from-amber-400 to-orange-400 dark:from-amber-600 dark:to-orange-600" />
          <img
            src={avatarUrl}
            alt={profile.name}
            width={144}
            height={224}
            className="relative h-48 w-30 rounded-2xl object-cover shadow-xl ring-1 ring-white/50 dark:ring-stone-800/50 md:h-56 md:w-36"
          />
        </div>

        <div className="flex-1 space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300">
              {profile.location}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              <span className="bg-linear-to-r from-stone-900 via-stone-800 to-stone-600 bg-clip-text text-transparent dark:from-amber-50 dark:via-amber-100 dark:to-amber-200">
                {lang === "ja" ? profile.nameJa : profile.name}
              </span>
            </h1>
            <p className="mt-1 text-base font-medium tracking-wide text-stone-500 dark:text-stone-300">
              {t.subtitle}
            </p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 dark:border-amber-700/60 dark:bg-amber-950/50">
              <div className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm font-medium text-amber-800 dark:text-amber-200">{t.title}</span>
            </div>
          </div>

          <p className="max-w-2xl text-lg font-medium italic leading-snug text-stone-700 dark:text-amber-50/90">
            {t.catchphrase}
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-300">
            {t.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="group inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white/70 px-3 py-1.5 text-sm text-stone-600 shadow-sm backdrop-blur transition hover:border-amber-300 hover:shadow-amber-100/50 dark:border-stone-700 dark:bg-stone-800/70 dark:text-stone-300 dark:hover:border-amber-500 dark:hover:shadow-amber-900/20"
              >
                {link.icon}
                <span>{link.label}</span>
                {link.external && <ArrowIcon />}
              </a>
            ))}
            <a
              href={resumePdf}
              className="group inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-4 py-1.5 text-sm font-medium text-white shadow-md shadow-stone-900/20 transition hover:shadow-lg hover:shadow-stone-900/30 dark:bg-amber-100 dark:text-stone-900 dark:shadow-amber-200/10"
            >
              <DownloadIcon />
              {t.downloadCv}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
