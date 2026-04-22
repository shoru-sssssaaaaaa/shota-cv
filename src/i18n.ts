import type { TagColor } from "./data/tagPalette";

export type Lang = "en" | "ja";

export type HighlightVisual = "bars" | "arc" | "pulse" | "grid" | "sparkline" | "dots";

export type Tag = { label: string; color: TagColor };
export type Strength = { label: string; color: TagColor };
export type Highlight = { label: string; value: string; visual: HighlightVisual };

type Role = {
  title: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

type Company = {
  company: string;
  location: string;
  roles: Role[];
};

type Translation = {
  title: string;
  subtitle: string;
  catchphrase: string;
  summary: string;
  tags: Tag[];
  downloadCv: string;
  about: string;
  aboutParagraphs: string[];
  coreStrengths: string;
  strengths: Strength[];
  focusAreas: string;
  focusItems: string[];
  certifications: string;
  experience: string;
  careerTimeline: string;
  highlights: Highlight[];
  companies: Company[];
};

export const translations: Record<Lang, Translation> = {
  en: {
    title: "Staff-Level Engineer / Function Lead",
    subtitle: "Platform Architect for Complex Organizations",
    catchphrase: "Building platforms where architecture, organization, and data-driven decision-making converge.",
    summary:
      "I lead the design and transformation of large-scale platform systems across 10+ teams and 40+ engineers, driving architecture evolution from fragmented microservices into unified, data- and event-driven platforms. I also drive platform strategy and long-term roadmap planning, including privacy and consent architecture, data platform evolution (Data Mesh / Databricks), and experimentation systems that enable data-driven decision-making at scale.",
    tags: [
      { label: "L6 Staff Engineer", color: "amber" },
      { label: "Architecture × Leadership × Platform", color: "amber" },
      { label: "Backend x Infrastructure x Data Engineering", color: "stone" },
      { label: "Distributed Systems", color: "stone" },
      { label: "Privacy-First Architecture", color: "orange" },
      { label: "Experimentation Platforms", color: "orange" },
    ],
    downloadCv: "Download CV (PDF)",
    about: "About",
    aboutParagraphs: [
      "I am an engineer and technical leader who works best in environments where systems become difficult not only because of scale, but because many teams, products, and stakeholder groups need to move together. My strength is turning that complexity into a platform that is easier to scale, easier to govern, and easier for teams to build on.",
      "Across Toyota, Toyota North America, UPSIDER, and Woven by Toyota, I have worked on authentication platforms, cloud systems, real-time applications, QA automation, and privacy-first architecture. That mix gives me both enterprise-scale discipline and startup-style execution speed.",
      "In recent years, my focus has expanded beyond implementation into platform strategy: integrating fragmented systems, aligning architecture with organizational realities, and building foundations for experimentation, analytics, and responsible handling of personal data.",
      "As a Function Head, I am also responsible for defining multi-year roadmap and technical strategy across multiple platform domains, aligning engineering execution with organizational and business goals.",
    ],
    coreStrengths: "Core Strengths",
    strengths: [
      { label: "Distributed systems architecture", color: "amber" },
      { label: "Cross-functional technical leadership", color: "orange" },
      { label: "Platform design for complex organizations", color: "amber" },
      { label: "Privacy-first and consent-aware systems", color: "orange" },
      { label: "Kubernetes, Terraform, AWS", color: "stone" },
      { label: "Kotlin, Java, Go, TypeScript", color: "stone" },
      { label: "Event-driven and data-oriented architecture", color: "amber" },
      { label: "QA automation and CI/CD", color: "stone" },
    ],
    focusAreas: "Selected Focus Areas",
    focusItems: [
      "Experimentation platforms and data-driven systems",
      "Identity, access control, and privacy-preserving architecture",
      "Cloud-agnostic infrastructure and platform engineering",
      "QA automation from infrastructure to application layer",
    ],
    certifications: "Certifications",
    experience: "Experience",
    careerTimeline: "Career timeline",
    highlights: [
      { label: "40+", value: "Engineers (Technical decision ownership)", visual: "bars" },
      { label: "10+", value: "Teams (Cross-functional alignment)", visual: "grid" },
      { label: "7+", value: "Products (Integrated into unified platform)", visual: "dots" },
      { label: "60k+", value: "Business Customers (Performance-critical Systems)", visual: "sparkline" },
      { label: "440k", value: "Users (Global auth platform)", visual: "arc" },
      { label: "80+", value: "APIs (REST / GraphQL / gRPC + QA Automation)", visual: "pulse" },
    ],
    companies: [
      {
        company: "Woven by Toyota",
        location: "Tokyo, Japan",
        roles: [
          {
            title: "Function Head / Staff Engineer (Function Lead)",
            period: "Sep 2024 – Present",
            current: true,
            bullets: [
              "Define multi-year platform roadmap across experimentation, data, and privacy domains, aligning engineering initiatives with long-term business strategy.",
              "Own architecture and technical decision-making for a 40+ engineer organization across 4 sub-functions.",
              "Drive alignment across 10+ cross-functional teams spanning product, data, legal, privacy, and engineering stakeholders.",
              "Transform architecture from ~40 fragmented microservices into a cohesive data-oriented platform, improving system maintainability and enabling faster cross-team development.",
              "Integrate 7+ independent systems into a unified platform with a centralized UI and plugin-based extensibility model.",
              "Lead the design of a privacy-first consent architecture balancing legal, compliance, UX, and technical flexibility in a multi-tenant environment.",
              "Lead technical direction across 5 platform services.",
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
    ],
  },
  ja: {
    title: "スタッフレベルエンジニア / ファンクションリード",
    subtitle: "複雑な組織のためのプラットフォームアーキテクト",
    catchphrase: "アーキテクチャ、組織、データ駆動型意思決定が交差するプラットフォームを構築する。",
    summary:
      "10以上のチーム・40名以上のエンジニアにまたがる大規模プラットフォームシステムの設計と変革をリードし、断片化されたマイクロサービスから統一的なデータ駆動・イベント駆動プラットフォームへのアーキテクチャ進化を推進しています。プライバシー・同意アーキテクチャ、データプラットフォーム進化（Data Mesh / Databricks）、データ駆動型意思決定を可能にする実験システムなど、プラットフォーム戦略と長期ロードマップの策定も担っています。",
    tags: [
      { label: "L6 スタッフエンジニア", color: "amber" },
      { label: "アーキテクチャ × リーダーシップ × プラットフォーム", color: "amber" },
      { label: "バックエンド x インフラ x データエンジニアリング", color: "stone" },
      { label: "分散システム", color: "stone" },
      { label: "プライバシーファーストアーキテクチャ", color: "orange" },
      { label: "実験基盤", color: "orange" },
    ],
    downloadCv: "CV ダウンロード (PDF)",
    about: "自己紹介",
    aboutParagraphs: [
      "スケールだけでなく、多くのチーム・プロダクト・ステークホルダーが連携して動く必要がある環境で力を発揮するエンジニア兼テクニカルリーダーです。その複雑さを、スケールしやすく、ガバナンスしやすく、チームが開発しやすいプラットフォームに変えることが強みです。",
      "トヨタ自動車、Toyota North America、UPSIDER、Woven by Toyotaで、認証基盤、クラウドシステム、リアルタイムアプリケーション、QA自動化、プライバシーファーストアーキテクチャに携わってきました。エンタープライズ規模の規律とスタートアップの実行速度の両方を持ち合わせています。",
      "近年は実装を超えてプラットフォーム戦略に注力しています。断片化されたシステムの統合、組織の実態に合わせたアーキテクチャの整合、実験・分析・個人データの責任ある取り扱いの基盤構築を推進しています。",
      "ファンクションヘッドとして、複数のプラットフォーム領域にわたる中長期ロードマップと技術戦略の策定も担い、エンジニアリングの実行を組織・ビジネス目標と整合させる責任を負っています。",
    ],
    coreStrengths: "コアスキル",
    strengths: [
      { label: "分散システムアーキテクチャ", color: "amber" },
      { label: "組織横断テクニカルリーダーシップ", color: "orange" },
      { label: "複雑な組織向けプラットフォーム設計", color: "amber" },
      { label: "プライバシーファースト・同意管理システム", color: "orange" },
      { label: "Kubernetes, Terraform, AWS", color: "stone" },
      { label: "Kotlin, Java, Go, TypeScript", color: "stone" },
      { label: "イベント駆動・データ指向アーキテクチャ", color: "amber" },
      { label: "QA自動化・CI/CD", color: "stone" },
    ],
    focusAreas: "注力領域",
    focusItems: [
      "実験基盤とデータ駆動システム",
      "アイデンティティ、アクセス制御、プライバシー保護アーキテクチャ",
      "クラウドアグノスティック基盤とプラットフォームエンジニアリング",
      "インフラからアプリケーション層までのQA自動化",
    ],
    certifications: "資格・認定",
    experience: "職務経歴",
    careerTimeline: "キャリアタイムライン",
    highlights: [
      { label: "40+", value: "エンジニア（技術的意思決定の責任範囲）", visual: "bars" },
      { label: "10+", value: "チーム（組織横断アラインメント）", visual: "grid" },
      { label: "7+", value: "プロダクト（統合プラットフォームへ集約）", visual: "dots" },
      { label: "60k+", value: "ビジネス顧客（パフォーマンスクリティカルシステム）", visual: "sparkline" },
      { label: "440k", value: "ユーザー（グローバル認証基盤）", visual: "arc" },
      { label: "80+", value: "API（REST/GraphQL/gRPC + CI QA自動化）", visual: "pulse" },
    ],
    companies: [
      {
        company: "Woven by Toyota",
        location: "東京",
        roles: [
          {
            title: "ファンクションヘッド / スタッフエンジニア（ファンクションリード）",
            period: "2024年9月 – 現在",
            current: true,
            bullets: [
              "実験・データ・プライバシー領域にわたる中長期プラットフォームロードマップを策定し、エンジニアリング施策を長期的なビジネス戦略と整合。",
              "4つのサブファンクション、40名以上のエンジニア組織のアーキテクチャと技術的意思決定を担当。",
              "プロダクト、データ、法務、プライバシー、エンジニアリングを含む10以上の横断チームのアラインメントを推進。",
              "約40の断片化されたマイクロサービスを一貫性のあるデータ指向プラットフォームへ変革し、システムの保守性向上とチーム横断開発の加速を実現。",
              "7以上の独立システムを統一UIとプラグインベースの拡張モデルを持つ統合プラットフォームに集約。",
              "マルチテナント環境で法務・コンプライアンス・UX・技術的柔軟性のバランスを取るプライバシーファースト同意アーキテクチャを設計。",
              "5つのプラットフォームサービスの技術方針をリード。",
            ],
          },
          {
            title: "サブリード（QA / アーキテクチャ / カスタマーエンジニアリング）",
            period: "2023年9月 – 2024年9月",
            bullets: [
              "QA組織をゼロから構築し、エンドツーエンドの自動QA基盤を確立。",
              "機能ごとに依存サービスを含む分離されたQA環境の動的な起動・停止を設計。",
              "複数環境での並列テストをコスト効率よく実現。",
              "10以上のシステムにわたるユーザー・アクセス管理を統合し、セキュリティと運用効率を改善。",
              "スケーラブルな技術ソリューションでカスタマー向けエンジニアリングを支援。",
            ],
          },
          {
            title: "テクニカルリード",
            period: "2022年11月 – 2024年9月",
            bullets: [
              "TerraformとInfrastructure as Codeで複数環境にわたるクラウドアグノスティック基盤を構築。",
              "GoとPostgreSQLでスケーラブルなバックエンドシステムを設計。",
              "KubernetesとOpenID Connectによるセキュアな認証システムを実装。",
              "DevOpsプラクティスとCI/CD自動化を導入し、システムの信頼性とデリバリーワークフローを改善。",
            ],
          },
          {
            title: "シニアエンジニア",
            period: "2019年3月 – 2022年11月",
            bullets: [
              "MQTTとgRPCを使用したリアルタイムシステムを開発。",
              "KeycloakとKong API Gatewayによる認証基盤を構築。",
              "複数チームが利用する共有Kubernetes環境を管理。",
            ],
          },
        ],
      },
      {
        company: "UPSIDER, Inc.",
        location: "リモート",
        roles: [
          {
            title: "Software Development Engineer in Test (SDET)",
            period: "2023年10月 – 2024年7月",
            bullets: [
              "80以上のRESTエンドポイントのAPIテストを自動化し、全ブランチのCIに統合。",
              "高成長フィンテック環境で再現可能な自動検証による品質と信頼性を改善。",
            ],
          },
          {
            title: "バックエンドエンジニア（フリーランス）",
            period: "2022年8月 – 2023年10月",
            bullets: [
              "60,000以上のビジネス顧客向けにパフォーマンスクリティカルなAPIを開発。",
              "外部システムとの統合およびKotlinとExposedを用いたバックエンドのパフォーマンス・保守性を改善。",
            ],
          },
        ],
      },
      {
        company: "トヨタ自動車株式会社",
        location: "日本",
        roles: [
          {
            title: "シニアソフトウェアエンジニア（クラウドアプリケーション）",
            period: "2020年1月 – 2021年5月",
            bullets: [
              "AWS、Terraform、Java/Kotlin、Reactを使用したクラウドベースの社内システムを開発。",
              "社内共有ツールのCI/CDとインフラ自動化に貢献。",
            ],
          },
          {
            title: "プロジェクト開発マネージャー",
            period: "2013年4月 – 2019年12月",
            bullets: [
              "約44万ユーザーが利用するグローバル認証・認可基盤の開発をリード。",
              "Java、Angular、OpenAPIを用いたB2B Webフレームワークと技術標準を策定。",
              "大規模エンタープライズ環境でチーム間の標準化を推進。",
            ],
          },
        ],
      },
      {
        company: "Toyota North America",
        location: "カリフォルニア州, アメリカ",
        roles: [
          {
            title: "ソフトウェアエンジニア / クラウド",
            period: "2015年12月 – 2016年12月",
            bullets: [
              "全米のディーラーシステム向けに、リアルタイムの試乗車在庫情報を公開するマイクロサービスを設計。",
              "大規模ユーザーアクセスとディーラー運営を支えるクラウド基盤を構築。",
            ],
          },
        ],
      },
    ],
  },
};
