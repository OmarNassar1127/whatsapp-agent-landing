import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead:', email)
    setSubmitted(true)
  }

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Hoe werkt het', href: '#how-it-works' },
    { label: 'Prijzen', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white animated-gradient relative overflow-hidden">
      {/* Floating orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowTerms(false)}>
          <div className="liquid-glass-strong rounded-2xl p-6 md:p-8 max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Algemene Voorwaarden</h2>
              <button onClick={() => setShowTerms(false)} className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center hover:bg-white/10 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="prose prose-invert prose-sm max-w-none space-y-4 text-gray-300">
              <p><strong>Laatste update:</strong> 30 januari 2026</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">1. Definities</h3>
              <p>"ZapBot", "wij", "ons" verwijst naar de dienstverlener. "Klant", "u" verwijst naar de afnemer van onze diensten. "Dienst" verwijst naar de WhatsApp AI-assistent en gerelateerde services.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">2. Dienstverlening</h3>
              <p>ZapBot biedt een AI-gestuurde WhatsApp-assistent die namens uw bedrijf communiceert met uw klanten. Wij garanderen een uptime van 99.5% op maandbasis, exclusief gepland onderhoud.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">3. Verplichtingen van de Klant</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>U bent verantwoordelijk voor de juistheid van de verstrekte bedrijfsinformatie</li>
                <li>U zorgt voor een geldig WhatsApp Business account</li>
                <li>U gebruikt de dienst niet voor illegale of misleidende doeleinden</li>
                <li>U informeert uw klanten dat zij met een AI-assistent communiceren</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">4. Betalingsvoorwaarden</h3>
              <p>De maandelijkse vergoeding wordt vooraf gefactureerd. De eenmalige setupkosten worden gefactureerd bij aanvang. Betalingstermijn is 14 dagen na factuurdatum. Bij niet-tijdige betaling behouden wij het recht de dienst op te schorten.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">5. Looptijd en Opzegging</h3>
              <p>De overeenkomst wordt aangegaan voor onbepaalde tijd met een minimale looptijd van 3 maanden. Opzegging kan schriftelijk met een opzegtermijn van 1 maand tegen het einde van een kalendermaand.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">6. Aansprakelijkheid</h3>
              <p>ZapBot is niet aansprakelijk voor indirecte schade, gevolgschade, of gederfde winst. Onze aansprakelijkheid is beperkt tot het bedrag dat u in de 3 maanden voorafgaand aan de schade aan ons heeft betaald.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">7. Intellectueel Eigendom</h3>
              <p>De AI-technologie, software en systemen blijven eigendom van ZapBot. U behoudt eigendom van uw bedrijfsgegevens en chathistorie.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">8. Wijzigingen</h3>
              <p>Wij behouden het recht deze voorwaarden te wijzigen. Wezenlijke wijzigingen worden 30 dagen vooraf aangekondigd per e-mail.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">9. Toepasselijk Recht</h3>
              <p>Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter te Amsterdam.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">10. Contact</h3>
              <p>Voor vragen over deze voorwaarden: <a href="mailto:omarnassar1127@gmail.com" className="text-emerald-400 hover:underline">omarnassar1127@gmail.com</a></p>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowPrivacy(false)}>
          <div className="liquid-glass-strong rounded-2xl p-6 md:p-8 max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Privacybeleid</h2>
              <button onClick={() => setShowPrivacy(false)} className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center hover:bg-white/10 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="prose prose-invert prose-sm max-w-none space-y-4 text-gray-300">
              <p><strong>Laatste update:</strong> 30 januari 2026</p>
              
              <p>ZapBot respecteert uw privacy en verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR).</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">1. Verwerkingsverantwoordelijke</h3>
              <p>ZapBot is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid. Contact: <a href="mailto:omarnassar1127@gmail.com" className="text-emerald-400 hover:underline">omarnassar1127@gmail.com</a></p>
              
              <h3 className="text-lg font-semibold text-white mt-6">2. Welke Gegevens Verzamelen Wij</h3>
              <p><strong>Van bedrijven (klanten):</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Contactgegevens (naam, e-mail, telefoonnummer)</li>
                <li>Bedrijfsinformatie (naam, adres, KvK-nummer)</li>
                <li>Betalingsgegevens</li>
                <li>WhatsApp Business accountgegevens</li>
              </ul>
              
              <p className="mt-4"><strong>Van eindgebruikers (klanten van onze klanten):</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>WhatsApp-berichten en chatgeschiedenis</li>
                <li>Telefoonnummers</li>
                <li>Afspraakgegevens</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">3. Doeleinden van Verwerking</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Het leveren van onze AI-assistentdiensten</li>
                <li>Het verbeteren van onze AI-modellen en dienstverlening</li>
                <li>Facturering en administratie</li>
                <li>Klantenservice en support</li>
                <li>Naleving van wettelijke verplichtingen</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">4. Rechtsgrond</h3>
              <p>Wij verwerken gegevens op basis van: uitvoering van de overeenkomst, wettelijke verplichtingen, en gerechtvaardigde belangen (verbetering van onze diensten).</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">5. Bewaartermijnen</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Chatgeschiedenis: 12 maanden na laatste interactie, of tot einde overeenkomst</li>
                <li>Klantgegevens: 7 jaar na einde overeenkomst (fiscale bewaarplicht)</li>
                <li>Factuurgegevens: 7 jaar (wettelijke verplichting)</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">6. Delen met Derden</h3>
              <p>Wij delen gegevens alleen met:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Verwerkers die namens ons handelen (hosting, AI-diensten)</li>
                <li>WhatsApp/Meta voor de berichteninfrastructuur</li>
                <li>Autoriteiten indien wettelijk verplicht</li>
              </ul>
              <p className="mt-2">Alle verwerkers zijn gebonden aan verwerkersovereenkomsten en zijn gevestigd in de EU of werken onder adequaatheidsbesluiten.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">7. Beveiliging</h3>
              <p>Wij nemen passende technische en organisatorische maatregelen: encryptie van data in transit en at rest, toegangscontrole, regelmatige security audits, en hosting in Nederlandse/EU datacenters.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">8. Uw Rechten</h3>
              <p>U heeft recht op:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Inzage in uw persoonsgegevens</li>
                <li>Rectificatie van onjuiste gegevens</li>
                <li>Verwijdering van gegevens ("recht om vergeten te worden")</li>
                <li>Beperking van de verwerking</li>
                <li>Dataportabiliteit</li>
                <li>Bezwaar tegen verwerking</li>
              </ul>
              <p className="mt-2">Verzoeken kunt u richten aan <a href="mailto:omarnassar1127@gmail.com" className="text-emerald-400 hover:underline">omarnassar1127@gmail.com</a>. Wij reageren binnen 30 dagen.</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">9. Klachten</h3>
              <p>U heeft het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (<a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">autoriteitpersoonsgegevens.nl</a>).</p>
              
              <h3 className="text-lg font-semibold text-white mt-6">10. Wijzigingen</h3>
              <p>Dit privacybeleid kan worden gewijzigd. De meest recente versie is altijd beschikbaar op onze website. Bij wezenlijke wijzigingen informeren wij u per e-mail.</p>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4">
        <div className="max-w-6xl mx-auto liquid-glass rounded-2xl px-4 md:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg whatsapp-gradient flex items-center justify-center glow-green-subtle">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <span className="font-bold text-lg">ZapBot</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-sm text-white hover:text-emerald-400 transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a 
              href="mailto:omarnassar1127@gmail.com"
              className="px-4 py-2 rounded-xl liquid-glass font-medium hover:bg-white/10 transition flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Mail ons
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-xl whatsapp-gradient font-medium hover:opacity-90 transition glow-green-subtle"
            >
              Demo aanvragen
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden w-10 h-10 rounded-xl liquid-glass flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mx-auto max-w-6xl liquid-glass rounded-2xl p-4 space-y-2">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="block px-4 py-3 rounded-xl hover:bg-white/10 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="border-white/10 my-2" />
            <a 
              href="mailto:omarnassar1127@gmail.com"
              className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-white/10 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Mail ons
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-3 rounded-xl whatsapp-gradient font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo aanvragen
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-emerald-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Nu beschikbaar voor Nederlandse bedrijven
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Je WhatsApp beantwoorden
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 text-glow">
                terwijl jij werkt
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
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
          <div className="mt-12 md:mt-16 max-w-md mx-auto">
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
      <section className="py-8 md:py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="liquid-glass rounded-2xl py-6 px-4 md:px-8">
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 text-gray-400">
              <p className="text-sm">Vertrouwd door:</p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <span className="font-semibold text-white/80">✂️ Kappers</span>
                <span className="font-semibold text-white/80">🍽️ Restaurants</span>
                <span className="font-semibold text-white/80">🦷 Tandartsen</span>
                <span className="font-semibold text-white/80">💪 Fysio's</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wat kan de AI voor je doen?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Alles wat je nu handmatig doet via WhatsApp, maar dan automatisch. 24/7.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
            <div className="liquid-glass-card rounded-2xl p-6 sm:col-span-2 md:col-span-1">
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
      <section className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect voor</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: "✂️", title: "Kappers", desc: "Boekingen terwijl je knipt" },
              { icon: "🍽️", title: "Restaurants", desc: "Reserveringen 24/7" },
              { icon: "🦷", title: "Tandartsen", desc: "Minder no-shows" },
              { icon: "💪", title: "Fysiotherapeuten", desc: "Afspraken beheren" },
            ].map((item, i) => (
              <div key={i} className="liquid-glass-card rounded-xl p-4 md:p-6 text-center">
                <span className="text-3xl md:text-4xl mb-3 md:mb-4 block">{item.icon}</span>
                <h3 className="font-semibold text-base md:text-lg mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Process / How we connect */}
      <section id="how-it-works" className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zo werkt de opstart</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              In 4 simpele stappen ben je live. Wij doen het zware werk.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { 
                step: "1", 
                title: "Kennismaking", 
                desc: "15 min call om je bedrijf te begrijpen",
                icon: "👋"
              },
              { 
                step: "2", 
                title: "Info delen", 
                desc: "Openingstijden, prijslijst, veelgestelde vragen",
                icon: "📋"
              },
              { 
                step: "3", 
                title: "Wij bouwen", 
                desc: "AI trainen op jouw bedrijf + WhatsApp koppelen",
                icon: "⚙️"
              },
              { 
                step: "4", 
                title: "Live!", 
                desc: "Testen, finetunen en live — binnen 1 week",
                icon: "🚀"
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="liquid-glass-card rounded-xl p-4 md:p-6 text-center relative h-full">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full whatsapp-gradient flex items-center justify-center mx-auto mb-3 md:mb-4 text-lg md:text-xl font-bold">
                    {item.step}
                  </div>
                  <span className="text-xl md:text-2xl mb-2 block">{item.icon}</span>
                  <h3 className="font-semibold text-base md:text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What we need */}
          <div className="mt-12 md:mt-16 liquid-glass-strong rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Wat hebben we van je nodig?</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-400">📱</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">WhatsApp Business</h4>
                  <p className="text-gray-400 text-sm">Je bestaande nummer of wij helpen met nieuw</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-400">📄</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Basisinfo</h4>
                  <p className="text-gray-400 text-sm">Prijzen, openingstijden, veelgestelde vragen</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2 md:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-emerald-400">📅</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Agenda (optioneel)</h4>
                  <p className="text-gray-400 text-sm">Google Calendar, Treatwell, of eigen systeem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency / Data Access */}
      <section className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Jij blijft in controle</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Geen black box. Je ziet alles, past alles aan, en het is jouw data.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Full chat access */}
            <div className="liquid-glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Volledige chat historie</h3>
              <p className="text-gray-400">
                Lees alle gesprekken terug. Zie precies wat de AI zegt en hoe klanten reageren. Exporteer wanneer je wilt.
              </p>
            </div>

            {/* Improve & adjust */}
            <div className="liquid-glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Zelf verbeteren</h3>
              <p className="text-gray-400">
                Antwoord niet goed? Pas het aan via een simpel dashboard. De AI leert direct van je feedback.
              </p>
            </div>

            {/* System integration */}
            <div className="liquid-glass-card rounded-2xl p-6 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Koppel je systemen</h3>
              <p className="text-gray-400">
                Werkt met je bestaande agenda, boekingssysteem of CRM. Wij bouwen de koppeling, jij hoeft niks te doen.
              </p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-6">
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-emerald-400">🔒</span>
              <span className="text-xs md:text-sm">AVG / GDPR compliant</span>
            </div>
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-emerald-400">🔐</span>
              <span className="text-xs md:text-sm">Jouw data, jouw eigendom</span>
            </div>
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-emerald-400">🤝</span>
              <span className="text-xs md:text-sm">Altijd menselijke support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simpele prijzen</h2>
            <p className="text-gray-400">Geen verborgen kosten. Eerste maand gratis als pilot.</p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="liquid-glass-strong rounded-2xl p-6 md:p-8 glow-green-subtle relative overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer pointer-events-none"></div>
              
              <div className="text-center relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-4 border border-emerald-500/30">
                  Launch aanbieding
                </span>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-glow">€99</span>
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
                    <span className="text-sm md:text-base">{item}</span>
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
      <section id="contact" className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="liquid-glass-strong rounded-2xl p-6 md:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
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
                  className="flex-1 px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none focus:bg-white/10 transition backdrop-blur text-base"
                />
                <button
                  type="submit"
                  className="px-6 md:px-8 py-4 rounded-xl whatsapp-gradient font-semibold hover:opacity-90 transition whitespace-nowrap glow-green-subtle"
                >
                  Demo aanvragen
                </button>
              </form>
            )}

            {/* Direct contact option */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-500 text-sm mb-3">Of neem direct contact op:</p>
              <a 
                href="mailto:omarnassar1127@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl liquid-glass font-medium hover:bg-white/10 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Stuur een e-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="liquid-glass rounded-xl py-6 px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg whatsapp-gradient flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="font-semibold">ZapBot</span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
                <button onClick={() => setShowTerms(true)} className="text-white hover:text-emerald-400 transition">
                  Algemene Voorwaarden
                </button>
                <button onClick={() => setShowPrivacy(true)} className="text-white hover:text-emerald-400 transition">
                  Privacybeleid
                </button>
                <a href="mailto:omarnassar1127@gmail.com" className="text-white hover:text-emerald-400 transition">
                  Contact
                </a>
              </div>
              
              <p className="text-white text-sm">
                © 2026 ZapBot. Made in Amsterdam 🇳🇱
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
