export type Lang = 'es' | 'en';

export type Localized = {
  es: string;
  en: string;
};

export const messages: Record<Lang, Record<string, string>> = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'sections.skills': 'Habilidades',
    'sections.experience': 'Experiencia laboral',
    'sections.services': 'Servicios',
    'sections.projects': 'Proyectos',
    'sections.testimonials': 'Testimonios',
    'sections.education': 'Educación y certificaciones',
    'sections.blog': 'Blog',
    'sections.contact': 'Contacto',
    'about.role': 'Desarrollador Full-Stack',
    'about.description':
      'Desarrollador Full-Stack con más de {years} años de experiencia creando soluciones tecnológicas para los sectores bancario y fintech. Especializado en React, TypeScript, Spring Boot y Python, con un enfoque en código limpio, arquitecturas mantenibles y resolución de problemas complejos.',
    'about.ctaProjects': 'Ver proyectos',
    'about.ctaContact': 'Contáctame',
    'about.downloadCv': 'Descargar CV',
    'contact.subtitle':
      '¿Tienes un proyecto en mente o quieres trabajar conmigo? Escríbeme y te respondo a la brevedad.',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.message': 'Mensaje',
    'contact.orWrite': 'O escríbeme directamente:',
    'contact.whatsapp': 'Escríbeme por WhatsApp',
    'contact.sendEmail': 'Enviar por correo',
    'contact.sent': 'Se abrirá tu cliente de correo para enviar el mensaje.',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.builtWith': 'Hecho con React, MUI y framer-motion.',
    'footer.quickLinks': 'Enlaces',
    'footer.getInTouch': 'Contacto',
    'blog.readMore': 'Leer más',
    'blog.close': 'Cerrar',
    'projects.viewDetail': 'Ver detalle',
    'projects.viewDemo': 'Ver demo',
    'projects.gallery': 'Ver galería',
    'projects.tech': 'Tecnologías',
    'projects.back': 'Volver a proyectos',
    'projects.other': 'Otros proyectos',
    'projects.detail': 'Detalle del proyecto',
    'projects.context': 'Contexto',
    'education.degree': 'Educación',
    'education.certs': 'Certificaciones',
    'whatsapp.message': 'hola quiero mas informacion',
    'common.ariaMenu': 'Abrir menú',
    'common.ariaLight': 'Activar modo claro',
    'common.ariaDark': 'Activar modo oscuro',
    'common.changeLang': 'Cambiar idioma a inglés',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'sections.skills': 'Skills',
    'sections.experience': 'Work experience',
    'sections.services': 'Services',
    'sections.projects': 'Projects',
    'sections.testimonials': 'Testimonials',
    'sections.education': 'Education & certifications',
    'sections.blog': 'Blog',
    'sections.contact': 'Contact',
    'about.role': 'Full-Stack Developer',
    'about.description':
      'Full-Stack Developer with more than {years} years of experience building technology solutions for the banking and fintech sectors. Specialized in React, TypeScript, Spring Boot and Python, focused on clean code, maintainable architectures and solving complex problems.',
    'about.ctaProjects': 'View projects',
    'about.ctaContact': 'Get in touch',
    'about.downloadCv': 'Download CV',
    'contact.subtitle':
      'Have a project in mind or want to work with me? Reach out and I will get back to you shortly.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.orWrite': 'Or write me directly:',
    'contact.whatsapp': 'Chat on WhatsApp',
    'contact.sendEmail': 'Send via email',
    'contact.sent': 'Your email client will open to send the message.',
    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with React, MUI and framer-motion.',
    'footer.quickLinks': 'Quick links',
    'footer.getInTouch': 'Get in touch',
    'blog.readMore': 'Read more',
    'blog.close': 'Close',
    'projects.viewDetail': 'View details',
    'projects.viewDemo': 'View demo',
    'projects.gallery': 'View gallery',
    'projects.tech': 'Tech stack',
    'projects.back': 'Back to projects',
    'projects.other': 'Other projects',
    'projects.detail': 'Project details',
    'projects.context': 'Context',
    'education.degree': 'Education',
    'education.certs': 'Certifications',
    'whatsapp.message': 'hola quiero mas informacion',
    'common.ariaMenu': 'Open menu',
    'common.ariaLight': 'Enable light mode',
    'common.ariaDark': 'Enable dark mode',
    'common.changeLang': 'Switch language to Spanish',
  },
};

export const pick = (value: Localized, lang: Lang) => value[lang];

export const t = (lang: Lang) => (key: string, vars?: Record<string, string | number>) => {
  const message = messages[lang][key] ?? key;
  if (!vars) return message;
  return Object.entries(vars).reduce(
    (acc, [name, value]) => acc.replaceAll(`{${name}}`, String(value)),
    message
  );
};

export type Translate = ReturnType<typeof t>;
