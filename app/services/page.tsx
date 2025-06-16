import ProductHero from "@/components/services/product-hero"
import ServiceDetails from "@/components/services/service-details"
import ServicePackages from "@/components/services/service-packages"
import HowWeWork from "@/components/services/how-we-work"
import WhoWeSupport from "@/components/services/who-we-support"
import CallToAction from "@/components/services/call-to-action"

export default function Services() {
  return (
    <main>
      <ProductHero />
      <ServiceDetails />
      <ServicePackages />
      <HowWeWork />
      <WhoWeSupport />
      <CallToAction />
    </main>
  )
}
