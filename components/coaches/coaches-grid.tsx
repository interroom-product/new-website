"use client"

import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const coaches = [
  {
    id: 1,
    name: "Allison Burkett",
    role: "Program Management",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/allison_edited_edited.jpg-YL3P5wjQxCOLby7SUntBbZYYlaKbJ8.jpeg",
    companies: ["Meta", "Salesforce", "Lyft"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30", // Will use Meta logo from testimonials
      "/images/salesforce-logo.jpeg",
      "/images/lyft-logo.png",
    ],
    bio: "Allison has over 10+ years of experience in Program Management and has spent the last 5 years at Meta leading cross-functional teams.",
    detailedBio:
      "Allison has over 10+ years of experience in Program Management and has spent the last 5 years at Meta leading cross-functional teams. She previously worked at Microsoft and Lyft, where she developed expertise in scaling technical programs and managing complex product launches. Her experience spans consumer products, infrastructure, and platform development.",
    specialties: ["Program Management", "Cross-functional Leadership", "Tech Industry"],
    linkedin: "https://www.linkedin.com/in/allisonburkett/",
    funFact: "Allison is passionate about mentoring women in tech!",
  },
  {
    id: 2,
    name: "DK Lee",
    role: "Data Science / Analytics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DK.jpg-OUA9fMLf1Of9zJE4ZV6eNjZaYwao2l.jpeg",
    companies: ["Rippling", "Capital One", "Opendoor"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30", // Will use Rippling logo from landing page
      "/images/capital-one-logo.png",
      "/images/opendoor-logo.jpeg",
    ],
    bio: "Over 10+ years of experience in risk modeling, pricing and credit at Rippling, Opendoor and Coinbase.",
    detailedBio:
      "Over 10+ years of experience in risk modeling, pricing and credit at Rippling, Opendoor and Coinbase. DK specializes in building machine learning models for financial risk assessment and has led data science teams in high-growth fintech environments. His expertise includes credit modeling, fraud detection, and pricing optimization.",
    specialties: ["Data Science", "Risk Modeling", "Analytics"],
    linkedin: "https://www.linkedin.com/in/dklee/",
    funFact: "DK loves hiking and has climbed over 20 peaks in California!",
  },
  {
    id: 3,
    name: "Janice Bae",
    role: "Product Management",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/janice%20photo-wZMSUo0kc33SV0I6bxikLkbEXwq6Gi.jpeg",
    companies: ["DocuSign", "Premise", "LinkedIn"],
    companyLogos: ["/images/docusign-logo.svg", "/images/premise-logo.webp", "/images/linkedin-logo-blue-small.png"],
    bio: "Janice is currently a Senior Product Manager at DocuSign who pivoted into Product Management from consulting.",
    detailedBio:
      "Janice is currently a Senior Product Manager at DocuSign who pivoted into Product Management through her MBA at MIT Sloan. Previously she held roles in Growth Marketing and Ops at an SF-based startup called Premise Data and at LinkedIn through a rotational program. She brings a unique perspective combining consulting, operations, and product strategy.",
    specialties: ["Product Management", "Product Strategy", "SaaS"],
    linkedin: "https://www.linkedin.com/in/janicebae/",
    funFact: "Janice recently got married!",
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
    detailedBio:
      "William has over 10+ years of experience and is currently a Data Scientist at Notion, specializing in machine learning and AI. He holds a PhD in Computer Science and has worked at Microsoft and Tableau, focusing on data visualization, predictive analytics, and AI-powered product features. His research background gives him deep expertise in statistical modeling and experimental design.",
    specialties: ["Data Science", "Machine Learning", "AI"],
    linkedin: "https://www.linkedin.com/in/williamcha/",
    funFact: "William published 15+ research papers during his PhD!",
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
    detailedBio:
      "Nate has 7+ years in Product Management across multiple IoT startups like Level Home and Wyze, as well as experience at Samsung. He specializes in hardware-software integration and has launched multiple consumer IoT products from concept to market. His expertise includes supply chain management, hardware product development, and smart home ecosystems.",
    specialties: ["Product Management", "IoT", "Hardware"],
    linkedin: "https://www.linkedin.com/in/nateporras/",
    funFact: "Nate has over 20 smart home devices in his house!",
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
    detailedBio:
      "Ashu has 10+ years as a Software Engineer and currently works at Meta. Previously he was at Microsoft and Brex, where he built scalable backend systems and led engineering teams. His expertise spans distributed systems, cloud infrastructure, and full-stack development. He has experience with high-scale consumer products and fintech applications.",
    specialties: ["Software Engineering", "Full Stack", "System Design"],
    linkedin: "https://www.linkedin.com/in/ashutoshgoel/",
    funFact: "Ashu has contributed to 5+ open source projects!",
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
    detailedBio:
      "Over 7+ years of experience in business operations and strategy. She has worked at Opendoor, Coinbase, and Uber, where she led cross-functional initiatives and strategic planning. Kat specializes in operational excellence, process optimization, and executive support. Her experience spans real estate tech, cryptocurrency, and mobility platforms.",
    specialties: ["Business Operations", "Strategy", "Chief of Staff"],
    linkedin: "https://www.linkedin.com/in/katdai/",
    funFact: "Kat has lived in 6 different countries!",
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
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-800">Meet Our Expert Coaches</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light">
            Our coaches bring years of industry experience from top companies to help you navigate your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="group relative backdrop-blur-sm bg-white/70 rounded-2xl border border-white/50 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden"
            >
              {/* Subtle gradient overlay for glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-slate-50/20 pointer-events-none rounded-2xl"></div>

              <div className="aspect-[3/4] relative flex-shrink-0 overflow-hidden rounded-t-2xl">
                <img
                  src={coach.image || "/placeholder.svg"}
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-medium mb-1">{coach.name}</h3>
                  <p className="text-white/90 font-light">{coach.role}</p>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative z-10">
                {/* Company logos - more spaced and elegant */}
                <div className="flex space-x-3 mb-5 h-8">
                  {coach.companies.map((company, index) => (
                    <div
                      key={index}
                      className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-sm border border-white/50 p-1"
                    >
                      <img
                        src={coach.companyLogos[index] || "/placeholder.svg"}
                        alt={company}
                        className="max-h-6 max-w-6 object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* Description - more breathing room */}
                <div className="flex-grow mb-5">
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {expandedCoaches.has(coach.id) ? coach.detailedBio : coach.bio}
                  </p>

                  {expandedCoaches.has(coach.id) && coach.funFact && (
                    <p className="text-slate-600 text-sm font-normal mt-4 leading-relaxed bg-violet-50/50 backdrop-blur-sm rounded-lg p-3 border border-violet-100/50">
                      <span className="text-violet-700 font-medium">Fun Fact:</span> {coach.funFact}
                    </p>
                  )}
                </div>

                {/* Skills - lighter, more refined badges */}
                <div className="mb-6 min-h-[2.5rem]">
                  <div className="flex flex-wrap gap-2">
                    {coach.specialties.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-white/60 backdrop-blur-sm text-slate-700 border-slate-200/50 text-xs px-3 py-1 whitespace-nowrap font-light hover:bg-white/80 transition-colors"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Buttons - minimalistic design */}
                <div className="flex justify-between items-center mt-auto pt-2">
                  <button
                    className="text-slate-600 text-sm font-light hover:text-violet-600 transition-colors duration-200 relative group/btn"
                    onClick={() => toggleExpanded(coach.id)}
                  >
                    {expandedCoaches.has(coach.id) ? "Read Less" : "Read More"}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-violet-600 transition-all duration-200 group-hover/btn:w-full"></span>
                  </button>

                  <button
                    className="opacity-80 hover:opacity-100 transition-opacity duration-200 p-1 rounded-lg hover:bg-white/50 backdrop-blur-sm"
                    onClick={() => window.open(coach.linkedin, "_blank")}
                    aria-label={`View ${coach.name}'s LinkedIn profile`}
                  >
                    <img src="/images/linkedin-logo-blue-small.png" alt="LinkedIn" className="h-6 w-6 object-contain" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white/70 backdrop-blur-sm border border-white/50 text-slate-700 px-8 py-3 rounded-full font-light hover:bg-white/90 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            View All Coaches
          </button>
        </div>
      </div>
    </section>
  )
}
