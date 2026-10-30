import type { CV } from "../types";

// Single source of truth for the CV. The web page and the PDFs are generated from it.
// `**text**` is rendered as bold.
export const cv: CV = {
  name: "Eduardo Rodríguez Patiño",
  role: "Senior Backend Engineer",
  location: { en: "Lima, Peru", es: "Lima, Perú" },
  phone: "+51 980 274 560",
  email: "erodriguezp105@gmail.com",
  links: [
    { kind: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/" },
    { kind: "github", label: "Anexsoft", url: "https://github.com/Anexsoft" },
    { kind: "web", label: "CV online", url: "https://erp-project-dev.github.io/cv/" },
  ],

  profile: {
    en: "Senior Backend Engineer with **15 years of experience** across banking, fintech, insurance and e-commerce. Specializes in **Node.js, TypeScript and AWS**, combining hands-on development, architecture and technical leadership for US and LatAm clients.",
    es: "Senior Backend Engineer con **15 años de experiencia** en banca, fintech, seguros y e-commerce. Especializado en **Node.js, TypeScript y AWS**, combinando desarrollo, arquitectura y liderazgo técnico para clientes de EE. UU. y LatAm.",
  },

  stats: [
    { value: "15+", label: { en: "years building software", es: "años construyendo software" } },
    { value: "4", label: { en: "industries: banking, fintech, insurance, e-commerce", es: "industrias: banca, fintech, seguros, e-commerce" } },
    { value: "7", label: { en: "client projects at Globant, US & LatAm", es: "proyectos para clientes en Globant, EE. UU. y LatAm" } },
  ],

  skills: [
    { name: { en: "Core stack", es: "Stack principal" }, highlight: true,
      items: ["Node.js", "TypeScript", "NestJS", ".NET", "AWS", "Jest"] },
    { name: { en: "Also worked with", es: "También trabajé con" },
      items: ["JavaScript", "C#", "Azure Functions", "Azure DevOps", "Docker", "Git", "SQL Server", "MySQL", "PostgreSQL", "NoSQL", "Vue.js", "React"] },
    { name: { en: "Architecture & quality", es: "Arquitectura y calidad" },
      items: ["Microservices", "REST APIs", "BFF", "Event-driven", "Unit / E2E testing"] },
    { name: { en: "AI-assisted development", es: "Desarrollo asistido por IA" },
      items: ["Claude", "Codex", "Gemini"] },
  ],

  experience: [
    {
      company: "Globant",
      context: { en: "Global software engineering company (NYSE: GLOB)", es: "Empresa global de ingeniería de software (NYSE: GLOB)" },
      role: "Senior Node.js Developer",
      period: { en: "2021 – Oct 2026", es: "2021 – oct. 2026" },
      projects: [
        {
          name: "Worth AI · UK Market Integration",
          context: { en: "US fintech · AI-driven business verification and risk assessment", es: "Fintech de EE. UU. · verificación y evaluación de riesgo de empresas con IA" },
          summary: {
            en: "Extended the verification platform to the UK market.",
            es: "Extendí la plataforma de verificación al mercado del Reino Unido.",
          },
          bullets: {
            en: [
              "Integrated two third-party data providers to validate UK customer data, starting with bank account verification.",
              "Built the Billable Events flow that tracks platform usage, enabling usage-based billing and consumption reports for each customer.",
            ],
            es: [
              "Integré dos proveedores de datos externos para validar los datos de clientes UK, empezando por la verificación de cuentas bancarias.",
              "Construí el flujo de Billable Events que registra el uso de la plataforma, habilitando la facturación por consumo y los reportes para cada cliente.",
            ],
          },
          stack: ["Node.js", "TypeScript", "AWS", "Claude", "Third-party integrations", "Event-driven", "REST APIs"],
        },
        {
          name: "U.S. Green Building Council · PERFORM",
          context: { en: "US nonprofit behind the LEED green building certification", es: "Organización sin fines de lucro de EE. UU. creadora de la certificación LEED" },
          summary: {
            en: "Tech lead for PERFORM, the pre-certification product that tells organizations whether they are ready for official LEED certification.",
            es: "Líder técnico de PERFORM, producto de pre-certificación que indica a las organizaciones si están listas para la certificación LEED oficial.",
          },
          bullets: {
            en: [
              "Took ownership of an inherited legacy codebase and resolved its outstanding defects.",
              "Kept the product compatible with the existing USGBC API ahead of its planned decoupling.",
              "Built a template-based notification system for the main PERFORM workflows.",
            ],
            es: [
              "Asumí un código legado heredado y resolví sus defectos pendientes.",
              "Mantuve el producto compatible con la API existente de USGBC antes de su desacople planificado.",
              "Construí un sistema de notificaciones basado en plantillas para los flujos principales de PERFORM.",
            ],
          },
          stack: ["Node.js", "TypeScript", "AWS", "Claude", "REST APIs", "Refactoring", "Templating"],
        },
        {
          name: "Lemonade · Auto Insurance Telematics",
          context: { en: "US insurtech (NYSE: LMND) · home, pet and car insurance", es: "Insurtech de EE. UU. (NYSE: LMND) · seguros de hogar, mascotas y autos" },
          summary: {
            en: "Built backend services for the car insurance telematics pipeline.",
            es: "Construí servicios backend para el pipeline de telemática del seguro de autos.",
          },
          bullets: {
            en: [
              "Ingested driving telemetry sent from customers' mobile devices through the project API.",
              "Transformed raw telemetry into the format required by the Data Science team.",
              "Integrated with Lemonade APIs to evaluate driving metrics and trigger alerts, including accident-related distance metrics.",
            ],
            es: [
              "Ingesté la telemetría de conducción enviada desde los dispositivos móviles de los clientes a través de la API del proyecto.",
              "Transformé la telemetría al formato requerido por el equipo de Data Science.",
              "Integré las APIs de Lemonade para evaluar métricas de conducción y disparar alertas, incluidas métricas de distancia relacionadas con accidentes.",
            ],
          },
          stack: ["Node.js", "TypeScript", "AWS", "Claude", "REST APIs", "Data pipelines", "Monitoring & alerts"],
        },
      ],
      additional: {
        en: "Itaú, Banco Falabella and Naranja X (banking) · PG Heroes (gaming, Team Leader)",
        es: "Itaú, Banco Falabella y Naranja X (banca) · PG Heroes (gaming, Team Leader)",
      },
    },
    {
      company: "NiewTech",
      context: { en: "Startup building marketplace solutions", es: "Startup de soluciones de marketplace" },
      role: "Chief Software Architect",
      period: { en: "2020 – 2021", es: "2020 – 2021" },
      bullets: {
        en: [
          "Defined the architecture, tech stack and development practices for the startup's marketplace products.",
          "Reviewed code and mentored the development team.",
          "Contributed to requirements, cost estimates and technical hiring.",
        ],
        es: [
          "Definí la arquitectura, el stack y las prácticas de desarrollo de los productos de marketplace de la startup.",
          "Revisé código y guié al equipo de desarrollo.",
          "Participé en requerimientos, estimación de costos y contratación técnica.",
        ],
      },
      stack: ["Node.js", "NestJS", ".NET", "Jest", "AWS", "Software architecture", "Code review"],
    },
    {
      company: "Juntoz",
      context: { en: "Peruvian e-commerce marketplace", es: "Marketplace de e-commerce peruano" },
      period: { en: "2017 – 2020", es: "2017 – 2020" },
      roles: [
        {
          title: "Senior Node.js Developer · Tech Lead",
          period: { en: "2019 – 2020", es: "2019 – 2020" },
          bullets: {
            en: [
              "After the acquisition took the original codebase, rebuilt the platform from scratch on a modern Node.js architecture.",
              "Led the microfrontend architecture of the new Merchant Center, where merchants manage the full e-commerce flow.",
              "Built tooling to create and deploy new APIs in under a day, plus event-driven notifications with Azure Functions.",
            ],
            es: [
              "Tras la venta de la empresa, que se llevó el código, reconstruí la plataforma desde cero con una arquitectura moderna en Node.js.",
              "Lideré la arquitectura de microfrontends del nuevo Merchant Center, donde los comercios gestionan todo el flujo de e-commerce.",
              "Construí herramientas para crear y desplegar nuevas APIs en menos de un día y notificaciones event-driven con Azure Functions.",
            ],
          },
          stack: ["Node.js", "Microfrontends", "Vue.js", "Azure Functions", "Event-driven", "Serverless", "Developer tooling"],
        },
        {
          title: "Senior .NET Developer",
          period: { en: "2017 – 2019", es: "2017 – 2019" },
          bullets: {
            en: [
              "Migrated 10+ legacy .NET Framework APIs to .NET Core: orders, checkout, carts, warehouses, reviews and content.",
              "Led a 3-person team on the checkout migration, delivered ahead of schedule.",
            ],
            es: [
              "Migré más de 10 APIs legadas de .NET Framework a .NET Core: órdenes, checkout, carritos, almacenes, reseñas y contenido.",
              "Lideré a un equipo de 3 en la migración del checkout, entregada antes de lo previsto.",
            ],
          },
          stack: ["C#", ".NET Core", ".NET Framework", "REST APIs"],
        },
      ],
    },
    {
      company: "Pictoric Media Group",
      context: { en: "Software consultancy hired by FBTM (US)", es: "Consultora de software contratada por FBTM (EE. UU.)" },
      role: "Lead .NET Engineer",
      period: { en: "2015 – 2017", es: "2015 – 2017" },
      summary: {
        en: "Led engineering for FBTM's platform, which calculates property tax appraisals and assessments across Texas.",
        es: "Lideré la ingeniería de la plataforma de FBTM, que calcula tasaciones y arbitrios de impuestos a la propiedad en Texas.",
      },
      bullets: {
        en: [
          "Defined the .NET architecture of the tax calculation platform.",
          "Introduced unit testing and CI pipelines to the team.",
        ],
        es: [
          "Definí la arquitectura .NET de la plataforma de cálculo de impuestos.",
          "Introduje pruebas unitarias y pipelines de CI en el equipo.",
        ],
      },
      stack: ["C#", ".NET", "Software architecture", "Unit testing", "CI pipelines"],
    },
  ],

  education: [
    { school: "UPC", degree: { en: "Marketing", es: "Marketing" }, year: "2018" },
    { school: "ISIL", degree: { en: "Technical studies in software development", es: "Estudios técnicos en desarrollo de software" }, year: "2011" },
  ],

  languages: [
    { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" } },
    { name: { en: "English", es: "Inglés" }, level: { en: "B2 · Upper intermediate", es: "B2 · Intermedio alto" } },
  ],
};
