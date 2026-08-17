import { Target, Fingerprint, BrainCircuit, Share2, Workflow, BriefcaseBusiness } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

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
    id: 'commercial-launch',
    number: '01',
    title: 'Estrategia Comercial y Lanzamiento de Productos',
    description:
      'Diseño y ejecución de campañas para introducir nuevos productos al mercado. Realizo investigaciones exhaustivas, creación de reportes de buyer persona y segmentación de mercado estratégica, garantizando que el mensaje llegue al público correcto sin limitantes geográficas para maximizar las ventas.',
    tags: ['MARKET RESEARCH', 'BUYER PERSONA', 'LAUNCH STRATEGY'],
    icon: Target,
    featured: true,
  },
  {
    id: 'branding',
    number: '02',
    title: 'Creación de Marca Personal y Corporativa',
    description:
      'Desarrollo integral de marcas desde sus cimientos. Desde la conceptualización y el diseño de logotipos, hasta la creación de manuales de identidad visual y lineamientos de comunicación que proyecten autoridad en tu sector.',
    tags: ['BRANDING', 'IDENTITY', 'POSITIONING'],
    icon: Fingerprint,
    featured: true,
  },
  {
    id: 'ai-content',
    number: '03',
    title: 'Dirección de Contenido e Inteligencia Artificial',
    description:
      'Uso avanzado de IA para potenciar estrategias de comunicación. Me especializo en la redacción experta de guiones textuales y en la estructuración de prompts de alta precisión para campañas narrativas, además de generar imágenes estratégicas y optimizar flujos de trabajo.',
    tags: ['AI', 'PROMPT ENGINEERING', 'CONTENT STRATEGY'],
    icon: BrainCircuit,
  },
  {
    id: 'social-media',
    number: '04',
    title: 'Gestión de Redes Sociales',
    description:
      'Planificación meticulosa de contenido mediante el desarrollo de parrillas mensuales y diarias. Ejecuto estrategias de posicionamiento B2B, marketing con influencers y redacción de copys persuasivos enfocados en la venta consultiva.',
    tags: ['SOCIAL MEDIA', 'B2B', 'COPYWRITING'],
    icon: Share2,
  },
  {
    id: 'project-management',
    number: '05',
    title: 'Gestión de Proyectos',
    description:
      'Dirección, organización y seguimiento de proyectos a nivel corporativo. Aseguro el cumplimiento de los objetivos en tiempo y forma, alineando equipos y recursos hacia la misma meta comercial.',
    tags: ['PROJECT MANAGEMENT', 'PLANNING', 'EXECUTION'],
    icon: Workflow,
  },
  {
    id: 'consulting',
    number: '06',
    title: 'Asesoría y Consultoría Comercial',
    description:
      'Consultoría técnica orientada a la protección y crecimiento de tus activos, incluyendo el acompañamiento para el registro de marcas ante el IMPI y la estructuración de embudos de venta o customer journeys.',
    tags: ['CONSULTING', 'IMPI', 'SALES FUNNEL'],
    icon: BriefcaseBusiness,
  },
]
