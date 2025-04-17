// lib/data/products.ts – mockdata för produkter

export type Product = {
  id: string
  name: string
  category: string
  price: number
  features: string[]
  rating: number
  image: string
  link: string
  source: 'Outl1' | 'CDON' | 'Amazon'
  badge?: 'Bäst i test' | 'Prisvärdast' | 'Nyhet'
}

export const products: Product[] = [
  {
    id: 'automower430x',
    name: 'Husqvarna Automower 430X',
    category: 'Robotgräsklippare',
    price: 23999,
    features: ['Smart app', 'Tystgående', 'GPS-navigering'],
    rating: 4.9,
    image: '/images/automower.jpg',
    link: 'https://outl1.se/automower430x',
    source: 'Outl1',
    badge: 'Bäst i test',
  },
  {
    id: 'landroidm500',
    name: 'Worx Landroid M500',
    category: 'Robotgräsklippare',
    price: 8990,
    features: ['Kantklippning', 'Appstyrning'],
    rating: 4.4,
    image: '/images/worx.jpg',
    link: 'https://cdon.se/landroid-m500',
    source: 'CDON',
    badge: 'Prisvärdast',
  },
  {
    id: 'gardena1000',
    name: 'Gardena Sileno Life 1000',
    category: 'Robotgräsklippare',
    price: 13495,
    features: ['Tystgående', 'Regnsensor'],
    rating: 4.6,
    image: '/images/gardena.jpg',
    link: 'https://amazon.se/gardena1000',
    source: 'Amazon',
    badge: 'Nyhet',
  },
  {
    id: 'smartsystem',
    name: 'Gardena Smart System',
    category: 'Bevattningssystem',
    price: 4995,
    features: ['Schemaläggning', 'Appstyrning'],
    rating: 4.3,
    image: '/images/gardena-smart.jpg',
    link: 'https://cdon.se/smart-system',
    source: 'CDON',
  },
]
