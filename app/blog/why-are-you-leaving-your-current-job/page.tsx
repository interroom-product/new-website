import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function WhyAreYouLeavingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Why Are You Leaving Your Current Job? Best Ways to Respond in an Interview
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is a very common and crucial interview question. The key is to be positive, professional, and
                future-oriented, while also being honest without badmouthing your current or former employer.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why interviewers ask this:</h2>
              <p className="text-gray-700 mb-6">
                They want to understand your motivations, assess potential red flags (like job hopping, conflict issues,
                negativity), and see if your reasons align with what their company can offer.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Strategies for answering:</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Focus on the positive/future:</h3>
              <p className="text-gray-700 mb-4">
                Frame your departure as a step towards growth, new opportunities, or a better fit for your skills/goals.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-gray-800">
                  <strong>Example:</strong> "I'm looking for a role with more opportunities for [specific
                  skill/responsibility, e.g., leadership, project management] which isn't available in my current
                  position." or "I'm seeking a company culture that aligns more closely with [values, e.g.,
                  collaboration, innovation]."
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Highlight growth or career development:</h3>
              <p className="text-gray-700 mb-4">
                Explain that you've learned a lot but are ready for the next challenge.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-gray-800">
                  <strong>Example:</strong> "I've gained valuable experience at [current company], but I'm ready to take
                  on greater responsibilities and contribute in new ways that this role seems to offer."
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Discuss lack of opportunity:</h3>
              <p className="text-gray-700 mb-4">If growth or promotion isn't possible.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-gray-800">
                  <strong>Example:</strong> "While I've enjoyed my time, there are limited opportunities for advancement
                  in my current role, and I'm eager to take the next step in my career."
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Mention company changes:</h3>
              <p className="text-gray-700 mb-4">
                If there were mergers, acquisitions, or significant restructuring (be factual, not emotional).
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-gray-800">
                  <strong>Example:</strong> "Following a recent company restructure, my role and responsibilities have
                  shifted, leading me to explore opportunities that better align with my career path."
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Address a layoff:</h3>
              <p className="text-gray-700 mb-4">Be straightforward and brief.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-gray-800">
                  <strong>Example:</strong> "My position was eliminated as part of a company-wide downsizing." (If asked
                  for more detail, keep it concise and neutral).
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Explain relocation (if applicable):</h3>
              <p className="text-gray-700 mb-4">Simple and factual.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <p className="text-gray-800">
                  <strong>Example:</strong> "My family is relocating to [city/state], and I'm seeking opportunities in
                  that area."
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">If dissatisfied (use caution!):</h3>
              <p className="text-gray-700 mb-4">Frame it constructively.</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">
                  Instead of "My boss was terrible," say "I'm seeking a role with a different management style that
                  emphasizes [specific positive aspect]."
                </li>
                <li className="mb-2">
                  Instead of "I hated the culture," say "I'm looking for a culture that is more [describe the positive
                  culture you seek]."
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Things to avoid:</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">Badmouthing your current/former employer, boss, or colleagues.</li>
                <li className="mb-2">
                  Complaining about minor issues (long hours, commute, salary - unless handled strategically when asked
                  about expectations).
                </li>
                <li className="mb-2">
                  Sounding negative, bitter, or like you're running from something rather than running to something
                  positive.
                </li>
                <li className="mb-2">Giving vague or evasive answers.</li>
                <li className="mb-2">Lying (it can come back to haunt you).</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Crafting your answer:</h2>
              <ol className="list-decimal pl-6 mb-6 text-gray-700">
                <li className="mb-2">
                  <strong>Reflect:</strong> Understand your real reasons for leaving.
                </li>
                <li className="mb-2">
                  <strong>Reframe:</strong> Turn any negative reasons into positive desires for the future role/company.
                </li>
                <li className="mb-2">
                  <strong>Practice:</strong> Rehearse your answer so it sounds natural and confident.
                </li>
                <li className="mb-2">
                  <strong>Connect:</strong> Briefly link your reason for leaving to why this new opportunity is a good
                  fit.
                </li>
              </ol>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-8">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Key Takeaway</h3>
                <p className="text-green-700">
                  By preparing a thoughtful, positive, and professional answer, you can turn this potentially tricky
                  question into an opportunity to highlight your ambition and suitability for the new role.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
