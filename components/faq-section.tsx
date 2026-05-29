"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does CodeOn cost?",
    answer: "Our plans start from $2.99/month when billed annually. We offer various tiers based on RAM, storage, and CPU allocation to fit every budget and server size.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrency payments including Bitcoin and Ethereum.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee on all plans. If you're not satisfied with our service, contact support within 7 days for a full refund.",
  },
  {
    question: "What if I have multiple servers?",
    answer: "You can run multiple servers on a single plan using our Instances feature, or purchase additional plans for completely separate environments.",
  },
  {
    question: "Do you offer any discounted plans?",
    answer: "Yes! We offer up to 50% off when you choose annual billing. We also have promotional codes available for first-time customers.",
  },
  {
    question: "How can I cancel or change my plan?",
    answer: "You can upgrade, downgrade, or cancel your plan at any time from your dashboard. Changes take effect immediately with prorated billing.",
  },
  {
    question: "How much RAM do I need?",
    answer: "For vanilla servers with up to 10 players, 2GB is sufficient. For modded servers or larger communities, we recommend 4-8GB depending on your modpack.",
  },
  {
    question: "What are the hardware specs of the servers?",
    answer: "We use AMD Ryzen 5000 series processors, NVMe SSD storage, and DDR4 ECC RAM. All servers include DDoS protection and are located in multiple data centers worldwide.",
  },
  {
    question: "Can I install mods, plugins, or modpacks to my server?",
    answer: "Absolutely! Our one-click installer supports over 15,000 modpacks, plugins, and mods. You can also manually upload your own files via SFTP.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-card border border-border rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
            >
              <span className="font-medium text-foreground pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === idx && (
              <div className="px-5 pb-5">
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
