import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accelerate Your Job Search — Free Live Webinar",
  description: "Join Ash Sheikh for a free live webinar on September 16, 2026 at 3:00 PM PST / 6:00 PM EST.",
}

export default function NextPlayLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
