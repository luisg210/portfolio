import { Localized } from '@/i18n';
import tallerShot1 from '@/assets/screenshots/taller-1.svg';
import tallerShot2 from '@/assets/screenshots/taller-2.svg';
import etlsShot1 from '@/assets/screenshots/etls-1.svg';
import etlsShot2 from '@/assets/screenshots/etls-2.svg';
import saasShot1 from '@/assets/screenshots/saas-1.svg';
import saasShot2 from '@/assets/screenshots/saas-2.svg';

export const profile = {
  name: 'Luis Henriquez',
  email: 'luis.developer1@outlook.com',
  github: 'https://github.com/luisg210',
  linkedin: 'https://www.linkedin.com/in/luis-h-2000112345354564644566456353/',
  whatsappNumber: '50360653681',
  cvPath: `${import.meta.env.BASE_URL}cv.pdf`,
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(text)}`;

export type JobsDescriptionType = {
  title: Localized;
  at: string;
  description: Localized;
  from: string;
  to: string;
};

export const jobsDescription: JobsDescriptionType[] = [
  {
    title: { es: 'Full stack junior', en: 'Junior full-stack' },
    at: 'Serfinsa',
    description: {
      es: 'Desarrollador full stack junior responsable del desarrollo y mantenimiento de aplicaciones web con Angular en el frontend y Spring Boot en el backend. Encargado de implementar y mantener la infraestructura de observabilidad, garantizando la visibilidad y el rendimiento de los sistemas. Aplicación de principios de Clean Code, SOLID y buenas prácticas de desarrollo para asegurar código mantenible y escalable, además de colaborar en mejoras continuas y revisiones de código.',
      en: 'Junior full-stack developer responsible for building and maintaining web applications with Angular on the frontend and Spring Boot on the backend. Implemented and maintained the observability infrastructure, ensuring system visibility and performance. Applied Clean Code, SOLID and good development practices to keep the code maintainable and scalable, while collaborating on continuous improvements and code reviews.',
    },
    from: '11/2025',
    to: 'Now',
  },
  {
    title: { es: 'Full stack', en: 'Full-stack' },
    at: 'Freelance',
    description: {
      es: 'Desarrollo completo de proyecto propio desde la concepción hasta el despliegue, abarcando el diseño de arquitectura, implementación de servicios backend RESTful con Spring Boot, construcción del frontend con React y despliegue en producción. Gestión autónoma del ciclo de vida del proyecto, incluyendo planificación, desarrollo, pruebas y documentación.',
      en: 'Full development of my own project from conception to deployment, including architecture design, RESTful backend services with Spring Boot, a React frontend and production deployment. Autonomous management of the whole project lifecycle, including planning, development, testing and documentation.',
    },
    from: '06/2025',
    to: '10/2025',
  },
  {
    title: { es: 'Analista de monitoreo', en: 'Monitoring analyst' },
    at: 'Banco Agricola',
    description: {
      es: 'Responsable del monitoreo integral de infraestructura on-premise y microservicios en un entorno bancario crítico, utilizando herramientas como Zabbix, Grafana, OpenTelemetry y Dynatrace para la detección y resolución proactiva de incidentes. Desarrollo de procesos ETL en Python para la extracción, transformación y carga de datos desde múltiples fuentes, incluyendo MySQL, Oracle y DB2. Creación de dashboards y alertas personalizadas para la visualización del estado de los sistemas, apoyando la toma de decisiones del equipo de operaciones.',
      en: 'Responsible for end-to-end monitoring of on-premise infrastructure and microservices in a critical banking environment, using tools like Zabbix, Grafana, OpenTelemetry and Dynatrace for proactive incident detection and resolution. Developed ETL processes in Python to extract, transform and load data from multiple sources, including MySQL, Oracle and DB2. Created custom dashboards and alerts to visualize system status and support the operations team decision-making.',
    },
    from: '07/2023',
    to: '05/2025',
  },
  {
    title: { es: 'QA', en: 'QA' },
    at: 'Banco Cuscatlan',
    description: {
      es: 'Aseguramiento de calidad (QA) para APIs REST y aplicaciones móviles en el sector bancario. Diseño y ejecución de planes de pruebas funcionales, de integración y de regresión para garantizar la estabilidad y correctitud de los servicios. Reporte y seguimiento de incidentes, trabajando en conjunto con el equipo de desarrollo para la resolución de defectos y la mejora continua de la calidad del producto.',
      en: 'Quality assurance (QA) for REST APIs and mobile applications in the banking sector. Designed and executed functional, integration and regression test plans to guarantee service stability and correctness. Reported and tracked incidents, working with the development team to resolve defects and continuously improve product quality.',
    },
    from: '12/2022',
    to: '05/2023',
  },
];

export type ProjectType = {
  slug: string;
  title: Localized;
  context: Localized;
  shortDescription: Localized;
  highlights: Localized[];
  longDescription: Localized;
  tech: string[];
  screenshots: string[];
  links?: { demo?: string; repo?: string };
};

export const projectsDescription: ProjectType[] = [
  {
    slug: 'etls-transaccionales',
    title: {
      es: 'ETLs transaccionales y observabilidad',
      en: 'Transactional ETLs and observability',
    },
    context: {
      es: 'Banco Agricola · Analista de monitoreo',
      en: 'Banco Agricola · Monitoring Analyst',
    },
    shortDescription: {
      es: 'ETLs en Python y observabilidad para tarjetas y pagos en línea.',
      en: 'Python ETLs and observability for cards and online payments.',
    },
    highlights: [
      {
        es: 'Creación de ETLs para alimentar dashboards transaccionales',
        en: 'Built ETLs to feed transactional dashboards',
      },
      {
        es: 'Consultas multihilo hacia diferentes fuentes de datos',
        en: 'Multithreaded queries against different data sources',
      },
      {
        es: 'Observabilidad y monitoreo para tarjetas de crédito/débito y pagos en línea',
        en: 'Observability and monitoring for credit/debit cards and online payments',
      },
    ],
    longDescription: {
      es: 'En el Banco Agricola fui responsable de diseñar e implementar procesos ETL en Python que alimentaban dashboards transaccionales en tiempo real. Desarrollé consultas multihilo para extraer datos de MySQL, Oracle y DB2 de forma eficiente, y monté una infraestructura de observabilidad con Zabbix, Grafana, OpenTelemetry y Dynatrace para monitorizar tarjetas de crédito/débito y pagos en línea en un entorno bancario crítico.',
      en: 'At Banco Agricola I was responsible for designing and implementing ETL processes in Python that fed real-time transactional dashboards. I built multithreaded queries to extract data efficiently from MySQL, Oracle and DB2, and set up an observability stack with Zabbix, Grafana, OpenTelemetry and Dynatrace to monitor credit/debit cards and online payments in a critical banking environment.',
    },
    tech: ['Python', 'MySQL', 'Oracle', 'DB2', 'Zabbix', 'Grafana', 'OpenTelemetry', 'Dynatrace'],
    screenshots: [etlsShot1, etlsShot2],
  },
  {
    slug: 'taller-saas',
    title: {
      es: 'Taller — SaaS multitenant para talleres mecánicos',
      en: 'Taller — Multitenant SaaS for auto workshops',
    },
    context: { es: 'Freelance · Proyecto propio', en: 'Freelance · Own project' },
    shortDescription: {
      es: 'SaaS multitenant para gestionar talleres mecánicos, en producción.',
      en: 'Multitenant SaaS for managing auto workshops, live in production.',
    },
    highlights: [
      {
        es: 'SaaS completo de gestión de talleres, de la idea al despliegue en producción',
        en: 'Complete workshop management SaaS, from idea to production deployment',
      },
      {
        es: 'Multitenancy con JWT, planes y branding por taller',
        en: 'Multitenancy with JWT, plans and per-workshop branding',
      },
      { es: 'Disponible como servicio en producción', en: 'Live and running in production' },
    ],
    longDescription: {
      es: 'Proyecto personal llevado de la idea al despliegue en producción. Un SaaS multitenant para la gestión integral de talleres mecánicos: vehículos, clientes, empleados, órdenes de trabajo, movimientos y reportes. Cada taller se registra como un tenant aislado con su propio branding, plan y accesos. Arquitectura con Spring Boot 3 y JWT, frontend en React y almacenamiento de imágenes en MinIO.',
      en: 'Personal project taken from idea to production. A multitenant SaaS for end-to-end auto workshop management: vehicles, customers, employees, work orders, movements and reports. Each workshop registers as an isolated tenant with its own branding, plan and access. Built with Spring Boot 3 and JWT, React frontend and MinIO for image storage.',
    },
    tech: ['Spring Boot 3', 'Java 17', 'PostgreSQL', 'JWT', 'React', 'TypeScript', 'MinIO'],
    screenshots: [tallerShot1, tallerShot2],
    links: { demo: 'https://taller-web-o9yv.onrender.com/' },
  },
  {
    slug: 'saas-pagos',
    title: { es: 'SaaS para medios de pago', en: 'Payments SaaS' },
    context: { es: 'Serfinsa · Full stack junior', en: 'Serfinsa · Junior full-stack' },
    shortDescription: {
      es: 'Plataforma SaaS de medios de pago con Visa Direct y Mastercard.',
      en: 'Payments SaaS platform with Visa Direct and Mastercard.',
    },
    highlights: [
      {
        es: 'Plataforma SaaS enfocada en medios de pago',
        en: 'SaaS platform focused on payment methods',
      },
      {
        es: 'Integraciones con Visa Direct y Mastercard',
        en: 'Integrations with Visa Direct and Mastercard',
      },
      { es: 'Multitenant de monitoreo', en: 'Multitenant monitoring' },
    ],
    longDescription: {
      es: 'En Serfinsa participé en el desarrollo de una plataforma SaaS orientada a medios de pago, integrando APIs de Visa Direct y Mastercard para procesar transferencias y pagos. Trabajé en el backend con Spring Boot y en el frontend con Angular, además de colaborar en el monitoreo multitenant de la infraestructura para garantizar la disponibilidad y el rendimiento del servicio.',
      en: 'At Serfinsa I worked on a SaaS platform focused on payment methods, integrating Visa Direct and Mastercard APIs to process transfers and payments. I worked on the backend with Spring Boot and the frontend with Angular, and contributed to multitenant monitoring of the infrastructure to guarantee service availability and performance.',
    },
    tech: ['Angular', 'Spring Boot', 'Java', 'Visa Direct', 'Mastercard', 'PostgreSQL'],
    screenshots: [saasShot1, saasShot2],
  },
];

export type EducationType = {
  title: Localized;
  institution: string;
  from: string;
  to?: string;
  kind: 'degree' | 'certification';
};

export const educationDescription: EducationType[] = [
  {
    title: { es: 'Ingeniería en Sistemas Informáticos', en: 'Computer Systems Engineering' },
    institution: 'Universidad de El Salvador',
    from: '2019',
    to: '2024',
    kind: 'degree',
  },
  {
    title: { es: 'Spring Boot y microservicios', en: 'Spring Boot & microservices' },
    institution: 'Udemy',
    from: '2024',
    kind: 'certification',
  },
  {
    title: { es: 'React + TypeScript avanzado', en: 'Advanced React + TypeScript' },
    institution: 'Udemy',
    from: '2025',
    kind: 'certification',
  },
];

export type BlogPostType = {
  slug: string;
  title: Localized;
  excerpt: Localized;
  date: string;
  readTime: number;
  tags: string[];
  content: Localized;
};

export const blogPosts: BlogPostType[] = [
  {
    slug: 'multitenancy-practico',
    title: {
      es: 'Multitenancy práctico: aislar datos sin complicar tu arquitectura',
      en: 'Practical multitenancy: isolating data without overcomplicating your architecture',
    },
    excerpt: {
      es: 'Cómo diseñé un SaaS multitenant real con JWT, planes y branding por tenant, y las decisiones que tomaría de nuevo.',
      en: 'How I designed a real multitenant SaaS with JWT, plans and per-tenant branding, and the decisions I would make again.',
    },
    date: '2025-09-10',
    readTime: 6,
    tags: ['SaaS', 'Spring Boot', 'Arquitectura'],
    content: {
      es: 'Cuando empecé el proyecto del taller tenía una regla clara: cada cliente es un tenant aislado. No me arrepiento de eso.\n\nLa primera decisión fue la estrategia de aislamiento: opté por un esquema compartido con tenant_id en todas las tablas críticas, acompañado de un repositorio central de tenants que define el plan y el branding.\n\nEl JWT lleva el tenantId, así cada request sabe a qué datos pertenece sin tocar la base en cada consulta. Los planes (BASIC/VIP) activan módulos y las credenciales de MinIO se resuelven por tenant.\n\nLa lección más importante: el aislamiento no es solo técnico, también es de procesos. Definir el alta de un tenant como un flujo reproducible me ahorró horas de soporte.',
      en: 'When I started the workshop project I had a clear rule: every customer is an isolated tenant. I do not regret it.\n\nThe first decision was the isolation strategy: I chose a shared schema with tenant_id on all critical tables, plus a central tenant repository that defines the plan and branding.\n\nThe JWT carries the tenantId, so every request knows which data it belongs to without touching the database on each query. Plans (BASIC/VIP) enable modules and MinIO credentials are resolved per tenant.\n\nThe most important lesson: isolation is not only technical, it is also about process. Defining tenant onboarding as a reproducible flow saved me hours of support.',
    },
  },
  {
    slug: 'etl-observabilidad',
    title: {
      es: 'ETLs y observabilidad: cuando el dato alimenta la decisión',
      en: 'ETLs and observability: when data drives decisions',
    },
    excerpt: {
      es: 'Lecciones de construir pipelines multihilo que alimentan dashboards transaccionales en un banco.',
      en: 'Lessons from building multithreaded pipelines that feed transactional dashboards at a bank.',
    },
    date: '2025-07-02',
    readTime: 5,
    tags: ['Python', 'ETL', 'Observabilidad'],
    content: {
      es: 'Trabajar en monitoreo bancario me enseñó que el ETL es la mitad del trabajo; la otra mitad es que los equipos confíen en el dato.\n\nCon consultas multihilo reduje los tiempos de extracción de Oracle, MySQL y DB2 de forma notable, pero lo que realmente cambió el juego fue la observabilidad del propio proceso: métricas por pipeline, alertas cuando un job se atrasa y dashboards con contexto.\n\nRegla aprendida: si un dashboard no se actualiza solo o no avisa cuando falla, nadie lo va a usar. La confianza se construye con disponibilidad.',
      en: 'Working in banking monitoring taught me that the ETL is half the work; the other half is getting the teams to trust the data.\n\nWith multithreaded queries I significantly reduced extraction times from Oracle, MySQL and DB2, but what really changed the game was observability of the process itself: per-pipeline metrics, alerts when a job falls behind and dashboards with context.\n\nLesson learned: if a dashboard does not update itself or does not warn when it fails, nobody will use it. Trust is built with availability.',
    },
  },
  {
    slug: 'codigo-limpio',
    title: {
      es: 'Código limpio en equipos pequeños: lo que sí funciona',
      en: 'Clean code in small teams: what actually works',
    },
    excerpt: {
      es: 'Principios SOLID, componentes pequeños y nombres honestos: un enfoque pragmático sin dogmas.',
      en: 'SOLID principles, small components and honest names: a pragmatic approach without dogma.',
    },
    date: '2025-05-14',
    readTime: 4,
    tags: ['Clean Code', 'SOLID', 'TypeScript'],
    content: {
      es: 'En equipos pequeños no necesitas procesos pesados, necesitas decisiones que no duelan mañana.\n\nTres cosas que me funcionan: funciones de una sola responsabilidad, componentes de UI pequeños que reciben props (composición sobre herencia) y nombres que describen intención, no implementación.\n\nSOLID no es una lista de chequeo; es una forma de preguntarse \u201c¿esto se puede probar y reemplazar sin romper todo?\u201d. Cuando la respuesta es sí, el código está bien.',
      en: 'In small teams you do not need heavy processes, you need decisions that do not hurt tomorrow.\n\nThree things that work for me: single-responsibility functions, small UI components that receive props (composition over inheritance) and names that describe intent, not implementation.\n\nSOLID is not a checklist; it is a way of asking yourself \u201ccan this be tested and replaced without breaking everything?\u201d. When the answer is yes, the code is fine.',
    },
  },
];

export type ServiceType = {
  title: Localized;
  description: Localized;
};

export const servicesDescription: ServiceType[] = [
  {
    title: { es: 'Desarrollo full-stack a medida', en: 'Custom full-stack development' },
    description: {
      es: 'Construcción de aplicaciones web completas, desde la interfaz hasta la base de datos, usando React, TypeScript y Angular en el frontend y Spring Boot o Node.js en el backend, con foco en código limpio y arquitecturas mantenibles.',
      en: 'End-to-end web applications, from the interface to the database, using React, TypeScript and Angular on the frontend and Spring Boot or Node.js on the backend, focused on clean code and maintainable architectures.',
    },
  },
  {
    title: { es: 'APIs REST y microservicios', en: 'REST APIs and microservices' },
    description: {
      es: 'Diseño e implementación de APIs RESTful seguras con autenticación JWT, jerarquía de roles, validación, documentación con Swagger y patrones de dominio como DTOs y mapeadores MapStruct.',
      en: 'Design and implementation of secure RESTful APIs with JWT authentication, role hierarchy, validation, Swagger documentation and domain patterns like DTOs and MapStruct mappers.',
    },
  },
  {
    title: { es: 'Despliegue y DevOps', en: 'Deployment and DevOps' },
    description: {
      es: 'Containerización con Docker, despliegues en producción, integración continua con GitHub Actions y monitoreo con herramientas como Grafana y OpenTelemetry para garantizar la disponibilidad de los sistemas.',
      en: 'Containerization with Docker, production deployments, continuous integration with GitHub Actions and monitoring with tools like Grafana and OpenTelemetry to guarantee system availability.',
    },
  },
  {
    title: { es: 'Soporte y mantenimiento', en: 'Support and maintenance' },
    description: {
      es: 'Evolución de sistemas existentes: corrección de bugs, incorporación de nuevas funcionalidades, refactorización de código heredado y mejoras de rendimiento.',
      en: 'Evolution of existing systems: bug fixing, new features, refactoring of legacy code and performance improvements.',
    },
  },
];

export type SaasServiceType = {
  title: Localized;
  description: Localized;
  tech: string;
  url?: string;
  features: Localized[];
};

export const featuredSaas: SaasServiceType[] = [
  {
    title: {
      es: 'SaaS multitenant para gestión de talleres mecánicos',
      en: 'Multitenant SaaS for auto workshop management',
    },
    description: {
      es: 'Plataforma SaaS para la gestión integral de talleres: control de vehículos, clientes, empleados, órdenes de trabajo, movimientos y reportes. Cada taller se registra como un tenant independiente con su propio branding, plan y accesos, sin compartir datos con los demás.',
      en: 'SaaS platform for end-to-end workshop management: vehicles, customers, employees, work orders, movements and reports. Each workshop registers as an independent tenant with its own branding, plan and access, without sharing data with the others.',
    },
    tech: 'Spring Boot 3 · Java 17 · PostgreSQL · JWT · React · Angular · TypeScript',
    url: 'https://taller-web-o9yv.onrender.com/',
    features: [
      {
        es: 'Multitenancy: cada taller es un tenant aislado con sus propios datos',
        en: 'Multitenancy: each workshop is an isolated tenant with its own data',
      },
      {
        es: 'Autenticación JWT con jerarquía de roles (ROOT, ADMIN, EMPLEADO_ADMIN, EMPLEADO)',
        en: 'JWT authentication with role hierarchy (ROOT, ADMIN, EMPLEADO_ADMIN, EMPLEADO)',
      },
      {
        es: 'Planes y módulos (BASIC / VIP) para activar funciones por tenant',
        en: 'Plans and modules (BASIC / VIP) to enable features per tenant',
      },
      {
        es: 'Branding por tenant: nombre, colores y logo personalizados',
        en: 'Per-tenant branding: custom name, colors and logo',
      },
      {
        es: 'Notificaciones automáticas por WhatsApp',
        en: 'Automatic WhatsApp notifications',
      },
      {
        es: 'Almacenamiento de imágenes en MinIO y reportes PDF',
        en: 'Image storage in MinIO and PDF reports',
      },
    ],
  },
  {
    title: {
      es: 'SaaS de pagos con Visa Direct y Mastercard Send',
      en: 'Payments SaaS with Visa Direct and Mastercard Send',
    },
    description: {
      es: 'Plataforma SaaS multitenant para el procesamiento de pagos y transferencias. Integra Visa Direct y Mastercard Send para mover dinero en tiempo real, con backend en Spring Boot y frontend en Angular. Incluye monitoreo multitenant de la infraestructura para garantizar la disponibilidad y el rendimiento del servicio.',
      en: 'Multitenant SaaS platform for payment processing and transfers. Integrates Visa Direct and Mastercard Send to move money in real time, with a Spring Boot backend and Angular frontend. Includes multitenant infrastructure monitoring to guarantee service availability and performance.',
    },
    tech: 'Spring Boot 3 · Java · Angular · PostgreSQL · Visa Direct · Mastercard Send',
    features: [
      {
        es: 'Integración con Visa Direct para transferencias en tiempo real',
        en: 'Visa Direct integration for real-time transfers',
      },
      {
        es: 'Integración con Mastercard Send para envío de dinero y pagos',
        en: 'Mastercard Send integration for money movement and payouts',
      },
      {
        es: 'Multitenancy con monitoreo de infraestructura por cliente',
        en: 'Multitenancy with per-client infrastructure monitoring',
      },
      {
        es: 'Backend con Spring Boot y frontend con Angular',
        en: 'Spring Boot backend and Angular frontend',
      },
    ],
  },
];

export type SkillsCategoryType = {
  label: Localized;
  skills: string[];
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning';
};

export const skillsCategories: SkillsCategoryType[] = [
  {
    label: { es: 'Frontend', en: 'Frontend' },
    skills: ['React', 'TypeScript', 'Angular', 'JavaScript', 'HTML / CSS'],
    color: 'primary',
  },
  {
    label: { es: 'Backend', en: 'Backend' },
    skills: ['Spring Boot', 'Java', 'Node.js', 'Python', 'REST APIs'],
    color: 'secondary',
  },
  {
    label: { es: 'Bases de datos', en: 'Databases' },
    skills: ['MySQL', 'Oracle', 'DB2', 'SQL'],
    color: 'info',
  },
  {
    label: { es: 'Observabilidad', en: 'Observability' },
    skills: ['Grafana', 'OpenTelemetry', 'Dynatrace', 'Zabbix'],
    color: 'success',
  },
  {
    label: { es: 'DevOps y herramientas', en: 'DevOps & tools' },
    skills: ['Docker', 'Git', 'Scrum', 'Clean Code', 'SOLID'],
    color: 'warning',
  },
];
