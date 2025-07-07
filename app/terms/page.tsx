import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms & Conditions",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-medium mb-8 text-slate-800">Terms & Conditions</h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              Welcome to InterRoom provided by InterRoom, LLC. (the "Company"). By using and other online tools and
              services provided by the Company (the "Services") you agree to comply with and be bound by the following
              terms and conditions of use. Please review these terms and conditions carefully. If you do not agree to
              these terms and conditions, you should not use the Services.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">1. Agreement</h2>
              <p className="text-slate-600">
                This Agreement (the "Agreement") specifies the Terms and Conditions for access to and use of the
                Services provided by the Company and describes the terms and conditions applicable to your access of and
                use of the Services, which is owned and operated by the Company. We may modify this Agreement at any
                time upon posting of a modified agreement. Any such modifications shall be effective immediately. You
                can view the most recent version of these terms at any time at www.interroom.me (the "Platform"). Each
                use by you shall constitute and be deemed your unconditional acceptance of this Agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">2. Ownership</h2>
              <p className="text-slate-600">
                All content included in the Services is and shall continue to be the property of the Company or our
                content suppliers and is protected under applicable copyright, patent, trademark, and other proprietary
                rights. Any copying, redistribution, use or publication by you of any such content or any part of the
                Services or the Company's website is prohibited, except as expressly permitted in this Agreement. Under
                no circumstances will you acquire any ownership rights or other interest in any content by or through
                your use of these Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">3. Intended Audience</h2>
              <p className="text-slate-600">
                You must be at least 16 years old to use the Services. By accessing or using any part of the Service,
                you represent that you have read, understood, and agree to be bound by the terms of this Agreement. We
                grant you a non-transferable, non-exclusive, revocable license to use the Service for your own personal
                use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">
                4. Account Registration and User-Generated Content
              </h2>
              <p className="text-slate-600 mb-4">
                By using the Platform, you will need to create an account. You represent and warrant that:
              </p>

              <ol className="list-decimal pl-6 space-y-2 text-slate-600">
                <li>all registration information you submit will be true,</li>
                <li>
                  you will maintain the accuracy of such information and promptly update such registration information
                  as necessary;
                </li>
                <li>
                  you are solely responsible for any data, text, or other content (the "Content") that you input into
                  the Services.
                </li>
                <li>
                  You grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, and distribute
                  your Content for the purpose of providing the Services;
                </li>
                <li>
                  you will not access the Platform through automated or non-human means, whether through a bot, script,
                  or otherwise;
                </li>
                <li>you will not use the Platform for any illegal or unauthorized purpose; and</li>
                <li>your use of the Platform will not violate any applicable law or regulation.</li>
              </ol>

              <p className="text-slate-600 mt-4">
                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right
                to suspend or terminate your account and refuse any and all current or future use of the Platform (or
                any portion thereof).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">5. Prohibited Sharing</h2>
              <p className="text-slate-600 mb-4">
                The account provided to you upon registration is intended for your exclusive use. You are the sole
                authorized user of this account and are responsible for maintaining its confidentiality and security.
                You agree not to share, transfer, or disclose your account login credentials, including account
                usernames and passwords, with any other individual or entity. Your account access is personal and
                non-transferable.
              </p>

              <p className="text-slate-600">
                Sharing your account credentials with others or allowing unauthorized access to your account is strictly
                prohibited. You acknowledge that such actions can compromise the security and integrity of your account
                and may result in unauthorized use of our services. Violation of this policy may result in the
                suspension or termination of your account and access to our services, without the possibility of refund
                or compensation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">6. Trademarks; Intellectual Property</h2>
              <p className="text-slate-600">
                InterRoom and others are either trademarks or registered trademarks of the Company. Other product and
                company names mentioned on this Platform may be trademarks of their respective owners. The Company owns
                all right, title and interest in and to the Platform and related services. Unless expressly granted
                herein, the Company reserves all rights, title, and interest in all intellectual property owned or
                created by the Company, including without limitation, Trademark, Patent, Copyright, and Trade Secret
                rights. By using the Services, you agree not to infringe on these rights and to comply with all
                applicable laws. You are not granted any right or license with respect to our trademarks, service marks,
                copyrights, or any other rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">7. Third-Party Services</h2>
              <p className="text-slate-600">
                The Service may include or offer third-party products or services. These third-party services are
                provided for your convenience only. We do not endorse or assume any responsibility for any such
                third-party sites, information, materials, products, or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">8. Platform Use</h2>
              <p className="text-slate-600">
                Your use of this Platform and the Services is limited to that specified in this Agreement. You agree not
                to copy materials on the Platform, reverse engineer or break into the site, or use materials, products
                or services in violation of any law. You agree not use post, transmit, or otherwise make available any
                materials that disparage the Company or would otherwise harm the Company, including without limitation,
                any viruses, programs, ransomware, worms, keyloggers, spyware, or any other device or software that may
                be used to damage or hijack the operation of, or monitor the use of, any hardware, software, or
                equipment. The use of this Platform is at the discretion of the Company and the Company may terminate
                your use of this website at any time.
              </p>
            </section>

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
              <h2 className="text-2xl font-medium mb-4 text-slate-800">17. Termination</h2>
              <p className="text-slate-600">
                The Company may terminate this Agreement at any time, with or without notice, for any reason.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">18. Refund Policy</h2>
              <p className="text-slate-600 mb-4">
                To request a refund and cancel your subscription, you will need to reach out to our support team at{" "}
                <a href="mailto:admin@interroom.me" className="text-violet-600 hover:text-violet-700">
                  admin@interroom.me
                </a>
                . If you cancel within the initial 7 calendar days of your subscription payment, you are eligible for a
                100% refund on the subscription fee for the current month. On the other hand, you understand and agree
                that if your cancellation is requested after the 7th day of subscription, you are not eligible for
                refunds for the current month. However, your subscription will be terminated for the subsequent months,
                and no further charges will be incurred unless you resubscribe.
              </p>

              <p className="text-slate-600">
                InterRoom reserves the right to update or modify this prorated refund policy at any time without prior
                notice. You understand and agree that any refunds available are solely for the current month's
                subscription fee and are not applicable to previous months. The refunds will be processed using the
                original payment method used for the subscription. This policy exclusively pertains to subscriptions
                initiated on or after August 21st, 2023. Any purchases made prior to this date will not qualify for the
                refund policy outlined herein.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">19. Contact</h2>
              <p className="text-slate-600">
                Questions regarding the Services may be directed to{" "}
                <a href="mailto:admin@interroom.me" className="text-violet-600 hover:text-violet-700">
                  admin@interroom.me
                </a>
                .
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">20. Entire Agreement</h2>
              <p className="text-slate-600">
                You acknowledge and agree that this Agreement is the complete and exclusive statement of the mutual
                understanding of the parties, and that it supersedes and cancels all previous written and oral
                agreements and communications relating to the subject matter of this Agreement. Any rights not expressly
                granted herein are reserved by Company.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">21. Attorneys' Fees and Costs</h2>
              <p className="text-slate-600">
                If any legal action is necessary to enforce the terms of this Agreement, the prevailing party shall be
                entitled to reasonable attorneys' fees, expert fees and costs in addition to any other relief to which
                that party may be entitled. This provision shall be construed as applicable to the entire Agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">22. Non-waiver</h2>
              <p className="text-slate-600">
                No failure by Company to exercise, and no delay in exercising any right, power, or privilege hereunder
                on the part of Company shall operate as a waiver of any right, power, or privilege hereunder. Likewise,
                you further agree that no single or partial exercise of any right, power, or privilege hereunder by
                Company shall preclude its further exercise.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">23. Amendments</h2>
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
