export const jobsDescription = [
  {
    title: 'Full stack junior',
    at: 'Serfinsa',
    description:
      'Desarrollador full stack junior responsable del desarrollo y mantenimiento de aplicaciones web con Angular en el frontend y Spring Boot en el backend. Encargado de implementar y mantener la infraestructura de observabilidad, garantizando la visibilidad y el rendimiento de los sistemas. Aplicación de principios de Clean Code, SOLID y buenas prácticas de desarrollo para asegurar código mantenible y escalable, además de colaborar en mejoras continuas y revisiones de código.',
    from: '11/2025',
    to: 'Now',
  },

  {
    title: 'Full stack',
    at: 'Freelance',
    description:
      'Desarrollo completo de proyecto propio desde la concepción hasta el despliegue, abarcando el diseño de arquitectura, implementación de servicios backend RESTful con Spring Boot, construcción del frontend con React y despliegue en producción. Gestión autónoma del ciclo de vida del proyecto, incluyendo planificación, desarrollo, pruebas y documentación.',
    from: '06/2025',
    to: '10/2025',
  },

  {
    title: 'Analista de monitoreo',
    at: 'Banco agricola',
    description:
      'Responsable del monitoreo integral de infraestructura on-premise y microservicios en un entorno bancario crítico, utilizando herramientas como Zabbix, Grafana, OpenTelemetry y Dynatrace para la detección y resolución proactiva de incidentes. Desarrollo de procesos ETL en Python para la extracción, transformación y carga de datos desde múltiples fuentes, incluyendo MySQL, Oracle y DB2. Creación de dashboards y alertas personalizadas para la visualización del estado de los sistemas, apoyando la toma de decisiones del equipo de operaciones.',
    from: '07/2023',
    to: '05/2025',
  },

  {
    title: 'QA',
    at: 'Banco cuscatlan',
    description:
      'Aseguramiento de calidad (QA) para APIs REST y aplicaciones móviles en el sector bancario. Diseño y ejecución de planes de pruebas funcionales, de integración y de regresión para garantizar la estabilidad y correctitud de los servicios. Reporte y seguimiento de incidentes, trabajando en conjunto con el equipo de desarrollo para la resolución de defectos y la mejora continua de la calidad del producto.',
    from: '12/2022',
    to: '05/2023',
  },
];

export type JobsDescriptionType = (typeof jobsDescription)[0];

export const projectsDescription = [
  {
    title: 'ETLs transaccionales y observabilidad',
    context: 'Banco Agricola · Analista de monitoreo',
    highlights: [
      'Creación de ETLs para alimentar dashboards transaccionales',
      'Consultas multihilo hacia diferentes fuentes de datos',
      'Observabilidad y monitoreo para tarjetas de crédito/débito y pagos en línea',
    ],
  },
  {
    title: 'Taller — SaaS multitenant para talleres mecánicos',
    context: 'Freelance · Proyecto propio',
    highlights: [
      'SaaS completo de gestión de talleres, de la idea al despliegue en producción',
      'Multitenancy con JWT, planes y branding por taller',
      'Disponible como servicio en producción',
    ],
  },
  {
    title: 'SaaS para medios de pago',
    context: 'Serfinsa · Full stack junior',
    highlights: [
      'Plataforma SaaS enfocada en medios de pago',
      'Integraciones con Visa Direct y Mastercard',
      'Multitenant de monitoreo',
    ],
  },
];

export type ProjectType = (typeof projectsDescription)[0];

export const servicesDescription = [
  {
    title: 'Desarrollo full-stack a medida',
    description:
      'Construcción de aplicaciones web completas, desde la interfaz hasta la base de datos, usando React, TypeScript y Angular en el frontend y Spring Boot o Node.js en el backend, con foco en código limpio y arquitecturas mantenibles.',
  },
  {
    title: 'APIs REST y microservicios',
    description:
      'Diseño e implementación de APIs RESTful seguras con autenticación JWT, jerarquía de roles, validación, documentación con Swagger y patrones de dominio como DTOs y mapeadores MapStruct.',
  },
  {
    title: 'Despliegue y DevOps',
    description:
      'Containerización con Docker, despliegues en producción, integración continua con GitHub Actions y monitoreo con herramientas como Grafana y OpenTelemetry para garantizar la disponibilidad de los sistemas.',
  },
  {
    title: 'Soporte y mantenimiento',
    description:
      'Evolución de sistemas existentes: corrección de bugs, incorporación de nuevas funcionalidades, refactorización de código heredado y mejoras de rendimiento.',
  },
];

export const saasService = {
  title: 'SaaS multitenant para gestión de talleres mecánicos',
  description:
    'Plataforma SaaS para la gestión integral de talleres: control de vehículos, clientes, empleados, órdenes de trabajo, movimientos y reportes. Cada taller se registra como un tenant independiente con su propio branding, plan y accesos, sin compartir datos con los demás.',
  tech: 'Spring Boot 3 · Java 17 · PostgreSQL · JWT · React · Angular · TypeScript',
  url: 'https://taller-web-o9yv.onrender.com/',
  features: [
    'Multitenancy: cada taller es un tenant aislado con sus propios datos',
    'Autenticación JWT con jerarquía de roles (ROOT, ADMIN, EMPLEADO_ADMIN, EMPLEADO)',
    'Planes y módulos (BASIC / VIP) para activar funciones por tenant',
    'Branding por tenant: nombre, colores y logo personalizados',
    'Notificaciones automáticas por WhatsApp',
    'Almacenamiento de imágenes en MinIO y reportes PDF',
  ],
};
