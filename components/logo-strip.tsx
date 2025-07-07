import ScrollingLogoStrip from "./scrolling-logo-strip"

const companyLogos = [
  {
    name: "Google",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google__G__logo.svg-cywWUSQPJ4cLCwiYCIocGfUaj5bF3r.png",
    width: 85,
    height: 45,
  },
  { name: "Meta", src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png", width: 85, height: 45 },
  {
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    width: 85,
    height: 45,
  },
  {
    name: "Amazon",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon_logo.svg-kQWgha8M1Og0mNPXNeLCoySSsL0lwl.png",
    width: 85,
    height: 45,
  },
  { name: "Salesforce", src: "/images/logos/salesforce-logo.svg", width: 85, height: 45 },
  {
    name: "Uber",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/2560px-Uber_logo_2018.png",
    width: 85,
    height: 45,
  },
  {
    name: "Airbnb",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/airbnb-logo-mf9XBl0cTxCDQSPFxMhTeI5anTHbAo.png",
    width: 85,
    height: 45,
  },
  {
    name: "Lyft",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lyft_logo.svg/2560px-Lyft_logo.svg.png",
    width: 85,
    height: 45,
  },
  {
    name: "Slack",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
    width: 85,
    height: 45,
  },
  { name: "Notion", src: "/images/logos/notion-logo.svg", width: 85, height: 45 },
  {
    name: "Stripe",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
    width: 85,
    height: 45,
  },
  {
    name: "Snapchat",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/1200px-Snapchat_logo.svg.png",
    width: 85,
    height: 45,
  },
  {
    name: "LinkedIn",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png",
    width: 85,
    height: 45,
  },
  {
    name: "Apple",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    width: 85,
    height: 45,
  },
  {
    name: "Netflix",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    width: 85,
    height: 45,
  },
  {
    name: "Tesla",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png",
    width: 85,
    height: 45,
  },
  {
    name: "Abbott",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Abbott_Logo.svg/2560px-Abbott_Logo.svg.png",
    width: 85,
    height: 45,
  },
  {
    name: "Intercom",
    src: "https://blobs.vusercontent.net/blob/intercom-icon-Hr4UpJ0kLtOixZ7ZjfwVJyN8vDdLfm.svg",
    width: 85,
    height: 45,
  },
  {
    name: "Capco",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capco_logo.svg-djbU5lGYqw9Ydt1Xitz8v8MNNXYD4o.png",
    width: 85,
    height: 45,
  },
  {
    name: "Workiva",
    src: "https://blobs.vusercontent.net/blob/Workiva_Logo-Digital-Steel-TxELzAxwVYY8nJiIAljMuZqJQfY3rS.svg",
    width: 85,
    height: 45,
  },
  {
    name: "Zipline",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zipline-2023-logo-png_seeklogo-476660-Mvt5mRQbH5sVapOv00NWICaqWQlwu2.png",
    width: 85,
    height: 45,
  },
  {
    name: "Intuit",
    src: "https://blobs.vusercontent.net/blob/Intuit_logo_2022-2UzUrvyBjvK3YkLACmoQF6YoMVkB6N.svg",
    width: 85,
    height: 45,
  },
  {
    name: "American Express",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png",
    width: 85,
    height: 45,
  },
  {
    name: "Capital One",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Capital_One_logo.svg/2560px-Capital_One_logo.svg.png",
    width: 85,
    height: 45,
  },
]

export default function LogoStrip() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-900 mb-4">
            Our candidates land jobs at top companies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join thousands of professionals who've successfully transitioned to their dream roles at leading
            organizations worldwide.
          </p>
        </div>
        <ScrollingLogoStrip logos={companyLogos} speed="30s" direction="left" pauseOnHover={true} />
      </div>
    </section>
  )
}
