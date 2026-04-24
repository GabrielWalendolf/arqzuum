import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'residencia-moderna-itapoa',
    title: 'Residência Moderna Itapoá',
    description: 'Projeto residencial com integração total entre interior e natureza, priorizando luz natural e ventilação cruzada.',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    category: 'arquitetura',
    year: 2024,
    featured: true,
  },
  {
    slug: 'requalificacao-urbana-centro',
    title: 'Requalificação Urbana Centro',
    description: 'Plano de requalificação do centro histórico com foco em mobilidade urbana e espaços públicos de convívio.',
    thumbnail: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    category: 'urbanismo',
    year: 2024,
    featured: true,
  },
  {
    slug: 'apartamento-contemporaneo',
    title: 'Apartamento Contemporâneo',
    description: 'Design de interiores minimalista com paleta neutra, materiais naturais e mobiliário de autoria.',
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    category: 'interiores',
    year: 2023,
    featured: true,
  },
]
