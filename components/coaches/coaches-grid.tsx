"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const coaches = [
  {
    id: 1,
    name: "Janice Bae",
    role: "Product Management",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/janice%20photo-wZMSUo0kc33SV0I6bxikLkbEXwq6Gi.jpeg",
    companies: ["DocuSign", "Premise Data", "LinkedIn"],
    companyLogos: [
      "/images/logos/docusign-logo.svg",
      "/images/logos/premise-data-logo.webp",
      "/images/linkedin-logo.png",
    ],
    bio: "Janice is currently a Senior Product Manager at DocuSign who pivoted into Product Management from consulting.",
    expandedBio:
      "Janice is currently a Senior Product Manager at DocuSign who pivoted into Product Management through her MBA at MIT Sloan. Previously she held Growth Marketing & Operations roles at Premise Data, an SF-based startup, and participated in a rotational program at LinkedIn. Her unique background combines analytical thinking from consulting with hands-on product experience, making her particularly effective at driving product strategy and execution in fast-growing companies.",
    specialties: ["Product Management", "Product Strategy", "SaaS"],
    funFact: "Janice recently got married!",
    linkedin: "https://www.linkedin.com/in/janicebae/",
  },
  {
    id: 2,
    name: "William Cha, PhD",
    role: "Data Science",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/William_Cha_edited.jpg-tPLMjIinhrrzb9BpSc93qO76QCMBD4.jpeg",
    companies: ["Notion", "Salesforce", "Slack"],
    companyLogos: [
      "/images/logos/notion-logo.svg",
      "/images/logos/salesforce-logo.svg",
      "/images/logos/slack-logo.png",
    ],
    bio: "William is currently a Data Scientist at Notion focusing on Sales Growth, with previous experience at Salesforce, Slack, and Coursera.",
    expandedBio:
      "William is currently a Data Scientist at Notion with a focus on Sales Growth analytics. He holds a PhD in Computer Science and has previously worked at Salesforce, Slack, Coursera, and ShopKick, where he developed advanced analytics platforms and machine learning models. His expertise spans deep learning, natural language processing, and building scalable ML systems that serve millions of users.",
    specialties: ["Data Science", "Machine Learning", "Sales Analytics"],
    funFact: "William speaks 4 languages fluently and loves learning about different cultures through food!",
    linkedin: "https://www.linkedin.com/in/williamcha/",
  },
  {
    id: 3,
    name: "Allison Burkett",
    role: "Program Management",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/allison_edited_edited.jpg-YL3P5wjQxCOLby7SUntBbZYYlaKbJ8.jpeg",
    companies: ["Meta", "Salesforce", "Lyft"],
    companyLogos: ["/images/logos/meta-logo.svg", "/images/logos/salesforce-logo.svg", "/images/logos/lyft-logo.png"],
    bio: "Allison has been a Product Program Manager at Meta for 5+ years, leading cross-functional teams across various product initiatives.",
    expandedBio:
      "Allison has been a Product Program Manager at Meta for 5+ years, leading cross-functional teams across various product initiatives. Prior to Meta, she held program positions at Salesforce and Lyft, and also worked in the Oil & Gas industry. Her expertise spans technical program management, cross-functional leadership, and agile methodologies in fast-paced tech environments.",
    specialties: ["Program Management", "Cross-functional Leadership", "Tech Industry"],
    funFact: "Allison is an avid rock climber and has climbed in over 15 countries!",
    linkedin: "https://www.linkedin.com/in/allisonburkett/",
  },
  {
    id: 4,
    name: "Ashutosh Goel",
    role: "Software Engineering",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ashu-MmDn9a6PLuK3zoynr6UXR5sAPwfC7t.jpeg",
    companies: ["Meta", "Whisper.ai", "Brilliant"],
    companyLogos: [
      "/images/logos/meta-logo.svg",
      "/images/logos/whisper-ai-logo.png",
      "/images/logos/brilliant-logo.png",
    ],
    bio: "Ashutosh is currently a Software Engineer at Meta, with previous experience at AI and IoT startups Whisper.ai and Brilliant Smart Home.",
    expandedBio:
      "Ashutosh is currently a Software Engineer at Meta working on infrastructure and distributed systems. His experience spans full-stack development, system architecture, and leading engineering teams. Previously, he worked as an engineer at AI startup Whisper.ai and IoT startup Brilliant Smart Home, where he built innovative AI-powered and smart home solutions. Ashu is particularly skilled at designing scalable systems and working with cutting-edge technologies.",
    specialties: ["Software Engineering", "AI/ML", "IoT Systems"],
    funFact: "Ashu is a chess master and regularly competes in tournaments around the Bay Area!",
    linkedin: "https://www.linkedin.com/in/ashutoshgoel/",
  },
  {
    id: 5,
    name: "DK Lee",
    role: "Data Science / Analytics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DK.jpg-OUA9fMLf1Of9zJE4ZV6eNjZaYwao2l.jpeg",
    companies: ["Rippling", "Opendoor", "Capital One"],
    companyLogos: [
      "/images/logos/rippling-logo.jpeg",
      "/images/logos/opendoor-logo.svg",
      "/images/logos/capital-one-logo.png",
    ],
    bio: "DK has extensive experience in risk modeling and credit, including leading risk management at Opendoor and credit risk modeling at Rippling.",
    expandedBio:
      "DK has extensive experience in risk modeling, pricing strategies, and credit analysis across multiple high-growth companies. He led risk management at Opendoor, focusing on sophisticated pricing models for real estate transactions. At Rippling, he specialized in credit risk modeling for financial products. His earlier experience at Capital One involved risk modeling and credit positions. DK excels at translating complex data insights into actionable business strategies.",
    specialties: ["Data Science", "Risk Modeling", "Credit Analysis"],
    funFact: "DK is a coffee enthusiast who roasts his own beans and has visited coffee farms in 8 countries!",
    linkedin: "https://www.linkedin.com/in/dklee/",
  },
  {
    id: 6,
    name: "Kat Dai",
    role: "Business Operations / Strategy / Chief of Staff",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kat-4va8k274q1RRuRiBvZE7U78FDcrfrf.jpeg",
    companies: ["Divvy Homes", "Opendoor", "McKinsey"],
    companyLogos: [
      "/images/logos/divvyhomes-logo.jpeg",
      "/images/logos/opendoor-logo.svg",
      "/images/logos/mckinsey-logo.svg",
    ],
    bio: "Kat has extensive experience in business operations and strategy, including Revenue Operations at Divvy Homes and consulting at McKinsey.",
    expandedBio:
      "Kat has extensive experience in business operations and strategy across high-growth tech companies and consulting. She served as Revenue Operations lead at Divvy Homes, held Customer Experience roles at Opendoor, and worked as a Consultant at McKinsey focusing on enterprise tech and DEI strategy. Her expertise includes strategic planning, process optimization, and executive support in fast-paced startup environments. Kat excels at translating executive vision into actionable operational strategies.",
    specialties: ["Business Operations", "Revenue Operations", "Strategy Consulting"],
    funFact: "Kat is a marathon runner and has completed races on all 7 continents!",
    linkedin: "https://www.linkedin.com/in/katdai/",
  },
  {
    id: 7,
    name: "Nishant",
    role: "Sales / Sales Engineering",
    image: "/images/coaches/nishant.jpeg",
    companies: ["Salesforce", "Brex", "Mercury"],
    companyLogos: [
      "/images/logos/salesforce-logo.svg",
      "/images/logos/brex-logo.png",
      "/images/logos/mercury-logo.svg",
    ],
    bio: "Nishant worked at Salesforce for over 11 years, winning Sales Engineer of the year and then becoming an AE and VP of Sales.",
    expandedBio:
      "Nishant worked at Salesforce for over 11 years, where he won Sales Engineer of the year and progressed to become an Account Executive and VP of Sales. His exceptional track record in sales engineering and leadership has made him a sought-after advisor and investor. He currently serves as a GTM advisor to Pipeline.ai and is an angel investor in high-growth companies including Brex, Mercury, and Anduril. His expertise spans technical sales, sales leadership, and go-to-market strategy for enterprise software companies.",
    specialties: ["Sales Engineering", "Sales Leadership", "Go-to-Market Strategy"],
    funFact:
      "Nishant is an angel investor who has backed some of the most innovative fintech and defense tech companies!",
    linkedin: "https://www.linkedin.com/in/nishant/",
  },
  {
    id: 8,
    name: "Nate Porras",
    role: "Product Management",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nate_Porras_edited.jpg-ubUrZPUzVnvlJHHxgBYChPhtsZ0xFn.jpeg",
    companies: ["Samsung", "Brilliant", "Level Home"],
    companyLogos: [
      "/images/logos/samsung-logo.png",
      "/images/logos/brilliant-logo.png",
      "/images/logos/level-logo.png",
    ],
    bio: "Nate is currently a Senior Product Manager at Samsung, with previous experience at IoT startups Level Home and Brilliant Smart Home.",
    expandedBio:
      "Nate is currently a Senior Product Manager at Samsung, where he leads product development for smart home devices and IoT ecosystems. His previous experience includes product roles at IoT startups Level Home and Brilliant Smart Home, where he launched innovative smart lock products and managed product roadmaps for smart home devices. Nate specializes in hardware-software integration and bringing complex IoT products from concept to market.",
    specialties: ["Product Management", "IoT", "Smart Home"],
    funFact: "Nate built his own smart home from scratch and loves tinkering with the latest IoT gadgets!",
    linkedin: "https://www.linkedin.com/in/nateporras/",
  },
]

