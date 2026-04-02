export const personalInfo = {
    firstName: "Frank",
    fullName: "Frank Leonardo Puma Chara",
    role: "Backend Engineer",
    email: "leonardo.chara15@gmail.com",
    phone: "+51 974 754 546",
    linkedin: "https://www.linkedin.com/in/frank-leonardo-puma-chara",
    github: "https://github.com/frankleonardopumachara",
    resumeFileName: "frank-puma-chara-CV.pdf",
};

const proofCompanies = [
    "Kasnet",
    "Culqi",
    "Ligo",
    "Pragma",
    "Bancolombia",
    "BAM Guatemala",
];

export const portfolioContent = {
    es: {
        meta: {
            title: "Frank Leonardo Puma Chara | Backend Engineer",
            description:
                "Portfolio backend de Frank Leonardo Puma Chara. Fintech, banca, microservicios, Node.js, NestJS y arquitectura cloud.",
        },
        localeLabel: "Idioma",
        hero: {
            eyebrow: "Backend engineer para fintech, banca y sistemas cloud",
            title: "Convierto ideas ambiciosas en software que puede perdurar, escalar y ganarse la confianza.",
            description:
                "Soy Frank Leonardo Puma Chara. Construyo backend en Node.js y NestJS para pagos, transferencias y backoffice financiero, con foco en resiliencia y claridad de dominio.",
            highlights: [
                "Fintech y banca",
                "Node.js + NestJS",
                "Microservicios",
                "AWS + Serverless",
            ],
            primaryCta: "Escribirme",
            secondaryCta: "Ver CV",
            photoTopBadge: "Node.js + NestJS",
            photoBottomBadge: "Pagos · Cloud · Microservicios",
            availability: "Disponible para retos backend de alta exigencia",
            location: "Lima, Perú",
            credential: "AWS Cloud Practitioner",
            signalTitle: "Equipos donde ya entregué valor",
            editorTitle: "Donde la arquitectura se convierte en codigo.",
            companies: proofCompanies,
            stats: [
                {
                    value: "Desde 2019",
                    label: "backend para sistemas transaccionales y cloud",
                },
                {
                    value: "CSTI · Ligo · Pragma",
                    label: "pagos, transferencias y banca",
                },
                {
                    value: "AWS CCP",
                    label: "cloud con criterio técnico y de negocio",
                },
            ],
        },
        about: {
            eyebrow: "Perfil",
            title: "No vendo humo visual. Vendo criterio técnico aplicado a productos sensibles.",
            description:
                "La propuesta de valor del portfolio tenía que alinearse a tu realidad: backend para fintech, banca, cloud y dominio complejo. Por eso esta versión prioriza señal, profundidad y confianza.",
            cards: [
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
            ],
        },
        experience: {
            eyebrow: "Experiencia",
            title: "Experiencia en sistemas financieros en producción.",
            description: "Pagos, transferencias y modernización cloud.",
            items: [
                {
                    company: "CSTI",
                    role: "Desarrollador Backend",
                    period: "May 2024 - Actualidad",
                    summary:
                        "Backend para productos transaccionales del ecosistema de pagos peruano.",
                    highlights: [
                        "Kasnet Digital para recargas, pagos y cobros en POS.",
                        "Arquitectura de microservicios para el nuevo backoffice de Culqi.",
                    ],
                },
                {
                    company: "Ligo",
                    role: "Desarrollador Backend",
                    period: "Abr 2022 - Jun 2024",
                    summary:
                        "Core B2B para transferencias e integraciones con actores del ecosistema financiero.",
                    highlights: [
                        "Diseño del núcleo transaccional para money movement.",
                        "Integraciones con Entel, Yape e Interbank.",
                    ],
                },
                {
                    company: "Pragma",
                    role: "Desarrollador Backend",
                    period: "Ene 2019 - Mar 2022",
                    summary:
                        "Arquitectura y modernización cloud para servicios bancarios críticos.",
                    highlights: [
                        "Migración cloud para BAM Guatemala, Grupo Bancolombia.",
                        "Mejoras de resiliencia, escalabilidad y rendimiento.",
                    ],
                },
            ],
        },
        expertise: {
            eyebrow: "Capacidades",
            title: "Lo que aporto a equipos backend.",
            description: "Arquitectura, integraciones, cloud y delivery.",
            capabilities: [
                {
                    title: "Arquitectura transaccional",
                    description:
                        "Modelo servicios para reglas complejas y operación crítica.",
                    tags: ["Microservicios", "DDD", "REST APIs", "GraphQL"],
                    accent: "blue",
                },
                {
                    title: "Pagos e integraciones",
                    description:
                        "Conecto productos con bancos y proveedores sin perder trazabilidad.",
                    tags: ["Culqi", "Kasnet", "Twilio", "SendGrid"],
                    accent: "red",
                },
                {
                    title: "Cloud y observabilidad",
                    description:
                        "Diseño operación estable en AWS con serverless, infraestructura y monitoreo.",
                    tags: ["AWS", "Terraform", "Pulumi", "CloudWatch"],
                    accent: "yellow",
                },
                {
                    title: "Calidad y delivery",
                    description:
                        "Acelero entregas con testing, CI/CD y contratos consistentes.",
                    tags: ["Docker", "Kubernetes", "SonarQube", "Scrum"],
                    accent: "green",
                },
            ],
            stackTitle: "Stack base",
            stackGroups: [
                {
                    name: "Backend",
                    items: ["Node.js", "NestJS", "Express", "TypeScript", "JavaScript"],
                },
                {
                    name: "Data",
                    items: ["PostgreSQL", "MySQL", "Redis", "Kafka", "Elasticsearch"],
                },
                {
                    name: "Cloud",
                    items: ["AWS EKS", "Lambda", "SQS", "EventBridge", "Terraform", "Pulumi"],
                },
                {
                    name: "Practices",
                    items: ["Arquitectura Hexagonal", "DDD", "CI/CD", "OWASP Top 10", "Observabilidad"],
                },
            ],
            certificationsTitle: "Credenciales",
            certifications: [
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
            ],
            educationTitle: "Educación",
            education: {
                title: "Bachiller en Ingeniería Informática y de Sistemas",
                institution: "Universidad Nacional San Antonio Abad del Cusco",
                detail: "Egresado en 2019",
            },
        },
        work: {
            eyebrow: "Casos destacados",
            title: "La página ya no parece un template: cuenta historias de producto que sí venden tu perfil.",
            description:
                "Elegí combinar entregas profesionales con laboratorios técnicos para mostrar rango, profundidad y capacidad de explicar arquitectura sin volver el portfolio denso.",
            caseStudies: [
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
            ],
        },
        footer: {
            eyebrow: "Contacto",
            title: "Si estás construyendo un producto sensible, conversemos.",
            description: "Backend para pagos, banca y cloud.",
            linkedinLabel: "LinkedIn",
            githubLabel: "GitHub",
            resumeLabel: "Descargar CV",
        },
    },
    en: {
        meta: {
            title: "Frank Leonardo Puma Chara | Backend Engineer",
            description:
                "Backend portfolio for Frank Leonardo Puma Chara. Fintech, banking, microservices, Node.js, NestJS, and cloud architecture.",
        },
        localeLabel: "Language",
        hero: {
            eyebrow: "Backend engineer for fintech, banking, and cloud systems",
            title: "I turn ambitious ideas into software that can last, scale, and be trusted.",
            description:
                "I am Frank Leonardo Puma Chara. I build Node.js and NestJS backends for payments, transfers, and financial backoffice with a focus on resilience and domain clarity.",
            highlights: [
                "Fintech & banking",
                "Node.js + NestJS",
                "Microservices",
                "AWS + Serverless",
            ],
            primaryCta: "Email me",
            secondaryCta: "View resume",
            photoTopBadge: "Node.js + NestJS",
            photoBottomBadge: "Payments · Cloud · Microservices",
            availability: "Available for high-stakes backend challenges",
            location: "Lima, Peru",
            credential: "AWS Cloud Practitioner",
            signalTitle: "Teams where I have delivered",
            editorTitle: "Where architecture becomes code.",
            companies: proofCompanies,
            stats: [
                {
                    value: "Since 2019",
                    label: "backend for transactional and cloud systems",
                },
                {
                    value: "CSTI · Ligo · Pragma",
                    label: "payments, transfers, and banking",
                },
                {
                    value: "AWS CCP",
                    label: "cloud with technical and business judgment",
                },
            ],
        },
        about: {
            eyebrow: "Profile",
            title: "I do not sell visual smoke. I sell technical judgment applied to sensitive products.",
            description:
                "The portfolio value proposition needed to match your real profile: backend for fintech, banking, cloud, and domain-heavy systems. That is why this version prioritizes signal, depth, and trust.",
            cards: [
                {
                    title: "Backend for real money",
                    description:
                        "I have worked on payment, transfer, and financial operations platforms where reliability and traceability are not optional.",
                    accent: "blue",
                },
                {
                    title: "Architecture that speaks business",
                    description:
                        "I use DDD, microservices, and explicit contracts so technical design can support real business rules and teams that need to grow.",
                    accent: "red",
                },
                {
                    title: "Delivery with production focus",
                    description:
                        "I am not interested only in code that compiles. I care about systems that deploy well, scale with order, and remain maintainable under pressure.",
                    accent: "yellow",
                },
            ],
        },
        experience: {
            eyebrow: "Experience",
            title: "Experience in production financial systems.",
            description: "Payments, transfers, and cloud modernization.",
            items: [
                {
                    company: "CSTI",
                    role: "Backend Developer",
                    period: "May 2024 - Present",
                    summary:
                        "Backend for transactional products in the Peruvian payments ecosystem.",
                    highlights: [
                        "Kasnet Digital for recharges, payments, and bank collections on POS devices.",
                        "Microservices architecture for the new Culqi backoffice.",
                    ],
                },
                {
                    company: "Ligo",
                    role: "Backend Developer",
                    period: "Apr 2022 - Jun 2024",
                    summary:
                        "B2B transfer core and integrations with key financial ecosystem players.",
                    highlights: [
                        "Transactional core for money movement.",
                        "Integrations with Entel, Yape, and Interbank.",
                    ],
                },
                {
                    company: "Pragma",
                    role: "Backend Developer",
                    period: "Jan 2019 - Mar 2022",
                    summary:
                        "Architecture and cloud modernization for critical banking services.",
                    highlights: [
                        "Cloud migration for BAM Guatemala, part of Grupo Bancolombia.",
                        "Resilience, scalability, and performance improvements.",
                    ],
                },
            ],
        },
        expertise: {
            eyebrow: "Specialties",
            title: "What I bring to backend teams.",
            description: "Architecture, integrations, cloud, and delivery.",
            capabilities: [
                {
                    title: "Transactional architecture",
                    description:
                        "I model services for complex rules and critical operations.",
                    tags: ["Microservices", "DDD", "REST APIs", "GraphQL"],
                    accent: "blue",
                },
                {
                    title: "Payments and integrations",
                    description:
                        "I connect products with banks and providers without losing traceability.",
                    tags: ["Culqi", "Kasnet", "Twilio", "SendGrid"],
                    accent: "red",
                },
                {
                    title: "Cloud and observability",
                    description:
                        "I build stable operations on AWS with serverless, infra, and monitoring.",
                    tags: ["AWS", "Terraform", "Pulumi", "CloudWatch"],
                    accent: "yellow",
                },
                {
                    title: "Quality and delivery",
                    description:
                        "I speed up delivery with testing, CI/CD, and solid contracts.",
                    tags: ["Docker", "Kubernetes", "SonarQube", "Scrum"],
                    accent: "green",
                },
            ],
            stackTitle: "Core stack",
            stackGroups: [
                {
                    name: "Backend",
                    items: ["Node.js", "NestJS", "Express", "TypeScript", "JavaScript"],
                },
                {
                    name: "Data",
                    items: ["PostgreSQL", "MySQL", "Redis", "Kafka", "Elasticsearch"],
                },
                {
                    name: "Cloud",
                    items: ["AWS EKS", "Lambda", "SQS", "EventBridge", "Terraform", "Pulumi"],
                },
                {
                    name: "Practices",
                    items: ["Hexagonal Architecture", "DDD", "CI/CD", "OWASP Top 10", "Observability"],
                },
            ],
            certificationsTitle: "Credentials",
            certifications: [
                {
                    title: "AWS Certified Cloud Practitioner",
                    issuer: "Amazon Web Services",
                    date: "Mar 2024",
                },
                {
                    title: "Scrum Foundation Professional Certificate",
                    issuer: "CertiProf",
                    date: "Aug 2020",
                },
            ],
            educationTitle: "Education",
            education: {
                title: "Bachelor's Degree in Computer Science and Systems Engineering",
                institution: "Universidad Nacional San Antonio Abad del Cusco",
                detail: "Graduated in 2019",
            },
        },
        work: {
            eyebrow: "Selected work",
            title: "The page no longer feels like a template: it tells product stories that actually sell your profile.",
            description:
                "I combined professional delivery with technical labs to show range, depth, and the ability to explain architecture without making the portfolio feel heavy.",
            caseStudies: [
                {
                    eyebrow: "Production",
                    title: "Kasnet Digital",
                    description:
                        "Transactional application for recharges, payments, and bank collections deployed on physical POS devices for retailers in Peru.",
                    detail:
                        "My focus was backend design and implementation to support real operations, transactional rules, and fintech constraints.",
                    accent: "blue",
                },
                {
                    eyebrow: "Architecture",
                    title: "Culqi Admin Platform",
                    description:
                        "New version of the administrative panel focused on sales, payouts, and earnings for business owners.",
                    detail:
                        "The modernization relied on microservices and clear contracts to improve evolution, maintainability, and scalability.",
                    accent: "red",
                },
                {
                    eyebrow: "Transactional core",
                    title: "Ligo B2B Transfers",
                    description:
                        "Backend for money transfers integrating enterprise clients and actors such as Entel, Yape, and Interbank.",
                    detail:
                        "A case where domain consistency and third-party integration become central parts of the design.",
                    accent: "yellow",
                },
                {
                    eyebrow: "Technical lab",
                    title: "Invoice System with DDD",
                    description:
                        "NestJS invoice system demonstrating value objects, entities, Redis, Kafka, and clean architecture in a near-production scenario.",
                    detail:
                        "I use it to show how I turn domain concepts into code that can be explained, tested, and evolved.",
                    accent: "green",
                },
                {
                    eyebrow: "Technical lab",
                    title: "Event-driven flow",
                    description:
                        "Small backend with transaction, fraud, and notification contexts to demonstrate event-oriented design.",
                    detail:
                        "It is a good example of how I think about bounded contexts, contracts, and error handling without mixing layers.",
                    accent: "blue",
                },
            ],
        },
        footer: {
            eyebrow: "Contact",
            title: "Building something sensitive? Let’s talk.",
            description: "Payments, banking, backend, and cloud.",
            linkedinLabel: "LinkedIn",
            githubLabel: "GitHub",
            resumeLabel: "Download resume",
        },
    },
};
