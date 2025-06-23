import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-medium mb-8 text-center">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate-600 mb-8">
              Thank you for choosing to be part of our community at InterRoom LLC., doing business as InterRoom
              ("InterRoom", "we", "us", or "our"). We are committed to protecting your personal information and your
              right to privacy. This Privacy Policy explains how we collect, use, and share your information when you
              use our online career coaching platform (the "Platform").
            </p>

            <p className="text-slate-600 mb-8">
              This privacy policy applies to all information collected through our Platform (such as InterRoom.me)
              and/or any related services (we refer to them collectively in this privacy policy as the "Services").
            </p>

            <p className="text-slate-600 mb-8">
              Before you use or submit any information on or through the Platform, please carefully review this Policy.{" "}
              <strong>IF YOU DO NOT AGREE TO THIS PRIVACY POLICY, PLEASE DO NOT USE THE PLATFORM.</strong> By using any
              part of the Platform, you consent to the collection, use, and disclosure of the information you provide as
              further outlined in this Policy.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">1. Information Collected</h2>
              <p className="text-slate-600 mb-4">
                We collect the following types of information from you when you use our Service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  <strong>Account information:</strong> Full name, email address, home address, social media info,
                  demographic information, password when you register for an account.
                </li>
                <li>
                  <strong>User content:</strong> Resume details, work history, education, skills and any other
                  information you provide to generate resumes, cover letters, LinkedIn messages, or job applications.
                </li>
                <li>
                  <strong>Usage data:</strong> Interactions with our Service, features used, pages visited, frequency
                  and duration of use.
                </li>
                <li>
                  <strong>Device information:</strong> Hardware model, operating system, unique device identifiers,
                  mobile network and IP address.
                </li>
                <li>
                  <strong>Log information:</strong> Details of how you used our Service, like search queries.
                </li>
                <li>
                  <strong>Demographic information:</strong> Optional survey details like age, race, gender, veteran
                  status you provide for job applications.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">2. How and When the Information is Used</h2>
              <p className="text-slate-600">
                The information we collect is used to: provide, improve and develop our Service, processing
                applications, tracking job submissions, conducting internal research and business analysis, and to
                provide a customized user experience. The Services may use third party providers, including AI
                providers, to provide and/or improve the Services and may have access to information collected as part
                of the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">3. How We Protect Your Information</h2>
              <p className="text-slate-600">
                We advise that you do not disclose your password to anyone. In addition, we recommend you sign out of
                password-protected portions of the Platform at the end of your session with the Platform and also
                protect any mobile device or operating system with password protected features. We have implemented
                administrative, technical, and physical security measures to protect against the loss, misuse, and/or
                alteration of your information. These safeguards vary based on the sensitivity of the information that
                we collect and store. For example, we store usernames, passwords, and other log-in information in
                encrypted form. However, we cannot and do not guarantee that these measures will prevent every
                unauthorized attempt to access, use, or disclose your information because despite our efforts, no
                internet and/or other electronic transmissions can be completely secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">
                4. Methods We Use to Protect Your Information
              </h2>
              <p className="text-slate-600">
                We use security software to protect the confidentiality of your personal information. In addition, our
                business practices are reviewed periodically for compliance with policies and procedures governing the
                security and confidentiality of our information. Our business practices limit employee access to
                confidential information, and limit the use and disclosure of such information to authorized persons. We
                use trusted third-party service providers to store and process data on our behalf.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">5. Data Retention & Security</h2>
              <p className="text-slate-600">We retain your data as long as necessary to provide the Services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">6. Who Has Access to the Information</h2>
              <p className="text-slate-600 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  <strong>Third-Party Service Providers:</strong> Companies that assist in providing career coaching, AI
                  processing, data analytics, and job application tracking.
                </li>
                <li>
                  <strong>AI Companies:</strong> To enhance services and for internal business purposes.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required to comply with applicable laws and regulations.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">7. Sharing with Third-Party AI Tools</h2>
              <p className="text-slate-600 mb-4">
                In our dedication to offering advanced AI-powered services, including but not limited to InterRoom.me
                and InterRoom portal, we may periodically disclose certain user data to reputable third-party AI tools.
                This collaboration is critical for augmenting the performance and individualization of our services.
                Here are the essential details:
              </p>
              <div className="space-y-4 text-slate-600">
                <div>
                  <h3 className="font-medium text-slate-800 mb-2">Types of Data Shared:</h3>
                  <p>
                    The data disclosed may comprise, but is not limited to, account information (such as full name,
                    email address, and password), user-generated content (including resume details, employment history,
                    educational background, and skills), usage data (encompassing service interaction, visited pages,
                    frequency and duration of usage), device information (covering hardware model, operating system,
                    unique identifiers, and mobile network), and log information (detailing service usage such as search
                    queries and, when provided, job-related emails).
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 mb-2">Purpose of Data Sharing:</h3>
                  <p>
                    The objective of this data sharing is to train and refine the AI models, thereby enhancing their
                    capability in assisting users with resume creation, cover letter drafting, LinkedIn messaging, and
                    job application optimization. This results in a more tailored and efficient user experience.
                    Additionally, users may opt to grant access to their email accounts. This access is exclusively
                    utilized to identify job-related emails (for instance, interview schedules, application statuses,
                    and job offers) to facilitate automatic updates to our services. Granting access to emails is purely
                    optional and aims to augment the user experience with our offerings.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 mb-2">User Consent:</h3>
                  <p>
                    User agrees and acknowledges that by using the services provided by InterRoom, Data will be shared
                    with third-party AI tools. User provides InterRoom with consent to share the User Data with
                    third-party AI tools in connection with the services described herein.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 mb-2">Data Security and Privacy:</h3>
                  <p>
                    The third-party AI tools with which data is shared are meticulously selected based on their
                    adherence to our stringent standards of data security and privacy. We continuously monitor these
                    tools to ensure compliance, guaranteeing that your data is managed with the highest level of care
                    and confidentiality.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">8. Children</h2>
              <p className="text-slate-600">
                The Services are not intended for use by children under the age of 16. Users must be at least 16 years
                of age to use the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">9. Consent</h2>
              <p className="text-slate-600">
                By using the Platform, you consent to the collection and use of your personal information as described
                in this Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">10. Changes to Privacy Policy</h2>
              <p className="text-slate-600">
                The Company may update this policy as needed to comply with legal requirements. You will be notified of
                significant changes through our Platform or Services. Your continued use of the Services constitutes
                assent to such changes, should they occur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-medium mb-4 text-slate-800">11. Contact</h2>
              <p className="text-slate-600">
                If you have any questions or concerns regarding our Privacy Policy, please send us a detailed message to{" "}
                <a href="mailto:admin@interroom.me" className="text-violet-600 hover:text-violet-700">
                  admin@interroom.me
                </a>{" "}
                and we will try to resolve your concerns.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
