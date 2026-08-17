import {
  BrainCircuit,
  Fingerprint,
  Search,
  Target,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export interface ExpertiseItem {
  id: string
  number: string
  icon: LucideIcon
  featured?: boolean
}

export const expertiseItems: ExpertiseItem[] = [
  { id: 'item1', number: '01', icon: Target },
  { id: 'item2', number: '02', icon: Search },
  { id: 'item3', number: '03', icon: Fingerprint },
  { id: 'item4', number: '04', icon: Workflow },
  { id: 'item5', number: '05', icon: BrainCircuit },
  { id: 'item6', number: '06', icon: TrendingUp, featured: true },
]
