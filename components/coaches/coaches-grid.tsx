import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

const coaches = [
  {
    id: 1,
    name: "Allison Burkett",
    role: "Program Management",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%204.08.06%E2%80%AFPM-S8PRaGNxfBhCXDuaAOtCuRnNe83bfY.png",
    companies: ["Meta", "Microsoft", "Lyft"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Allison has over 10+ years of experience in Program Management and has spent the last 5 years at Meta leading cross-functional teams.",
    specialties: ["Program Management", "Cross-functional Leadership", "Tech Industry"],
  },
  {
    id: 2,
    name: "DK Lee",
    role: "Data Science / Analytics",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%204.08.06%E2%80%AFPM-S8PRaGNxfBhCXDuaAOtCuRnNe83bfY.png",
    companies: ["Rippling", "Opendoor", "Coinbase"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Over 10+ years of experience in risk modeling, pricing and credit at Rippling, Opendoor and Coinbase.",
    specialties: ["Data Science", "Risk Modeling", "Analytics"],
  },
  {
    id: 3,
    name: "Janice Bae",
    role: "Product Management",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%204.07.58%E2%80%AFPM-RQZVosojHKSFTLbVUpMN9mz35VOYei.png",
    companies: ["DocuSign", "Instacart", "LinkedIn"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Janice is currently a Senior Product Manager at DocuSign who pivoted into Product Management from consulting.",
    specialties: ["Product Management", "Product Strategy", "SaaS"],
  },
  {
    id: 4,
    name: "William Cha, PhD",
    role: "Data Science",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%204.07.58%E2%80%AFPM-RQZVosojHKSFTLbVUpMN9mz35VOYei.png",
    companies: ["Notion", "Microsoft", "Tableau"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "William has over 10+ years of experience and is currently a Data Scientist at Notion, specializing in machine learning and AI.",
    specialties: ["Data Science", "Machine Learning", "AI"],
  },
  {
    id: 5,
    name: "Sara Tashakorinia",
    role: "Product Strategy",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%204.08.25%E2%80%AFPM-z6cIlRKdvkiwm6LiBZLEm4IoB3sqG4.png",
    companies: ["Masterclass", "Figma", "Godly"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Over 10+ years of experience as a Product Leader and Strategist with roots in Design and Product Management.",
    specialties: ["Product Strategy", "Design", "Leadership"],
  },
  {
    id: 6,
    name: "Nate Porras",
    role: "Product Management",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%204.08.25%E2%80%AFPM-z6cIlRKdvkiwm6LiBZLEm4IoB3sqG4.png",
    companies: ["Samsung", "Level Home", "Wyze"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Nate has 7+ years in Product Management across multiple IoT startups like Level Home and Wyze.",
    specialties: ["Product Management", "IoT", "Hardware"],
  },
  {
    id: 7,
    name: "Ashutosh Goel",
    role: "Software Engineering",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%204.08.13%E2%80%AFPM-sr3WEuUArwretX3VRiFSd5Qf4hzEKB.png",
    companies: ["Meta", "Microsoft", "Brex"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Ashu has 10+ years as a Software Engineer and currently works at Meta. Previously he was at Microsoft and Brex.",
    specialties: ["Software Engineering", "Full Stack", "System Design"],
  },
  {
    id: 8,
    name: "Kat Dai",
    role: "Business Operations / Strategy / Chief of Staff",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%204.08.13%E2%80%AFPM-sr3WEuUArwretX3VRiFSd5Qf4hzEKB.png",
    companies: ["Opendoor", "Coinbase", "Uber"],
    companyLogos: [
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
      "/placeholder.svg?height=30&width=30",
    ],
    bio: "Over 7+ years of experience in business operations and strategy. She has worked at Opendoor, Coinbase, and Uber.",
    specialties: ["Business Operations", "Strategy", "Chief of Staff"],
  },
]

export default function CoachesGrid() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Meet Our Expert Coaches</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our coaches bring years of industry experience from top companies to help you navigate your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[3/4] relative">
                <img src={coach.image || "/placeholder.svg"} alt={coach.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-medium">{coach.name}</h3>
                  <p className="text-white/80">{coach.role}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex space-x-2 mb-4">
                  {coach.companies.map((company, index) => (
                    <div key={index} className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center">
                      <img
                        src={coach.companyLogos[index] || "/placeholder.svg"}
                        alt={company}
                        className="h-4 w-4 object-contain"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{coach.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {coach.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="bg-violet-50 text-violet-700 border-violet-200">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm" className="text-violet-600 border-violet-200">
                    View Profile
                  </Button>
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-violet-600">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-violet-600 hover:bg-violet-700">View All Coaches</Button>
        </div>
      </div>
    </section>
  )
}
