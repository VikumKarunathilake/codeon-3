"use client";

import { useState } from "react";
import { Cpu, Headphones, Zap, Layout, Award } from "lucide-react";

const comparisons = [
  {
    id: "performance",
    label: "Performance",
    icon: Cpu,
    us: { title: "Intel Xeon-E", description: "High-performance Intel Xeon-E 2136 and 2386G CPUs for maximum performance. Smooth TPS, lag-free, and faster chunk loading." },
    others: { title: "Old Processors", description: "Outdated 2014-era server processors with weak single-thread speed. Lag spikes and unstable tick rates." },
  },
  {
    id: "support",
    label: "Support",
    icon: Headphones,
    us: { title: "24/7 Expert Support", description: "Real Minecraft experts available around the clock via live chat, tickets, and Discord." },
    others: { title: "Limited Support", description: "Basic ticket system with long wait times and generic responses from non-specialists." },
  },
  {
    id: "speed",
    label: "Speed",
    icon: Zap,
    us: { title: "NVMe SSDs", description: "Ultra-fast NVMe storage for instant world loading and zero lag during chunk generation." },
    others: { title: "HDD Storage", description: "Slow traditional hard drives causing long load times and chunk lag." },
  },
  {
    id: "panel",
    label: "Game Panel",
    icon: Layout,
    us: { title: "Custom Panel", description: "Purpose-built panel with one-click installs, live console, and player management." },
    others: { title: "Generic Panels", description: "Outdated Pterodactyl or Multicraft panels with limited features." },
  },
  {
    id: "quality",
    label: "Quality",
    icon: Award,
    us: { title: "Premium Network", description: "DDoS protected network with 99.9% uptime guarantee and global locations." },
    others: { title: "Basic Hosting", description: "Shared resources, frequent downtime, and limited DDoS protection." },
  },
];

export function ComparisonSection() {
  const [activeComparison, setActiveComparison] = useState("performance");
  const comparison = comparisons.find((c) => c.id === activeComparison)!;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          CodeOn vs. others
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {comparisons.map((comp) => (
            <button
              key={comp.id}
              onClick={() => setActiveComparison(comp.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeComparison === comp.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              <comp.icon className="w-4 h-4" />
              {comp.label}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Us */}
        <div className="bg-card border-2 border-primary rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="text-sm font-medium text-primary">CODEON</span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{comparison.us.title}</h3>
          <p className="text-muted-foreground">{comparison.us.description}</p>
        </div>

        {/* Others */}
        <div className="bg-card border border-border rounded-xl p-6 opacity-70">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <span className="text-muted-foreground font-bold text-sm">?</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">OTHERS</span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{comparison.others.title}</h3>
          <p className="text-muted-foreground">{comparison.others.description}</p>
        </div>
      </div>
    </section>
  );
}
