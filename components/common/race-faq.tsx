'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type FAQProps = {
  date: string
  city: string
  circuit: string
  priceFrom: number
}

export default function RaceFAQ({ date, city, circuit, priceFrom }: FAQProps) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-[hsl(var(--foreground))]">
        Vanliga frågor om detta lopp
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>När körs loppet?</AccordionTrigger>
          <AccordionContent>{date}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Var körs loppet?</AccordionTrigger>
          <AccordionContent>
            {circuit}, {city}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Vad kostar biljetter?</AccordionTrigger>
          <AccordionContent>
            Priser börjar från {priceFrom.toLocaleString('sv-SE')} kr. Paket med
            hotell och flyg finns också.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Ingår hotell i priset?</AccordionTrigger>
          <AccordionContent>
            Vissa paket inkluderar hotell, andra är endast biljett. Använd
            filtret ovan för att sortera.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Hur bokar jag?</AccordionTrigger>
          <AccordionContent>
            Klicka på en arrangör i listan för att gå vidare till deras
            webbplats och boka tryggt.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
