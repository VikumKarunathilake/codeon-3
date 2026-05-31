"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Shield, Clock, X } from "lucide-react";

const plans = [
  {
    name: "Zombie",
    image: "https://wisehosting.com/images/heads/zombie.webp",
    ram: "2 GB",
    description: "Good for testing, running bedrock or saving your world files here.",
    storage: "10 GB Storage",
    cpu: "200% CPU Power",
    backups: "No Backups",
    monthlyPrice: 5.99,
    annualPrice: 2.99,
    popular: false,
  },
  {
    name: "Creeper",
    image: "https://wisehosting.com/images/heads/creeper.webp",
    ram: "4 GB",
    description: "Good starter server for light mods or plugins on newer versions.",
    storage: "25 GB Storage",
    cpu: "350% CPU Power",
    backups: "1 Backup",
    monthlyPrice: 11.99,
    annualPrice: 5.99,
    popular: true,
  },
  {
    name: "Blaze",
    image: "https://wisehosting.com/images/heads/blaze.webp",
    ram: "8 GB",
    description: "Discover thousands of modpacks or easily run vanilla.",
    storage: "50 GB Storage",
    cpu: "500% CPU Power",
    backups: "2 Backups",
    monthlyPrice: 23.99,
    annualPrice: 11.99,
    popular: false,
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start your Minecraft server today<br />
            <span className="text-primary">with up to 50% OFF</span>
          </h2>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>7-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>Setup in 60 seconds</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <X className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-secondary rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative ${
                isAnnual
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Annually
              <span className="absolute -top-2 -right-8 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded">
                50% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card border rounded-xl p-6 transition-all ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  BEST FOR 99% PLAYERS
                </div>
              )}

              {/* Mob icon */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                {plan.image ? (
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-12 h-12 object-contain select-none pointer-events-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <span className="text-2xl">
                    {plan.name === "Zombie" ? "🧟" : plan.name === "Creeper" ? "💚" : "🔥"}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-foreground text-center mb-2">
                {plan.name}
              </h3>

              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-primary">{plan.ram}</span>
                <span className="text-muted-foreground ml-1">RAM</span>
              </div>

              <p className="text-sm text-muted-foreground text-center mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {plan.storage}
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {plan.cpu}
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {plan.backups}
                </li>
              </ul>

              <div className="text-center mb-4">
                <span className="text-sm text-muted-foreground">Starting at</span>
                <div>
                  <span className="text-3xl font-bold text-foreground">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </div>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                Buy Now
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-border text-foreground">
            Show all packages
          </Button>
        </div>
      </div>
    </section>
  );
}
