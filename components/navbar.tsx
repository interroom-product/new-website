"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/interroom-logo.png"
            alt="InterRoom"
            width={160}
            height={48}
            className="h-12 w-auto md:h-14 md:w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/services"
            className={`text-sm font-medium ${
              pathname === "/services" ? "text-violet-600" : "text-slate-700 hover:text-violet-600"
            } transition-colors`}
          >
            Services
          </Link>
          <Link
            href="/coaches"
            className={`text-sm font-medium ${
              pathname === "/coaches" ? "text-violet-600" : "text-slate-700 hover:text-violet-600"
            } transition-colors`}
          >
            Coaches
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium ${
              pathname.startsWith("/blog") ? "text-violet-600" : "text-slate-700 hover:text-violet-600"
            } transition-colors`}
          >
            Blog
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col items-center space-y-6 mt-6">
              {/* Centered logo in mobile navigation */}
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/images/interroom-logo.png"
                  alt="InterRoom"
                  width={180}
                  height={54}
                  className="h-16 w-auto"
                />
              </Link>
              <Link
                href="/services"
                className={`text-lg font-medium ${pathname === "/services" ? "text-violet-600" : ""}`}
              >
                Services
              </Link>
              <Link
                href="/coaches"
                className={`text-lg font-medium ${pathname === "/coaches" ? "text-violet-600" : ""}`}
              >
                Coaches
              </Link>
              <Link
                href="/blog"
                className={`text-lg font-medium ${pathname.startsWith("/blog") ? "text-violet-600" : ""}`}
              >
                Blog
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
