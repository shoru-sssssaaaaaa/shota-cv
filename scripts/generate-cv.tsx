import React from "react";
import { renderToFile, Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";

const colors = {
  primary: "#4338ca",
  accent: "#6366f1",
  text: "#1e1b4b",
  muted: "#4b5563",
  light: "#9ca3af",
  bg: "#f8fafc",
  cardBg: "#ffffff",
  border: "#e2e8f0",
  tagBg: "#eef2ff",
  tagText: "#4338ca",
};

const s = StyleSheet.create({
  page: {
    padding: 32,
    fontFamily: "Helvetica",
    fontSize: 8.5,
    color: colors.text,
    backgroundColor: colors.bg,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
  },
  title: {
    fontSize: 10,
    color: colors.muted,
    marginTop: 2,
  },
  contactRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 4,
  },
  contactItem: {
    fontSize: 7.5,
    color: colors.accent,
  },
  summaryBox: {
    backgroundColor: colors.cardBg,
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
  },
  summaryText: {
    fontSize: 8,
    lineHeight: 1.5,
    color: colors.muted,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 6,
    marginTop: 10,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  companyBlock: {
    marginBottom: 8,
  },
  companyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  companyName: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  companyLocation: {
    fontSize: 7.5,
    color: colors.light,
  },
  roleBlock: {
    marginBottom: 6,
    paddingLeft: 8,
    borderLeftWidth: 1,
    borderLeftColor: colors.border,
  },
  roleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  roleTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.text,
  },
  rolePeriod: {
    fontSize: 7.5,
    color: colors.accent,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 1,
    paddingRight: 6,
  },
  bulletDot: {
    width: 6,
    color: colors.accent,
    fontSize: 8,
  },
  bulletText: {
    flex: 1,
    lineHeight: 1.4,
    color: colors.muted,
    fontSize: 8,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 4,
  },
  tag: {
    backgroundColor: colors.tagBg,
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 6,
    fontSize: 7.5,
    color: colors.tagText,
  },
  certRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
    paddingBottom: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  certName: {
    fontSize: 8,
    color: colors.text,
    fontFamily: "Helvetica-Bold",
  },
  certMeta: {
    fontSize: 7,
    color: colors.light,
  },
  highlightGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 6,
  },
  highlightCard: {
    width: "31%",
    backgroundColor: colors.cardBg,
    borderRadius: 4,
    padding: 6,
    borderLeftWidth: 2,
    borderLeftColor: colors.accent,
  },
  highlightLabel: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
  },
  highlightValue: {
    fontSize: 7,
    color: colors.muted,
    marginTop: 1,
  },
  aboutBox: {
    marginTop: 6,
  },
  aboutText: {
    fontSize: 8,
    lineHeight: 1.4,
    color: colors.muted,
    marginBottom: 4,
  },
  focusBullet: {
    flexDirection: "row",
    marginBottom: 2,
  },
  focusDot: {
    width: 6,
    color: colors.accent,
    fontSize: 8,
  },
  focusText: {
    flex: 1,
    fontSize: 8,
    lineHeight: 1.4,
    color: colors.muted,
  },
});

