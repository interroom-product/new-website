"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Shield, Users, DollarSign, Calendar, CheckCircle } from "lucide-react"

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "Is this legit? How do I know you're not a scam?",
      answer:
        "We understand your skepticism - the job search industry has many bad actors. Here's what makes us different: (1) We're founded by ex-FAANG recruiters with verifiable LinkedIn profiles, (2) We have 500+ verified reviews and case studies, (3) We offer a 30-day money-back guarantee, (4) We only get paid when you get hired (success fee model), and (5) You can speak with our founders and coaches directly before starting.",
      icon: Shield,
    },
    {
      question: "How are you different from a recruiter?",
      answer:
        "Traditional recruiters work for companies, not you. They get paid by employers to fill roles quickly, often pushing candidates into any available position. We work exclusively for you - we're paid by you to find the best opportunities that match your goals. We also provide comprehensive career coaching, resume optimization, and interview prep that recruiters don't offer.",
      icon: Users,
    },
    {
      question: "How do you make money? What's the catch?",
      answer:
        "We're completely transparent about our model: (1) You pay an upfront fee for our services ($997-$2997 depending on the package), (2) We also charge a success fee (typically 10-15% of your first year's salary) only when you get hired, (3) This aligns our incentives - we only succeed when you do. There are no hidden fees, no hourly charges, and no ongoing subscriptions.",
      icon: DollarSign,
    },
    {
      question: "Can I cancel? What if I'm not satisfied?",
      answer:
        "Yes, absolutely. We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, we'll refund your upfront fee completely. After 30 days, you can still pause or cancel your service at any time - we'll stop applying to new roles but continue supporting you with any active applications.",
      icon: Calendar,
    },
    {
      question: "What if I don't get interviews or job offers?",
      answer:
        "This is extremely rare given our 6-8% response rate (vs industry average of 2-3%), but if you don't get interviews within 60 days, we'll: (1) Completely rewrite your resume and strategy, (2) Extend your service for an additional 30 days at no cost, (3) If still no results, provide a full refund. We're so confident in our process that we guarantee results.",
      icon: CheckCircle,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 mb-8">Get answers to the most common questions about InterRoom</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon
              const isOpen = openFAQ === index

              return (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                      onClick={() => setOpenFAQ(isOpen ? null : index)}
                    >
                      <div className="flex items-center">
                        <Icon className="w-6 h-6 text-purple-400 mr-4 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6">
                        <div className="pl-10">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-gray-300 mb-6">
              Book a free 15-minute call with our team to get all your questions answered
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Book Free Call
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
