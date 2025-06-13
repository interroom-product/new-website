import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Brain,
  FileText,
  Mic,
  Clock,
  Star,
  CheckCircle,
  Users,
  Shield,
  LayoutDashboard,
  Bell,
  BarChartIcon as ChartBar,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"
import ResultsTicker from "@/components/results-ticker"

export default function ServicesPage() {
  const coreServices = [
    {
      icon: Brain,
      title: "Job Application Outsourcing",
      description: "We handle the entire job application process for you, applying to 100+ targeted positions monthly.",
      price: "$1,497",
      period: "one-time",
      whoItsFor: "Professionals who want to maximize their job search reach without the time investment.",
      features: [
        "100+ applications per month",
        "Custom resume for each application",
        "Personalized job targeting based on your criteria",
        "Weekly progress reports and analytics",
        "Application tracking dashboard",
        "30-day active application period",
        "Follow-up management with recruiters",
      ],
      color: "from-ir-primary to-ir-accent",
      serviceId: "job-applications",
    },
    {
      icon: FileText,
      title: "Resume & LinkedIn Rewrite",
      description:
        "Professional resume and LinkedIn profile optimization designed to pass ATS systems and impress hiring managers.",
      price: "$497",
      period: "one-time",
      whoItsFor: "Job seekers who need their materials professionally optimized for their target roles.",
      features: [
        "Complete resume rewrite from scratch",
        "ATS optimization for keyword matching",
        "LinkedIn profile optimization",
        "Industry-specific keyword integration",
        "Professional formatting and design",
        "2 rounds of revisions included",
        "Delivered within 5 business days",
      ],
      color: "from-ir-accent to-ir-secondary",
      serviceId: "resume-linkedin",
    },
    {
      icon: Mic,
      title: "1:1 Coaching Package",
      description:
        "Comprehensive interview preparation and career coaching with personalized feedback and strategy development.",
      price: "$797",
      period: "one-time",
      whoItsFor: "Professionals who want expert guidance on interviews, salary negotiation, and career strategy.",
      features: [
        "4 one-on-one coaching sessions (1 hour each)",
        "Mock interviews with detailed feedback",
        "Interview strategy development",
        "Salary negotiation guidance and scripts",
        "Personal branding consultation",
        "Follow-up support for 30 days",
        "Flexible scheduling to fit your timeline",
      ],
      color: "from-ir-secondary to-ir-primary",
      serviceId: "coaching",
    },
  ]

  return (
    <div className="min-h-screen bg-ir-neutral-100 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ir-neutral-800 mb-6 leading-tight">
            Professional Job Search Services
          </h1>
          <p className="text-lg text-gray-600 mb-8 font-light">
            Choose individual services for specific needs, or get the complete success-based bundle for maximum results
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon

              return (
                <Card
                  key={index}
                  className="bg-ir-neutral-100 border-0 shadow-soft hover:shadow-glow transition-all duration-300 rounded-xl overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Service Info */}
                      <div className="lg:col-span-2 p-8">
                        <div className="flex items-start mb-6">
                          <div
                            className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mr-4 flex-shrink-0`}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-ir-neutral-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                          </div>
                        </div>

                        {/* Who It's For */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-ir-neutral-800 mb-2 flex items-center">
                            <Users className="w-5 h-5 mr-2 text-ir-primary" />
                            Who It's For
                          </h4>
                          <p className="text-gray-600">{service.whoItsFor}</p>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="text-lg font-semibold text-ir-neutral-800 mb-4">What's Included</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-ir-success mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Pricing & CTA */}
                      <div className="bg-ir-neutral-200 p-8 flex flex-col justify-center">
                        <div className="text-center">
                          <div className="mb-6">
                            <div className="text-3xl font-bold text-ir-neutral-800 mb-1">{service.price}</div>
                            <div className="text-gray-600 text-sm">{service.period}</div>
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center text-sm text-gray-600">
                              <Shield className="w-4 h-4 text-ir-success mr-2" />
                              <span>30-day money-back guarantee</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="w-4 h-4 text-ir-primary mr-2" />
                              <span>Fast delivery & setup</span>
                            </div>
                          </div>

                          <Link href={`/start?service=${service.serviceId}`}>
                            <Button
                              size="lg"
                              className="w-full bg-ir-primary hover:bg-ir-primary/90 text-white rounded-full transition-all duration-300 font-semibold"
                            >
                              Purchase Now
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Client Portal Showcase Section */}
      <section className="py-16 px-4 bg-ir-neutral-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ir-neutral-800 mb-4">Track Your Progress in the Client Portal</h2>
            <p className="text-lg text-gray-600 font-light">
              Every service includes access to our comprehensive client portal
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Portal Screenshot */}
            <div className="rounded-xl overflow-hidden shadow-glow">
              <img
                src="/images/client-portal-dashboard.png"
                alt="InterRoom Client Portal Dashboard"
                className="w-full h-auto"
              />
            </div>

            {/* Portal Features */}
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-ir-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <LayoutDashboard className="w-6 h-6 text-ir-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ir-neutral-800 mb-2">Comprehensive Dashboard</h3>
                  <p className="text-gray-600">
                    Track all your job applications, interviews, and offers in one centralized location. Get a
                    bird's-eye view of your entire job search progress.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-ir-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Bell className="w-6 h-6 text-ir-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ir-neutral-800 mb-2">Real-time Notifications</h3>
                  <p className="text-gray-600">
                    Receive instant alerts when we submit applications, when employers respond, or when it's time to
                    prepare for interviews.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-ir-secondary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <ChartBar className="w-6 h-6 text-ir-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ir-neutral-800 mb-2">Detailed Analytics</h3>
                  <p className="text-gray-600">
                    View response rates, interview conversion metrics, and other key performance indicators to
                    understand what's working in your job search.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-ir-success/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-ir-success" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ir-neutral-800 mb-2">Direct Communication</h3>
                  <p className="text-gray-600">
                    Message your coach or application manager directly through the portal. All your communications,
                    documents, and feedback in one secure place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All-in-One Bundle Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-ir-primary to-ir-accent">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-glow rounded-xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-ir-success/20 text-ir-success px-4 py-2 rounded-full mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Premium Success-Based Option</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-ir-neutral-800 mb-4">All-in-One Bundle</h2>
                <p className="text-lg text-gray-600 mb-8 font-light">
                  Get everything above plus dedicated coaching, unlimited support, and pay only when you land a job
                </p>
              </div>

              {/* Bundle Benefits */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-ir-neutral-800 mb-4">Everything Included</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-ir-success" />
                      <span className="text-gray-700">All three core services above</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-ir-success" />
                      <span className="text-gray-700">Dedicated career coach</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-ir-success" />
                      <span className="text-gray-700">Unlimited revisions & support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-ir-success" />
                      <span className="text-gray-700">Weekly strategy sessions</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-ir-neutral-800 mb-4">Success-Based Pricing</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-ir-success" />
                      <span className="text-gray-700">Small upfront deposit to get started</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-ir-success" />
                      <span className="text-gray-700">Majority of fee due only after job placement</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-ir-success" />
                      <span className="text-gray-700">Success guarantee - we don't succeed unless you do</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-ir-success" />
                      <span className="text-gray-700">Offer negotiation to maximize your salary</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-ir-neutral-200 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-ir-neutral-800 mb-4 text-center">
                  How Success-Based Pricing Works
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-ir-primary mb-2">1. Apply</div>
                    <div className="text-gray-600 text-sm">Take our qualification quiz to see if you're eligible</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ir-accent mb-2">2. Small Deposit</div>
                    <div className="text-gray-600 text-sm">Pay a small upfront deposit to secure your spot</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ir-success mb-2">3. Get Hired</div>
                    <div className="text-gray-600 text-sm">Pay the remaining fee only after you land a job</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link href="/quiz">
                  <Button
                    size="lg"
                    className="bg-ir-primary hover:bg-ir-primary/90 text-white px-10 py-5 text-lg font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-glow"
                  >
                    Apply for Success-Based Program
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <p className="text-gray-600 text-sm mt-4">
                  Complete our qualification quiz to see if you're eligible for success-based pricing
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Ticker */}
      <ResultsTicker />

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-ir-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-ir-neutral-800 mb-6">Which Option Is Right for You?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-ir-neutral-100 border-0 shadow-soft rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ir-neutral-800 mb-4">Choose Individual Services If:</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-ir-primary mt-0.5" />
                    <span className="text-gray-600">You have a specific need (resume, applications, or coaching)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-ir-primary mt-0.5" />
                    <span className="text-gray-600">You prefer fixed, upfront pricing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-ir-primary mt-0.5" />
                    <span className="text-gray-600">You want to manage your own job search strategy</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-ir-primary mt-0.5" />
                    <span className="text-gray-600">You're looking for a quick, specific solution</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-ir-primary/10 to-ir-accent/10 border-2 border-ir-primary shadow-glow rounded-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-ir-neutral-800 mb-4">Choose the Bundle If:</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-ir-success mt-0.5" />
                    <span className="text-gray-600">You want comprehensive career acceleration</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-ir-success mt-0.5" />
                    <span className="text-gray-600">You prefer to pay only when you get results</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-ir-success mt-0.5" />
                    <span className="text-gray-600">You want dedicated coaching and unlimited support</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-ir-success mt-0.5" />
                    <span className="text-gray-600">You want maximum results with minimal effort</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
