"use client"
// import { AnimatedShinyText } from "./ui/animated-shiny-text"
import HeroVideoDialog from "./ui/hero-video-dialog"
import { BlurFade } from "./ui/blur-fade"
import Image from "next/image"
import { AuroraText } from "./ui/aurora-text"

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-4 bg-white">

      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold -tracking-[1.5px] lg:-tracking-[2.8px] leading-[40px] md:leading-[80px] lg:leading-[80px]">
        <AuroraText>Automate</AuroraText> your ops.
      </h1>

      <BlurFade>
        <h2 className="text-3xl sm:text-5xl md:text-6xl tracking-tighter font-semibold text-black leading-[40px] md:leading-[60px] mb-4">
          See all progress in one place.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-black text-center font-medium leading-[22px] md:leading-[30px] tracking-[-1px] max-w-3xl mx-auto mb-8">
          We automate your tech stack and build custom dashboards for your business to skyrocket your productivity
        </p>
      </BlurFade>

      <div className="max-w-[1000px] p-2 lg:p-4 bg-[#fae8e8] rounded-xl">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
      </div>

      {/* Logo tray */}
      <div className="w-full px-4 mt-24 mb-8 max-w-[1200px] mx-auto">
        <h3 className="text-base lg:text-lg text-center tracking-[-0.8px] text-neutral-800 font-medium mb-6">
          Whatever your tech stack is, we can automate it
        </h3>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
          {/* SVG logos */}
          <div className="h-16 flex items-center justify-center rounded-lg">
            <Image
              src="/clickup.svg"
              width={300}
              height={300}
              alt="ClickUp Logo"
            />
          </div>
          <div className="h-16 flex items-center justify-center rounded-lg">
            <Image
              src="/Asana.svg"
              width={300}
              height={300}
              alt="Asana Logo"
            />
          </div>
          <div className="h-16 flex items-center justify-center rounded-lg">
            <Image
              src="/gmail.svg"
              width={300}
              height={300}
              alt="Gmail Logo"
            />
          </div>
          <div className="h-16 flex items-center justify-center rounded-lg">
            <Image
              src="/Hubspot.svg"
              width={300}
              height={300}
              alt="HubSpot Logo"
            />
          </div>
          <div className="h-16 flex items-center justify-center rounded-lg">
            <Image
              src="/salesforce.svg"
              width={300}
              height={300}
              alt="Salesforce Logo"
            />
          </div>
          <div className="h-16 flex items-center justify-center rounded-lg">
            <Image
              src="/calendly.svg"
              width={300}
              height={300}
              alt="Calendly Logo"
            />
          </div>
          <div className="h-16 flex items-center justify-center rounded-lg">
            <Image
              src="/Slack.svg"
              width={300}
              height={300}
              alt="Slack Logo"
            />
          </div>
          <div className="h-16 flex items-center justify-center rounded-lg">
            <Image
              src="/Trello.svg"
              width={300}
              height={300}
              alt="Trello Logo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}



