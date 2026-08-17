export interface WorkflowStep {
  number: string
  title: string
  description: string
}

export const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'RESEARCH',
    description: 'Investigación de mercado, competencia, contexto y oportunidades.',
  },
  {
    number: '02',
    title: 'STRATEGY',
    description: 'Definición del público, propuesta de valor, posicionamiento y objetivos.',
  },
  {
    number: '03',
    title: 'ARCHITECTURE',
    description: 'Construcción de marca, comunicación, customer journey y canales.',
  },
  {
    number: '04',
    title: 'EXECUTION',
    description: 'Implementación de campañas, contenido y acciones comerciales.',
  },
  {
    number: '05',
    title: 'OPTIMIZATION',
    description: 'Evaluación de resultados, aprendizaje y optimización.',
  },
]
