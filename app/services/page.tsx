import type { Metadata } from "next"
import ProductHero from "@/components/services/product-hero"
import WhoWeSupport from "@/components/services/who-we-support"
import CallToAction from "@/components/services/call-to-action"
import Navbar from "@/components/navbar"
import OfferingsHub from "@/components/services/offerings-hub"

export const metadata: Metadata = {
  title: "Services",
}

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <ProductHero />
        <OfferingsHub />
        <WhoWeSupport />
        <CallToAction />
      </main>
    </>
  )
}
