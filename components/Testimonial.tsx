import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  companyLogo: string
}

function Testimonial({ quote, author, role, company, companyLogo }: TestimonialProps) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col justify-between gap-6 p-6">
        <div className="space-y-6">
          <Image
            src={companyLogo || "/placeholder.svg"}
            alt={`${company} logo`}
            width={32}
            height={32}
            className="h-6 w-auto"
          />
          <p className="text-base font-medium tracking-tight leading-snug">{quote}</p>
        </div>
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "As a PhD candidate, Unriddle is my number one app for annotations, lit reviews and manuscripts.",
      author: "Tylar",
      role: "PhD Student",
      company: "Stanford",
      companyLogo: "Asana.svg",
    },
    {
      quote: "With Unriddle, I'm able to do in 30 minutes what used to take 3 hours. There's nothing else like it.",
      author: "Paul",
      role: "R&D Scientist",
      company: "Biogen",
      companyLogo: "Slack.svg",
    },
    {
      quote:
        "Interacting with documents on Unriddle is like speaking to the team who wrote the research paper. It's fantastic.",
      author: "Michael",
      role: "Physician",
      company: "Cedars Sinai",
      companyLogo: "gmail.svg",
    },
  ]

  return (
<section className="container py-16 flex flex-col items-center justify-center mx-auto">
<div className="text-center mb-8 px-1">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">Researchers love using Unriddle</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full max-w-screen-lg px-4">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}
