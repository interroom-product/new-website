import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SalaryExpectationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            How to Answer "What Are Your Salary Expectations?" with Confidence
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is often a nerve-wracking question, but answering it well is crucial for getting paid what you're
              worth. Being prepared allows you to respond strategically and confidently.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why they ask:</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Interviewers ask to understand if your expectations align with their budget, to screen candidates, and to
              begin the negotiation process.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Strategies for answering:</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Do Your Research (Essential!):</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>
                Research average salaries for similar roles in the same geographic location and industry. Use sites like
                Glassdoor, LinkedIn Salary, Salary.com, Payscale, and industry-specific salary surveys.
              </li>
              <li>Consider your own experience, skills, education, and the size/type of the company.</li>
              <li>Know the typical salary range for someone with your qualifications in that specific market.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Delay if Possible (Early in the process):</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If asked early in the interview process (first or second interview), you can try to defer the question
              until you have a better understanding of the role's responsibilities and the full compensation package
              (salary, benefits, bonuses, etc.).
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-gray-700 italic">
                <strong>Example:</strong> "That's a great question. I'd like to learn more about the full scope of
                responsibilities for this role and the overall compensation package before discussing specific salary
                expectations. However, I am confident that we can come to a mutually agreeable figure."
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 italic">
                <strong>Example:</strong> "My priority right now is to determine if this role is a good fit. Based on my
                research, I'm looking for a package competitive with similar roles in [Your City] for someone with my
                experience, but I'm open to discussing specifics once we've established that there's a mutual interest."
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Provide a Range (More common later in the process):
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If pressed or if it's later in the process (after you know more), provide a salary range rather than a
              single number. This gives you flexibility.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Make sure your lowest number in the range is a figure you are genuinely comfortable with. The range should
              be based on your research.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <p className="text-gray-700 italic">
                <strong>Example:</strong> "Based on my research for similar roles in [Your City] with my level of
                experience, I'm looking for a salary in the range of [$X to $Y]."
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-gray-700">
                <strong>Tip:</strong> The higher end of your range can sometimes be slightly above your research to
                allow for negotiation, but don't be unrealistic.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Focus on Total Compensation:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Remind them that salary is just one part of the picture.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 italic">
                <strong>Example:</strong> "While I'm seeking a salary in the range of [$X to $Y], I'm also very
                interested in the total compensation package, including benefits, bonuses, opportunities for
                professional development, and [mention specific benefits you value, if known]."
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Align with Industry/Company Standards (If known):
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have insider knowledge about the company's salary bands, you can reference that (carefully).
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 italic">
                <strong>Example:</strong> "Based on my understanding of typical compensation for this type of role at a
                company like [Company Name], I'm expecting a salary in the range of [$X to $Y]."
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">If They Ask for a Specific Number:</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>Reiterate your range.</li>
              <li>
                If they insist on a single number, provide the higher end of your comfortable range, explaining it's
                contingent on the full package.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Things to avoid:</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>Giving a random number without research.</li>
              <li>Naming your absolute minimum number upfront.</li>
              <li>Saying "I don't know" or "Whatever you offer."</li>
              <li>Being rigid and unwilling to discuss a range or the total package.</li>
              <li>Stating a salary that is wildly out of sync with the market or the role.</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-8">
              <p className="text-gray-700 font-medium">
                <strong>Key Takeaway:</strong> Preparation is key. Research the market value of the role, determine your
                desired range, and practice your response so you can deliver it confidently. This question is an
                opportunity to demonstrate your understanding of your value.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
