"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"

const coaches = [
  {
    id: 1,
    name: "Allison Burkett",
    role: "Program Management",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/allison_edited_edited.jpg-YL3P5wjQxCOLby7SUntBbZYYlaKbJ8.jpeg",
    companies: ["Meta", "Microsoft", "Lyft"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Allison has over 10+ years of experience in Program Management and has spent the last 5 years at Meta leading cross-functional teams.",
    expandedBio:
      "Allison has over 10+ years of experience in Program Management and has spent the last 5 years at Meta leading cross-functional teams across various product initiatives. Prior to Meta, she held senior program management roles at Microsoft and Lyft, where she specialized in scaling operations and driving strategic initiatives. Her expertise spans technical program management, cross-functional leadership, and agile methodologies in fast-paced tech environments.",
    specialties: ["Program Management", "Cross-functional Leadership", "Tech Industry"],
    funFact: "Allison is an avid rock climber and has climbed in over 15 countries!",
    linkedin: "https://www.linkedin.com/in/allisonburkett/",
  },
  {
    id: 2,
    name: "DK Lee",
    role: "Data Science / Analytics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DK.jpg-OUA9fMLf1Of9zJE4ZV6eNjZaYwao2l.jpeg",
    companies: ["Rippling", "Opendoor", "Coinbase"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Over 10+ years of experience in risk modeling, pricing and credit at Rippling, Opendoor and Coinbase.",
    expandedBio:
      "DK has over 10+ years of experience in data science and analytics, specializing in risk modeling, pricing strategies, and credit analysis. Currently at Rippling, he leads data science initiatives for financial products. His previous experience at Opendoor involved developing sophisticated pricing models for real estate transactions, while at Coinbase he focused on risk assessment and fraud detection systems. DK excels at translating complex data insights into actionable business strategies.",
    specialties: ["Data Science", "Risk Modeling", "Analytics"],
    funFact: "DK is a coffee enthusiast who roasts his own beans and has visited coffee farms in 8 countries!",
    linkedin: "https://www.linkedin.com/in/dklee/",
  },
  {
    id: 3,
    name: "Janice Bae",
    role: "Product Management",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/janice%20photo-wZMSUo0kc33SV0I6bxikLkbEXwq6Gi.jpeg",
    companies: ["DocuSign", "Instacart", "LinkedIn"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Janice is currently a Senior Product Manager at DocuSign who pivoted into Product Management from consulting.",
    expandedBio:
      "Janice is currently a Senior Product Manager at DocuSign who pivoted into Product Management through her MBA at MIT Sloan. Previously she held roles in Growth Marketing and Ops at an SF-based startup called Premise Data and at LinkedIn through a rotational program. Her unique background combines analytical thinking from consulting with hands-on product experience, making her particularly effective at driving product strategy and execution in fast-growing companies.",
    specialties: ["Product Management", "Product Strategy", "SaaS"],
    funFact: "Janice recently got married!",
    linkedin: "https://www.linkedin.com/in/janicebae/",
  },
  {
    id: 4,
    name: "William Cha, PhD",
    role: "Data Science",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/William_Cha_edited.jpg-tPLMjIinhrrzb9BpSc93qO76QCMBD4.jpeg",
    companies: ["Notion", "Microsoft", "Tableau"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "William has over 10+ years of experience and is currently a Data Scientist at Notion, specializing in machine learning and AI.",
    expandedBio:
      "William has over 10+ years of experience and is currently a Data Scientist at Notion, specializing in machine learning and AI applications for productivity tools. He holds a PhD in Computer Science and has previously worked at Microsoft Research and Tableau, where he developed advanced analytics platforms and machine learning models. His expertise spans deep learning, natural language processing, and building scalable ML systems that serve millions of users.",
    specialties: ["Data Science", "Machine Learning", "AI"],
    funFact: "William speaks 4 languages fluently and loves learning about different cultures through food!",
    linkedin: "https://www.linkedin.com/in/williamcha/",
  },
  {
    id: 5,
    name: "Sara Tashakorinia",
    role: "Product Strategy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sara-IXvsW80z0HhtA93OnjW4WsQgcwMH2r.jpeg",
    companies: ["Masterclass", "Figma", "Godly"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Over 10+ years of experience as a Product Leader and Strategist with roots in Design and Product Management.",
    expandedBio:
      "Sara has over 10+ years of experience as a Product Leader and Strategist with deep roots in Design and Product Management. Currently at Masterclass, she leads product strategy for creator tools and platform growth. Her previous experience at Figma involved shaping the product vision for collaborative design tools, while at Godly she focused on building design systems and user experience frameworks. Sara's unique combination of design thinking and strategic product management makes her invaluable for companies looking to build user-centric products.",
    specialties: ["Product Strategy", "Design", "Leadership"],
    funFact: "Sara is a talented photographer and has had her work featured in several art galleries!",
    linkedin: "https://www.linkedin.com/in/saratashakorinia/",
  },
  {
    id: 6,
    name: "Nate Porras",
    role: "Product Management",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nate_Porras_edited.jpg-ubUrZPUzVnvlJHHxgBYChPhtsZ0xFn.jpeg",
    companies: ["Samsung", "Level Home", "Wyze"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Nate has 7+ years in Product Management across multiple IoT startups like Level Home and Wyze.",
    expandedBio:
      "Nate has 7+ years in Product Management across multiple IoT startups and established companies. Currently at Samsung, he leads product development for smart home devices and IoT ecosystems. His experience at Level Home involved launching innovative smart lock products, while at Wyze he managed the product roadmap for affordable smart home cameras and sensors. Nate specializes in hardware-software integration and bringing complex IoT products from concept to market.",
    specialties: ["Product Management", "IoT", "Hardware"],
    funFact: "Nate built his own smart home from scratch and loves tinkering with the latest IoT gadgets!",
    linkedin: "https://www.linkedin.com/in/nateporras/",
  },
  {
    id: 7,
    name: "Ashutosh Goel",
    role: "Software Engineering",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ashu-MmDn9a6PLuK3zoynr6UXR5sAPwfC7t.jpeg",
    companies: ["Meta", "Microsoft", "Brex"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Ashu has 10+ years as a Software Engineer and currently works at Meta. Previously he was at Microsoft and Brex.",
    expandedBio:
      "Ashutosh has 10+ years as a Software Engineer and currently works at Meta on infrastructure and distributed systems. His experience spans full-stack development, system architecture, and leading engineering teams. At Microsoft, he worked on Azure cloud services, while at Brex he built fintech infrastructure and payment systems. Ashu is particularly skilled at designing scalable systems that handle millions of users and complex technical challenges in high-growth environments.",
    specialties: ["Software Engineering", "Full Stack", "System Design"],
    funFact: "Ashu is a chess master and regularly competes in tournaments around the Bay Area!",
    linkedin: "https://www.linkedin.com/in/ashutoshgoel/",
  },
  {
    id: 8,
    name: "Kat Dai",
    role: "Business Operations / Strategy / Chief of Staff",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kat-4va8k274q1RRuRiBvZE7U78FDcrfrf.jpeg",
    companies: ["Opendoor", "Coinbase", "Uber"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Over 7+ years of experience in business operations and strategy. She has worked at Opendoor, Coinbase, and Uber.",
    expandedBio:
      "Kat has over 7+ years of experience in business operations and strategy across high-growth tech companies. Currently serving as Chief of Staff at Opendoor, she previously held strategic operations roles at Coinbase and Uber, where she led cross-functional initiatives and drove operational excellence. Her expertise includes strategic planning, process optimization, and executive support in fast-paced startup environments. Kat excels at translating executive vision into actionable operational strategies.",
    specialties: ["Business Operations", "Strategy", "Chief of Staff"],
    funFact: "Kat is a marathon runner and has completed races on all 7 continents!",
    linkedin: "https://www.linkedin.com/in/katdai/",
  },
]

export default function CoachesGrid() {
  const [expandedCoaches, setExpandedCoaches] = useState<Set<number>>(new Set())

  const toggleExpanded = (coachId: number) => {
    const newExpanded = new Set(expandedCoaches)
    if (newExpanded.has(coachId)) {
      newExpanded.delete(coachId)
    } else {
      newExpanded.add(coachId)
    }
    setExpandedCoaches(newExpanded)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-violet-50/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-800">Meet Our Expert Coaches</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-light">
            Our coaches bring years of industry experience from top companies to help you navigate your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr">
          {coaches.map((coach) => {
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
                  <div className="flex space-x-3 mb-5 h-8">
                    {coach.companies.map((company, index) => (
                      <div
                        key={index}
                        className="h-8 w-8 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-sm"
                      >
                        <img
                          src={coach.companyLogos[index] || "/placeholder.svg"}
                          alt={company}
                          className="h-5 w-5 object-contain"
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
          <button className="bg-white/70 backdrop-blur-sm border border-white/50 text-violet-700 font-light px-8 py-3 rounded-xl hover:bg-white/90 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            View All Coaches
          </button>
        </div>
      </div>
    </section>
  )
}
