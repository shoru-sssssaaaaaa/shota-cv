import { useState, useEffect } from "react";
import { translations, type Lang } from "./i18n";

const iconClass = "h-4 w-4";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.9H5.67V18H8.34V10.9ZM7 6.75A1.55 1.55 0 1 0 7 9.85A1.55 1.55 0 1 0 7 6.75ZM18.33 13.67C18.33 11.22 17.01 10.63 15.82 10.63C14.86 10.63 14.44 11.16 14.2 11.53V10.9H11.64V18H14.31V14.16C14.31 13.15 14.5 12.17 15.75 12.17C16.98 12.17 17 13.32 17 14.23V18H19.67V13.67H18.33Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.23C2 16.75 4.87 20.58 8.84 21.94C9.34 22.04 9.52 21.72 9.52 21.45C9.52 21.21 9.51 20.42 9.5 19.38C6.73 20 6.14 18.18 6.14 18.18C5.68 16.97 5.03 16.65 5.03 16.65C4.12 16.01 5.1 16.03 5.1 16.03C6.1 16.1 6.63 17.09 6.63 17.09C7.52 18.66 8.97 18.21 9.54 17.95C9.64 17.29 9.89 16.84 10.17 16.58C7.96 16.32 5.62 15.44 5.62 11.5C5.62 10.38 6 9.47 6.65 8.75C6.55 8.49 6.2 7.43 6.74 6C6.74 6 7.58 5.72 9.49 7.05C10.29 6.82 11.15 6.71 12 6.71C12.85 6.71 13.71 6.82 14.51 7.05C16.42 5.72 17.26 6 17.26 6C17.8 7.43 17.45 8.49 17.35 8.75C18 9.47 18.38 10.38 18.38 11.5C18.38 15.45 16.03 16.31 13.81 16.57C14.17 16.89 14.5 17.53 14.5 18.5C14.5 19.89 14.49 21.02 14.49 21.45C14.49 21.72 14.67 22.05 15.18 21.94C19.14 20.58 22 16.75 22 12.23C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass} aria-hidden="true">
    <path d="M4 6H20V18H4V6Z" />
    <path d="M4 8L12 13L20 8" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={iconClass} aria-hidden="true">
    <path d="M12 3V15" />
    <path d="M8 11L12 15L16 11" />
    <path d="M5 21H19" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true">
    <path d="M7 17L17 7" />
    <path d="M7 7H17V17" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5" aria-hidden="true">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79Z" />
  </svg>
);

type Theme = "light" | "dark" | "system";

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "system";
    }
    return "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function apply() {
      const isDark = theme === "dark" || (theme === "system" && mediaQuery.matches);
      root.classList.toggle("dark", isDark);
    }

    apply();
    if (theme === "system") {
      mediaQuery.addEventListener("change", apply);
      return () => mediaQuery.removeEventListener("change", apply);
    }
  }, [theme]);

  function set(next: Theme) {
    setTheme(next);
    if (next === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", next);
    }
  }

  return [theme, set] as const;
}

const certifications = [
  { name: "Databricks Certified Data Engineer Associate", issuer: "Databricks", date: "Feb 2025", expires: "Feb 2027" },
  { name: "GitHub Actions", issuer: "GitHub", date: "Feb 2024", expires: "Feb 2027" },
  { name: "CKA: Certified Kubernetes Administrator", issuer: "The Linux Foundation", date: "Jul 2022", expires: "Jul 2025" },
  { name: "CKAD: Certified Kubernetes Application Developer", issuer: "The Linux Foundation", date: "Apr 2022", expires: "Apr 2025" },
  { name: "Oracle Certified Java Programmer, Gold SE 11", issuer: "Oracle", date: "Nov 2021" },
  { name: "Oracle Certified Java Programmer, Silver SE 11", issuer: "Oracle", date: "Aug 2021" },
  { name: "AWS Solutions Architect Associate", issuer: "AWS", date: "Oct 2019", expires: "Oct 2022" },
  { name: "Machine Learning", issuer: "Coursera", date: "Jun 2018" },
];

