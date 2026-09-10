import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Accelerate Your Job Search — Free Live Webinar",
  description: "Join Ash Sheikh for a free live webinar on September 16, 2026 at 3:00 PM PST / 6:00 PM EST.",
}

export default function NextPlayLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script
        id="meta-pixel"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3109210089419448');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=3109210089419448&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {children}
    </>
  )
}
