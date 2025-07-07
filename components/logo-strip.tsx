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
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/2560px-Uber_logo_2018.png",
    alt: "Uber",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
    alt: "Stripe",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon_logo.svg-kQWgha8M1Og0mNPXNeLCoySSsL0lwl.png",
    alt: "Amazon",
  },
  {
    src: "/images/logos/salesforce-logo.svg",
    alt: "Salesforce",
  },
  {
    src: "/images/logos/notion-logo.svg",
    alt: "Notion",
  },
  {
    src: "https://blobs.vusercontent.net/blob/Intuit_logo_2022-2UzUrvyBjvK3YkLACmoQF6YoMVkB6N.svg",
    alt: "Intuit",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capco_logo.svg-djbU5lGYqw9Ydt1Xitz8v8MNNXYD4o.png",
    alt: "Capco",
  },
  {
    src: "https://blobs.vusercontent.net/blob/Workiva_Logo-Digital-Steel-TxELzAxwVYY8nJiIAljMuZqJQfY3rS.svg",
    alt: "Workiva",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zipline-2023-logo-png_seeklogo-476660-Mvt5mRQbH5sVapOv00NWICaqWQlwu2.png",
    alt: "Zipline",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/airbnb-logo-mf9XBl0cTxCDQSPFxMhTeI5anTHbAo.png",
    alt: "Airbnb",
  },
  {
    src: "https://blobs.vusercontent.net/blob/intercom-icon-Hr4UpJ0kLtOixZ7ZjfwVJyN8vDdLfm.svg",
    alt: "Intercom",
  },
  {
    src: "https://blobs.vusercontent.net/blob/Abbott_Laboratories_logo-AACjEB6ZdoJSSxva47IgK6aMv5AhJt.svg",
    alt: "Abbott Laboratories",
  },
]

export default function LogoStrip() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <p className="text-center text-slate-600 mb-8">Our candidates land jobs at top companies</p>
        <ScrollingLogoStrip logos={companyLogos} speed={25} direction="left" pauseOnHover={true} />
      </div>
    </section>
  )
}
