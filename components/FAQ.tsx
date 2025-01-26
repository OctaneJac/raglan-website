import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Unriddle?",
    answer:
      "Unriddle is an AI-powered platform that helps you analyze and understand complex data and documents quickly and efficiently.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a free trial that allows you to explore all of Unriddle's features without any commitment. No credit card required.",
  },
  {
    question: "Can I trust Unriddle to provide accurate answers?",
    answer:
      "Unriddle uses advanced AI algorithms and is trained on verified data sources to ensure high accuracy. However, we always recommend reviewing the results for your specific use case.",
  },
  {
    question: "What file types does Unriddle support?",
    answer:
      "Unriddle supports a wide range of file formats including PDF, DOC, DOCX, TXT, CSV, and more. We're constantly adding support for new file types.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied with Unriddle, you can request a full refund within 30 days of your purchase.",
  },
]

export default function FAQSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

