import {
  BrainCircuit,
  Palette,
  Share2,
  Target,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
  icon: LucideIcon
  featured?: boolean
}

export const services: Service[] = [
  {
    id: 'meta',
    number: '01',
    title: 'Meta Business Suite',
    description:
      'Gestión y programación de contenido en Instagram y Facebook, monitoreo de métricas básicas y administración de presencia digital en Meta.',
    tags: ['SOCIAL MEDIA', 'PROGRAMACIÓN', 'MÉTRICAS'],
    icon: Share2,
    featured: true,
  },
  {
    id: 'canva',
    number: '02',
    title: 'Canva',
    description:
      'Diseño de piezas visuales para redes sociales, presentaciones y material de marca con enfoque en comunicación limpia y profesional.',
    tags: ['DISEÑO', 'IDENTIDAD', 'CONTENIDO'],
    icon: Palette,
    featured: true,
  },
  {
    id: 'capcut',
    number: '03',
    title: 'CapCut',
    description:
      'Edición de video vertical para redes sociales, ajuste de ritmo, subtítulos y recursos visuales orientados a retención de audiencia.',
    tags: ['VIDEO', 'REELS', 'EDICIÓN'],
    icon: Target,
  },
  {
    id: 'excel',
    number: '04',
    title: 'Microsoft Excel',
    description:
      'Organización de información, tablas dinámicas básicas y seguimiento de datos para la toma de decisiones en proyectos y reportes.',
    tags: ['DATOS', 'REPORTES', 'ORGANIZACIÓN'],
    icon: TrendingUp,
  },
  {
    id: 'ai',
    number: '05',
    title: 'Herramientas de IA',
    description:
      'Uso de inteligencia artificial para generación de texto, optimización de prompts y apoyo en la producción de recursos visuales.',
    tags: ['PROMPTS', 'IA', 'PRODUCTIVIDAD'],
    icon: BrainCircuit,
  },
]
