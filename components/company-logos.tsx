"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function CompanyLogos() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null)

  const companies = [
    {
      name: "Netflix",
      logo: "netflix",
      url: "https://assets.turbologo.com/blog/en/2019/08/19085031/netflix-short-version-logo.png",
    },
    {
      name: "Microsoft",
      logo: "microsoft",
    },
    {
      name: "Doordash",
      logo: "doordash",
      url: "https://logosandtypes.com/wp-content/uploads/2020/12/doordash.svg",
    },
    {
      name: "Meta",
      logo: "meta",
      url: "https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg",
    },
  ]

  return (
    <div className="mt-8 mb-16">
      <p className="text-sm text-gray-400 mb-6">Our clients have landed roles at</p>

      <motion.div
        className="flex justify-center items-center gap-10 md:gap-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {companies.map((company) => (
          <motion.div
            key={company.name}
            className="relative h-8 md:h-10"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setHoveredLogo(company.logo)}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            {company.logo === "netflix" && (
              <img
                src={company.url || "/placeholder.svg"}
                alt="Netflix"
                className={`h-full w-auto transition-all duration-300 ${
                  hoveredLogo === company.logo ? "filter-none" : "filter grayscale opacity-70"
                }`}
              />
            )}

            {company.logo === "microsoft" && (
              <svg
                className={`h-full w-auto transition-all duration-300 ${
                  hoveredLogo === company.logo ? "filter-none" : "filter grayscale opacity-70"
                }`}
                viewBox="0 0 120 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3.5" y="3.5" width="16" height="16" fill="#F25022" />
                <rect x="20.5" y="3.5" width="16" height="16" fill="#7FBA00" />
                <rect x="3.5" y="20.5" width="16" height="16" fill="#00A4EF" />
                <rect x="20.5" y="20.5" width="16" height="16" fill="#FFB900" />
              </svg>
            )}

            {company.logo === "doordash" && (
              <img
                src={company.url || "/placeholder.svg"}
                alt="Doordash"
                className={`h-full w-auto transition-all duration-300 ${
                  hoveredLogo === company.logo ? "filter-none" : "filter grayscale opacity-70"
                }`}
              />
            )}

            {company.logo === "meta" && (
              <img
                src={company.url || "/placeholder.svg"}
                alt="Meta"
                className={`h-full w-auto transition-all duration-300 ${
                  hoveredLogo === company.logo ? "filter-none" : "filter grayscale opacity-70"
                }`}
              />
            )}

            <span className="sr-only">{company.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
