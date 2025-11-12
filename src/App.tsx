import { useState } from 'react'
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
  Microscope,
  MessageSquare,
  TrendingUp,
  Rocket,
  Target,
  CheckCircle,
  DollarSign,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'

function App() {
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

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Brain className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Smart Research
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Benefits
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                FAQ
              </button>
              <Button onClick={() => setContactModalOpen(true)}>Join Waitlist</Button>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">
                How It Works
              </button>
              <button onClick={() => scrollToSection('benefits')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">
                Benefits
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md">
                FAQ
              </button>
              <Button onClick={() => setContactModalOpen(true)} className="w-full">Join Waitlist</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Transform Months of Research into Hours
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                An AI-powered research platform that searches hundreds of databases, reads thousands of papers,
                and helps you extract exactly what you need for your academic research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => setContactModalOpen(true)}>
                  Join Waitlist
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('how-it-works')}>
                  See How It Works
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">95%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Time Saved</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">10K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Papers Analyzed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">Hours</div>
                  <div className="text-xs sm:text-sm text-gray-600">Not Weeks</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl flex items-center justify-center">
                <Microscope className="h-32 md:h-40 lg:h-48 w-32 md:w-40 lg:w-48 text-white/90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Research Problems We All Face</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sound familiar? You're not alone. Every researcher struggles with these time-consuming challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">The Search Marathon</h3>
                <p className="text-gray-600">Days spent searching multiple databases. Did you check them all? Did you miss one?</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Copy-Paste Nightmare</h3>
                <p className="text-gray-600">Manually copying titles, authors, abstracts into spreadsheets. Hours of tedious work.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reading Overload</h3>
                <p className="text-gray-600">200 papers collected. Now you need to read them all. That's months of work.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analysis Challenge</h3>
                <p className="text-gray-600">Systematically analyzing cases across countries and time periods with consistency.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Citation Hunt</h3>
                <p className="text-gray-600">One paper mentioned something important, but which one? Time to search again...</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Consistency Issues</h3>
                <p className="text-gray-600">Applying the same analysis framework consistently across hundreds of cases. Fatigue and drift undermine reliability.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Complete Research Pipeline</h2>
            <p className="text-xl text-gray-600">Four powerful stages that transform how you conduct research</p>
          </div>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="text-2xl font-bold mb-4">Intelligent Search & Collection</h3>
                <p className="text-gray-600 mb-4">
                  Create a simple list of search terms. The platform automatically searches multiple academic databases
                  simultaneously, collecting all results with full metadata.
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  1-2 weeks → 30-60 mins
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
                <h3 className="text-2xl font-bold mb-4">AI-Powered Reading</h3>
                <p className="text-gray-600 mb-4">
                  Upload your PDFs. The AI reads and processes everything, creating an intelligent "memory"
                  of your entire research library.
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  Months → 6 hours (10K papers)
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="text-2xl font-bold mb-4">Interactive Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Ask questions in plain English. Get answers with direct citations, find connections across papers,
                  discover patterns you might have missed.
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  Weeks → 2 hours
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
                <h3 className="text-2xl font-bold mb-4">Systematic Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Define your analytical framework. The AI systematically evaluates each case with perfect consistency,
                  providing ratings and justifications with full evidence trails.
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  Months → 4 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Benefits for Your Research</h2>
            <p className="text-xl text-gray-600">Transform your research workflow with these powerful advantages</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Rocket className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Massive Time Savings</h3>
                <p className="text-gray-600 mb-4">
                  Cut your research time by 70-85%. What took months now takes days. Focus on analysis and insights, not manual tasks.
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  Save 500+ hours per project
                </span>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Better Coverage</h3>
                <p className="text-gray-600 mb-4">
                  Never miss a database or relevant paper. Search exhaustively without exhaustion. Easily re-run searches for new publications.
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  200M+ papers accessible
                </span>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BarChart3 className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Perfect Consistency</h3>
                <p className="text-gray-600 mb-4">
                  AI applies your framework identically to every case. No coding drift, no fatigue effects. Replicable results every time.
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  100% consistent coding
                </span>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Search className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Deeper Insights</h3>
                <p className="text-gray-600 mb-4">
                  Find connections across 100+ papers instantly. Pattern recognition at scale. Cross-country comparisons made easy.
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  Instant cross-paper analysis
                </span>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Full Transparency</h3>
                <p className="text-gray-600 mb-4">
                  Every answer includes source citations. See exactly what evidence supports conclusions. Complete audit trail for peer review.
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  Defensible in peer review
                </span>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <DollarSign className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Affordable</h3>
                <p className="text-gray-600 mb-4">
                  No expensive licenses. Typical project costs $500-800 total. Free tier available. Fraction of research assistant costs.
                </p>
                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-md text-sm font-semibold">
                  90% cheaper than alternatives
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">See the Difference</h2>
            <p className="text-xl text-gray-600">Compare traditional research methods with our AI-powered platform</p>
          </div>
          <div className="bg-white rounded-xl shadow-xl overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-4 bg-gray-900 text-white p-3 sm:p-4 font-semibold text-sm sm:text-base">
                <div className="col-span-1">Research Task</div>
                <div className="text-center">Traditional</div>
                <div className="text-center">Platform</div>
                <div className="text-center">Saved</div>
              </div>
              <div className="divide-y">
                <div className="grid grid-cols-4 p-3 sm:p-4 hover:bg-gray-50 items-center text-sm sm:text-base">
                  <div className="font-medium">Literature Search</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">1-2 weeks</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">30-60 min</div>
                  <div className="text-center bg-green-100 text-green-700 rounded p-1 sm:p-2 font-bold text-xs sm:text-sm">98%</div>
                </div>
                <div className="grid grid-cols-4 p-3 sm:p-4 hover:bg-gray-50 items-center text-sm sm:text-base">
                  <div className="font-medium">Reading 10K Papers</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">6+ months</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">~6 hours</div>
                  <div className="text-center bg-green-100 text-green-700 rounded p-1 sm:p-2 font-bold text-xs sm:text-sm">99%</div>
                </div>
                <div className="grid grid-cols-4 p-3 sm:p-4 hover:bg-gray-50 items-center text-sm sm:text-base">
                  <div className="font-medium">Literature Review</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">3-4 weeks</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">~2 hours</div>
                  <div className="text-center bg-green-100 text-green-700 rounded p-1 sm:p-2 font-bold text-xs sm:text-sm">97%</div>
                </div>
                <div className="grid grid-cols-4 p-3 sm:p-4 hover:bg-gray-50 items-center text-sm sm:text-base">
                  <div className="font-medium">Systematic Analysis</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">2-3 months</div>
                  <div className="text-center bg-gray-100 rounded p-1 sm:p-2 text-xs sm:text-sm">~4 hours</div>
                  <div className="text-center bg-green-100 text-green-700 rounded p-1 sm:p-2 font-bold text-xs sm:text-sm">99%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about getting started</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Do I need to know how to code?",
                a: "No coding knowledge is required. The platform is designed for researchers, not programmers. If you can type questions and upload files, you can use this tool. The interface is as simple as using any standard research software."
              },
              {
                q: "Is this just using ChatGPT?",
                a: "No, this is a specialized research platform. While it uses AI technology, it's specifically built for academic research with persistent memory of your documents, precise citation tracking, multi-database search automation, and systematic analysis capabilities that general AI tools don't offer."
              },
              {
                q: "Can I trust the AI's analysis?",
                a: "The AI always shows you the evidence from your documents, allowing you to verify everything. Think of it as a highly efficient research assistant that never gets tired but still needs your scholarly judgment to interpret findings. Every conclusion is backed by citations you can check."
              },
              {
                q: "What about academic integrity?",
                a: "This tool helps you work with sources more efficiently - like using a library catalog or reference manager. You're still doing the intellectual work: designing research, interpreting findings, and writing analysis. The platform just handles the tedious parts while maintaining full transparency."
              },
              {
                q: "Will this work for my specific field?",
                a: "The platform is field-agnostic and works with any text-based research. It's successfully used in political science, sociology, history, public policy, economics, legal studies, and many other fields. If your research involves analyzing texts and documents, this platform can help."
              },
              {
                q: "How much does it really cost?",
                a: "There's a free tier for smaller projects. For a typical dissertation project, expect to spend $500-800 total for AI processing costs - a fraction of what you'd spend on research assistants. Most users find the time savings alone worth 100x the cost."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Transform Your Research?</h2>
          <p className="text-lg sm:text-xl opacity-90 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join the waitlist and be among the first researchers to experience the platform that turns months of work into hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => setContactModalOpen(true)}
              className="bg-white text-primary hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
            >
              Join the Waitlist
            </Button>
          </div>
          <p className="mt-6 sm:mt-8 text-sm sm:text-base opacity-90">
            Early access • Priority onboarding • Special launch pricing
          </p>
        </div>
      </section>

      {/* Contact Form Modal */}
      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent onClose={() => setContactModalOpen(false)}>
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl">Join the Waitlist</DialogTitle>
            <DialogDescription className="text-base">
              Get early access to the platform and special launch pricing. We'll be in touch soon!
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 sm:space-y-6 mt-4" onSubmit={(e) => { e.preventDefault(); setContactModalOpen(false); }}>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <Input placeholder="John" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <Input placeholder="Doe" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input type="email" placeholder="john.doe@university.edu" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Institution</label>
              <Input placeholder="Your University" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Research Field</label>
              <Input placeholder="e.g., Political Science, Sociology, etc." />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Tell us about your research project</label>
              <Textarea
                placeholder="What are you researching? What challenges are you facing?"
                className="min-h-[100px] sm:min-h-[120px]"
              />
            </div>
            <Button size="lg" className="w-full" type="submit">
              Submit Request
            </Button>
            <p className="text-center text-xs sm:text-sm text-gray-500">
              No credit card required • We'll contact you soon with early access details
            </p>
          </form>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
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
            © 2024 Smart Research Platform. Empowering researchers worldwide.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
