import ScrollingLogoStrip from "./scrolling-logo-strip"

const companyLogos = [
  {
    name: "Microsoft",
    src: "/images/logos/microsoft-logo.svg",
    alt: "Microsoft",
    width: 100,
    height: 45,
  },
  {
    name: "Meta",
    src: "/images/logos/meta-logo.svg",
    alt: "Meta",
    width: 100,
    height: 45,
  },
  {
    name: "Salesforce",
    src: "/images/logos/salesforce-logo.svg",
    alt: "Salesforce",
    width: 100,
    height: 45,
  },
  {
    name: "Uber",
    src: "/images/logos/uber-logo.svg",
    alt: "Uber",
    width: 85,
    height: 45,
  },
  {
    name: "Lyft",
    src: "/images/logos/lyft-logo.png",
    alt: "Lyft",
    width: 75,
    height: 40,
  },
  {
    name: "Slack",
    src: "/images/logos/slack-logo.png",
    alt: "Slack",
    width: 85,
    height: 45,
  },
  {
    name: "Stripe",
    src: "/images/logos/stripe-logo.svg",
    alt: "Stripe",
    width: 85,
    height: 45,
  },
  {
    name: "DoorDash",
    src: "/images/logos/doordash-logo.svg",
    alt: "DoorDash",
    width: 110,
    height: 45,
  },
  {
    name: "Notion",
    src: "/images/logos/notion-logo.svg",
    alt: "Notion",
    width: 100,
    height: 45,
  },
  {
    name: "Mercury",
    src: "/images/logos/mercury-logo.svg",
    alt: "Mercury",
    width: 100,
    height: 45,
  },
  {
    name: "Intercom",
    src: "/images/logos/intercom-logo.svg",
    alt: "Intercom",
    width: 100,
    height: 45,
  },
  {
    name: "DocuSign",
    src: "/images/logos/docusign-logo.svg",
    alt: "DocuSign",
    width: 100,
    height: 45,
  },
  {
    name: "Box",
    src: "/images/logos/box-logo.svg",
    alt: "Box",
    width: 70,
    height: 40,
  },
  {
    name: "Coursera",
    src: "/images/logos/coursera-logo.svg",
    alt: "Coursera",
    width: 100,
    height: 45,
  },
  {
    name: "McKinsey",
    src: "/images/logos/mckinsey-logo.svg",
    alt: "McKinsey",
    width: 100,
    height: 45,
  },
  {
    name: "Opendoor",
    src: "/images/logos/opendoor-logo.svg",
    alt: "Opendoor",
    width: 100,
    height: 45,
  },
  {
    name: "Brex",
    src: "/images/logos/brex-logo.png",
    alt: "Brex",
    width: 85,
    height: 45,
  },
  {
    name: "Capital One",
    src: "/images/logos/capital-one-logo.png",
    alt: "Capital One",
    width: 100,
    height: 45,
  },
  {
    name: "American Express",
    src: "/images/logos/american-express-logo.png",
    alt: "American Express",
    width: 85,
    height: 45,
  },
  {
    name: "Samsung",
    src: "/images/logos/samsung-logo.png",
    alt: "Samsung",
    width: 100,
    height: 45,
  },
  {
    name: "Blend",
    src: "/images/logos/blend-logo.png",
    alt: "Blend",
    width: 85,
    height: 45,
  },
  {
    name: "Palo Alto Networks",
    src: "/images/logos/palo-alto-networks-logo.svg",
    alt: "Palo Alto Networks",
    width: 100,
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
