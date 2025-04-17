// lib/getRaceBySlug.ts
import { mockRaces } from './mockRace'

export async function getRaceBySlug(slug: string) {
  const race = mockRaces.find((r) => r.slug === slug)

  if (!race) return null

  return {
    ...race,
    price: race.priceTicketOnly, // standardpris vi visar
    image: `/images/races/${race.slug}.jpg`, // anpassad bildväg
  }
}
