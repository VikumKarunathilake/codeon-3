import { Button } from "@/components/ui/button";
import { Headphones, Clock, Server } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-green-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">Excellent</span> · 4.9 · 1,000+ reviews
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
            {"The World's Highest"}<br />
            <span className="text-primary text-glow">Rated Minecraft</span><br />
            Server Hosting
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Launch your server in under 60 seconds.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 glow-cyan"
          >
            <span className="font-semibold">Create Server</span>
            <span className="ml-2 text-primary-foreground/70 text-sm">and start playing!</span>
          </Button>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Headphones className="w-5 h-5 text-primary" />
              <span>Free 24/7 support</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>99.9% uptime</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Server className="w-5 h-5 text-primary" />
              <span>Premium hardware</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