const experience = [
  {
    company: "Woven by Toyota",
    location: "Tokyo, Japan",
    roles: [
      {
        title: "Function Head / Staff Engineer (Function Lead)",
        period: "Sep 2024 – Present",
        bullets: [
          "Lead technical direction across 5 platform services: Inventor Portal, Fabrication Service, Feedback Analysis, Experimentation Platform, and Consent Architecture.",
          "Own architecture and technical decision-making for a 40+ engineer organization across 4 sub-functions.",
          "Drive alignment across 10+ cross-functional teams spanning product, data, legal, privacy, and engineering stakeholders.",
          "Transform architecture from roughly 40 fragmented microservices into a more cohesive data-oriented and event-driven platform.",
          "Integrate 7+ independent systems into a unified platform with a centralized UI and plugin-based extensibility model.",
          "Lead the design of a privacy-first consent architecture balancing legal, compliance, UX, and technical flexibility in a multi-tenant environment.",
          "Defined multi-year platform roadmap across experimentation, data, and privacy domains, aligning engineering initiatives with long-term business strategy.",
        ],
      },
      {
        title: "Sub Lead (QA / Architecture / Customer Engineering)",
        period: "Sep 2023 – Sep 2024",
        bullets: [
          "Built the QA organization from scratch and established end-to-end automated QA infrastructure.",
          "Designed dynamic spin-up and spin-down of isolated QA environments per feature, including dependent services.",
          "Enabled parallel testing across multiple environments while keeping the process cost-effective.",
          "Consolidated user and access management across 10+ systems, improving both security and operational efficiency.",
          "Supported customer-facing engineering initiatives with scalable technical solutions.",
        ],
      },
      {
        title: "Technical Lead",
        period: "Nov 2022 – Sep 2024",
        bullets: [
          "Built cloud-agnostic infrastructure using Terraform and Infrastructure as Code across multiple environments.",
          "Designed backend systems using Go and PostgreSQL for scalable services.",
          "Implemented secure authentication systems using Kubernetes and OpenID Connect.",
          "Introduced DevOps practices and CI/CD automation to improve system reliability and delivery workflows.",
        ],
      },
      {
        title: "Senior Engineer",
        period: "Mar 2019 – Nov 2022",
        bullets: [
          "Developed real-time systems using MQTT and gRPC.",
          "Built authentication infrastructure using Keycloak and Kong API Gateway.",
          "Managed shared Kubernetes environments used by multiple teams.",
        ],
      },
    ],
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
          "Improved quality and reliability through repeatable automated validation in a high-growth fintech environment.",
        ],
      },
      {
        title: "Backend Engineer (Freelance)",
        period: "Aug 2022 – Oct 2023",
        bullets: [
          "Developed performance-critical APIs serving 60,000+ business customers.",
          "Integrated external systems and improved backend performance, reliability, and maintainability using Kotlin and Exposed.",
        ],
      },
    ],
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
          "Contributed to CI/CD and infrastructure automation for internal shared tools.",
        ],
      },
      {
        title: "Project Development Manager",
        period: "Apr 2013 – Dec 2019",
        bullets: [
          "Led development of a global authentication and authorization platform serving approximately 440,000 users.",
          "Established B2B web frameworks and technical standards using Java, Angular, and OpenAPI.",
          "Drove standardization across teams in large-scale enterprise environments.",
        ],
      },
    ],
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
          "Built cloud-based infrastructure supporting large-scale user access and dealership operations.",
        ],
      },
    ],
  },
];

const strengths = [
  "Distributed systems architecture",
  "Cross-functional technical leadership",
  "Platform design for complex organizations",
  "Privacy-first and consent-aware systems",
  "Kubernetes, Terraform, AWS",
  "Kotlin, Java, Go, TypeScript",
  "Event-driven and data-oriented architecture",
  "QA automation and CI/CD",
];

const certifications = [
  { name: "Databricks Certified Data Engineer Associate", issuer: "Databricks", date: "Feb 2025" },
  { name: "GitHub Actions", issuer: "GitHub", date: "Feb 2024" },
  { name: "CKA: Certified Kubernetes Administrator", issuer: "The Linux Foundation", date: "Jul 2022" },
  { name: "CKAD: Certified Kubernetes Application Developer", issuer: "The Linux Foundation", date: "Apr 2022" },
  { name: "Oracle Certified Java Programmer, Gold SE 11", issuer: "Oracle", date: "Nov 2021" },
  { name: "Oracle Certified Java Programmer, Silver SE 11", issuer: "Oracle", date: "Aug 2021" },
  { name: "AWS Solutions Architect Associate", issuer: "AWS", date: "Oct 2019" },
  { name: "Machine Learning", issuer: "Coursera", date: "Jun 2018" },
];

const highlights = [
  { label: "40+", value: "Engineers (Technical decision ownership)" },
  { label: "10+", value: "Teams (Cross-functional alignment)" },
  { label: "7+", value: "Products (Integrated into unified platform)" },
  { label: "60k+", value: "Business Customers (Performance-critical Systems)" },
  { label: "440k", value: "Users (Global auth platform)" },
  { label: "80+", value: "APIs (REST/GraphQL/gRPC + QA Automation in CI)" },
];

const focusAreas = [
  "Experimentation platforms and data-driven systems",
  "Identity, access control, and privacy-preserving architecture",
  "Cloud-agnostic infrastructure and platform engineering",
  "QA automation from infrastructure to application layer",
];

