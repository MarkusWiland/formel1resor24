'use client'

import { MailCheck } from 'lucide-react'

export default function NewsletterSection() {
  return (
    <section className="w-full bg-[hsl(var(--hero-background))] py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center items-center gap-2 mb-4">
          <MailCheck className="w-6 h-6 text-[hsl(var(--primary))]" />
          <h2 className="text-2xl font-bold text-[hsl(var(--foreground))]">
            Få våra bästa trädgårdstips i mejlen
          </h2>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] mb-6 text-sm">
          Anmäl dig till vårt nyhetsbrev och håll dig uppdaterad med guider,
          topplistor och tester.
        </p>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Din e-postadress"
            className="px-4 py-2 rounded-xl border border-[hsl(var(--border))] bg-white text-sm w-full max-w-xs text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))]"
          />
          <button
            type="submit"
            className="bg-[hsl(var(--primary))] hover:bg-green-700 text-white font-medium px-6 py-2 rounded-xl text-sm transition"
          >
            Prenumerera
          </button>
        </form>
      </div>
    </section>
  )
}
