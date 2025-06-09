"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function CompanyLogos() {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null)

  const companies = [
    { name: "Google", logo: "google" },
    { name: "Meta", logo: "meta" },
    { name: "Apple", logo: "apple" },
    { name: "Netflix", logo: "netflix" },
    { name: "Microsoft", logo: "microsoft" },
    { name: "Amazon", logo: "amazon" },
  ]

  return (
    <div className="mt-8 mb-16">
      <p className="text-sm text-gray-500 mb-6">Our clients have landed roles at</p>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
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
            <svg
              className={`h-full w-auto transition-all duration-300 ${
                hoveredLogo === company.logo ? "filter-none" : "filter grayscale opacity-70"
              }`}
              viewBox="0 0 120 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {company.logo === "google" && (
                <path
                  d="M40.9,20.3c0-1.4-0.1-2.8-0.4-4.1H20.9v7.8h11.2c-0.5,2.6-2,4.9-4.2,6.3v5.3h6.8C38.7,31.5,40.9,26.3,40.9,20.3z"
                  fill="#4285F4"
                />
              )}
              {company.logo === "meta" && (
                <path
                  d="M36.5,20.2c0-9.1-7.4-16.5-16.5-16.5S3.5,11.1,3.5,20.2c0,8.2,6,15.1,13.9,16.3V24.7h-4.2v-4.5h4.2v-3.6c0-4.1,2.5-6.4,6.2-6.4c1.8,0,3.7,0.3,3.7,0.3v4h-2.1c-2,0-2.7,1.3-2.7,2.6v3.1h4.5l-0.7,4.5h-3.8v11.8C30.5,35.3,36.5,28.4,36.5,20.2z"
                  fill="#1877F2"
                />
              )}
              {company.logo === "apple" && (
                <path
                  d="M37.5,30.2c-0.9,2-1.9,3.9-3.4,5.6c-2.2,2.5-4.4,3.6-7,3.6c-1.8,0-4-0.5-6.5-1.5c-2.5-1-4.8-1.5-6.8-1.5c-2.1,0-4.3,0.5-6.8,1.5c-2.5,1-4.5,1.5-6,1.6c-2.3,0.1-4.7-1.2-7-3.8c-2.4-2.7-4.3-5.8-5.7-9.4c-1.5-3.8-2.3-7.5-2.3-11.2c0-4.1,0.9-7.6,2.7-10.5c1.4-2.3,3.2-4.1,5.4-5.4c2.2-1.3,4.6-2,7.1-2.1c1.9,0,4.3,0.6,7.3,1.7c1.9,0.7,3.5,1.1,4.8,1.1c1.1,0,2.8-0.4,5.2-1.3c2.8-0.9,5.1-1.3,7-1.1c5.2,0.4,9.1,2.5,11.7,6.2c-4.6,2.8-6.9,6.7-6.9,11.7c0,3.9,1.5,7.2,4.4,9.7C35.5,28.4,36.5,29.4,37.5,30.2z"
                  fill="#000000"
                />
              )}
              {company.logo === "netflix" && (
                <path
                  d="M20,3.5h-4.3v33h4.3V3.5z M36.5,3.5v33c-1.4,0-2.9,0.1-4.3,0.3V3.8C33.6,3.6,35.1,3.5,36.5,3.5z M28.2,13.8V36c-1.4,0.2-2.9,0.4-4.3,0.7V13.1C25.3,13.4,26.8,13.6,28.2,13.8z"
                  fill="#E50914"
                />
              )}
              {company.logo === "microsoft" && (
                <>
                  <rect x="3.5" y="3.5" width="16" height="16" fill="#F25022" />
                  <rect x="20.5" y="3.5" width="16" height="16" fill="#7FBA00" />
                  <rect x="3.5" y="20.5" width="16" height="16" fill="#00A4EF" />
                  <rect x="20.5" y="20.5" width="16" height="16" fill="#FFB900" />
                </>
              )}
              {company.logo === "amazon" && (
                <path
                  d="M36.2,29.3c-3.9,2.9-9.6,4.4-14.5,4.4c-6.9,0-13-2.5-17.7-6.7c-0.4-0.3-0.1-0.8,0.4-0.5c5.1,3,11.5,4.8,18,4.8c4.4,0,9.3-0.9,13.8-2.8C36.9,28.1,37.1,28.7,36.2,29.3z M37.8,27.4c-0.5-0.6-3.3-0.3-4.6-0.2c-0.4,0-0.4-0.3-0.1-0.5c2.2-1.6,5.9-1.1,6.3-0.6c0.4,0.5-0.1,4.2-2.2,5.9c-0.3,0.3-0.6,0.1-0.5-0.2C37.2,30.4,38.3,28.1,37.8,27.4z M21.3,8.1v-1.4c0-0.2,0.2-0.4,0.4-0.4h7.4c0.2,0,0.4,0.2,0.4,0.4v1.2c0,0.2-0.2,0.5-0.5,1l-3.8,5.5c1.4,0,2.9,0.2,4.2,0.9c0.3,0.2,0.4,0.4,0.4,0.6v1.5c0,0.2-0.2,0.5-0.5,0.4c-2-1.1-4.7-1.2-7,0-0.2,0.1-0.5-0.1-0.5-0.4v-1.4c0-0.3,0-0.7,0.3-1.1l4.4-6.3h-3.8C21.5,8.5,21.3,8.3,21.3,8.1z M14,18.9h-2.2c-0.2,0-0.4-0.2-0.4-0.4V6.4c0-0.2,0.2-0.4,0.4-0.4H14c0.2,0,0.4,0.2,0.4,0.4v1.2c0.6-1.5,1.7-2.2,3.2-2.2c1.5,0,2.5,0.7,3.2,2.2c0.6-1.5,1.9-2.2,3.3-2.2c1,0,2.1,0.4,2.7,1.3c0.7,1,0.6,2.5,0.6,3.8v7.6c0,0.2-0.2,0.4-0.4,0.4h-2.2c-0.2,0-0.4-0.2-0.4-0.4v-6.4c0-0.5,0-1.8-0.1-2.3c-0.2-0.8-0.7-1.1-1.4-1.1c-0.6,0-1.2,0.4-1.4,1c-0.2,0.6-0.2,1.7-0.2,2.3v6.4c0,0.2-0.2,0.4-0.4,0.4h-2.2c-0.2,0-0.4-0.2-0.4-0.4v-6.4c0-1.3,0.2-3.3-1.5-3.3c-1.7,0-1.7,1.9-1.7,3.3v6.4C14.4,18.7,14.2,18.9,14,18.9z"
                  fill="#FF9900"
                />
              )}
            </svg>
            <span className="sr-only">{company.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
