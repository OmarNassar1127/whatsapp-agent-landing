import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to form backend
    console.log('Lead:', email)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white animated-gradient relative overflow-hidden">
      {/* Floating orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto liquid-glass rounded-2xl px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg whatsapp-gradient flex items-center justify-center glow-green-subtle">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <span className="font-bold text-lg">ZapBot</span>
          </div>
          <a 
            href="#contact" 
            className="px-4 py-2 rounded-xl whatsapp-gradient font-medium hover:opacity-90 transition glow-green-subtle"
          >
            Demo aanvragen
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-emerald-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Nu beschikbaar voor Nederlandse bedrijven
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Je WhatsApp beantwoorden
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 text-glow">
                terwijl jij werkt
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              AI-assistent die 24/7 je WhatsApp beheert. Beantwoordt vragen, plant afspraken in, 
              stuurt herinneringen. Jouw stijl, zonder dat je typt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-xl whatsapp-gradient font-semibold text-lg hover:opacity-90 transition glow-green shimmer"
              >
                Gratis demo bekijken
              </a>
              <a 
                href="#how-it-works" 
                className="px-8 py-4 rounded-xl liquid-glass font-semibold text-lg hover:bg-white/10 transition"
              >
                Hoe werkt het?
              </a>
            </div>
          </div>

          {/* Demo mockup */}
          <div className="mt-16 max-w-md mx-auto">
            <div className="liquid-glass-strong rounded-3xl p-4 glow-green-subtle">
              <div className="bg-gradient-to-b from-emerald-900/50 to-emerald-950/50 rounded-2xl p-4 space-y-3">
                {/* Chat bubble - customer */}
                <div className="flex justify-end">
                  <div className="bg-emerald-600/80 backdrop-blur rounded-2xl rounded-br-md px-4 py-2 max-w-[80%]">
                    <p className="text-sm">Hoi! Kan ik morgen om 15:00 langskomen?</p>
                    <p className="text-xs text-emerald-200 text-right mt-1">14:32</p>
                  </div>
                </div>
                {/* Chat bubble - bot */}
                <div className="flex justify-start">
                  <div className="liquid-glass rounded-2xl rounded-bl-md px-4 py-2 max-w-[80%]">
                    <p className="text-sm">Hoi! 👋 Ja, morgen 15:00 is beschikbaar. Zal ik je inplannen?</p>
                    <p className="text-xs text-gray-400 mt-1">14:32 ✓✓</p>
                  </div>
                </div>
                {/* Chat bubble - customer */}
                <div className="flex justify-end">
                  <div className="bg-emerald-600/80 backdrop-blur rounded-2xl rounded-br-md px-4 py-2 max-w-[80%]">
                    <p className="text-sm">Ja graag!</p>
                    <p className="text-xs text-emerald-200 text-right mt-1">14:33</p>
                  </div>
                </div>
                {/* Chat bubble - bot */}
                <div className="flex justify-start">
                  <div className="liquid-glass rounded-2xl rounded-bl-md px-4 py-2 max-w-[80%]">
                    <p className="text-sm">Top! ✅ Je afspraak staat ingepland voor morgen 15:00. Je ontvangt een herinnering 24 uur van tevoren. Tot dan!</p>
                    <p className="text-xs text-gray-400 mt-1">14:33 ✓✓</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-gray-500 text-sm justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                AI beantwoordt automatisch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="liquid-glass rounded-2xl py-6 px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <p className="text-sm">Vertrouwd door:</p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                <span className="font-semibold text-white/80">✂️ Kappers</span>
                <span className="font-semibold text-white/80">🍽️ Restaurants</span>
                <span className="font-semibold text-white/80">🦷 Tandartsen</span>
                <span className="font-semibold text-white/80">💪 Fysiotherapeuten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="how-it-works" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wat kan de AI voor je doen?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Alles wat je nu handmatig doet via WhatsApp, maar dan automatisch. 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="liquid-glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl whatsapp-gradient flex items-center justify-center mb-4 glow-green-subtle">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vragen beantwoorden</h3>
              <p className="text-gray-400">
                "Wat zijn jullie openingstijden?" "Wat kost een knipbeurt?" De AI kent je bedrijf en antwoordt direct.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="liquid-glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl whatsapp-gradient flex items-center justify-center mb-4 glow-green-subtle">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Afspraken inplannen</h3>
              <p className="text-gray-400">
                Checkt je agenda, vindt een vrij moment, boekt in en stuurt bevestiging. Geen dubbele boekingen meer.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="liquid-glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl whatsapp-gradient flex items-center justify-center mb-4 glow-green-subtle">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Herinneringen sturen</h3>
              <p className="text-gray-400">
                24 uur en 1 uur voor de afspraak. Minder no-shows, meer omzet. Klanten kunnen ook makkelijk verzetten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect voor</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "✂️", title: "Kappers", desc: "Boekingen terwijl je knipt" },
              { icon: "🍽️", title: "Restaurants", desc: "Reserveringen 24/7" },
              { icon: "🦷", title: "Tandartsen", desc: "Minder no-shows" },
              { icon: "💪", title: "Fysiotherapeuten", desc: "Afspraken beheren" },
            ].map((item, i) => (
              <div key={i} className="liquid-glass-card rounded-xl p-6 text-center">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simpele prijzen</h2>
            <p className="text-gray-400">Geen verborgen kosten. Eerste maand gratis als pilot.</p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="liquid-glass-strong rounded-2xl p-8 glow-green-subtle relative overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer pointer-events-none"></div>
              
              <div className="text-center relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-4 border border-emerald-500/30">
                  Launch aanbieding
                </span>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-glow">€99</span>
                  <span className="text-gray-400">/maand</span>
                </div>
                <p className="text-gray-400 mb-6">+ €500 eenmalige setup <span className="line-through text-gray-600">€1000</span></p>
              </div>
              
              <ul className="space-y-3 mb-8 relative z-10">
                {[
                  "24/7 WhatsApp AI-assistent",
                  "Onbeperkt berichten",
                  "Agenda-integratie",
                  "Automatische herinneringen",
                  "Jouw tone-of-voice",
                  "Nederlandse support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full whatsapp-gradient flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="block w-full py-4 rounded-xl whatsapp-gradient font-semibold text-center hover:opacity-90 transition glow-green relative z-10"
              >
                Gratis demo aanvragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="liquid-glass-strong rounded-2xl p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Klaar om tijd te besparen?
            </h2>
            <p className="text-gray-400 mb-8">
              Laat je email achter en we nemen binnen 24 uur contact op voor een gratis demo.
            </p>

            {submitted ? (
              <div className="liquid-glass rounded-xl p-6">
                <span className="text-4xl mb-4 block">✅</span>
                <p className="text-emerald-400 font-medium">Bedankt! We nemen snel contact op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="je@email.nl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none focus:bg-white/10 transition backdrop-blur"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl whatsapp-gradient font-semibold hover:opacity-90 transition whitespace-nowrap glow-green-subtle"
                >
                  Demo aanvragen
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="liquid-glass rounded-xl py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg whatsapp-gradient flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span className="font-semibold">ZapBot</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 ZapBot. Made in Amsterdam 🇳🇱
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