export default function ShotaCvProfilePage() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof navigator !== "undefined" && navigator.language.startsWith("ja")) return "ja";
    return "en";
  });
  const [theme, setTheme] = useTheme();
  const t = translations[lang];

  const profile = {
    name: "Shota Sakaguchi",
    nameJa: "坂口 翔太",
    location: "Tokyo, Japan",
    linkedin: "https://www.linkedin.com/in/shota-sakaguchi-2a0990122/",
    github: "https://github.com/shoru-sssssaaaaaa",
    email: "mailto:shota.ss@gmail.com",
    resumePdf: import.meta.env.BASE_URL + "Shota_Sakaguchi_CV.pdf",
    avatarUrl: import.meta.env.BASE_URL + "images/profile.JPG",
  };

  const nextTheme: Record<Theme, Theme> = { light: "dark", dark: "system", system: "light" };
  const themeIcon: Record<Theme, React.ReactNode> = {
    light: <SunIcon />,
    dark: <MoonIcon />,
    system: <><SunIcon /><span className="text-stone-300 dark:text-stone-600">/</span><MoonIcon /></>,
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-200 dark:bg-stone-950 dark:text-stone-100 dark:selection:bg-amber-900">
      {/* Accent bar */}
      <div className="h-1 bg-gradient-to-r from-amber-600 via-orange-400 to-amber-500" />

      {/* Controls — fixed top-right */}
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

      <div className="mx-auto max-w-6xl px-6 pb-12 pt-6 md:px-12 lg:px-16">
        {/* ─── HERO ─── */}
        <header className="animate-fade-in relative mt-4">
          {/* Decorative background block */}
          <div className="absolute -inset-x-4 top-8 bottom-0 -z-10 rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50/50 to-stone-50 dark:from-amber-950/20 dark:via-stone-900 dark:to-stone-950 md:-inset-x-8" />
          <div className="absolute -inset-x-4 top-8 bottom-0 -z-10 rounded-3xl dot-grid opacity-40 dark:opacity-20 md:-inset-x-8" />

          <div className="relative flex flex-col gap-8 pb-10 pt-8 md:flex-row md:gap-12 md:pb-12 md:pt-12">
            {/* Photo — elevated with offset accent */}
            <div className="relative shrink-0 self-start">
              <div className="absolute -bottom-2 -right-2 h-full w-full rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 dark:from-amber-600 dark:to-orange-600" />
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="relative h-48 w-30 rounded-2xl object-cover shadow-xl ring-1 ring-white/50 dark:ring-stone-800/50 md:h-56 md:w-36"
              />
            </div>

            <div className="flex-1 space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
                  {profile.location}
                </p>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-600 bg-clip-text text-transparent dark:from-stone-100 dark:via-stone-200 dark:to-stone-400">
                    {lang === "ja" ? profile.nameJa : profile.name}
                  </span>
                </h1>
                <p className="mt-1 text-base font-medium tracking-wide text-stone-500 dark:text-stone-400">
                  {t.subtitle}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 dark:border-amber-800 dark:bg-amber-950/50">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-sm font-medium text-amber-800 dark:text-amber-300">{t.title}</span>
                </div>
              </div>

              <p className="max-w-2xl text-lg font-medium italic leading-snug text-stone-700 dark:text-stone-300">
                {t.catchphrase}
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
                {t.summary}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                {[
                  { href: profile.linkedin, icon: <LinkedInIcon />, label: "LinkedIn", external: true },
                  { href: profile.github, icon: <GitHubIcon />, label: "GitHub", external: true },
                  { href: profile.email, icon: <MailIcon />, label: "Email", external: false },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white/70 px-3 py-1.5 text-sm text-stone-600 shadow-sm backdrop-blur transition hover:border-amber-300 hover:shadow-amber-100/50 dark:border-stone-700 dark:bg-stone-800/70 dark:text-stone-400 dark:hover:border-amber-600 dark:hover:shadow-amber-900/20"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                    {link.external && <ArrowIcon />}
                  </a>
                ))}
                <a
                  href={profile.resumePdf}
                  className="group inline-flex items-center gap-1.5 rounded-full bg-stone-900 px-4 py-1.5 text-sm font-medium text-white shadow-md shadow-stone-900/20 transition hover:shadow-lg hover:shadow-stone-900/30 dark:bg-stone-100 dark:text-stone-900 dark:shadow-stone-100/10"
                >
                  <DownloadIcon />
                  {t.downloadCv}
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* ─── HIGHLIGHTS ─── */}
        <section className="animate-slide-up stagger-1 mt-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {t.highlights.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-amber-200 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-50/0 transition group-hover:from-amber-50 group-hover:to-orange-50/30 dark:group-hover:from-amber-950/20 dark:group-hover:to-orange-950/10" />
                <div className="relative">
                  <div className="text-3xl font-extrabold tracking-tight text-amber-700 dark:text-amber-400">{item.label}</div>
                  <div className="mt-1.5 text-xs leading-relaxed text-stone-500 dark:text-stone-400">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── TAGS ─── */}
        <section className="animate-slide-up stagger-2 mt-5 flex flex-wrap gap-2">
          {t.tags.map((tag, i) => (
            <span
              key={tag}
              className={`animate-scale-in rounded-full border px-3 py-1.5 text-xs font-medium shadow-sm transition hover:shadow-md ${
                i % 4 === 0
                  ? "border-amber-200 bg-amber-50 text-amber-800 hover:border-amber-300 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300"
                  : i % 4 === 1
                    ? "border-stone-200 bg-white text-stone-600 hover:border-stone-300 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300"
                    : i % 4 === 2
                      ? "border-orange-200 bg-orange-50 text-orange-800 hover:border-orange-300 dark:border-orange-800 dark:bg-orange-950/40 dark:text-orange-300"
                      : "border-yellow-200 bg-yellow-50 text-yellow-800 hover:border-yellow-300 dark:border-yellow-800 dark:bg-yellow-950/40 dark:text-yellow-300"
              }`}
              style={{ animationDelay: `${0.1 + i * 0.03}s` }}
            >
              {tag}
            </span>
          ))}
        </section>

        {/* ─── ABOUT (full-width) ─── */}
        <section className="animate-slide-up stagger-2 mt-14">
          <SectionHeader>{t.about}</SectionHeader>
          <div className="mt-5 columns-1 gap-8 space-y-4 text-sm leading-relaxed text-stone-600 md:columns-2 dark:text-stone-400">
            {t.aboutParagraphs.map((p, i) => (
              <p key={p.slice(0, 40)}>
                {i === 0 && <span className="float-left mr-1.5 mt-0.5 text-4xl font-bold leading-none text-amber-600 dark:text-amber-400">{p[0]}</span>}
                {i === 0 ? p.slice(1) : p}
              </p>
            ))}
          </div>
        </section>

        {/* ─── EXPERIENCE + SIDEBAR ─── */}
        <div className="mt-14 grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          {/* Experience */}
          <main className="animate-slide-up stagger-3">
            <div className="flex items-baseline justify-between">
              <SectionHeader>{t.experience}</SectionHeader>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500">{t.careerTimeline}</span>
            </div>

            <div className="mt-8 space-y-12">
              {t.companies.map((company, ci) => (
                <div key={company.company}>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-bold tracking-tight">{company.company}</h3>
                    <span className="text-xs text-stone-400 dark:text-stone-500">{company.location}</span>
                  </div>

                  <div className="relative mt-5 ml-3 space-y-8 border-l-2 border-stone-200 pl-7 dark:border-stone-800">
                    {company.roles.map((role) => (
                      <div key={`${company.company}-${role.title}`} className="group relative">
                        <div className="absolute -left-[33px] top-1 flex h-5 w-5 items-center justify-center">
                          <div className="h-3 w-3 rounded-full border-2 border-amber-400 bg-white shadow-sm shadow-amber-200/50 transition group-hover:scale-125 group-hover:border-amber-500 group-hover:shadow-amber-300/50 dark:border-amber-500 dark:bg-stone-950 dark:shadow-amber-800/30" />
                        </div>

                        <div className="rounded-2xl border border-transparent p-4 -ml-2 transition hover:border-stone-200 hover:bg-white hover:shadow-sm dark:hover:border-stone-800 dark:hover:bg-stone-900">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                            <h4 className="font-semibold text-stone-800 dark:text-stone-200">{role.title}</h4>
                            <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-amber-200/50 dark:bg-amber-950/40 dark:text-amber-400 dark:ring-amber-700/30">
                              {role.period}
                            </span>
                          </div>
                          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                            {role.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-2.5">
                                <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-amber-400 dark:bg-amber-500" />
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
                      <div className="h-px flex-1 bg-gradient-to-r from-stone-200 via-stone-200 to-transparent dark:from-stone-800 dark:via-stone-800" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </main>

          {/* Sidebar: Certifications → Focus Areas → Core Strengths */}
          <aside className="animate-slide-up stagger-4 space-y-10">
            <section className="rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-stone-800 dark:bg-stone-900/70">
              <SectionHeader>{t.certifications}</SectionHeader>
              <div className="mt-5 space-y-0 divide-y divide-stone-100 dark:divide-stone-800">
                {certifications.map((cert) => (
                  <div key={cert.name} className="group py-3 first:pt-0 last:pb-0">
                    <div className="text-sm font-medium text-stone-800 transition group-hover:text-amber-800 dark:text-stone-200 dark:group-hover:text-amber-300">
                      {cert.name}
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-500">
                      <span className="rounded bg-stone-100 px-1.5 py-0.5 font-medium text-stone-500 dark:bg-stone-800 dark:text-stone-400">{cert.issuer}</span>
                      <span>{cert.date}</span>
                      {cert.expires && (
                        <span className="text-stone-300 dark:text-stone-600">~ {cert.expires}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-stone-800 dark:bg-stone-900/70">
              <SectionHeader>{t.focusAreas}</SectionHeader>
              <ul className="mt-5 space-y-3">
                {t.focusItems.map((item, i) => (
                  <li key={item} className="group flex gap-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    <span className="relative mt-1 flex h-5 w-5 shrink-0 items-center justify-center">
                      <span className="absolute h-5 w-5 rounded-md bg-amber-100 transition group-hover:bg-amber-200 dark:bg-amber-900/30 dark:group-hover:bg-amber-900/50" />
                      <span className="relative text-xs font-bold text-amber-700 dark:text-amber-400">{i + 1}</span>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-stone-800 dark:bg-stone-900/70">
              <SectionHeader>{t.coreStrengths}</SectionHeader>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.strengths.map((item, i) => (
                  <span
                    key={item}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition hover:shadow-sm ${
                      i % 3 === 0
                        ? "bg-amber-50 text-amber-800 ring-1 ring-amber-200/60 hover:bg-amber-100 dark:bg-amber-950/50 dark:text-amber-300 dark:ring-amber-700/40"
                        : i % 3 === 1
                          ? "bg-stone-100 text-stone-700 ring-1 ring-stone-200/60 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:ring-stone-600/40"
                          : "bg-orange-50 text-orange-800 ring-1 ring-orange-200/60 hover:bg-orange-100 dark:bg-orange-950/50 dark:text-orange-300 dark:ring-orange-700/40"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </aside>
        </div>

        {/* ─── FOOTER ─── */}
        <footer className="mt-24 flex flex-col items-center gap-3 border-t border-stone-200 pb-8 pt-8 dark:border-stone-800">
          <div className="flex items-center gap-3 text-xs text-stone-400 dark:text-stone-500">
            <span>{lang === "ja" ? profile.nameJa : profile.name}</span>
            <span className="h-3 w-px bg-stone-200 dark:bg-stone-700" />
            <span>{new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-5 w-1 rounded-full bg-gradient-to-b from-amber-500 to-orange-400" />
      <h2 className="text-xl font-bold tracking-tight">{children}</h2>
    </div>
  );
}
