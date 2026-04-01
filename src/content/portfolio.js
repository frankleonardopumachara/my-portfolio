export const personalInfo = {
    firstName: "Frank",
    fullName: "Frank Leonardo Puma Chara",
    role: "Backend Engineer",
    location: "Lima, Perú",
    email: "leonardo.chara15@gmail.com",
    phone: "+51 974 754 546",
    linkedin: "https://www.linkedin.com/in/frank-leonardo-puma-chara",
    github: "https://github.com/frankleonardopumachara",
    resumeFileName: "frank-puma-chara-CV.pdf",
};

export const navigationLinks = [
    { id: "signal", label: "Perfil" },
    { id: "experience", label: "Experiencia" },
    { id: "capabilities", label: "Especialidades" },
    { id: "work", label: "Casos" },
    { id: "contact", label: "Contacto" },
];

export const heroHighlights = [
    "Fintech y banca",
    "Node.js + NestJS",
    "Microservicios",
    "AWS + Serverless",
    "Inglés B2",
];

export const heroStats = [
    {
        value: "Desde 2019",
        label: "construyendo backend para productos transaccionales y cloud",
    },
    {
        value: "CSTI · Ligo · Pragma",
        label: "experiencia en equipos que operan pagos, transferencias y backoffice",
    },
    {
        value: "AWS CCP",
        label: "certificación activa para hablar cloud con criterio técnico y de negocio",
    },
];

export const proofCompanies = [
    "Kasnet",
    "Culqi",
    "Ligo",
    "Pragma",
    "Bancolombia",
    "BAM Guatemala",
];

export const proofCards = [
    {
        title: "Backend para dinero real",
        description:
            "He trabajado en plataformas de pagos, transferencias y operación financiera donde la confiabilidad y la trazabilidad no son opcionales.",
        accent: "blue",
    },
    {
        title: "Arquitectura que conversa con negocio",
        description:
            "Uso DDD, microservicios y contratos claros para que el diseño técnico acompañe reglas reales y equipos que crecen.",
        accent: "red",
    },
    {
        title: "Entrega con foco productivo",
        description:
            "No me interesa solo que compile. Me interesa que despliegue bien, escale con orden y se pueda mantener sin drama.",
        accent: "yellow",
    },
];

export const experienceTimeline = [
    {
        company: "CSTI",
        role: "Desarrollador Backend",
        period: "May 2024 - Actualidad",
        summary:
            "Trabajo sobre productos transaccionales para el ecosistema de pagos peruano, diseñando soluciones backend orientadas a operación real.",
        highlights: [
            "Kasnet Digital: diseño e implementación del aplicativo de recargas, pagos y cobros bancarios sobre dispositivos POS físicos.",
            "Culqi: diseño de arquitectura de microservicios para la nueva versión del panel administrativo orientado a ventas, abonos y ganancias.",
        ],
    },
    {
        company: "Ligo",
        role: "Desarrollador Backend",
        period: "Abr 2022 - Jun 2024",
        summary:
            "Participé en el core transaccional B2B para transferencias de dinero integrando clientes empresariales y actores clave del ecosistema financiero.",
        highlights: [
            "Construcción del núcleo transaccional para transferencias monetarias con foco en consistencia y reglas de negocio.",
            "Integración con clientes como Entel, Yape e Interbank para habilitar flujos B2B de dinero.",
        ],
    },
    {
        company: "Pragma",
        role: "Desarrollador Backend",
        period: "Ene 2019 - Mar 2022",
        summary:
            "Mi foco estuvo en arquitectura y modernización cloud para servicios bancarios críticos dentro de un contexto regional de alta exigencia.",
        highlights: [
            "Migración de servicios críticos a la nube para Banco Agromercantil de Guatemala, parte del Grupo Bancolombia.",
            "Mejora de resiliencia, escalabilidad y rendimiento de procesos internos y externos del banco.",
        ],
    },
];

