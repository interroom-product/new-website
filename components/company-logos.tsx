"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function CompanyLogos() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null)

  const companies = [
    {
      name: "Webflow",
      logo: "webflow",
      url: "https://www.logggos.club/logos/webflow.svg",
    },
    {
      name: "OpenAI",
      logo: "openai",
      url: "https://sjc.microlink.io/NICHZNGoa5OXNZSe_vbPvnBF_vsRKohygJksQkGIKLr0kGeLaFgcAGtGqpKTAqGHYxDho-IIJ6ToR0Qsut7rnw.jpeg",
    },
    {
      name: "Omada",
      logo: "omada",
      url: "https://www.logggos.club/logos/omada.svg",
    },
    {
      name: "Riverlane",
      logo: "riverlane",
      url: "https://www.logggos.club/logos/riverlane.svg",
    },
  ]

  return (
    <div className="mt-8 mb-16">
      <p className="text-sm text-ir-charcoal mb-6">Our clients have landed roles at</p>

      <motion.div
        className="flex justify-center items-center gap-10 md:gap-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {companies.map((company) => (
          <motion.div
            key={company.name}
            className="relative h-8 md:h-10 flex items-center"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setHoveredLogo(company.logo)}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <img
              src={company.url || "/placeholder.svg"}
              alt={company.name}
              className={`h-full w-auto max-w-none transition-all duration-300 ${
                hoveredLogo === company.logo ? "filter-none" : "filter grayscale opacity-70"
              }`}
              style={{ height: "2.5rem" }} // Consistent height for all logos
            />
            <span className="sr-only">{company.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
