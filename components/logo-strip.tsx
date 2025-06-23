import Image from "next/image"

export default function LogoStrip() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <p className="text-center text-slate-600 mb-8">Our candidates land jobs at top companies</p>
        <div className="flex flex-wrap justify-around items-center gap-x-8 gap-y-6 opacity-60 group">
          <div className="flex items-center transition-all duration-300 hover:scale-110 hover:opacity-100 cursor-pointer">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google__G__logo.svg-cywWUSQPJ4cLCwiYCIocGfUaj5bF3r.png"
              alt="Google"
              width={60}
              height={30}
              className="object-contain group-hover:opacity-70 hover:opacity-100"
            />
          </div>
          <div className="flex items-center transition-all duration-300 hover:scale-110 hover:opacity-100 cursor-pointer">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 group-hover:opacity-70 hover:opacity-100"
            >
              <path
                d="M36 18C36 8.059 27.941 0 18 0C8.059 0 0 8.059 0 18C0 26.99 6.584 34.453 15.188 35.812V23.203H10.617V18H15.188V14.039C15.188 9.527 17.88 7.031 22.001 7.031C23.969 7.031 26.031 7.383 26.031 7.383V11.813H23.766C21.546 11.813 20.812 13.193 20.812 14.625V18H25.781L24.953 23.203H20.812V35.812C29.416 34.453 36 26.99 36 18Z"
                fill="#1877F2"
              />
            </svg>
          </div>
          <div className="flex items-center transition-all duration-300 hover:scale-110 hover:opacity-100 cursor-pointer">
            <Image
              src="https://logo.clearbit.com/doordash.com"
              alt="DoorDash"
              width={60}
              height={30}
              className="object-contain group-hover:opacity-70 hover:opacity-100"
            />
          </div>
          <div className="flex items-center transition-all duration-300 hover:scale-110 hover:opacity-100 cursor-pointer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"
              alt="Meta"
              width={70}
              height={30}
              className="object-contain group-hover:opacity-70 hover:opacity-100"
            />
          </div>
          <div className="flex items-center transition-all duration-300 hover:scale-110 hover:opacity-100 cursor-pointer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/2560px-Uber_logo_2018.png"
              alt="Uber"
              width={70}
              height={30}
              className="object-contain group-hover:opacity-70 hover:opacity-100"
            />
          </div>
          <div className="flex items-center transition-all duration-300 hover:scale-110 hover:opacity-100 cursor-pointer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/1200px-Snapchat_logo.svg.png"
              alt="Snapchat"
              width={90}
              height={45}
              className="object-contain group-hover:opacity-70 hover:opacity-100"
            />
          </div>
          <div className="flex items-center transition-all duration-300 hover:scale-110 hover:opacity-100 cursor-pointer">
            <Image
              src="https://logo.clearbit.com/rippling.com"
              alt="Rippling"
              width={90}
              height={45}
              className="object-contain group-hover:opacity-70 hover:opacity-100"
            />
          </div>
          <div className="flex items-center transition-all duration-300 hover:scale-110 hover:opacity-100 cursor-pointer">
            <Image
              src="https://logo.clearbit.com/divertinc.com"
              alt="Divert"
              width={90}
              height={45}
              className="object-contain group-hover:opacity-70 hover:opacity-100"
            />
          </div>
          <div className="flex items-center transition-all duration-300 hover:scale-110 hover:opacity-100 cursor-pointer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
              alt="Stripe"
              width={90}
              height={45}
              className="object-contain group-hover:opacity-70 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
