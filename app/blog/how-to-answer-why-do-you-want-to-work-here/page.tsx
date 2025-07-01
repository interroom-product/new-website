import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function WhyWorkHerePage() {
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
            How to Answer "Why Do You Want to Work Here?"
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is a critical question that assesses your motivation, genuine interest, and how well you've
              researched the company and the role. A strong answer shows you're not just applying for any job, but
              specifically this job at this company.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why interviewers ask:</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              They want to see if you understand their company, its mission, values, and work; whether you're truly
              enthusiastic about the opportunity; and how your goals and values align with theirs.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Strategies for answering:</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Do Your Research (Absolutely Essential!):</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>
                <strong>Visit the company website:</strong> Read their "About Us," mission statement, values, news
                releases, and product/service descriptions.
              </li>
              <li>
                <strong>Check their social media:</strong> Get a sense of their culture and recent activities.
              </li>
              <li>
                <strong>Look for recent news:</strong> Have they launched a new product? Received an award? Made a
                significant hire?
              </li>
              <li>
                <strong>Research the role:</strong> Understand the key responsibilities and challenges.
              </li>
              <li>
                <strong>Look up the interviewers (if possible):</strong> Find common ground or understand their
                department.
              </li>
              <li>
                <strong>Read reviews (Glassdoor, etc.):</strong> Get insight into the culture (take reviews with a grain
                of salt, but look for patterns).
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Connect Your Skills and Goals to the Role/Company:
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Explain how your specific skills, experience, and career goals align with the requirements of the job and
              the direction of the company.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 italic">
                <strong>Example:</strong> "I've followed [Company Name]'s work in [specific area, e.g., sustainable
                technology] for some time, and I'm particularly impressed by [mention a specific project, product, or
                achievement]. My background in [mention relevant skill/experience] aligns perfectly with the challenges
                mentioned in the job description for the [Job Title] role, and I'm excited about the opportunity to
                contribute to [mention a company goal or mission]."
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Reference Specific Company Aspects You Admire:
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mention something specific you learned during your research that genuinely resonates with you. This shows
              you did your homework.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Examples:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-4">
              <li>Their company culture (mention a specific value).</li>
              <li>Their mission statement or vision.</li>
              <li>A specific product, service, or project.</li>
              <li>Their impact on the community or industry.</li>
              <li>Their leadership or innovation in a field.</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 italic">
                <strong>Example:</strong> "I was particularly drawn to [Company Name]'s commitment to [mention specific
                value, e.g., innovation/customer service] as highlighted on your website. This aligns with my own
                professional values, and I'm eager to work for a company that prioritizes [that value]."
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Explain How You Can Contribute:</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Briefly touch upon how your presence will benefit them.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-gray-700 italic">
                <strong>Example:</strong> "I believe my experience in [specific area] and my ability to [mention a key
                skill] would allow me to make a significant contribution to your team's efforts in [mention a relevant
                project or goal]."
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Be Genuine and Enthusiastic:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your passion (or lack thereof) is often apparent. Let your genuine interest show.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Avoid generic answers:</strong> Don't say "It seems like a good company" or "I need a job."
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              Structuring Your Answer (The "Connect the Dots" Method):
            </h2>
            <ol className="list-decimal pl-6 text-gray-700 leading-relaxed mb-6">
              <li>
                <strong>Acknowledge their work:</strong> Start by mentioning something specific you admire about the
                company (from your research).
              </li>
              <li>
                <strong>Connect to the role:</strong> Explain how the specific job fits into your career path or
                utilizes your key skills.
              </li>
              <li>
                <strong>Align values/goals:</strong> Talk about how the company's mission, values, or culture resonate
                with your own.
              </li>
              <li>
                <strong>State your contribution:</strong> Briefly explain how you see yourself contributing to their
                success.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Things to avoid:</h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-6">
              <li>Giving a generic answer that could apply to any company.</li>
              <li>Focusing only on what you get from the company (salary, benefits, convenience).</li>
              <li>Sounding like you didn't do any research.</li>
              <li>Badmouthing previous employers while answering this question.</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-8">
              <p className="text-gray-700 font-medium">
                By preparing a tailored answer based on thorough research, you demonstrate your genuine interest and
                show the interviewer that you're a thoughtful candidate who understands and is excited about the
                opportunity.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
