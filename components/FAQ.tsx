import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you guys use zapier/make/other tool?",
    answer:
      "Yes we use Zapier, Make and N8N, but also Python, NodeJS/Javascript and many more. We figure out which tool will work best for your needs and use that.",
  },
  {
    question: "What do you guys charge?",
    answer:
      "We don't have a set pricing because automations vary a lot in scope and size, but our general range is from $1k-$5k.",
  },
  {
    question: "Do you guys offer an audit?",
    answer:
      "Yes, we conduct a free audit before starting any project. This is to make sure you don't pay a penny before we can figure out what aspects of your business can actually be automated."
  },
  {
    question: "I want to automate my business but I don't know exactly what that would look like.",
    answer:
      "That's alright. If you can define to us the problems you're facing, we can setup solutions for you. We have a lot of experience in this field and can help you figure out what you need.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 100% refund if the automation does not work, is buggy or fails outright. We want to make sure you're happy with the work we do.",
  },
]

export default function FAQSection() {
  return (
    <section id="faqs" className="w-full py-12 md:py-24">
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

