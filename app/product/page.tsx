import ProductHero from "@/components/product/product-hero"
import ServicePackages from "@/components/product/service-packages"
import HowWeWork from "@/components/product/how-we-work"
import WhoWeSupport from "@/components/product/who-we-support"
import ServiceDetails from "@/components/product/service-details"
import CallToAction from "@/components/product/call-to-action"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProductHero />
      <ServicePackages />
      <HowWeWork />
      <WhoWeSupport />
      <ServiceDetails />
      <CallToAction />
      <Footer />
    </div>
  )
}
