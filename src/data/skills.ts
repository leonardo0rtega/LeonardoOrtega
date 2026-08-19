import type { LucideIcon } from 'lucide-react'
import { BrainCircuit, Fingerprint, Handshake, TrendingUp } from 'lucide-react'

export interface SkillMeta {
  id: string
  number: string
  icon: LucideIcon
}

export const skills: SkillMeta[] = [
  { id: 'branding', number: '01', icon: Fingerprint },
  { id: 'relations', number: '02', icon: Handshake },
  { id: 'ads', number: '03', icon: TrendingUp },
  { id: 'multimedia', number: '04', icon: BrainCircuit },
]
