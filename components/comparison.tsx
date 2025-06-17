import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, TrendingDown, Users, TrendingUp, Zap, Target } from "lucide-react"

export default function Comparison() {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-violet-300">
            Your Job Search is Broken. Here's How We Fix It.
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Forget endless applications. Stop wasting time and money. InterRoom combines human expertise with AI
            efficiency to land you a better job, faster.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16 flex flex-col items-center space-y-8">
          {/* Visual: Typical Job Search */}
          <div
            className="relative w-full max-w-xl h-20 bg-white/10 rounded-full flex items-center justify-between px-8 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{ boxShadow: "inset 0 2px 5px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.3)" }}
          >
            <span className="text-white/80 font-black text-xl md:text-2xl">8-12 MONTHS</span>
            <span className="text-white/60 text-lg md:text-xl font-medium">Typical Search</span>
          </div>

          {/* Visual: With InterRoom - Positioned to show "move up" */}
          <div
            className="relative w-full max-w-md h-20 bg-gradient-to-r from-violet-500/50 to-cyan-400/50 rounded-full flex items-center justify-between px-8 backdrop-blur-sm shadow-xl transform -translate-y-8 md:-translate-y-12 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{ boxShadow: "0 8px 30px rgba(139, 92, 246, 0.7)" }}
          >
            <span className="text-white font-black text-2xl md:text-3xl">2-4 MONTHS</span>
            <span className="text-white/90 text-lg md:text-xl font-medium">With InterRoom</span>
          </div>

          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"></div>

          <p className="text-center text-white/80 font-medium max-w-lg mt-8 text-lg leading-relaxed">
            Drastically cut your job search time and <strong className="text-cyan-400">start earning sooner</strong>.
            This isn't just faster, it's essential for your financial future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/60 to-red-900/20 p-10 rounded-2xl border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-8">
              <TrendingDown className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-semibold text-red-300">Without InterRoom: The Costly Wait</h3>
            </div>

            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <Clock className="w-8 h-8 text-red-400" />
                  <div>
                    <div className="text-5xl font-black mb-1 text-red-300">Lost Income</div>
                    <div className="w-full bg-red-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 font-medium text-base leading-relaxed ml-12">
                  <span className="text-red-300 font-bold">8-12 Months</span> Without Pay
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <Users className="w-8 h-8 text-orange-400" />
                  <div>
                    <div className="text-5xl font-black mb-1 text-orange-300">Low Interview Rate</div>
                    <div className="w-full bg-orange-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-1/12"></div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 font-medium text-base leading-relaxed ml-12">
                  <span className="text-orange-300 font-bold">&lt;2%</span> Application Success
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <TrendingDown className="w-8 h-8 text-slate-400" />
                  <div>
                    <div className="text-5xl font-black mb-1 text-slate-300">Stagnant Salaries</div>
                    <div className="w-full bg-slate-700/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-slate-500 to-slate-600 h-2 rounded-full w-2/12"></div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 font-medium text-base leading-relaxed ml-12">
                  Most see <span className="text-slate-300 font-bold">minimal pay growth</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-900/40 to-cyan-900/20 p-10 rounded-2xl border border-violet-700/30 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-8 relative z-10">
              <Zap className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-cyan-300">With InterRoom: Rapid Results</h3>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <Target className="w-8 h-8 text-green-400" />
                  <div>
                    <div className="text-5xl font-black mb-1 text-green-300">Faster Offers</div>
                    <div className="w-full bg-green-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full w-1/3"></div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 font-medium text-base leading-relaxed ml-12">
                  Average <span className="text-green-300 font-bold">2-4 Months</span>
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <Users className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-5xl font-black mb-1 text-cyan-300">Higher Interview Rate</div>
                    <div className="w-full bg-cyan-900/30 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-400 to-violet-400 h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 font-medium text-base leading-relaxed ml-12">
                  <span className="text-cyan-300 font-bold">6-8%</span> (
                  <span className="text-violet-300 font-bold">3X Industry Average</span>)
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <TrendingUp className="w-8 h-8 text-violet-400" />
                  <div>
                    <div className="text-6xl font-black mb-1 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                      Next Level Comp
                    </div>
                    <div className="w-full bg-violet-900/30 rounded-full h-3">
                      <div className="bg-gradient-to-r from-violet-400 to-cyan-400 h-3 rounded-full w-11/12 shadow-lg shadow-violet-500/50"></div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-200 font-medium text-base leading-relaxed ml-12">
                  Our average salary bump of <span className="text-violet-300 font-bold">44%</span> proves you don't
                  move laterally, <span className="text-cyan-300 font-bold">you move up</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent mb-8"></div>
          <p className="text-slate-300 mb-8 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Ready to stop waiting and start earning? Calculate your potential savings and see if you qualify for our
            personalized support.
          </p>
          <Button
            asChild
            className="h-12 px-10 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white font-semibold text-lg shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/40 hover:scale-105"
          >
            <a href="/#calculator">
              Calculate Your Potential Savings
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
