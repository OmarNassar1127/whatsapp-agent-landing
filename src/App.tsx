import { useState, useEffect } from 'react'
import { translations } from './translations'
import type { Lang } from './translations'

function App() {
  const [lang, setLang] = useState<Lang>('nl')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [companyType, setCompanyType] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const t = translations[lang]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch("https://formspree.io/f/mqaqryyn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name,
          email,
          companyType,
          language: lang,
          _subject: `🤖 New ZapBot demo request from ${name}!`,
          source: "zapbot-landing"
        })
      })
      setSubmitted(true)
    } catch (error) {
      console.error('Form error:', error)
      setSubmitted(true)
    }
  }

  const navItems = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.contact, href: '#contact' },
  ]

  const whatsappMessage = encodeURIComponent(t.whatsapp.message)

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
              <h2 className="text-2xl font-bold">{lang === 'nl' ? 'Algemene Voorwaarden' : 'Terms of Service'}</h2>
              <button onClick={() => setShowTerms(false)} className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center hover:bg-white/10 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="prose prose-invert prose-sm max-w-none space-y-4 text-gray-300">
              {lang === 'nl' ? (
                <>
                  <p><strong>Laatste update:</strong> 30 januari 2026</p>
                  <h3 className="text-lg font-semibold text-white mt-6">1. Definities</h3>
                  <p>"ZapBot", "wij", "ons" verwijst naar de dienstverlener. "Klant", "u" verwijst naar de afnemer van onze diensten.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">2. Dienstverlening</h3>
                  <p>ZapBot biedt een AI-gestuurde WhatsApp-assistent die namens uw bedrijf communiceert met uw klanten. Wij garanderen een uptime van 99.5% op maandbasis.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">3. Betalingsvoorwaarden</h3>
                  <p>De maandelijkse vergoeding wordt vooraf gefactureerd. Betalingstermijn is 14 dagen na factuurdatum.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">4. Looptijd en Opzegging</h3>
                  <p>Minimale looptijd van 3 maanden. Opzegging met een opzegtermijn van 1 maand.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">5. Contact</h3>
                  <p>Voor vragen: <a href="mailto:info@zapbot.nl" className="text-emerald-400 hover:underline">info@zapbot.nl</a></p>
                </>
              ) : (
                <>
                  <p><strong>Last updated:</strong> January 30, 2026</p>
                  <h3 className="text-lg font-semibold text-white mt-6">1. Definitions</h3>
                  <p>"ZapBot", "we", "us" refers to the service provider. "Customer", "you" refers to the user of our services.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">2. Services</h3>
                  <p>ZapBot provides an AI-powered WhatsApp assistant that communicates with your customers on behalf of your business. We guarantee 99.5% uptime monthly.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">3. Payment Terms</h3>
                  <p>Monthly fees are invoiced in advance. Payment is due within 14 days of invoice date.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">4. Term and Termination</h3>
                  <p>Minimum term of 3 months. Cancellation with 1 month notice.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">5. Contact</h3>
                  <p>For questions: <a href="mailto:info@zapbot.nl" className="text-emerald-400 hover:underline">info@zapbot.nl</a></p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowPrivacy(false)}>
          <div className="liquid-glass-strong rounded-2xl p-6 md:p-8 max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{lang === 'nl' ? 'Privacybeleid' : 'Privacy Policy'}</h2>
              <button onClick={() => setShowPrivacy(false)} className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center hover:bg-white/10 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="prose prose-invert prose-sm max-w-none space-y-4 text-gray-300">
              {lang === 'nl' ? (
                <>
                  <p><strong>Laatste update:</strong> 30 januari 2026</p>
                  <p>ZapBot respecteert uw privacy en verwerkt persoonsgegevens conform de AVG/GDPR.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">1. Gegevens die we verzamelen</h3>
                  <p>Contactgegevens, bedrijfsinformatie, WhatsApp-berichten en chatgeschiedenis.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">2. Bewaartermijnen</h3>
                  <p>Chatgeschiedenis: 12 maanden. Klantgegevens: 7 jaar na einde overeenkomst.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">3. Uw Rechten</h3>
                  <p>Inzage, rectificatie, verwijdering, beperking, dataportabiliteit, bezwaar.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">4. Contact</h3>
                  <p><a href="mailto:info@zapbot.nl" className="text-emerald-400 hover:underline">info@zapbot.nl</a></p>
                </>
              ) : (
                <>
                  <p><strong>Last updated:</strong> January 30, 2026</p>
                  <p>ZapBot respects your privacy and processes personal data in accordance with GDPR.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">1. Data We Collect</h3>
                  <p>Contact details, business information, WhatsApp messages and chat history.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">2. Retention Periods</h3>
                  <p>Chat history: 12 months. Customer data: 7 years after end of agreement.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">3. Your Rights</h3>
                  <p>Access, rectification, erasure, restriction, data portability, objection.</p>
                  <h3 className="text-lg font-semibold text-white mt-6">4. Contact</h3>
                  <p><a href="mailto:info@zapbot.nl" className="text-emerald-400 hover:underline">info@zapbot.nl</a></p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-4 py-4">
        <div className={`max-w-6xl mx-auto rounded-2xl px-4 md:px-6 py-3 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-xl shadow-lg shadow-black/50 border border-white/10' : 'liquid-glass'}`}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg whatsapp-gradient flex items-center justify-center glow-green-subtle">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <span className="font-bold text-lg">ZapBot</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white hover:text-emerald-400 transition">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'nl' ? 'en' : 'nl')}
              className="px-3 py-2 rounded-xl liquid-glass font-medium hover:bg-white/10 transition text-sm"
            >
              {lang === 'nl' ? '🇬🇧 EN' : '🇳🇱 NL'}
            </button>
            <a href="mailto:info@zapbot.nl" className="px-4 py-2 rounded-xl liquid-glass font-medium hover:bg-white/10 transition flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.nav.emailUs}
            </a>
            <a href="#contact" className="px-4 py-2 rounded-xl whatsapp-gradient font-medium hover:opacity-90 transition glow-green-subtle">
              {t.nav.requestDemo}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'nl' ? 'en' : 'nl')}
              className="px-2 py-2 rounded-xl liquid-glass font-medium hover:bg-white/10 transition text-sm"
            >
              {lang === 'nl' ? '🇬🇧' : '🇳🇱'}
            </button>
            <button className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 mx-auto max-w-6xl liquid-glass rounded-2xl p-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block px-4 py-3 rounded-xl hover:bg-white/10 transition" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <hr className="border-white/10 my-2" />
            <a href="mailto:info@zapbot.nl" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-white/10 transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.nav.emailUs}
            </a>
            <a href="#contact" className="block px-4 py-3 rounded-xl whatsapp-gradient font-medium text-center" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.requestDemo}
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
              {t.hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t.hero.title1}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 text-glow">
                {t.hero.title2}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 rounded-xl whatsapp-gradient font-semibold text-lg hover:opacity-90 transition glow-green shimmer">
                {t.hero.cta1}
              </a>
              <a href="#how-it-works" className="px-8 py-4 rounded-xl liquid-glass font-semibold text-lg hover:bg-white/10 transition">
                {t.hero.cta2}
              </a>
            </div>
          </div>

          {/* Demo mockup */}
          <div className="mt-12 md:mt-16 max-w-md mx-auto">
            <div className="liquid-glass-strong rounded-3xl p-4 glow-green-subtle">
              <div className="bg-gradient-to-b from-emerald-900/50 to-emerald-950/50 rounded-2xl p-4 space-y-3">
                <div className="flex justify-end">
                  <div className="bg-emerald-600/80 backdrop-blur rounded-2xl rounded-br-md px-4 py-2 max-w-[80%]">
                    <p className="text-sm">{t.chat.msg1}</p>
                    <p className="text-xs text-emerald-200 text-right mt-1">14:32</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="liquid-glass rounded-2xl rounded-bl-md px-4 py-2 max-w-[80%]">
                    <p className="text-sm">{t.chat.msg2}</p>
                    <p className="text-xs text-gray-400 mt-1">14:32 ✓✓</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-emerald-600/80 backdrop-blur rounded-2xl rounded-br-md px-4 py-2 max-w-[80%]">
                    <p className="text-sm">{t.chat.msg3}</p>
                    <p className="text-xs text-emerald-200 text-right mt-1">14:33</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="liquid-glass rounded-2xl rounded-bl-md px-4 py-2 max-w-[80%]">
                    <p className="text-sm">{t.chat.msg4}</p>
                    <p className="text-xs text-gray-400 mt-1">14:33 ✓✓</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-gray-500 text-sm justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {t.hero.aiResponds}
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
              <p className="text-sm">{t.social.trustedBy}</p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <span className="font-semibold text-white/80">✂️ {t.social.hairdressers}</span>
                <span className="font-semibold text-white/80">🍽️ {t.social.restaurants}</span>
                <span className="font-semibold text-white/80">🦷 {t.social.dentists}</span>
                <span className="font-semibold text-white/80">💪 {t.social.physios}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t.features.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="liquid-glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl whatsapp-gradient flex items-center justify-center mb-4 glow-green-subtle">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.f1Title}</h3>
              <p className="text-gray-400">{t.features.f1Desc}</p>
            </div>
            <div className="liquid-glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl whatsapp-gradient flex items-center justify-center mb-4 glow-green-subtle">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.f2Title}</h3>
              <p className="text-gray-400">{t.features.f2Desc}</p>
            </div>
            <div className="liquid-glass-card rounded-2xl p-6 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 rounded-xl whatsapp-gradient flex items-center justify-center mb-4 glow-green-subtle">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.features.f3Title}</h3>
              <p className="text-gray-400">{t.features.f3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.useCases.title}</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: "✂️", title: t.useCases.hairdressers, desc: t.useCases.hairdressersDesc },
              { icon: "🍽️", title: t.useCases.restaurants, desc: t.useCases.restaurantsDesc },
              { icon: "🦷", title: t.useCases.dentists, desc: t.useCases.dentistsDesc },
              { icon: "💪", title: t.useCases.physios, desc: t.useCases.physiosDesc },
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

      {/* How it works */}
      <section id="how-it-works" className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.howItWorks.title}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t.howItWorks.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { step: "1", title: t.howItWorks.step1, desc: t.howItWorks.step1Desc, icon: "👋" },
              { step: "2", title: t.howItWorks.step2, desc: t.howItWorks.step2Desc, icon: "📋" },
              { step: "3", title: t.howItWorks.step3, desc: t.howItWorks.step3Desc, icon: "⚙️" },
              { step: "4", title: t.howItWorks.step4, desc: t.howItWorks.step4Desc, icon: "🚀" },
            ].map((item, i) => (
              <div key={i} className="liquid-glass-card rounded-xl p-4 md:p-6 text-center h-full">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full whatsapp-gradient flex items-center justify-center mx-auto mb-3 md:mb-4 text-lg md:text-xl font-bold">
                  {item.step}
                </div>
                <span className="text-xl md:text-2xl mb-2 block">{item.icon}</span>
                <h3 className="font-semibold text-base md:text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-16 liquid-glass-strong rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">{t.howItWorks.needTitle}</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: "📱", title: t.howItWorks.need1, desc: t.howItWorks.need1Desc },
                { icon: "📄", title: t.howItWorks.need2, desc: t.howItWorks.need2Desc },
                { icon: "📅", title: t.howItWorks.need3, desc: t.howItWorks.need3Desc },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-400">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Control section */}
      <section className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.control.title}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">{t.control.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="liquid-glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.control.c1Title}</h3>
              <p className="text-gray-400">{t.control.c1Desc}</p>
            </div>
            <div className="liquid-glass-card rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.control.c2Title}</h3>
              <p className="text-gray-400">{t.control.c2Desc}</p>
            </div>
            <div className="liquid-glass-card rounded-2xl p-6 sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t.control.c3Title}</h3>
              <p className="text-gray-400">{t.control.c3Desc}</p>
            </div>
          </div>
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-6">
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-emerald-400">🔒</span>
              <span className="text-xs md:text-sm">{t.control.badge1}</span>
            </div>
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-emerald-400">🔐</span>
              <span className="text-xs md:text-sm">{t.control.badge2}</span>
            </div>
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2">
              <span className="text-emerald-400">🤝</span>
              <span className="text-xs md:text-sm">{t.control.badge3}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
            <p className="text-gray-400">{t.testimonials.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: t.testimonials.t1Name, role: t.testimonials.t1Role, text: t.testimonials.t1Text, avatar: "👩‍🦱" },
              { name: t.testimonials.t2Name, role: t.testimonials.t2Role, text: t.testimonials.t2Text, avatar: "👨‍🍳" },
              { name: t.testimonials.t3Name, role: t.testimonials.t3Role, text: t.testimonials.t3Text, avatar: "💈" },
            ].map((testimonial, i) => (
              <div key={i} className="liquid-glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.pricing.title}</h2>
            <p className="text-gray-400">{t.pricing.subtitle}</p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="liquid-glass-strong rounded-2xl p-6 md:p-8 glow-green-subtle relative overflow-hidden">
              <div className="absolute inset-0 shimmer pointer-events-none"></div>
              <div className="text-center relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium mb-4 border border-emerald-500/30">
                  {t.pricing.badge}
                </span>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-glow">€99</span>
                  <span className="text-gray-400">{t.pricing.perMonth}</span>
                </div>
                {/* <p className="text-gray-400 mb-6">{t.pricing.setup} <span className="line-through text-gray-600">{t.pricing.setupOld}</span></p> */}
              </div>
              <ul className="space-y-3 mb-8 relative z-10">
                {[t.pricing.feature1, t.pricing.feature2, t.pricing.feature3, t.pricing.feature4, t.pricing.feature5, t.pricing.feature6].map((item, i) => (
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
              <a href="#contact" className="block w-full py-4 rounded-xl whatsapp-gradient font-semibold text-center hover:opacity-90 transition glow-green relative z-10">
                {t.pricing.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-20 px-4 relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="liquid-glass-strong rounded-2xl p-6 md:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-gray-400 mb-8">{t.contact.subtitle}</p>
            {submitted ? (
              <div className="liquid-glass rounded-xl p-6">
                <span className="text-4xl mb-4 block">✅</span>
                <p className="text-emerald-400 font-medium">{t.contact.thanks}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" required placeholder={t.contact.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none focus:bg-white/10 transition backdrop-blur text-base" />
                  <input type="email" required placeholder={t.contact.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none focus:bg-white/10 transition backdrop-blur text-base" />
                </div>
                <div className="relative">
                  <select required value={companyType} onChange={(e) => setCompanyType(e.target.value)} className="w-full px-4 py-4 pr-12 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none focus:bg-white/10 transition backdrop-blur text-base appearance-none cursor-pointer">
                    <option value="" disabled className="bg-gray-900">{t.contact.companyPlaceholder}</option>
                    <option value="kapper" className="bg-gray-900">{t.contact.companyKapper}</option>
                    <option value="restaurant" className="bg-gray-900">{t.contact.companyRestaurant}</option>
                    <option value="tandarts" className="bg-gray-900">{t.contact.companyDentist}</option>
                    <option value="fysiotherapeut" className="bg-gray-900">{t.contact.companyPhysio}</option>
                    <option value="schoonheidssalon" className="bg-gray-900">{t.contact.companySalon}</option>
                    <option value="garage" className="bg-gray-900">{t.contact.companyGarage}</option>
                    <option value="anders" className="bg-gray-900">{t.contact.companyOther}</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button type="submit" className="w-full px-6 py-4 rounded-xl whatsapp-gradient font-semibold hover:opacity-90 transition glow-green-subtle">
                  {t.contact.submit}
                </button>
              </form>
            )}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-500 text-sm mb-3">{t.contact.directContact}</p>
              <a href="mailto:info@zapbot.nl" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl liquid-glass font-medium hover:bg-white/10 transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.contact.sendEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href={`https://wa.me/31687838713?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full whatsapp-gradient flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 transition-transform glow-green">
        <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="py-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="liquid-glass rounded-xl py-6 px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
                <div className="w-6 h-6 rounded-lg whatsapp-gradient flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="font-semibold">ZapBot</span>
              </a>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
                <button onClick={() => setShowTerms(true)} className="text-white hover:text-emerald-400 transition">{t.footer.terms}</button>
                <button onClick={() => setShowPrivacy(true)} className="text-white hover:text-emerald-400 transition">{t.footer.privacy}</button>
                <a href="mailto:info@zapbot.nl" className="text-white hover:text-emerald-400 transition">{t.footer.contact}</a>
              </div>
              <p className="text-white text-sm">{t.footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
