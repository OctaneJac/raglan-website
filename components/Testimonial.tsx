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
            src={companyLogo || "/placeholder.png"}
            alt={`${company} logo`}
            width={200}
            height={200}
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
      quote: "Uzair saved me hours of messy mannual work trying to figure out sales and onboarding. I can't recommend his agency enough.",
      author: "Dan Krosby",
      role: "Mentor at Wepreneurs",
      company: "Stanford",
      companyLogo: "/Wepreneurs.png",
    },
    {
      quote: "I approached Raglan with the complex problems of tracking sales since I couldn't find a tool for it. They provided a solution that works.",
      author: "Abdullah",
      role: "Founder at ADDX Studio",
      company: "Biogen",
      companyLogo: "/ADDX Studio.png",
    },
    {
      quote:
        "Uzair and his team setup my website and all other onboarding flows in a week. Real top performers right here.",
      author: "SniperADZ",
      role: "Founder at FundedFast",
      company: "Cedars Sinai",
      companyLogo: "/fundedfast.png",
    },
  ]

  return (
<section className="container py-16 flex flex-col items-center justify-center mx-auto">
<div className="text-center mb-8 px-1">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl">Hear from our clients</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full max-w-screen-lg px-4">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}
