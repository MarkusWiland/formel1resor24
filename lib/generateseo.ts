import { format } from 'date-fns'
import { sv } from 'date-fns/locale'

type Race = {
  title: string
  city: string
  date: string
  circuit: string
}

export function generateSEOText(race: Race) {
  const formattedDate = format(new Date(race.date), 'd MMMM yyyy', {
    locale: sv,
  })

  return {
    title: `${race.title} – Biljetter och resor`,
    paragraphs: [
      `${race.title} är ett av årets mest spännande F1-lopp och lockar fans från hela världen. Upplev intensiteten på plats i ${race.city}, med arrangörer som erbjuder allt från ståplats till VIP-upplevelser.`,
      `Här på Formel1biljetter.se kan du jämföra biljetter, hotell och kompletta paket till ${race.title} ${formattedDate}. Oavsett om du vill ha en prisvärd resa eller en exklusiv helg, finns det alternativ som passar.`,
    ],
    highlights: [
      `Datum: ${formattedDate}`,
      `Plats: ${race.city}`,
      `Bana: ${race.circuit}`,
      `Trygga svenska återförsäljare`,
    ],
  }
}
