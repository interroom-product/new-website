"use client"

import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { useEffect, useState } from "react"
import { ArrowRight, Check, Crosshair, LockKeyhole, TrendingUp } from "lucide-react"

const ashHeadshot =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-31%20at%2020.41.36%20%281%29-UWNSVfiQfrVRwKqdBBPL8aWaDoUGwG.jpeg"
const targetTime = new Date("2026-09-16T22:00:00Z").getTime()

const logos = [
  ["Meta", "/images/logos/meta-logo.svg"],
  ["Uber", "/images/logos/uber-logo.svg"],
  ["DoorDash", "/images/logos/doordash-logo.svg"],
  ["Salesforce", "/images/logos/salesforce-logo.svg"],
  ["Intercom", "/images/logos/intercom-logo.svg"],
  ["Stripe", "/images/logos/stripe-logo.svg"],
]

const outcomes = [
  {
    icon: Crosshair,
    title: "Your market positioning, in plain language",
    body: "The specific angle that makes you the obvious hire for the roles you actually want, not the ones you already did.",
  },
  {
    icon: LockKeyhole,
    title: "A clear read on the $150K+ tier",
    body: "What separates candidates who land senior, higher-paying roles from those who stay stuck applying broadly.",
  },
  {
    icon: TrendingUp,
    title: "A positioning statement, ready to go",
    body: "Language you can put straight to work on your resume, your LinkedIn, and your outreach that afternoon.",
  },
]

const testimonials = [
  ["/images/testimonials/gabriela.jpeg", "/images/logos/meta-logo.svg", "Gabriela Tylenda", "Visual Designer at Meta", "After searching for over a year, InterRoom helped me land a new role in just 3.5 weeks. They showed me how much I was underselling myself."],
  ["/images/testimonials/leila.jpeg", "/images/logos/uber-logo.svg", "Leila Bremner", "Senior Strategic Operations Manager at Uber", "I landed the job at the top of my list within 6 weeks. After 7 months searching on my own, they helped me negotiate a $20K increase to my overall comp."],
  ["/images/testimonials/jared.jpeg", "/images/logos/intercom-logo.svg", "Jared Malakouti", "Senior Product Manager at Intercom", "I took a shot since they don't get paid until you do. After 6 weeks I landed the exact role I'd been looking for. My only regret is not starting sooner."],
]

