"use client";

import { Button } from "@/components/ui/button";
import { Headphones, Clock, Server, HardDrive, Cpu, Check } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://wisehosting.com/images/Background1.avif')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-green-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">Excellent</span>{" "}
                · 4.9 · 1,000+ reviews
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Minecraft
              <br />
              Server
              <br />
              <span className="text-primary text-glow">Made Easy!</span>
            </h1>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-full text-sm">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-muted-foreground">
                  Java & Bedrock Edition Servers
                </span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-full text-sm">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-muted-foreground">
                  More than 10,000 modpacks
                </span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-full text-sm">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-muted-foreground">
                  1-click Modpack/Plugins Install
                </span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-full text-sm">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-muted-foreground">
                  24/7 Technical Support
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 glow-cyan"
            >
              <a href="https://control.codeon.codes" className="font-semibold">
                Order Now
              </a>
            </Button>
          </div>

          {/* Right Side - Featured Server Card */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
              Made by
            </div>
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-2xl">
              {/* Server Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Shulkercraft
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    10.2M Subscribers
                  </p>
                </div>
              </div>

              {/* Server Type */}
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
                  Creeper
                </span>
                <span className="text-foreground font-bold text-2xl">
                  $11.99
                </span>
                <span className="text-muted-foreground text-sm">/mo</span>
              </div>

              {/* Server Specs */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <HardDrive className="w-4 h-4 text-primary" />
                  <span>20 GB storage</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span>100% CPU Power</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Server className="w-4 h-4 text-primary" />
                  <span>4 GB RAM</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Backups</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4">
                {
                  '"CodeOn is perfect for running our community server. The performance is outstanding!"'
                }
              </blockquote>
            </div>

            {/* More Servers Link */}
            <div className="text-center mt-4">
              <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                More Server Packages →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Feature Pills */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 pt-8 border-t border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Headphones className="w-5 h-5 text-primary" />
            <span>24/7 support</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5 text-primary" />
            <span>99.9% uptime</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Server className="w-5 h-5 text-primary" />
            <span>High Performance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
