import { FileSearch, Wand2, Sparkles } from "lucide-react"

export default function OurAutomations() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center min-h-screen">
      <div className="container px-4 md:px-6 flex justify-center">
        <div className="flex flex-col items-center gap-4 md:gap-8 w-full">
          <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
              Cite, write, and edit faster with a little help from AI
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Write compelling and effective content that resonates with your audience. Never write alone again.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 w-full px-4">
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg p-2">
                <FileSearch className="h-10 w-10" />
              </div>
              <div className="space-y-2 ">
                <h3 className="text-xl font-bold">Find citations</h3>
                <p className="text-muted-foreground">
                  Instantly discover relevant papers, books and websites based on the contents of your writing.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg p-2">
                <Wand2 className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Edit with AI</h3>
                <p className="text-muted-foreground">
                  Paraphrase, improve and summarize text, ensuring your content remains engaging and informative.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg p-2">
                <Sparkles className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">AI autocomplete</h3>
                <p className="text-muted-foreground">
                  Unriddle includes a powerful autocomplete that predicts your next edit so you can speed through
                  writers block.
                </p>
              </div>
            </div>
          </div>

          {/* Duplicate row */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 w-full mt-12 px-4">
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg p-2">
                <FileSearch className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Find citations</h3>
                <p className="text-muted-foreground">
                  Instantly discover relevant papers, books and websites based on the contents of your writing.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg p-2">
                <Wand2 className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Edit with AI</h3>
                <p className="text-muted-foreground">
                  Paraphrase, improve and summarize text, ensuring your content remains engaging and informative.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg p-2">
                <Sparkles className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">AI autocomplete</h3>
                <p className="text-muted-foreground">
                  Unriddle includes a powerful autocomplete that predicts your next edit so you can speed through
                  writers block.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
