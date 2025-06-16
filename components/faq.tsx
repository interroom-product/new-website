"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  return (
    <section className="py-20 px-4 bg-violet-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">FAQ</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                How are you different from headhunters?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600">
                Headhunters work for employers; we work for you. We are not compensated by employers so our coaches will
                work with you 1:1 until we get you the best possible offer, regardless of whether that company works
                with recruiting partners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                What are your fees?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600">
                Our pricing is transparent and based on the services you need. We offer flexible packages designed to
                fit different career stages and goals. Contact us for a personalized quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                How do you guarantee job placement?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600">
                While we can't guarantee specific job placements, our track record speaks for itself. We've helped 90%
                of our clients secure positions within 2 months, with an average compensation increase of 44%.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                Do you work with candidates from all industries?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600">
                Yes, we work with professionals across various industries, with particular expertise in tech, finance,
                marketing, and creative fields. Our coaches have diverse backgrounds to match your specific industry
                needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                What fields do you support?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600">
                We provide services and support for a wide range of fields, including:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Marketing</li>
                  <li>Data Science</li>
                  <li>Customer Support</li>
                  <li>Partnerships</li>
                  <li>Finance</li>
                  <li>Data Analytics</li>
                  <li>Engineering</li>
                  <li>Product</li>
                  <li>Design</li>
                  <li>Operations</li>
                  <li>Sales</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
