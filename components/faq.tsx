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
                We don't charge you anything until you sign your offer. This helps align incentives across the board and
                allows us to commit our resources towards finding you your perfect role. Once you get your offer, we
                charge a small percentage of your first year salary to cover our fees.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                How do you guarantee job placement?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600">
                Our tech-enabled processes and expansive networks enable us to find hundreds of incredible (and in some
                cases, unlisted) roles that could be good fits for you. We only work with candidates whom we genuinely
                believe we can help. If for any reason we're unable to find you a role within 6 months, we will provide
                you with the option to terminate the contract with $0 charged.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-left">
                Do you work with candidates from all industries?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600">
                Yes, we're industry agnostic -- our expansive network of coaches would be more than happy to assist you
                in finding your next job, whether you're interested in software engineering, product management, visual
                design, business development or other niche roles.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
