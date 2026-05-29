import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
      <blockquote className="text-xl md:text-2xl text-foreground italic mb-6 text-balance">
        &quot;I simply refuse to work with another service, simply because of how I have been treated with CodeOn. Absolutely a customer for life.&quot;
      </blockquote>
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
          <span className="text-primary font-semibold">M</span>
        </div>
        <span className="text-muted-foreground">Marcus C.</span>
      </div>
    </section>
  );
}
