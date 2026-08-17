import type { LucideIcon } from 'lucide-react'
import {
  Handshake,
  MessageSquareText,
  Puzzle,
  Target,
  TrendingUp,
} from 'lucide-react'

export interface SkillMeta {
  id: string
  number: string
  icon: LucideIcon
}

export const skills: SkillMeta[] = [
  { id: 'leadership', number: '01', icon: Target },
  { id: 'communication', number: '02', icon: MessageSquareText },
  { id: 'conversion', number: '03', icon: TrendingUp },
  { id: 'problemSolving', number: '04', icon: Puzzle },
  { id: 'collaboration', number: '05', icon: Handshake },
]
