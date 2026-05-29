"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Zap, Clock } from "lucide-react";

const tabs = [
  { id: "modded", label: "Modded" },
  { id: "vanilla", label: "Vanilla" },
  { id: "community", label: "Community" },
  { id: "modpacks", label: "Modpacks" },
  { id: "crossplay", label: "Crossplay" },
];

const tabContent: Record<string, { title: string; description: string; features: string[] }> = {
  modded: {
    title: "Unlock limitless gameplay with mods.",
    description: "Custom management tools built to support modded Minecraft. Optimized for performance, simplicity, and stability.",
    features: [
      "Instant setup in under 60 seconds",
      "One-Click Mod Installer",
      "Switch between Forge, Fabric or NeoForge",
    ],
  },
  vanilla: {
    title: "Pure Minecraft experience.",
    description: "Optimized vanilla servers with the best performance for the classic Minecraft experience.",
    features: [
      "Instant setup in under 60 seconds",
      "Auto-updates to latest version",
      "Optimized server configurations",
    ],
  },
  community: {
    title: "Build your community server.",
    description: "Everything you need to run a thriving Minecraft community with multiple players.",
    features: [
      "Unlimited player slots",
      "Advanced permissions system",
      "Built-in anti-grief protection",
    ],
  },
  modpacks: {
    title: "Play any modpack instantly.",
    description: "One-click installation for thousands of popular modpacks from CurseForge and Modrinth.",
    features: [
      "15,000+ modpacks available",
      "One-click installation",
      "Auto memory optimization",
    ],
  },
  crossplay: {
    title: "Play across all platforms.",
    description: "Connect Java and Bedrock players together on the same server.",
    features: [
      "Java & Bedrock support",
      "GeyserMC pre-configured",
      "Cross-platform voice chat",
    ],
  },
};

export function ServerTypesSection() {
  const [activeTab, setActiveTab] = useState("modded");
  const content = tabContent[activeTab];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Minecraft server for every player
        </h2>
        <p className="text-muted-foreground">
          Your key playstyles, powered by CodeOn
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {content.title}
          </h3>
          <p className="text-muted-foreground mb-6">
            {content.description}
          </p>
          <div className="border-t border-border pt-6 mb-6">
            <ul className="space-y-3">
              {content.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Start {activeTab} server
          </Button>
        </div>

        {/* Server Type Preview Card */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="mb-4">
            <span className="text-sm text-muted-foreground">Server Type</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Fabric", "Forge", "NeoForge", "Paper"].map((type) => (
              <div
                key={type}
                className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
                  type === "Fabric"
                    ? "border-primary bg-primary/10"
                    : "border-border bg-secondary/50 hover:border-muted-foreground"
                }`}
              >
                <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">{type}</span>
                {type === "Fabric" && (
                  <Check className="w-4 h-4 text-primary ml-auto" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Setup time: ~60 seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
