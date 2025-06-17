import ProductHero from "@/components/services/product-hero"
import ServiceDetails from "@/components/services/service-details"
import ServicePackages from "@/components/services/service-packages"
import WhoWeSupport from "@/components/services/who-we-support"
import CallToAction from "@/components/services/call-to-action"
import Navbar from "@/components/navbar"

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <ProductHero />
        <ServiceDetails />
        <ServicePackages />
        <WhoWeSupport />
        <CallToAction />
      </main>
    </>
  )
}
