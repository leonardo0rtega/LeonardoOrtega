import {
  BrainCircuit,
  BriefcaseBusiness,
  Fingerprint,
  Handshake,
  Share2,
  type LucideIcon,
} from 'lucide-react'

export interface ExpertiseItem {
  id: string
  number: string
  icon: LucideIcon
  featured?: boolean
}

export const expertiseItems: ExpertiseItem[] = [
  { id: 'public', number: '01', icon: Handshake },
  { id: 'sales', number: '02', icon: BriefcaseBusiness },
  { id: 'branding', number: '03', icon: Fingerprint },
  { id: 'digital', number: '04', icon: Share2 },
  { id: 'ai', number: '05', icon: BrainCircuit, featured: true },
]
