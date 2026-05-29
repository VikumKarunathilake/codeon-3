import { Button } from "@/components/ui/button";
import { Puzzle, Headphones, Settings, Users } from "lucide-react";

const features = [
  {
    icon: Puzzle,
    tag: "One-Click Installer",
    title: "Play with any modpack, plugin or datapack.",
    description: "Install your favorite mods, plugins or modpacks with just one click, all in one place.",
  },
  {
    icon: Headphones,
    tag: "24/7 Support",
    title: "Best-in-class support",
    description: "Get support from Minecraft hosting professionals whenever you need it.",
    rating: "4.9",
  },
  {
    icon: Settings,
    tag: "Settings Manager",
    title: "Easily control everything",
    description: "Manage everything without typing or opening a notepad.",
  },
  {
    icon: Users,
    tag: "Live Player Manager",
    title: "Player manager like no other.",
    description: "Manage everything you ever need about players in your Minecraft server without having to log in: kick, ban, manage inventories, view stats & more.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-2 mb-4">
              <feature.icon className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">{feature.tag}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {feature.description}
            </p>
            {feature.rating && (
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-2xl font-bold text-foreground">{feature.rating}</span>
              </div>
            )}
            <Button variant="outline" className="mt-4 border-border text-foreground hover:bg-secondary">
              Start your server
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
