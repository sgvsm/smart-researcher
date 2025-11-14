import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import {
  Brain,
  Clock,
  FileText,
  BarChart3,
  Search,
  RefreshCw,
  MessageSquare,
  TrendingUp,
  Rocket,
  Target,
  CheckCircle,
  DollarSign,
  ChevronDown,
  Menu,
  X,
  Languages
} from 'lucide-react'

function App() {
  const { t, i18n } = useTranslation()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Smart Research Logo" className="h-10 w-10" />
              <span className="text-xl font-semibold text-gray-900">
                Smart Research
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {t('nav.features')}
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {t('nav.howItWorks')}
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                {t('nav.benefits')}
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                title={i18n.language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
              >
                <Languages className="h-4 w-4" />
                <span className="uppercase">{i18n.language === 'en' ? 'ES' : 'EN'}</span>
              </button>
              <Button
                onClick={() => setContactModalOpen(true)}
                className="rounded-full px-6 bg-gray-900 hover:bg-gray-800 text-white"
              >
                {t('nav.joinWaitlist')}
              </Button>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-md">
                {t('nav.features')}
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-md">
                {t('nav.howItWorks')}
              </button>
              <button onClick={() => scrollToSection('benefits')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-md">
                {t('nav.benefits')}
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-md"
              >
                <Languages className="h-4 w-4" />
                <span>{i18n.language === 'en' ? 'Español' : 'English'}</span>
              </button>
              <Button onClick={() => setContactModalOpen(true)} className="w-full rounded-full bg-gray-900 hover:bg-gray-800">{t('nav.joinWaitlist')}</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-xs tracking-wider uppercase text-gray-600 font-medium shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              SMART RESEARCH V1.0 LIVE
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="block text-gray-900">Research acceleration</span>
            <span className="block font-serif italic text-gray-700">that feels human.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
            {t('hero.subtitle')}
          </p>

          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <div className="flex items-center gap-3 bg-white rounded-full shadow-lg px-6 py-4 border border-gray-200">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Find a topic to research..."
                  className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-400"
                  onClick={() => setContactModalOpen(true)}
                  readOnly
                />
                <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">⌘K to open • Natural Language Processing</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">{t('problems.title')}</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('problems.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('problems.cards.overwhelming.title')}</h3>
                <p className="text-gray-600">{t('problems.cards.overwhelming.description')}</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('problems.cards.timeIntensive.title')}</h3>
                <p className="text-gray-600">{t('problems.cards.timeIntensive.description')}</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('problems.cards.consistency.title')}</h3>
                <p className="text-gray-600">{t('problems.cards.consistency.description')}</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('problems.cards.documentation.title')}</h3>
                <p className="text-gray-600">{t('problems.cards.documentation.description')}</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('problems.cards.expertise.title')}</h3>
                <p className="text-gray-600">{t('problems.cards.expertise.description')}</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('problems.cards.reproduction.title')}</h3>
                <p className="text-gray-600">{t('problems.cards.reproduction.description')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">{t('howItWorks.title')}</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('howItWorks.subtitle')}</p>
          </div>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="text-2xl font-bold mb-4">{t('howItWorks.steps.search.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('howItWorks.steps.search.description')}
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  {t('howItWorks.steps.search.badge')}
                </span>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-64 rounded-2xl flex items-center justify-center">
                <Search className="h-24 w-24 text-primary" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-64 rounded-2xl flex items-center justify-center md:order-first">
                <Brain className="h-24 w-24 text-primary" />
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="text-2xl font-bold mb-4">{t('howItWorks.steps.read.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('howItWorks.steps.read.description')}
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  {t('howItWorks.steps.read.badge')}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="text-2xl font-bold mb-4">{t('howItWorks.steps.review.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('howItWorks.steps.review.description')}
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  {t('howItWorks.steps.review.badge')}
                </span>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-64 rounded-2xl flex items-center justify-center">
                <MessageSquare className="h-24 w-24 text-primary" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-64 rounded-2xl flex items-center justify-center md:order-first">
                <TrendingUp className="h-24 w-24 text-primary" />
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">4</div>
                <h3 className="text-2xl font-bold mb-4">{t('howItWorks.steps.analyze.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('howItWorks.steps.analyze.description')}
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  {t('howItWorks.steps.analyze.badge')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">{t('benefits.title')}</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('benefits.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Rocket className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('benefits.cards.faster.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('benefits.cards.faster.description')}
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  {t('benefits.cards.faster.badge')}
                </span>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('benefits.cards.comprehensive.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('benefits.cards.comprehensive.description')}
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  {t('benefits.cards.comprehensive.badge')}
                </span>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('benefits.cards.rigorous.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('benefits.cards.rigorous.description')}
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  {t('benefits.cards.rigorous.badge')}
                </span>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('benefits.cards.consistent.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('benefits.cards.consistent.description')}
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  {t('benefits.cards.consistent.badge')}
                </span>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Search className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('benefits.cards.collaborative.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('benefits.cards.collaborative.description')}
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  {t('benefits.cards.collaborative.badge')}
                </span>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <DollarSign className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{t('benefits.cards.affordable.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('benefits.cards.affordable.description')}
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  {t('benefits.cards.affordable.badge')}
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">{t('comparison.title')}</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('comparison.subtitle')}</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-4 bg-gray-900 text-white p-3 sm:p-4 font-semibold text-sm sm:text-base">
                <div className="col-span-1">{t('comparison.table.headers.task')}</div>
                <div className="text-center">{t('comparison.table.headers.traditional')}</div>
                <div className="text-center">{t('comparison.table.headers.withAI')}</div>
                <div className="text-center">{t('comparison.table.headers.timeSaved')}</div>
              </div>
              <div className="divide-y">
                <div className="grid grid-cols-4 p-3 sm:p-4 hover:bg-gray-50 items-center text-sm sm:text-base">
                  <div className="font-medium">{t('comparison.table.rows.litSearch.task')}</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">{t('comparison.table.rows.litSearch.traditional')}</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">{t('comparison.table.rows.litSearch.withAI')}</div>
                  <div className="text-center bg-green-100 text-green-700 rounded p-1 sm:p-2 font-bold text-xs sm:text-sm">{t('comparison.table.rows.litSearch.timeSaved')}</div>
                </div>
                <div className="grid grid-cols-4 p-3 sm:p-4 hover:bg-gray-50 items-center text-sm sm:text-base">
                  <div className="font-medium">{t('comparison.table.rows.reading.task')}</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">{t('comparison.table.rows.reading.traditional')}</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">{t('comparison.table.rows.reading.withAI')}</div>
                  <div className="text-center bg-green-100 text-green-700 rounded p-1 sm:p-2 font-bold text-xs sm:text-sm">{t('comparison.table.rows.reading.timeSaved')}</div>
                </div>
                <div className="grid grid-cols-4 p-3 sm:p-4 hover:bg-gray-50 items-center text-sm sm:text-base">
                  <div className="font-medium">{t('comparison.table.rows.review.task')}</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">{t('comparison.table.rows.review.traditional')}</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">{t('comparison.table.rows.review.withAI')}</div>
                  <div className="text-center bg-green-100 text-green-700 rounded p-1 sm:p-2 font-bold text-xs sm:text-sm">{t('comparison.table.rows.review.timeSaved')}</div>
                </div>
                <div className="grid grid-cols-4 p-3 sm:p-4 hover:bg-gray-50 items-center text-sm sm:text-base">
                  <div className="font-medium">{t('comparison.table.rows.analysis.task')}</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">{t('comparison.table.rows.analysis.traditional')}</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">{t('comparison.table.rows.analysis.withAI')}</div>
                  <div className="text-center bg-green-100 text-green-700 rounded p-1 sm:p-2 font-bold text-xs sm:text-sm">{t('comparison.table.rows.analysis.timeSaved')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">{t('faq.title')}</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('faq.subtitle')}</p>
          </div>
          <div className="space-y-4">
            {['q1', 'q2', 'q3', 'q4', 'q5', 'q6'].map((key, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span>{t(`faq.questions.${key}.question`)}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {t(`faq.questions.${key}.answer`)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{t('waitlist.title')}</h2>
          <p className="text-xl sm:text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('waitlist.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="rounded-full bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-6 w-full sm:w-auto"
            >
              {t('waitlist.button')}
            </Button>
          </div>
          <p className="mt-8 text-base opacity-90">
            {t('waitlist.benefits')}
          </p>
        </div>
      </section>

      {/* Contact Form Modal */}
      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent onClose={() => setContactModalOpen(false)}>
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl">{t('modal.title')}</DialogTitle>
            <DialogDescription className="text-base">
              {t('modal.description')}
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 sm:space-y-6 mt-4" onSubmit={(e) => { e.preventDefault(); setContactModalOpen(false); }}>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('modal.form.firstName')}</label>
                <Input placeholder="John" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t('modal.form.lastName')}</label>
                <Input placeholder="Doe" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{t('modal.form.email')}</label>
              <Input type="email" placeholder="john.doe@university.edu" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{t('modal.form.institution')}</label>
              <Input placeholder="Your University" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{t('modal.form.researchField')}</label>
              <Input placeholder="e.g., Political Science, Sociology, etc." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{t('modal.form.projectDescription')}</label>
              <Textarea
                placeholder={t('modal.form.projectPlaceholder')}
                className="min-h-[100px] sm:min-h-[120px]"
              />
            </div>
            <Button size="lg" className="w-full" type="submit">
              {t('modal.form.submit')}
            </Button>
            <p className="text-center text-xs sm:text-sm text-gray-500">
              {t('modal.form.footer')}
            </p>
          </form>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#" className="hover:text-blue-400 transition-colors">{t('footer.links.about')}</a>
            <a href="#" className="hover:text-blue-400 transition-colors">{t('footer.links.privacy')}</a>
            <a href="#" className="hover:text-blue-400 transition-colors">{t('footer.links.terms')}</a>
            <a href="#" className="hover:text-blue-400 transition-colors">{t('footer.links.contact')}</a>
            <a href="#" className="hover:text-blue-400 transition-colors">{t('footer.links.blog')}</a>
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              𝕏
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              in
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              gh
            </a>
          </div>
          <p className="text-center opacity-70">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
