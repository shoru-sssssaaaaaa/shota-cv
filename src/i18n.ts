export type Lang = "en" | "ja";

export const translations = {
  en: {
    title: "Staff-Level Engineer / Function Lead",
    summary:
      "I design and scale complex platforms across enterprise, startup, and cross-organizational environments. My work spans distributed systems, privacy-first architecture, experimentation platforms, QA automation, and large-scale technical leadership.",
    tags: [
      "L6 Staff Engineer",
      "Architecture × Leadership × Platform",
      "Backend x Infrastructure x Data Engineering",
      "Distributed Systems",
      "Privacy-First Architecture",
      "Experimentation Platforms",
    ],
    downloadCv: "Download CV (PDF)",
    about: "About",
    aboutParagraphs: [
      "I am an engineer and technical leader who works best in environments where systems become difficult not only because of scale, but because many teams, products, and stakeholder groups need to move together. My strength is turning that complexity into a platform that is easier to scale, easier to govern, and easier for teams to build on.",
      "Across Toyota, Toyota North America, UPSIDER, and Woven by Toyota, I have worked on authentication platforms, cloud systems, real-time applications, QA automation, and privacy-first architecture. That mix gives me both enterprise-scale discipline and startup-style execution speed.",
      "In recent years, my focus has expanded beyond implementation into platform strategy: integrating fragmented systems, aligning architecture with organizational realities, and building foundations for experimentation, analytics, and responsible handling of personal data.",
    ],
    coreStrengths: "Core Strengths",
    strengths: [
      "Distributed systems architecture",
      "Cross-functional technical leadership",
      "Platform design for complex organizations",
      "Privacy-first and consent-aware systems",
      "Kubernetes, Terraform, AWS",
      "Kotlin, Java, Go, TypeScript",
      "Event-driven and data-oriented architecture",
      "QA automation and CI/CD",
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
      { label: "40+", value: "Engineers in org scope" },
      { label: "10+", value: "Cross-functional teams aligned" },
      { label: "7+", value: "Systems unified into one platform" },
      { label: "60k+", value: "Business customers, Performance-critical system" },
      { label: "440k", value: "Users on auth platform" },
      { label: "80+", value: "E2E Test in REST APIs/GraphQL/gRPC + automated in CI" },
    ],
    companies: [
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
    summary:
      "エンタープライズ、スタートアップ、組織横断的な環境で、複雑なプラットフォームの設計とスケーリングを行っています。分散システム、プライバシーファーストアーキテクチャ、実験基盤、QA自動化、大規模な技術リーダーシップが専門領域です。",
    tags: [
      "L6 スタッフエンジニア",
      "アーキテクチャ × リーダーシップ × プラットフォーム",
      "バックエンド x インフラ x データエンジニアリング",
      "分散システム",
      "プライバシーファーストアーキテクチャ",
      "実験基盤",
    ],
    downloadCv: "CV ダウンロード (PDF)",
    about: "自己紹介",
    aboutParagraphs: [
      "スケールだけでなく、多くのチーム・プロダクト・ステークホルダーが連携して動く必要がある環境で力を発揮するエンジニア兼テクニカルリーダーです。その複雑さを、スケールしやすく、ガバナンスしやすく、チームが開発しやすいプラットフォームに変えることが強みです。",
      "トヨタ自動車、Toyota North America、UPSIDER、Woven by Toyotaで、認証基盤、クラウドシステム、リアルタイムアプリケーション、QA自動化、プライバシーファーストアーキテクチャに携わってきました。エンタープライズ規模の規律とスタートアップの実行速度の両方を持ち合わせています。",
      "近年は実装を超えてプラットフォーム戦略に注力しています。断片化されたシステムの統合、組織の実態に合わせたアーキテクチャの整合、実験・分析・個人データの責任ある取り扱いの基盤構築を推進しています。",
    ],
    coreStrengths: "コアスキル",
    strengths: [
      "分散システムアーキテクチャ",
      "組織横断テクニカルリーダーシップ",
      "複雑な組織向けプラットフォーム設計",
      "プライバシーファースト・同意管理システム",
      "Kubernetes, Terraform, AWS",
      "Kotlin, Java, Go, TypeScript",
      "イベント駆動・データ指向アーキテクチャ",
      "QA自動化・CI/CD",
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
      { label: "40+", value: "組織スコープのエンジニア数" },
      { label: "10+", value: "横断チームのアラインメント" },
      { label: "7+", value: "統合されたシステム数" },
      { label: "60k+", value: "ビジネス顧客、高性能システム" },
      { label: "440k", value: "認証基盤のユーザー数" },
      { label: "80+", value: "REST API/GraphQL/gRPC の E2Eテスト + CI自動化" },
    ],
    companies: [
      {
        company: "Woven by Toyota",
        location: "東京",
        roles: [
          {
            title: "ファンクションヘッド / スタッフエンジニア（ファンクションリード）",
            period: "2024年9月 – 現在",
            bullets: [
              "5つのプラットフォームサービス（Inventor Portal、Fabrication Service、Feedback Analysis、Experimentation Platform、Consent Architecture）の技術方針をリード。",
              "4つのサブファンクション、40名以上のエンジニア組織のアーキテクチャと技術的意思決定を担当。",
              "プロダクト、データ、法務、プライバシー、エンジニアリングを含む10以上の横断チームのアラインメントを推進。",
              "約40の断片化されたマイクロサービスを、より一貫性のあるデータ指向・イベント駆動プラットフォームへ変革。",
              "7以上の独立システムを統一UIとプラグインベースの拡張モデルを持つ統合プラットフォームに集約。",
              "マルチテナント環境で法務・コンプライアンス・UX・技術的柔軟性のバランスを取るプライバシーファースト同意アーキテクチャを設計。",
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
} as const;
