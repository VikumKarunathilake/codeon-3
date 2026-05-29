import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function PartnershipsSection() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Partnership Info */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
              Partnerships & Affiliate
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Hands & Benefit
            </h2>
            <p className="text-muted-foreground mb-8">
              {"Become affiliate or join us in exclusive brand-to-brand partnerships."}
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <ExternalLink className="w-4 h-4 mr-2" />
              Join Affiliate
            </Button>
          </div>

          {/* Right - Reviews */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-500 text-white font-bold text-2xl px-4 py-2 rounded-lg">
                Excellent
              </div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-green-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Based on 1,000+ reviews</p>
              </div>
            </div>

            {/* Review Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  name: "Mike A.",
                  rating: 5,
                  text: "Best hosting I've used. Server runs smooth 24/7.",
                },
                {
                  name: "Dylan R.",
                  rating: 5,
                  text: "Quick setup and amazing support team!",
                },
                {
                  name: "Nathanael S.",
                  rating: 5,
                  text: "Great value for the price. Highly recommend.",
                },
              ].map((review, i) => (
                <div key={i} className="bg-secondary/30 rounded-xl p-4">
                  <div className="flex mb-2">
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} className="w-3 h-3 text-green-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{review.text}</p>
                  <span className="text-xs font-medium text-foreground">{review.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