const additionalCoaches = [
  {
    name: "Iman Gadzhi",
    role: "Business & Entrepreneurship Coach",
    image: "/images/coaches/iman.jpeg",
    companies: [
      { name: "Meta", logo: "/images/logos/meta-logo.svg" },
      { name: "Microsoft", logo: "/images/logos/microsoft-logo.svg" },
    ],
    specialties: ["Business Strategy", "Leadership", "Entrepreneurship"],
    experience: "10+ years",
    description: "Former Meta executive with expertise in scaling businesses and developing leadership skills.",
  },
  {
    name: "Steve Chen",
    role: "Tech & Product Coach",
    image: "/images/coaches/steve.jpeg",
    companies: [
      { name: "Uber", logo: "/images/logos/uber-logo.svg" },
      { name: "Lyft", logo: "/images/logos/lyft-logo.png" },
    ],
    specialties: ["Product Management", "Tech Leadership", "Strategy"],
    experience: "12+ years",
    description: "Product leader who has built and scaled products used by millions of users.",
  },
  {
    name: "Ingrid Chang",
    role: "Operations & Strategy Coach",
    image: "/images/coaches/ingrid.jpeg",
    companies: [
      { name: "Postmates", logo: "/images/logos/postmates-logo.svg" },
      { name: "Salesforce", logo: "/images/logos/salesforce-logo.svg" },
    ],
    specialties: ["Operations", "Strategy", "Process Optimization"],
    experience: "8+ years",
    description: "Operations expert who has optimized processes and driven growth at high-growth startups.",
  },
  {
    name: "Stephanie Rodriguez",
    role: "Marketing & Growth Coach",
    image: "/images/coaches/stephanie.jpeg",
    companies: [
      { name: "Notion", logo: "/images/logos/notion-logo.svg" },
      { name: "Slack", logo: "/images/logos/slack-logo.png" },
    ],
    specialties: ["Growth Marketing", "Brand Strategy", "Digital Marketing"],
    experience: "9+ years",
    description: "Growth marketing leader who has driven user acquisition and retention at top tech companies.",
  },
  {
    name: "Zach Marks",
    role: "Finance & Investment Coach",
    image: "/images/coaches/zach-marks.jpeg",
    companies: [
      { name: "Expanse", logo: "/images/logos/expanse-logo.webp" },
      { name: "Capital One", logo: "/images/logos/capital-one-logo.png" },
    ],
    specialties: ["Financial Planning", "Investment Strategy", "Risk Management"],
    experience: "11+ years",
    description: "Finance executive with deep expertise in investment strategies and financial planning.",
  },
  {
    name: "Nishant Patel",
    role: "Data & Analytics Coach",
    image: "/images/coaches/nishant.jpeg",
    companies: [
      { name: "Mercury", logo: "/images/logos/mercury-logo.svg" },
      { name: "Bloomberg", logo: "/images/logos/bloomberg-logo.svg" },
    ],
    specialties: ["Data Science", "Analytics", "Machine Learning"],
    experience: "7+ years",
    description: "Data science leader who has built analytics platforms and ML systems at scale.",
  },
]