function Countdown() {
  const [left, setLeft] = useState(targetTime - Date.now())

  useEffect(() => {
    const timer = window.setInterval(() => setLeft(Math.max(0, targetTime - Date.now())), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const days = Math.floor(left / 86400000)
  const hours = Math.floor((left % 86400000) / 3600000)
  const minutes = Math.floor((left % 3600000) / 60000)
  const seconds = Math.floor((left % 60000) / 1000)
  const values = [[days, "DAYS"], [hours, "HRS"], [minutes, "MIN"], [seconds, "SEC"]]

  return (
    <div className="grid grid-cols-4 gap-2" aria-label="Countdown to the webinar">
      {values.map(([value, label]) => (
        <div key={label} className="rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 text-center">
          <div className="font-mono text-2xl font-semibold leading-none text-white">{String(value).padStart(2, "0")}</div>
          <div className="mt-2 text-[10px] tracking-[0.18em] text-[#aaa0d0]">{label}</div>
        </div>
      ))}
    </div>
  )
}

function EasyWebinarWidget() {
  return (
    <div className="overflow-hidden rounded-xl bg-white">
      <div className="ew-wid" data-wid="Myi7qNEMlHjudDpq921wuw==" data-loaded="no" data-schloaded="no" />
      <Script src="https://app.easywebinar.com/widget/js/new/ew-script.js" strategy="afterInteractive" />
    </div>
  )
}

export default function NextPlayPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9] text-[#292524]">
      <div className="bg-[#14102b] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="InterRoom home">
            <Image src="/interroom-logo.png" alt="InterRoom" width={150} height={38} className="h-9 w-auto brightness-0 invert" />
          </Link>
          <p className="hidden text-sm text-[#c7bcea] sm:block">Live Wednesday, September 16 at 3:00 PM PST / 6:00 PM EST</p>
        </div>
      </div>

      <section className="relative overflow-hidden bg-[#14102b] pb-20 pt-14 text-white sm:pb-24 sm:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_83%_5%,rgba(124,58,237,.34),transparent_36%),radial-gradient(circle_at_4%_100%,rgba(55,48,110,.55),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div className="order-3 lg:order-none">
            <div className="hidden lg:block">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-red-300/30 bg-red-400/15 px-3 py-1.5 text-xs font-semibold text-red-200"><span className="h-2 w-2 animate-pulse rounded-full bg-red-300" /> Live webinar</span>
                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs text-[#e7dffa]">Free 1-hour session</span>
              </div>
              <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-[-0.045em] sm:text-6xl lg:text-7xl">Accelerate your job search.</h1>
            </div>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#cbc0ec]">A free live session on anchoring yourself to a role the market will pay $150K and up for.</p>
            <div className="mt-9 flex flex-col gap-3">
              {[
                [Crosshair, <>Define your unique <strong>market positioning</strong></>],
                [LockKeyhole, <>Lock into high-value roles that pay <strong>$150K+</strong></>],
                [TrendingUp, <>Stand out, get noticed, and land interviews faster</>],
              ].map(([Icon, children]) => (
                <div key={String(children)} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5 text-[15px] text-[#ede7fb]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ad88fd]/15 text-[#ad88fd]"><Icon className="h-5 w-5" /></span>
                  <span>{children}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <Image src={ashHeadshot} alt="Ash Sheikh" width={56} height={56} className="h-14 w-14 rounded-full border-2 border-[#ad88fd] object-cover" />
              <div><p className="font-semibold">Hosted by Ash Sheikh</p><p className="text-sm text-[#a99dda]">Founder, InterRoom</p></div>
            </div>
          </div>

          <div className="order-first lg:hidden">
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-300/30 bg-red-400/15 px-3 py-1.5 text-xs font-semibold text-red-200"><span className="h-2 w-2 animate-pulse rounded-full bg-red-300" /> Live webinar</span>
              <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs text-[#e7dffa]">Free 1-hour session</span>
            </div>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-[-0.045em]">Accelerate your job search.</h1>
          </div>

          <aside id="register" className="order-2 h-fit rounded-3xl border border-white/10 bg-[#241f47]/95 p-5 shadow-2xl shadow-black/30 lg:order-none lg:sticky lg:top-6">
            <p className="text-lg font-semibold">Save your seat</p>
            <p className="mt-1 text-sm text-[#b6abe0]">Wednesday, September 16 · 3:00 PM PST / 6:00 PM EST</p>
            <div className="my-5"><Countdown /></div>
            <EasyWebinarWidget />
            <p className="mt-4 text-center text-xs text-[#8e82bd]">Register once and also get our <strong className="text-[#c6baec]">Job Search Accelerator Guide</strong>, free.</p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7c3aed]">Why most searches stall</p>
        <h2 className="mt-3 max-w-xl text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Your resume is fine. Your positioning is the problem.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#78716c]">Most job searches stall for the same reason. Candidates position themselves for the job they used to do, not the one the market is paying for right now. So the applications go out, everything looks reasonable, and nothing moves.</p>
        <div className="mt-9 max-w-4xl border-l-4 border-[#ad88fd] bg-white px-6 py-6 text-lg leading-8 shadow-sm">This session fixes the root cause. In one hour you will define the specific positioning that gets you into rooms paying $150K and up, then know exactly how to put it to work.</div>
      </section>

      <section className="border-y border-[#e9e5de] bg-white"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7c3aed]">What you will walk away with</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Three things you can use the same day</h2><div className="mt-12 grid gap-10 md:grid-cols-3">{outcomes.map(({ icon: Icon, title, body }) => <article key={title}><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0eafe] text-[#7c3aed]"><Icon className="h-5 w-5" /></div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-[15px] leading-7 text-[#78716c]">{body}</p></article>)}</div><div className="mt-12 rounded-2xl border border-[#e9e5de] bg-[#fafaf9] px-6 py-5 text-[15px] text-[#78716c]"><strong className="text-[#292524]">Who this is for:</strong> senior professionals who have been searching longer than expected, getting few callbacks, or watching roles they are qualified for go to someone else.</div></div></section>

      <section className="bg-[#14102b] text-white"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ad88fd]">The difference positioning makes</p><h2 className="mt-3 max-w-xl text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">What changes when you search the right way</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[#c1b6e4]">These are InterRoom&apos;s client results. This webinar teaches the front end of that work: how you position yourself before the applications ever go out.</p><div className="mt-12 grid gap-5 md:grid-cols-2">{[["Searching on your own", ["8 to 12 months", "Typical time to land"], ["Under 2%", "Application-to-interview rate"], ["Minimal", "Pay growth for most searchers"]], ["Searching with InterRoom", ["2 to 4 months", "Average time to land"], ["6 to 8%", "Interview rate, roughly 3x the industry average"], ["44% average", "Salary increase. You move up, not sideways"]]].map(([title, ...rows], index) => <div key={String(title)} className={`rounded-2xl border p-7 ${index ? "border-[#ad88fd]/40 bg-[#7c3aed]/15" : "border-white/10 bg-white/[0.03]"}`}><p className={`font-semibold ${index ? "text-[#ad88fd]" : "text-[#9e93cc]"}`}>{title}</p>{rows.map((row) => <div key={String(row[0])} className="border-t border-white/10 py-4 first:mt-4"><p className="text-2xl font-semibold">{row[0]}</p><p className="mt-1 text-sm text-[#b3a8d8]">{row[1]}</p></div>)}</div>)}</div><p className="mt-6 text-xs text-[#877bb0]">Figures reflect InterRoom client outcomes to date across 280+ people placed.</p></div></section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.82fr_1.18fr] lg:items-center"><div className="overflow-hidden rounded-3xl border border-[#e9e5de] shadow-xl shadow-[#292524]/10"><Image src={ashHeadshot} alt="Ash Sheikh, founder of InterRoom" width={736} height={960} className="w-full object-cover" /></div><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7c3aed]">Meet your host</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">Ash Sheikh</h2><p className="mt-5 text-[16px] leading-8 text-[#78716c]">Ash is the founder of InterRoom. He held recruiting and operating roles at <strong className="text-[#292524]">Bank of America, Blend, Lookout, and Opendoor</strong>, hiring and interviewing the same kind of candidates you are now competing with.</p><p className="mt-4 text-[16px] leading-8 text-[#78716c]">He still runs mock interviews for InterRoom clients himself, and he built this session around the exact positioning work that has helped clients land at companies like DoorDash, Uber, Salesforce, and Meta.</p><div className="mt-7 flex flex-wrap items-center gap-4 border-t border-[#e9e5de] pt-6 text-sm text-[#78716c]"><span>Previously at</span><strong>Bank of America</strong><strong>Blend</strong><strong>Lookout</strong><strong>Opendoor</strong></div></div></section>

      <section className="border-t border-[#e9e5de] bg-white"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7c3aed]">Where InterRoom clients have landed</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">280+ professionals, real offers</h2><div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6 opacity-70">{logos.map(([name, src]) => <Image key={name} src={src} alt={name} width={100} height={32} className="h-6 w-auto" />)}</div><div className="mt-12 grid gap-5 md:grid-cols-3">{testimonials.map(([person, company, name, role, quote]) => <article key={name} className="flex flex-col rounded-2xl border border-[#e9e5de] bg-[#fafaf9] p-6"><div className="mb-5 flex items-center gap-3"><Image src={person} alt={name} width={48} height={48} className="h-12 w-12 rounded-full object-cover" /><Image src={company} alt="" width={88} height={24} className="ml-auto h-5 w-auto opacity-70" /></div><p className="flex-1 text-[15px] leading-7">&quot;{quote}&quot;</p><p className="mt-5 text-sm font-semibold">{name}</p><p className="text-xs text-[#78716c]">{role}</p></article>)}</div></div></section>

      <section className="bg-[#fafaf9] px-5 py-20 sm:px-8 sm:py-24"><div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-white/10 bg-[#14102b] p-8 text-white shadow-xl sm:p-12 lg:grid-cols-[1.25fr_.75fr]"><div><span className="rounded-full border border-[#ad88fd]/40 bg-[#ad88fd]/15 px-3 py-1.5 text-xs font-semibold text-[#ad88fd]">Free for everyone who registers</span><h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">The Job Search Accelerator Guide</h2><p className="mt-4 max-w-xl text-[16px] leading-8 text-[#c7bcea]">Register and get our self-serve guide free. It walks you through the same positioning work covered live, so you can start applying it right away, whether or not you can make the session in person.</p></div><div className="rounded-2xl border border-white/10 bg-[#211c40] p-8 text-center"><p className="text-sm text-[#9e93cc] line-through">$99 value</p><p className="mt-1 text-4xl font-semibold">Free</p><p className="mt-1 text-sm text-[#ad88fd]">Job Search Accelerator Guide</p></div></div></section>

      <section className="bg-[#14102b] px-5 py-20 text-center text-white sm:px-8 sm:py-24"><h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Save your seat for Wednesday, September 16</h2><p className="mx-auto mt-4 max-w-xl text-lg text-[#c7bcea]">Free. Live. One hour. Bring your resume and LinkedIn questions.</p><div className="mx-auto mt-9 max-w-[460px] rounded-3xl border border-white/10 bg-[#241f47] p-5 text-left"><p className="text-lg font-semibold">Register now</p><p className="mt-1 text-sm text-[#b6abe0]">3:00 PM PST / 6:00 PM EST</p><div className="mt-5"><EasyWebinarWidget /></div><p className="mt-4 text-center text-xs text-[#8e82bd]">Includes your free copy of the <strong className="text-[#c6baec]">Job Search Accelerator Guide</strong>.</p></div></section>

      <footer className="border-t border-white/10 bg-[#14102b] px-5 py-7 text-center text-xs text-[#7e72ab]">© 2026 InterRoom. All rights reserved. · interroom.me</footer>
    </main>
  )
}