export const capabilities = [
    {
        title: "Arquitectura transaccional",
        description:
            "Diseño servicios que modelan reglas de negocio complejas y soportan operaciones críticas sin perder claridad.",
        tags: ["Microservicios", "DDD", "REST APIs", "GraphQL"],
        accent: "blue",
    },
    {
        title: "Pagos e integraciones",
        description:
            "Conecto productos con pasarelas, bancos, webhooks y proveedores externos sin sacrificar trazabilidad.",
        tags: ["Culqi", "Kasnet", "Twilio", "SendGrid"],
        accent: "red",
    },
    {
        title: "Cloud y platform thinking",
        description:
            "Trabajo con infraestructura cloud, serverless y observabilidad para que la operación no dependa de héroes.",
        tags: ["AWS", "Terraform", "Pulumi", "CloudWatch"],
        accent: "yellow",
    },
    {
        title: "Calidad y delivery",
        description:
            "Construyo flujos de entrega con testing, CI/CD y contratos consistentes para moverse rápido sin romper el sistema.",
        tags: ["Docker", "Kubernetes", "SonarQube", "Scrum"],
        accent: "green",
    },
];

export const stackGroups = [
    {
        name: "Lenguaje y framework",
        items: ["Node.js", "NestJS", "Express", "TypeScript", "JavaScript"],
    },
    {
        name: "Datos y mensajería",
        items: ["PostgreSQL", "MySQL", "Redis", "Kafka", "Elasticsearch"],
    },
    {
        name: "Cloud y DevOps",
        items: ["AWS EKS", "Lambda", "SQS", "EventBridge", "Terraform", "Pulumi"],
    },
    {
        name: "Prácticas",
        items: ["Arquitectura Hexagonal", "DDD", "CI/CD", "OWASP Top 10", "Observabilidad"],
    },
];

export const caseStudies = [
    {
        eyebrow: "Producción",
        title: "Kasnet Digital",
        description:
            "App transaccional para recargas, pagos y cobros bancarios desplegada sobre POS físicos para comercios dentro del Perú.",
        detail:
            "Mi foco estuvo en diseño e implementación backend para soportar operación real, reglas transaccionales y contexto fintech.",
        accent: "blue",
    },
    {
        eyebrow: "Arquitectura",
        title: "Culqi Admin Platform",
        description:
            "Nueva versión del panel administrativo orientado a ventas, abonos y ganancias para dueños de negocios.",
        detail:
            "La modernización se apoyó en microservicios y contratos claros para mejorar evolución, mantenibilidad y escalabilidad.",
        accent: "red",
    },
    {
        eyebrow: "Core transaccional",
        title: "Ligo B2B Transfers",
        description:
            "Backend para transferencias de dinero integrando clientes empresariales y actores como Entel, Yape e Interbank.",
        detail:
            "Un caso donde la consistencia del dominio y la integración con terceros se vuelven parte central del diseño.",
        accent: "yellow",
    },
    {
        eyebrow: "Laboratorio técnico",
        title: "Invoice System con DDD",
        description:
            "Sistema de facturación en NestJS que demuestra value objects, entidades, Redis, Kafka y clean architecture en un escenario cercano a producción.",
        detail:
            "Lo uso para mostrar cómo convierto conceptos de dominio en código que se puede explicar, probar y evolucionar.",
        accent: "green",
    },
    {
        eyebrow: "Laboratorio técnico",
        title: "Flujo orientado a eventos",
        description:
            "Backend pequeño con contextos de transacciones, fraude y notificaciones para demostrar diseño orientado a eventos.",
        detail:
            "Es una buena muestra de cómo pienso bounded contexts, contratos y manejo de errores sin mezclar capas.",
        accent: "blue",
    },
];

export const certifications = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "Mar 2024",
    },
    {
        title: "Scrum Foundation Professional Certificate",
        issuer: "CertiProf",
        date: "Ago 2020",
    },
    {
        title: "NestJS Zero to Hero Modern Backend Development",
        issuer: "Udemy",
        date: "Dic 2020",
    },
    {
        title: "Certificado de Inglés",
        issuer: "UNSAAC",
        date: "Ene 2020",
    },
];

export const education = {
    title: "Bachiller en Ingeniería Informática y de Sistemas",
    institution: "Universidad Nacional San Antonio Abad del Cusco",
    detail: "Egresado en 2019",
};
