"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-primary/20 text-center py-2 px-4 text-sm">
        <span className="text-primary font-semibold">Get 20% OFF</span>
        <span className="text-muted-foreground">
          {" "}
          on your first order with{" "}
        </span>
        <span className="bg-primary/30 px-2 py-0.5 rounded text-primary font-mono">
          STARTER20
        </span>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/favicon/favicon.svg"
                alt="CodeOn Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-foreground">CodeOn</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/minecraft-server-hosting"
                className="text-foreground hover:text-primary transition-colors"
              >
                Minecraft Hosting
              </Link>
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                Support <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                More <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://control.codeon.codes">Order Now</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-4">
              <Link
                href="/minecraft-server-hosting"
                className="block text-foreground"
              >
                Minecraft Hosting
              </Link>
              <Link href="#" className="block text-muted-foreground">
                Support
              </Link>
              <Link href="#" className="block text-muted-foreground">
                Dashboard
              </Link>
              <Button className="w-full bg-primary text-primary-foreground">
                Order Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