const aboutParagraphs = [
  "I am an engineer and technical leader who works best in environments where systems become difficult not only because of scale, but because many teams, products, and stakeholder groups need to move together. My strength is turning that complexity into a platform that is easier to scale, easier to govern, and easier for teams to build on.",
  "Across Toyota, Toyota North America, UPSIDER, and Woven by Toyota, I have worked on authentication platforms, cloud systems, real-time applications, QA automation, and privacy-first architecture. That mix gives me both enterprise-scale discipline and startup-style execution speed.",
  "In recent years, my focus has expanded beyond implementation into platform strategy: integrating fragmented systems, aligning architecture with organizational realities, and building foundations for experimentation, analytics, and responsible handling of personal data.",
  "As a Function Head, I am also responsible for defining multi-year roadmap and technical strategy across multiple platform domains, aligning engineering execution with organizational and business goals.",
];

const CvDocument = () => (
  <Document>
    <Page size="A4" style={s.page}>
      <View style={s.header}>
        <View>
          <Text style={s.name}>Shota Sakaguchi</Text>
          <Text style={s.title}>Staff-Level Engineer / Function Lead</Text>
          <View style={s.contactRow}>
            <Text style={s.contactItem}>Tokyo, Japan</Text>
            <Link style={s.contactItem} src="mailto:shota.ss@gmail.com">
              shota.ss@gmail.com
            </Link>
            <Link style={s.contactItem} src="https://www.linkedin.com/in/shota-sakaguchi-2a0990122/">
              LinkedIn
            </Link>
            <Link style={s.contactItem} src="https://github.com/shoru-sssssaaaaaa">
              GitHub
            </Link>
          </View>
        </View>
      </View>

      <View style={s.summaryBox}>
        <Text style={s.summaryText}>
          I lead the design and transformation of large-scale platform systems across 10+ teams and 40+ engineers, driving architecture evolution from fragmented microservices into unified, data- and event-driven platforms. I also drive platform strategy and long-term roadmap planning, including privacy and consent architecture, data platform evolution (Data Mesh / Databricks), and experimentation systems that enable data-driven decision-making at scale.
        </Text>
      </View>

      <View style={s.highlightGrid}>
        {highlights.map((h) => (
          <View key={h.value} style={s.highlightCard}>
            <Text style={s.highlightLabel}>{h.label}</Text>
            <Text style={s.highlightValue}>{h.value}</Text>
          </View>
        ))}
      </View>

      <Text style={s.sectionTitle}>Experience</Text>
      {experience.map((company) => (
        <View key={company.company} style={s.companyBlock}>
          <View style={s.companyHeader}>
            <Text style={s.companyName}>{company.company}</Text>
            <Text style={s.companyLocation}>{company.location}</Text>
          </View>
          {company.roles.map((role) => (
            <View key={`${company.company}-${role.title}`} style={s.roleBlock} wrap={false}>
              <View style={s.roleHeader}>
                <Text style={s.roleTitle}>{role.title}</Text>
                <Text style={s.rolePeriod}>{role.period}</Text>
              </View>
              {role.bullets.map((bullet) => (
                <View key={bullet} style={s.bullet}>
                  <Text style={s.bulletDot}>*</Text>
                  <Text style={s.bulletText}>{bullet}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      ))}

      <View style={s.aboutBox} wrap={false}>
        <Text style={s.sectionTitle}>About</Text>
        {aboutParagraphs.map((p) => (
          <Text key={p.slice(0, 30)} style={s.aboutText}>{p}</Text>
        ))}
      </View>

      <View style={{ flexDirection: "row", gap: 14, marginTop: 4 }}>
        <View style={{ flex: 1 }}>
          <Text style={s.sectionTitle}>Core Strengths</Text>
          <View style={s.tagContainer}>
            {strengths.map((item) => (
              <Text key={item} style={s.tag}>{item}</Text>
            ))}
          </View>

          <Text style={{ ...s.sectionTitle, marginTop: 10 }}>Focus Areas</Text>
          {focusAreas.map((item) => (
            <View key={item} style={s.focusBullet}>
              <Text style={s.focusDot}>*</Text>
              <Text style={s.focusText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={{ flex: 1 }}>
          <Text style={s.sectionTitle}>Certifications</Text>
          {certifications.map((cert) => (
            <View key={cert.name} style={s.certRow}>
              <Text style={s.certName}>{cert.name}</Text>
              <Text style={s.certMeta}>{cert.issuer} | {cert.date}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

const outPath = new URL("../public/Shota_Sakaguchi_CV.pdf", import.meta.url).pathname;
await renderToFile(<CvDocument />, outPath);
console.log(`CV generated: ${outPath}`);
