import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="w-full h-auto flex items-center justify-center text-primary-foreground p-6 md:p-24">
      <div className="container px-4 md:px-6 max-w-[1000px] bg-black p-8 md:p-16 rounded-3xl">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl">
            Let&apos;s scale together.
          </h2>
          <p className="mx-auto max-w-[90%] sm:max-w-[600px] text-primary-foreground/80 text-sm sm:text-base">
            Put repetitive tasks on autopilot and focus on what really matters: growth.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="outline" size="lg">
              Book a free call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
