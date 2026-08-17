export interface ExperienceItem {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
}

export const experience = {
  company: 'Albeh Global',
  period: '2026 / EXPERIENCE',
  role: 'Estratega de Marketing y Gestor de Proyectos',
  intro:
    'Mi paso por Albeh Global ha sido clave para la consolidación de mi perfil profesional. Fue el entorno donde perfeccioné mis habilidades estratégicas, elevé mi enfoque técnico y aprendí a orquestar proyectos de alta exigencia para cuentas corporativas.',
  items: [
    {
      id: 'product-launch',
      number: '01',
      title: 'PRODUCT LAUNCH',
      description:
        'Participación integral en la creación de nuevas marcas. Desde la investigación y segmentación del mercado, hasta la arquitectura de la marca y la ejecución de la estrategia comercial para asegurar un posicionamiento exitoso.',
      tags: ['Market Research', 'Brand Architecture', 'Commercial Strategy'],
    },
    {
      id: 'social-media',
      number: '02',
      title: 'SOCIAL MEDIA',
      description:
        'Diseño y gestión de la planificación diaria de contenidos. Estructuré parrillas dinámicas y narrativas continuas para redes sociales, asegurando una presencia digital activa, relevante y enfocada en atraer al público objetivo.',
      tags: ['Content Matrix', 'Brand Narrative', 'Audience Growth'],
    },
    {
      id: 'strategy',
      number: '03',
      title: 'STRATEGY',
      description:
        'Creación de embudos de venta o customer journeys y campañas tácticas. Especialización en redacción de guiones textuales persuasivos y en la integración de herramientas de inteligencia artificial para optimizar tiempos y recursos.',
      tags: ['Customer Journey', 'AI Integration', 'Copywriting'],
    },
    {
      id: 'conversion',
      number: '04',
      title: 'CONVERSION',
      description:
        'En Albeh Global perfeccioné un enfoque orientado a resultados, priorizando la conversión sobre las métricas de vanidad. Esto fortaleció mi capacidad de análisis, gestión de equipos y resolución de problemas dentro de proyectos de alta exigencia.',
      tags: ['Sales Conversion', 'Data Analysis', 'Problem Solving'],
    },
  ] as ExperienceItem[],
}
