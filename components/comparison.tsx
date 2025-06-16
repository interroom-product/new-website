export default function Comparison() {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">We Prioritize Results</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            You could spend thousands of dollars and not actually see any direct return. InterRoom offers it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <div className="text-xl text-violet-300 mb-6">Without InterRoom</div>

            <div className="mb-8">
              <div className="text-4xl font-bold mb-2">5 Months</div>
              <p className="text-slate-400">
                It takes the average job seeker 5 months to find a new job in today's market
              </p>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-bold mb-2">&lt;2%</div>
              <p className="text-slate-400">
                of job apps lead to a screener interview—meaning 98 out of 100 go nowhere
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">5-15%</div>
              <p className="text-slate-400">
                The average pay increase for people switching jobs tends to hover around ~5-15%
              </p>
            </div>
          </div>

          <div className="bg-violet-900/30 p-8 rounded-xl border border-violet-700/30 relative">
            <div className="absolute top-0 right-0 bg-violet-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
              RECOMMENDED
            </div>
            <div className="text-xl text-violet-300 mb-6">With InterRoom</div>

            <div className="mb-8">
              <div className="text-4xl font-bold mb-2">2 Months</div>
              <p className="text-slate-300">
                On average, we place clients within 2 months of starting their InterRoom journey.
              </p>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-bold mb-2">6-8%</div>
              <p className="text-slate-300">
                Our clients land screener interviews 6 to 8% of the time—over 3x the average
              </p>
            </div>

            <div>
              <div className="text-4xl font-bold mb-2">44%</div>
              <p className="text-slate-300">Clients typically see a 44% comp increase from their previous roles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
