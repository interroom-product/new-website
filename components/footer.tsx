import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 rounded bg-violet-600 flex items-center justify-center text-white font-medium">
                ir.
              </div>
              <span className="text-lg font-medium">InterRoom</span>
            </div>
            <p className="text-slate-600 mb-6">
              Your personalized job search team, handling everything from finding and applying to jobs to coaching you
              through interviews.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-violet-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-violet-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-violet-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-violet-600 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-600 hover:text-violet-600 transition-colors">
                  Job Sourcing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-violet-600 transition-colors">
                  Resume Rewrite
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-violet-600 transition-colors">
                  Interview Prep
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-violet-600 transition-colors">
                  Application Submission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-violet-600 transition-colors">
                  Offer Negotiation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-600 hover:text-violet-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-slate-600 hover:text-violet-600 transition-colors">
                  Coaches
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-violet-600 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-violet-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-violet-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Subscribe to our newsletter</h3>
            <p className="text-slate-600 mb-4">Get the latest job search tips and insights delivered to your inbox.</p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="bg-white" />
              <Button className="bg-violet-600 hover:bg-violet-700 shrink-0">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">© 2025 InterRoom. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-slate-500 hover:text-violet-600 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-violet-600 text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-500 hover:text-violet-600 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
