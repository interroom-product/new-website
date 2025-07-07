import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image src="/interroom-logo.png" alt="InterRoom Logo" width={120} height={30} className="h-8 w-auto" />
            </div>
            <p className="text-slate-600 mb-6">
              Your personalized job search team, handling everything from finding and applying to jobs to coaching you
              through interviews.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/interroom.me/"
                className="text-slate-400 hover:text-violet-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/interroom/"
                className="text-slate-400 hover:text-violet-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCIbZOJu10wjDNApWhc5qWxA"
                className="text-slate-400 hover:text-violet-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/coaches" className="text-slate-600 hover:text-violet-600 transition-colors">
                  Coaches
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-violet-600 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
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
