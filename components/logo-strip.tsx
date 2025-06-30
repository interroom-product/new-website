import ScrollingLogoStrip from "./scrolling-logo-strip"

const companyLogos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google__G__logo.svg-cywWUSQPJ4cLCwiYCIocGfUaj5bF3r.png",
    alt: "Google",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    alt: "Meta",
  },
  {
    src: "https://logo.clearbit.com/doordash.com",
    alt: "DoorDash",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/2560px-Uber_logo_2018.png",
    alt: "Uber",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/1200px-Snapchat_logo.svg.png",
    alt: "Snapchat",
  },
  {
    src: "https://logo.clearbit.com/rippling.com",
    alt: "Rippling",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
    alt: "Stripe",
  },
  // New logos from attachments
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zipline-2023-logo-png_seeklogo-476660-NJ1iJEanPzinbJ9OlSJf8zpbo4flc0.png",
    alt: "Zipline",
  },
  {
    src: "https://blobs.vusercontent.net/blob/Intuit_logo_2022-fGFzxM9VdcRBu8zKvfLswWdgMcWLgF.svg",
    alt: "Intuit",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capco_logo.svg-4mr1UDyp2BIlQUNIPEySwr0AirEEdw.png",
    alt: "Capco",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon_logo.svg-DZWFshn4a3rem9mZzLLlB7GTxXILJD.png",
    alt: "Amazon",
  },
  {
    src: "https://blobs.vusercontent.net/blob/Workiva_Logo-Digital-Steel-i7QY9kB6ounMaJoGsJ3ynLhrOjLwRA.svg",
    alt: "Workiva",
  },
  {
    src: "https://blobs.vusercontent.net/blob/Abbott_Laboratories_logo-iHZqRf8HsgeatZgbY5TsyFostdZrMh.svg",
    alt: "Abbott",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/airbnb-logo-c4ibZZ5Il5TLEA7VB1AopyZ3WVjcv6.png",
    alt: "Airbnb",
  },
  {
    src: "https://blobs.vusercontent.net/blob/intercom-icon-U5Vs2sGMXANXBdeZUMljMvwneySSqH.svg",
    alt: "Intercom",
    className: "filter brightness-0", // Make the black icon visible
  },
]

export default function LogoStrip() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <p className="text-center text-slate-600 mb-8">Our candidates land jobs at top companies</p>
        <ScrollingLogoStrip logos={companyLogos} speed={30} direction="left" pauseOnHover={true} />
      </div>
    </section>
  )
}
