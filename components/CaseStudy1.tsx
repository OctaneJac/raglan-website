import { Check } from "lucide-react"
import Image from "next/image"

export default function CaseStudySection() {
  const features = [
    "24/7 live automation",
    "Data is updated daily",
    "Custom password protected dashboard per client",
    "Tracks delayed sales",
  ]

  return (
    <section id="case-studies" className="w-full py-12 md:py-24 lg:py-16">
      <div className="container px-4 md:px-6 mx-auto max-w-[1200px]">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <p className="text-base text-[#017AFF] font-semibold tracking-tight text-left">Case Study #1</p>
              <h2 className="text-xl font-bold tracking-tighter -tracking-2 sm:text-4xl text-left leading-tight">
                99.9% accurate revenue tracking automation for ADDX Studio
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-600 text-left -tracking-[0.6px] leading-tight">
                Addx Studio run a content based performance offer, but tracking sales from content is hard. We solved it.
              </p>
            </div>
          </div>

          {/* Features List - aligned bottom-right */}
          <div className="flex flex-col justify-end items-start sm:items-end space-y-4">
          <ul className="grid gap-2 tracking-tight">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        </div>
        <div className="mt-12 rounded-lg bg-blue-50 p-4">
          <Image
            src="/Case Study 1.png"
            alt="Document analysis interface showing AI-powered document processing"
            className="rounded-lg"
            width={1200}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}
