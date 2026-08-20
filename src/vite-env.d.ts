/// <reference types="vite/client" />

declare module 'lucide-react' {
  import type { ComponentType, SVGProps } from 'react'
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string
    strokeWidth?: number | string
    absoluteStrokeWidth?: boolean
  }
  export type LucideIcon = ComponentType<LucideProps>
  export const Target: LucideIcon
  export const MessageSquareText: LucideIcon
  export const Puzzle: LucideIcon
  export const Handshake: LucideIcon
  export const Fingerprint: LucideIcon
  export const BrainCircuit: LucideIcon
  export const Share2: LucideIcon
  export const Workflow: LucideIcon
  export const BriefcaseBusiness: LucideIcon
  export const Menu: LucideIcon
  export const X: LucideIcon
  export const ArrowRight: LucideIcon
  export const TrendingUp: LucideIcon
  export const Palette: LucideIcon
  export const FolderKanban: LucideIcon
  export const FileText: LucideIcon
  export const ExternalLink: LucideIcon
  export const Download: LucideIcon
  export const Expand: LucideIcon
  export const Mail: LucideIcon
  export const Phone: LucideIcon
  export const Linkedin: LucideIcon
  export const Github: LucideIcon
  export const Sun: LucideIcon
  export const Moon: LucideIcon
  export const Globe: LucideIcon
  export const Layers: LucideIcon
  export const Zap: LucideIcon
  export const CheckCircle2: LucideIcon
  export const BarChart3: LucideIcon
  export const Calendar: LucideIcon
  export const Sparkles: LucideIcon
  export const Search: LucideIcon
  export const Compass: LucideIcon
  export const Plus: LucideIcon
  export const Minus: LucideIcon
  export const HelpCircle: LucideIcon
}
