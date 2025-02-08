import { Receipt, Wand2, Calculator, Folder, Signature, Zap } from "lucide-react"

export default function OurAutomations() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center min-h-screen">
      <div className="container px-4 md:px-6 flex justify-center">
        <div className="flex flex-col items-center gap-4 md:gap-8 w-full">
          <div className="flex max-w-[980px] flex-col items-center gap-2 text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
              We can automate almost everything
            </h1>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 w-full px-4 max-w-[1200px]">
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg p-2">
                <Zap className="h-10 w-10" />
              </div>
              <div className="space-y-2 ">
                <h3 className="text-xl font-bold">Onboarding Automations</h3>
                <p className="text-muted-foreground">
                  Instantly send emails, information, invoices and more and soon as clients sign up. 
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg p-2">
                <Receipt className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Sales Pipeline</h3>
                <p className="text-muted-foreground">
                  Automate lead nurturing, segment leads and automate your CRM.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg p-2">
                <Signature className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Proposal Creation</h3>
                <p className="text-muted-foreground">
                  Setup automations to generate proposals on demand and send to clients automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Duplicate row */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 w-full mt-12 px-4 max-w-[1200px]">
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg p-2">
                <Folder className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Project Management</h3>
                <p className="text-muted-foreground">
                  Get rid of silos and cross-platform communication hurdles through automation.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg p-2">
                <Calculator className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Operations</h3>
                <p className="text-muted-foreground">
                  That particular boring task you wish was automated? Well it&apos;s not impossible.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-lg p-2">
                <Wand2 className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">And so much more..</h3>
                <p className="text-muted-foreground">
                  We&apos;ve built medium to large scale automations for clients. If you have an automation idea you think might be viable, please reach out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