export default function CoachesGrid() {
  const [expandedCoaches, setExpandedCoaches] = useState<Set<number>>(new Set())
  const [showMoreCoaches, setShowMoreCoaches] = useState(false)

  const toggleExpanded = (coachId: number) => {
    const newExpanded = new Set(expandedCoaches)
    if (newExpanded.has(coachId)) {
      newExpanded.delete(coachId)
    } else {
      newExpanded.add(coachId)
    }
    setExpandedCoaches(newExpanded)
  }

  const allCoaches = showMoreCoaches ? [...coaches, ...additionalCoaches] : coaches

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-violet-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Meet Your Expert Coaches</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our coaches are industry veterans from top companies who have successfully navigated their own career
            journeys and are here to guide you through yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr">
          {allCoaches.map((coach) => {
            const isExpanded = expandedCoaches.has(coach.id)
            return (
              <div
                key={coach.id}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 overflow-hidden hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] flex flex-col h-full"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
                }}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-light mb-1">{coach.name}</h3>
                    <p className="text-white/90 font-light text-sm">{coach.role}</p>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex space-x-4 mb-6 justify-center">
                    {coach.companies.map((company, index) => (
                      <div
                        key={index}
                        className="h-16 w-16 rounded-full bg-white shadow-lg border-2 border-white/80 flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300"
                      >
                        <img
                          src={coach.companyLogos[index] || "/placeholder.svg"}
                          alt={company}
                          className={cn(
                            "w-full h-full object-contain transition-transform duration-300",
                            coach.companyLogos[index] === "/images/logos/docusign-logo.svg" && "h-full w-auto p-0.5",
                            coach.companyLogos[index] === "/images/logos/lyft-logo.png" && "w-full h-auto p-1",
                            coach.companyLogos[index] === "/images/logos/opendoor-logo.svg" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/premise-data-logo.webp" && "w-full h-auto p-1",
                            coach.companyLogos[index] === "/images/logos/capital-one-logo.png" && "w-full h-auto p-1",
                            coach.companyLogos[index] === "/images/logos/salesforce-logo.svg" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/rippling-logo.jpeg" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/microsoft-logo.svg" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/notion-logo.svg" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/slack-logo.png" &&
                              "w-full h-auto p-1 filter invert",
                            coach.companyLogos[index] === "/images/logos/coursera-logo.svg" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/shopkick-logo.png" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/alt-logo.png" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/lookout-logo.svg" && "w-full h-auto p-1",
                            coach.companyLogos[index] === "/images/logos/samsung-logo.png" && "w-full h-auto p-1",
                            coach.companyLogos[index] === "/images/logos/level-logo.png" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/brilliant-logo.png" && "w-full h-auto p-1",
                            coach.companyLogos[index] === "/images/logos/whisper-ai-logo.png" && "w-full h-auto p-1",
                            coach.companyLogos[index] === "/images/logos/mckinsey-logo.svg" && "w-full h-auto p-1",
                            coach.companyLogos[index] === "/images/logos/divvyhomes-logo.jpeg" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/corelogic-logo.svg" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/blend-logo.png" && "w-full h-auto p-1",
                            coach.companyLogos[index] === "/images/logos/classpass-logo.svg" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/yousician-logo.png" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/novo-logo.svg" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/american-express-logo.png" &&
                              "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/brex-logo.png" && "w-full h-auto p-1",
                            coach.companyLogos[index] === "/images/logos/reach-security-logo.png" &&
                              "w-full h-auto p-1",
                            coach.companyLogos[index] === "/images/logos/palo-alto-networks-logo.svg" &&
                              "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/box-logo.svg" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/bank-of-america-logo.png" &&
                              "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/bloomberg-logo.svg" && "w-full h-auto p-1",
                            coach.companyLogos[index] === "/images/logos/mercury-logo.svg" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/expanse-logo.webp" && "w-full h-full p-1",
                            coach.companyLogos[index] === "/images/logos/postmates-logo.svg" && "w-full h-full p-1",
                          )}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-5 flex-grow">
                    <p className="text-slate-700 text-sm font-light leading-relaxed">
                      {isExpanded ? coach.expandedBio : coach.bio}
                    </p>

                    {isExpanded && (
                      <div className="mt-6 space-y-4 animate-in fade-in-0 duration-500">
                        <div>
                          <h4 className="font-medium text-slate-800 mb-3 text-sm">Companies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {coach.companies.map((company, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="bg-white/60 backdrop-blur-sm text-slate-700 border-white/40 font-light text-xs px-3 py-1"
                              >
                                {company}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {coach.funFact && (
                          <div className="bg-violet-50/60 backdrop-blur-sm border border-violet-100/60 rounded-xl p-4">
                            <h4 className="font-medium text-slate-800 mb-2 text-sm">Fun Fact:</h4>
                            <p className="text-slate-700 text-sm font-light italic leading-relaxed">{coach.funFact}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 min-h-[3rem] items-start">
                    {coach.specialties.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-violet-50/60 backdrop-blur-sm text-violet-700 border-violet-200/60 text-xs px-3 py-1.5 font-light whitespace-nowrap"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-auto pt-2">
                    <button
                      className="group/btn text-slate-600 hover:text-violet-600 transition-all duration-300 font-light text-sm relative"
                      onClick={() => toggleExpanded(coach.id)}
                    >
                      <span className="flex items-center">
                        {isExpanded ? (
                          <>
                            Show Less <ChevronUp className="ml-1 h-3 w-3 transition-transform duration-300" />
                          </>
                        ) : (
                          <>
                            Read More <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                      <div className="absolute bottom-0 left-0 w-0 h-px bg-violet-600 transition-all duration-300 group-hover/btn:w-full"></div>
                    </button>

                    <button
                      className="opacity-60 hover:opacity-100 transition-all duration-300 p-2 rounded-xl hover:bg-white/40 backdrop-blur-sm"
                      onClick={() => window.open(coach.linkedin, "_blank", "noopener,noreferrer")}
                      aria-label={`View ${coach.name}'s LinkedIn profile`}
                    >
                      <img
                        src="/images/linkedin-logo-black.png"
                        alt="LinkedIn"
                        className="h-6 w-6 transition-transform duration-300 hover:scale-110"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          {!showMoreCoaches ? (
            <button
              onClick={() => setShowMoreCoaches(true)}
              className="bg-white/70 backdrop-blur-sm border border-white/50 text-violet-700 font-light px-8 py-3 rounded-xl hover:bg-white/90 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              View More Coaches
            </button>
          ) : (
            <button
              onClick={() => setShowMoreCoaches(false)}
              className="bg-white/70 backdrop-blur-sm border border-white/50 text-violet-700 font-light px-8 py-3 rounded-xl hover:bg-white/90 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Show Less Coaches
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
