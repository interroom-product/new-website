"use client"

import Image from "next/image"

export default function LogoStrip() {
  const logos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google__G__logo.svg-cywWUSQPJ4cLCwiYCIocGfUaj5bF3r.png",
      alt: "Google",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/meta-logo.svg",
      alt: "Meta",
      width: 85,
      height: 45,
    },
    {
      src: "https://logo.clearbit.com/doordash.com",
      alt: "DoorDash",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/uber-logo.svg",
      alt: "Uber",
      width: 85,
      height: 45,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/1200px-Snapchat_logo.svg.png",
      alt: "Snapchat",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/rippling-logo.jpeg",
      alt: "Rippling",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/divert-logo.png",
      alt: "Divert",
      width: 85,
      height: 45,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
      alt: "Stripe",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/microsoft-logo.svg",
      alt: "Microsoft",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/salesforce-logo.svg",
      alt: "Salesforce",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/abbott-logo.svg",
      alt: "Abbott",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/intercom-icon.svg",
      alt: "Intercom",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/airbnb-logo.png",
      alt: "Airbnb",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/amazon-logo.png",
      alt: "Amazon",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/notion-logo.svg",
      alt: "Notion",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/slack-logo.png",
      alt: "Slack",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/bloomberg-logo.svg",
      alt: "Bloomberg",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/capital-one-logo.png",
      alt: "Capital One",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/american-express-logo.png",
      alt: "American Express",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/lyft-logo.png",
      alt: "Lyft",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/capco-logo.png",
      alt: "Capco",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/workiva-logo.svg",
      alt: "Workiva",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/zipline-logo.png",
      alt: "Zipline",
      width: 85,
      height: 45,
    },
    {
      src: "/images/logos/intuit-logo.svg",
      alt: "Intuit",
      width: 85,
      height: 45,
    },
  ]

  return (
    <section className="py-12 px-4 bg-white overflow-hidden">
      <div className="container mx-auto">
        <p className="text-center text-slate-600 mb-8">Our candidates land jobs at top companies</p>

        {/* Scrolling Logo Container */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{ minWidth: "120px", height: "60px" }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{ minWidth: "120px", height: "60px" }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
