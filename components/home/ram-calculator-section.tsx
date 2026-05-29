"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Server, Users, Blocks, Puzzle, Cpu } from "lucide-react";

const serverTypes = [
  { id: "vanilla", label: "Vanilla", icon: Blocks, recommended: "2-4 GB" },
  { id: "optimized", label: "Optimized", icon: Server, recommended: "2-4 GB" },
  { id: "modded", label: "Modded", icon: Puzzle, recommended: "6-10 GB" },
];

const plans = [
  { name: "Zombie", ram: "2 GB", price: "$5.99", color: "from-gray-500 to-gray-600" },
  { name: "Creeper", ram: "4 GB", price: "$11.99", color: "from-green-500 to-green-600" },
  { name: "Blaze", ram: "8 GB", price: "$22.99", color: "from-orange-500 to-orange-600" },
];

export function RamCalculatorSection() {
  const [serverType, setServerType] = useState("vanilla");
  const [players, setPlayers] = useState([10]);

  const getRecommendedPlan = () => {
    const playerCount = players[0];
    if (serverType === "modded" || playerCount > 50) return plans[2];
    if (playerCount > 20) return plans[1];
    return plans[0];
  };

  const recommendedPlan = getRecommendedPlan();

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Not sure which one to pick?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use our RAM calculator to find the perfect server package for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Minecraft Server RAM Calculator
            </h3>
            
            <p className="text-sm text-muted-foreground mb-8">
              Select the type of server and the number of online players.
              For modpacks, add 100 MB Modpacks RAM Table.
            </p>

            {/* Server Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-3">
                Server type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {serverTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setServerType(type.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        serverType === type.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Icon className={`w-6 h-6 mx-auto mb-2 ${
                        serverType === type.id ? "text-primary" : "text-muted-foreground"
                      }`} />
                      <span className={`text-sm font-medium ${
                        serverType === type.id ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {type.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Player Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-foreground">
                  Number of online players
                </label>
                <span className="text-primary font-bold text-lg">{players[0]}</span>
              </div>
              <Slider
                value={players}
                onValueChange={setPlayers}
                min={1}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1</span>
                <span>100</span>
              </div>
            </div>
          </div>

          {/* Recommended Plan */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="text-center mb-6">
              <span className="text-sm text-muted-foreground">Recommended plan</span>
              <div className={`w-20 h-20 mx-auto my-4 rounded-xl bg-gradient-to-br ${recommendedPlan.color} flex items-center justify-center`}>
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{recommendedPlan.name}</h3>
              <p className="text-muted-foreground">{recommendedPlan.ram} RAM</p>
            </div>

            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-foreground">{recommendedPlan.price}</span>
              <span className="text-muted-foreground">/mo</span>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
              Get Started
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Based on {players[0]} players with {serverType} server
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
