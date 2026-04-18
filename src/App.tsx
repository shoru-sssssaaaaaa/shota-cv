export default function ShotaCvProfilePage() {
  const profile = {
    name: "Shota Sakaguchi",
    title: "Staff-Level Engineer / Function Lead",
    location: "Tokyo, Japan",
    linkedin: "https://www.linkedin.com/in/shota-sakaguchi-2a0990122/",
    github: "https://github.com/shoru-sssssaaaaaa",
    email: "mailto:shota.ss@gmail.com",
    resumePdf: "/Shota_Sakaguchi_CV.pdf",
    avatarUrl: "/images/profile.JPG" 
  };
  const experience = [
    {
      company: "Woven by Toyota",
      location: "Tokyo, Japan",
      roles: [
        {
          title: "Lead / Staff Engineer (Function Lead)",
          period: "Sep 2024 – Present",
          bullets: [
            "Lead technical direction across 5 platform services: Inventor Portal, Fabrication Service, Feedback Analysis, Experimentation Platform, and Consent Architecture.",
            "Own architecture and technical decision-making for a 40+ engineer organization across 4 sub-functions.",
            "Drive alignment across 10+ cross-functional teams spanning product, data, legal, privacy, and engineering stakeholders.",
            "Transform architecture from roughly 40 fragmented microservices into a more cohesive data-oriented and event-driven platform.",
            "Integrate 7+ independent systems into a unified platform with a centralized UI and plugin-based extensibility model.",
            "Lead the design of a privacy-first consent architecture balancing legal, compliance, UX, and technical flexibility in a multi-tenant environment."
          ]
        },
        {
          title: "Sub Lead (QA / Architecture / Customer Engineering)",
          period: "Sep 2023 – Sep 2024",
          bullets: [
            "Built the QA organization from scratch and established end-to-end automated QA infrastructure.",
            "Designed dynamic spin-up and spin-down of isolated QA environments per feature, including dependent services.",
            "Enabled parallel testing across multiple environments while keeping the process cost-effective.",
            "Consolidated user and access management across 10+ systems, improving both security and operational efficiency.",
            "Supported customer-facing engineering initiatives with scalable technical solutions."
          ]
        },
        {
          title: "Technical Lead",
          period: "Nov 2022 – Sep 2024",
          bullets: [
            "Built cloud-agnostic infrastructure using Terraform and Infrastructure as Code across multiple environments.",
            "Designed backend systems using Go and PostgreSQL for scalable services.",
            "Implemented secure authentication systems using Kubernetes and OpenID Connect.",
            "Introduced DevOps practices and CI/CD automation to improve system reliability and delivery workflows."
          ]
        },
        {
          title: "Senior Engineer",
          period: "Mar 2019 – Nov 2022",
          bullets: [
            "Developed real-time systems using MQTT and gRPC.",
            "Built authentication infrastructure using Keycloak and Kong API Gateway.",
            "Managed shared Kubernetes environments used by multiple teams."
          ]
        }
      ]
    },
    {
      company: "UPSIDER, Inc.",
      location: "Remote",
      roles: [
        {
          title: "Software Development Engineer in Test (SDET)",
          period: "Oct 2023 – Jul 2024",
          bullets: [
            "Automated API testing for 80+ REST endpoints and integrated the tests into CI for all branches.",
            "Improved quality and reliability through repeatable automated validation in a high-growth fintech environment."
          ]
        },
        {
          title: "Backend Engineer (Freelance)",
          period: "Aug 2022 – Oct 2023",
          bullets: [
            "Developed performance-critical APIs serving 60,000+ business customers.",
            "Integrated external systems and improved backend performance, reliability, and maintainability using Kotlin and Exposed."
          ]
        }
      ]
    },
    {
      company: "Toyota Motor Corporation",
      location: "Japan",
      roles: [
        {
          title: "Senior Software Engineer (Cloud Applications)",
          period: "Jan 2020 – May 2021",
          bullets: [
            "Developed cloud-based internal systems using AWS, Terraform, Java/Kotlin, and React.",
            "Contributed to CI/CD and infrastructure automation for internal shared tools."
          ]
        },
        {
          title: "Project Development Manager",
          period: "Apr 2013 – Dec 2019",
          bullets: [
            "Led development of a global authentication and authorization platform serving approximately 440,000 users.",
            "Established B2B web frameworks and technical standards using Java, Angular, and OpenAPI.",
            "Drove standardization across teams in large-scale enterprise environments."
          ]
        }
      ]
    },
    {
      company: "Toyota North America",
      location: "California, USA",
      roles: [
        {
          title: "Software Engineer / Cloud Role",
          period: "Dec 2015 – Dec 2016",
          bullets: [
            "Designed a microservice for a nationwide dealer system that exposed real-time test-drive vehicle inventory across the U.S.",
            "Built cloud-based infrastructure supporting large-scale user access and dealership operations."
          ]
        }
      ]
    }
  ];

  const strengths = [
    "Distributed systems architecture",
    "Cross-functional technical leadership",
    "Platform design for complex organizations",
    "Privacy-first and consent-aware systems",
    "Kubernetes, Terraform, AWS",
    "Kotlin, Java, Go, TypeScript",
    "Event-driven and data-oriented architecture",
    "QA automation and CI/CD"
  ];

  const highlights = [
    { label: "40+", value: "Engineers in org scope" },
    { label: "10+", value: "Cross-functional teams aligned" },
    { label: "7+", value: "Systems unified into one platform" },
    { label: "60k+", value: "Business customers supported" },
    { label: "440k", value: "Users on auth platform" },
    { label: "80+", value: "REST APIs automated in CI" }
  ];

    const iconClass = "h-5 w-5";

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

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 shadow-2xl">
          <div className="grid gap-8 p-8 md:grid-cols-[1.25fr_0.95fr] md:p-12">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                {profile.title}
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                  {profile.name}
                </h1>
                <p className="max-w-3xl text-base leading-7 text-neutral-300 md:text-lg">
                  I design and scale complex platforms across enterprise, startup, and cross-organizational environments. My work spans distributed systems, privacy-first architecture, experimentation platforms, QA automation, and large-scale technical leadership.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-neutral-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{profile.location}</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Google L5/L6-ready profile</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Architecture × Leadership × Platform</span>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-100 transition hover:bg-white/10"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-100 transition hover:bg-white/10"
                >
                  <GitHubIcon />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.email}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-100 transition hover:bg-white/10"
                >
                  <MailIcon />
                  <span>Email</span>
                </a>
                <a
                  href={profile.resumePdf}
                  className="inline-flex items-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-medium text-neutral-950 transition hover:opacity-90"
                >
                  <DownloadIcon />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-5">
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      className="h-24 w-24 rounded-3xl object-cover ring-1 ring-white/10"
                    />
                  ) : (
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300 to-blue-500 text-3xl font-semibold text-neutral-950">
                      SS
                    </div>
                  )}
                  <div>
                    <div className="text-xl font-semibold">{profile.name}</div>
                    <div className="mt-1 text-sm text-neutral-400">{profile.title}</div>
                    <div className="mt-3 text-sm leading-6 text-neutral-300">
                      Building scalable platforms where architecture, product, privacy, and organizational alignment intersect.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.value}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <div className="text-3xl font-semibold text-cyan-300">{item.label}</div>
                    <div className="mt-2 text-sm leading-6 text-neutral-300">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-7 shadow-xl">
              <h2 className="text-xl font-semibold">About</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-neutral-300">
                <p>
                  I am an engineer and technical leader who works best in environments where systems become difficult not only because of scale, but because many teams, products, and stakeholder groups need to move together. My strength is turning that complexity into a platform that is easier to scale, easier to govern, and easier for teams to build on.
                </p>
                <p>
                  Across Toyota, Toyota North America, UPSIDER, and Woven by Toyota, I have worked on authentication platforms, cloud systems, real-time applications, QA automation, and privacy-first architecture. That mix gives me both enterprise-scale discipline and startup-style execution speed.
                </p>
                <p>
                  In recent years, my focus has expanded beyond implementation into platform strategy: integrating fragmented systems, aligning architecture with organizational realities, and building foundations for experimentation, analytics, and responsible handling of personal data.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-7 shadow-xl">
              <h2 className="text-xl font-semibold">Core Strengths</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {strengths.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-7 shadow-xl">
              <h2 className="text-xl font-semibold">Selected Focus Areas</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-300">
                <li>Experimentation platforms and data-driven systems</li>
                <li>Identity, access control, and privacy-preserving architecture</li>
                <li>Cloud-agnostic infrastructure and platform engineering</li>
                <li>QA automation from infrastructure to application layer</li>
              </ul>
            </div>
          </aside>

          <main className="rounded-[2rem] border border-white/10 bg-neutral-900 p-7 shadow-xl">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold">Experience</h2>
              <div className="text-sm text-neutral-400">Career timeline</div>
            </div>

            <div className="mt-8 space-y-10">
              {experience.map((company) => (
                <div key={company.company} className="relative pl-6">
                  <div className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-cyan-400/70 via-white/10 to-transparent" />
                  <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_24px_rgba(34,211,238,0.8)]" />

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">{company.company}</h3>
                    <p className="text-sm text-neutral-400">{company.location}</p>
                  </div>

                  <div className="space-y-6">
                    {company.roles.map((role) => (
                      <div key={`${company.company}-${role.title}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                          <h4 className="text-base font-medium text-neutral-100">{role.title}</h4>
                          <span className="text-sm text-cyan-300">{role.period}</span>
                        </div>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-300">
                          {role.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}
