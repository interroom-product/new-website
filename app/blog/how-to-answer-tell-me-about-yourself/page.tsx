import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "How to Answer 'Tell Me About Yourself' in an Interview",
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-20">
        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <Badge variant="secondary" className="mb-4">
                Interview Tips
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How to Answer 'Tell Me About Yourself' in an Interview
              </h1>
              <div className="flex items-center text-gray-600 space-x-4">
                <span>December 8, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/placeholder.svg?height=400&width=800&text=Tell+Me+About+Yourself"
                alt="Tell Me About Yourself"
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8">
                "Tell me about yourself" is typically the first question in any interview, making it your chance to set
                a strong first impression. Think of it as your professional elevator pitch—a concise, compelling summary
                that highlights your most relevant qualifications and sets the tone for the entire conversation.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Interviewers Ask This Question</h2>
              <p className="mb-6">This seemingly simple question serves multiple purposes:</p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>
                  <strong>Ice breaker:</strong> Helps both parties settle into the conversation
                </li>
                <li>
                  <strong>Communication assessment:</strong> Evaluates your ability to communicate clearly and concisely
                </li>
                <li>
                  <strong>Relevant background:</strong> Gives them an overview of your professional journey
                </li>
                <li>
                  <strong>Interview direction:</strong> Provides talking points for follow-up questions
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proven Frameworks</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Present-Past-Future Method</h3>
              <p className="mb-4">This is the most popular and effective structure:</p>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Framework Example:</p>
                  <div className="text-blue-700 space-y-3">
                    <p>
                      <strong>Present:</strong> "I'm currently a Senior Marketing Manager at TechCorp, where I lead a
                      team of five in developing digital marketing strategies for B2B clients."
                    </p>
                    <p>
                      <strong>Past:</strong> "I got here through six years of progressive experience in digital
                      marketing, starting as a coordinator and working my way up. My biggest achievement was launching a
                      campaign that increased lead generation by 150%."
                    </p>
                    <p>
                      <strong>Future:</strong> "I'm now looking to take the next step in my career by joining a company
                      like yours, where I can apply my expertise in marketing automation to help scale your customer
                      acquisition efforts."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Chronological Approach</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "I started my career in software development right after graduating with a Computer Science degree.
                    I spent three years at StartupXYZ building mobile applications, then moved to MidSize Corp where I
                    led the development of their e-commerce platform. Most recently, I've been at BigTech Inc. for two
                    years as a Senior Developer, focusing on cloud architecture. Throughout this journey, I've developed
                    expertise in full-stack development and team leadership, which is exactly what drew me to this
                    role."
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Adapted STAR Method</h3>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="pt-6">
                  <p className="font-semibold text-blue-800 mb-2">Example Response:</p>
                  <p className="text-blue-700">
                    "I'm a project manager with a track record of delivering complex initiatives on time and under
                    budget. For example, I recently led a cross-functional team of 15 people to implement a new CRM
                    system across three departments, completing the project two weeks early and saving the company
                    $200,000. This experience reinforced my passion for process improvement and team collaboration,
                    which is why I'm excited about the opportunity to bring these skills to your organization."
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Elements to Include</h2>
              <ul className="list-disc pl-6 mb-8 space-y-3">
                <li>
                  <strong>Current role and key responsibilities:</strong> What you do now
                </li>
                <li>
                  <strong>1-2 major accomplishments:</strong> Quantifiable achievements when possible
                </li>
                <li>
                  <strong>Relevant skills and expertise:</strong> What makes you qualified
                </li>
                <li>
                  <strong>Career trajectory:</strong> How you got to where you are
                </li>
                <li>
                  <strong>Connection to the opportunity:</strong> Why you're interested in this role
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What to Avoid</h2>
              <Card className="bg-red-50 border-red-200 mb-8">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-red-800 mb-3">Don't Include:</h4>
                  <ul className="list-disc pl-6 text-red-700 space-y-2">
                    <li>Personal life details (family, hobbies, personal struggles)</li>
                    <li>Your entire resume from start to finish</li>
                    <li>Responses longer than 2 minutes</li>
                    <li>Unprepared, rambling answers</li>
                    <li>Negative comments about previous employers</li>
                    <li>Irrelevant information that doesn't connect to the role</li>
                  </ul>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Preparation Strategy</h2>
              <ol className="list-decimal pl-6 mb-8 space-y-4">
                <li>
                  <strong>Analyze the job description:</strong> Identify the most important qualifications
                </li>
                <li>
                  <strong>Choose your best examples:</strong> Select 1-2 achievements that demonstrate these
                  qualifications
                </li>
                <li>
                  <strong>Craft your narrative:</strong> Write out your response using one of the frameworks
                </li>
                <li>
                  <strong>Practice out loud:</strong> Rehearse until it sounds natural, not memorized
                </li>
                <li>
                  <strong>Time yourself:</strong> Keep it between 60-90 seconds
                </li>
                <li>
                  <strong>Tailor for each interview:</strong> Adjust emphasis based on the specific role
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sample Response Template</h2>
              <Card className="bg-gray-50 border-gray-200 mb-8">
                <CardContent className="pt-6">
                  <p className="font-semibold text-gray-800 mb-3">Fill-in-the-Blank Template:</p>
                  <div className="text-gray-700 space-y-2">
                    <p>"I'm currently a [CURRENT TITLE] at [COMPANY], where I [KEY RESPONSIBILITY]."</p>
                    <p>
                      "I have [X YEARS] of experience in [RELEVANT FIELD], and my biggest achievement was [SPECIFIC
                      ACCOMPLISHMENT WITH NUMBERS]."
                    </p>
                    <p>
                      "What excites me about this opportunity is [CONNECTION TO NEW ROLE], and I believe my experience
                      in [RELEVANT SKILL/AREA] would allow me to [VALUE YOU'LL BRING]."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200 mt-12">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-green-800 mb-3">Key Takeaway</h3>
                  <p className="text-green-700">
                    Your "Tell me about yourself" response should be a strategic, well-structured summary that positions
                    you as the ideal candidate. It's not your life story—it's a professional pitch that highlights your
                    most relevant qualifications and demonstrates your communication skills. Practice until it feels
                    natural, but always be prepared to adapt based on the specific role and company.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
