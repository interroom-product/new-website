import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TellMeAboutYourselfPage() {
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
              How to Answer "Tell Me About Yourself" in an Interview
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is almost always the first question asked in an interview, and it's your chance to make a strong
                first impression and set the stage. It's an open-ended question, but you should have a concise,
                compelling, and relevant answer prepared.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why interviewers ask:</h2>
              <p className="text-gray-700 mb-6">
                They want to break the ice, see how you structure information, assess your communication skills, and get
                a brief overview of your background, focusing on what's relevant to the job.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Strategies for answering:</h2>
              <p className="text-gray-700 mb-6">
                Think of this as your "elevator pitch" – a brief, impactful summary of who you are professionally and
                why you're a good fit for this role. Keep it professional and work-related.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Frameworks:</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Present-Past-Future Formula:</h3>
              <div className="mb-6">
                <p className="text-gray-700 mb-2">
                  <strong>Present:</strong> Start with where you are now professionally and your current
                  role/responsibilities.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <p className="text-gray-800">
                    <strong>Example:</strong> "Currently, I work as a [Your Current Job Title] at [Current Company
                    Name], where I've spent the last X years focusing on [mention 1-2 key responsibilities or
                    achievements relevant to the new job]."
                  </p>
                </div>

                <p className="text-gray-700 mb-2">
                  <strong>Past:</strong> Briefly touch upon relevant past experience or how you got to where you are
                  today. Highlight 1-2 key career transitions or accomplishments.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <p className="text-gray-800">
                    <strong>Example:</strong> "Prior to this, I was at [Previous Company] where I developed my skills in
                    [mention relevant skill], which led me to my current role."
                  </p>
                </div>

                <p className="text-gray-700 mb-2">
                  <strong>Future:</strong> Connect your experience to the role you're interviewing for and explain why
                  you're interested in this specific opportunity.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <p className="text-gray-800">
                    <strong>Example:</strong> "Now, I'm looking to leverage my experience in [mention skills/area] in a
                    challenging role like the [Job Title] position at [Company Name], where I can contribute to [mention
                    a company goal or project you're excited about]."
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Chronological Approach (Briefly):</h3>
              <p className="text-gray-700 mb-4">
                Walk through your career history starting from your early, relevant experience to your current role,
                highlighting key skills gained and transitions.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <p className="text-red-800">
                  <strong>Caution:</strong> Keep this very concise. This isn't a narrative of your entire life story.
                  Focus only on the professional journey relevant to the job.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The STAR Method (Adapted):</h3>
              <p className="text-gray-700 mb-6">
                While STAR is typically for behavioral questions, you can adapt the principle by briefly touching on a
                situation (your career), a task (your responsibilities), an action (what you did), and a result (your
                achievements), quickly summarizing your impact.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Key Elements to Include (Regardless of Framework):
              </h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">Your current role and company (if applicable).</li>
                <li className="mb-2">
                  1-2 major accomplishments or key responsibilities relevant to the job you're interviewing for.
                </li>
                <li className="mb-2">Your relevant skills and expertise.</li>
                <li className="mb-2">A brief mention of your career trajectory or key transitions.</li>
                <li className="mb-2">
                  A concise statement about why you are interested in this specific role at this company, linking your
                  background to their needs.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Things to Avoid:</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">
                  Talking about your personal life (hobbies, family, pets - unless specifically asked in a very informal
                  setting, and even then, keep it brief).
                </li>
                <li className="mb-2">
                  Reciting your entire resume word-for-word. They have your resume; this is a summary.
                </li>
                <li className="mb-2">Talking for too long (aim for 1-2 minutes max).</li>
                <li className="mb-2">Asking "What do you want to know?" – take control of the question.</li>
                <li className="mb-2">Sounding unprepared or rambling.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Preparation is Key:</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">
                  <strong>Analyze the Job Description:</strong> Identify the key skills, responsibilities, and
                  qualifications they are looking for.
                </li>
                <li className="mb-2">
                  <strong>Tailor Your Pitch:</strong> Craft your answer to highlight the aspects of your background that
                  are most relevant to this specific job.
                </li>
                <li className="mb-2">
                  <strong>Practice:</strong> Rehearse your response until it flows naturally and confidently.
                </li>
              </ul>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-8">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Key Takeaway</h3>
                <p className="text-green-700">
                  By preparing a structured, relevant, and concise answer to "Tell me about yourself," you demonstrate
                  your communication skills and immediately position yourself as a strong candidate for the role.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
