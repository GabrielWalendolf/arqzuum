export interface Project {
  slug: string
  title: string
  description: string
  thumbnail: string
  category: 'arquitetura' | 'urbanismo' | 'interiores'
  year: number
  featured: boolean
}
