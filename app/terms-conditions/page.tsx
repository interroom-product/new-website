import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Interroom's services",
}

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium mb-4">Terms & Conditions</h1>
            <p className="text-slate-600">Last updated: January 2024</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                By accessing and using Interroom's services, you accept and agree to be bound by the terms and provision
                of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">2. Service Description</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Interroom provides career coaching, job application services, resume optimization, interview
                preparation, and salary negotiation support to help professionals advance their careers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">3. User Responsibilities</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Users are responsible for providing accurate information, participating actively in coaching sessions,
                and following through on agreed-upon action items.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">4. Payment Terms</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Payment terms vary by service package. Some services operate on a success-based model, while others
                require upfront payment. Specific terms will be outlined in your service agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">5. Confidentiality</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We maintain strict confidentiality regarding all client information, career goals, and personal details
                shared during our engagement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">6. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                While we strive to provide excellent service, we cannot guarantee specific job outcomes. Our liability
                is limited to the fees paid for our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">7. Termination</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Either party may terminate the service agreement with appropriate notice as outlined in the specific
                service contract.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4">8. Contact Information</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For questions about these terms, please contact us at{" "}
                <a href="mailto:ash@interroom.me" className="text-violet-600 hover:text-violet-700">
                  ash@interroom.me
                </a>
              </p>
            </section>

            {/* Existing sections from the original code */}
            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">9. Compliance with Laws</h2>
              <p className="text-slate-600">
                You agree to comply with all applicable laws regarding your use of the Services and the Platform. You
                further agreed that information provided by you is truthful and accurate to the best of your knowledge.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">10. Indemnification</h2>
              <p className="text-slate-600">
                You acknowledge and agree that you are personally responsible for your conduct while using the Platform
                and agree to defend, indemnify and hold the Company and its employees, contractors, agents, partners,
                affiliates, owners and subsidiaries harmless from and against all loss, damage, liability, claim, fees,
                damages, penalty, judgment or expense of any kind (including, but not limited to attorneys' fees and
                expert fees) that it may incur in connection with any third party claim in any way relating to your use
                of the Platform or the use of the Platform by anyone on your behalf, purporting to act on your behalf or
                via any mobile device or operating system under your possession, custody or control. Your obligations
                under this provision shall survive termination of this Agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">11. Disclaimer</h2>
              <p className="text-slate-600 font-medium">
                THE INFORMATION ON THIS SITE IS PROVIDED ON AN "AS IS," "AS AVAILABLE" BASIS. YOU UNDERSTAND AND
                ACKNOWLEDGE THAT INFORMATION PROVIDED ON THIS WEBSITE MAY BE INACCURATE, INCOMPLETE, AND/OR OUT OF DATE.
                YOU AGREE THAT USE OF THIS SITE IS AT YOUR SOLE RISK. THE COMPANY DISCLAIMS ALL WARRANTIES OF ANY KIND,
                INCLUDING BUT NOT LIMITED TO ANY EXPRESS WARRANTIES, STATUTORY WARRANTIES, AND ANY IMPLIED WARRANTIES
                OF: MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. TO THE EXTENT YOUR
                JURISDICTION DOES NOT ALLOW LIMITATIONS ON WARRANTIES, THIS LIMITATION MAY NOT APPLY TO YOU. YOUR SOLE
                AND EXCLUSIVE REMEDY RELATING TO YOUR USE OF THE SITE SHALL BE TO DISCONTINUE USING THE SITE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">12. Limitation of Liability</h2>
              <p className="text-slate-600 font-medium mb-4">
                UNDER NO CIRCUMSTANCES WILL THE COMPANY OR ITS EMPLOYEES, AGENTS, CONTRACTORS, PARTNERS, AFFILIATES,
                OWNERS, OR SUBSIDIARIES, BE LIABLE OR RESPONSIBLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL
                (INCLUDING DAMAGES FROM LOSS OF BUSINESS, LOST PROFITS, LITIGATION, OR THE LIKE), SPECIAL, EXEMPLARY,
                PUNITIVE, OR OTHER DAMAGES, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN ANY WAY RELATING TO THE SITE,
                YOUR SITE USE, OR THE CONTENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOUR SOLE REMEDY FOR
                DISSATISFACTION WITH THE SITE AND/OR CONTENT IS TO CEASE ALL OF YOUR USE OF THE SERVICES AND THE SITE.
              </p>

              <p className="text-slate-600 mb-4">
                You may have additional rights under certain laws (including consumer laws) which do not allow the
                exclusion of implied warranties, or the exclusion or limitation of certain damages. If these laws apply
                to you, the exclusions or limitations in this Agreement that directly conflict with such laws may not
                apply to you.
              </p>

              <p className="text-slate-600">
                If any portion of the limitation on liability articulated herein is found to be invalid or unenforceable
                for any reason, our aggregate liability in any matter arising out of or related to the use of the
                Platform is limited to US $50. This limitation is a fundamental element of the Agreement and reflects a
                fair allocation of risk. The Platform would not be provided without such limitations and you agree that
                the limitations and exclusions of liability, disclaimers, and exclusive remedies specified herein will
                survive termination of this Agreement. This limitation will apply even if the Company has been advised
                of the possibility of the liability exceeding the amount.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">13. Privacy Policy</h2>
              <p className="text-slate-600">
                Our privacy policy regarding the Services and the Platform is designed to advise you about how we
                collect, use, and protect the personal information you provide. By using the Services and the Platform,
                you are accepting the practices described in this privacy policy, which is found here:{" "}
                <a href="/privacy" className="text-violet-600 hover:text-violet-700">
                  interroom.me/privacy
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">14. User Rights</h2>
              <p className="text-slate-600">
                You can access, edit, export or delete your information stored on the Platform at any time by logging
                into your account. You can also object to processing or restrict processing of your information by the
                Company.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">15. Applicable Law; Venue</h2>
              <p className="text-slate-600">
                You agree that the laws of the state of North Carolina, without regard to conflicts of laws provisions,
                will govern this Agreement and any dispute that may arise between you and the Company or its employees,
                contractors, agents, partners, affiliates, owners and subsidiaries. Any action related to or arising out
                of a dispute under or in connection with this Agreement or use of the Platform shall be brought to the
                state and federal courts located in Charlotte, North Carolina. If any part of this Agreement is
                considered invalid, it shall be enforced as effectively as possible while all other provisions remain in
                full effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">16. Severability</h2>
              <p className="text-slate-600">
                If any provision of this Agreement shall be adjudged by any court of competent jurisdiction to be
                unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary
                so that this Agreement will otherwise remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">17. Entire Agreement</h2>
              <p className="text-slate-600">
                You acknowledge and agree that this Agreement is the complete and exclusive statement of the mutual
                understanding of the parties, and that it supersedes and cancels all previous written and oral
                agreements and communications relating to the subject matter of this Agreement. Any rights not expressly
                granted herein are reserved by Company.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">18. Attorneys' Fees and Costs</h2>
              <p className="text-slate-600">
                If any legal action is necessary to enforce the terms of this Agreement, the prevailing party shall be
                entitled to reasonable attorneys' fees, expert fees and costs in addition to any other relief to which
                that party may be entitled. This provision shall be construed as applicable to the entire Agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">19. Non-waiver</h2>
              <p className="text-slate-600">
                No failure by Company to exercise, and no delay in exercising any right, power, or privilege hereunder
                on the part of Company shall operate as a waiver of any right, power, or privilege hereunder. Likewise,
                you further agree that no single or partial exercise of any right, power, or privilege hereunder by
                Company shall preclude its further exercise.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">20. Amendments</h2>
              <p className="text-slate-600">
                You understand and agree that Company may amend this Agreement from time to time within its sole
                discretion. You will be provided reasonable notice of such amendment and may terminate this Agreement
                any time by ceasing use of the Platform. Any continued use by you shall constitute assent and agreement
                to any amendment hereto.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
