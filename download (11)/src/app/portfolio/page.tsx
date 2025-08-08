"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "QuantumLeap CRM",
    category: "Websites",
    imgSrc: "https://placehold.co/600x400.png",
    hint: "dashboard ui",
    client: "Quantum Inc.",
    tools: "Next.js, Tailwind, TypeScript",
  },
  {
    id: 2,
    title: "Apex Fitness App",
    category: "Apps",
    imgSrc: "https://placehold.co/600x400.png",
    hint: "mobile app",
    client: "Apex Gyms",
    tools: "React Native, Firebase",
  },
  {
    id: 3,
    title: "Stellar Ad Campaign",
    category: "Ads",
    imgSrc: "https://placehold.co/600x400.png",
    hint: "social media",
    client: "Stellar Beauty",
    tools: "Meta Ads, Google Ads",
  },
  {
    id: 4,
    title: "InnovateCo Product Shoot",
    category: "Photography",
    imgSrc: "https://placehold.co/600x400.png",
    hint: "product photography",
    client: "InnovateCo",
    tools: "Canon EOS R5, Adobe Lightroom",
  },
  {
    id: 5,
    title: "Momentum Landing Page",
    category: "Landing Pages",
    imgSrc: "https://placehold.co/600x400.png",
    hint: "website screenshot",
    client: "Momentum Ventures",
    tools: "Gatsby, Contentful",
  },
  {
    id: 6,
    title: "Synergy Branding Site",
    category: "Websites",
    imgSrc: "https://placehold.co/600x400.png",
    hint: "modern website",
    client: "Synergy Partners",
    tools: "Webflow, Figma",
  },
];

const categories = ["All", "Websites", "Landing Pages", "Ads", "Apps", "Photography"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      <section className="w-full py-16 md:py-24 text-center bg-card">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              Our Work
            </span>
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-6">
            A selection of projects that showcase our commitment to quality, creativity, and custom solutions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="font-semibold"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group relative">
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={item.hint}
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-headline text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-accent font-medium">{item.category}</p>
                <div className="mt-4 text-white">
                  <p><span className="font-semibold">Client:</span> {item.client}</p>
                  <p><span className="font-semibold">Tools:</span> {item.tools}</p>
                </div>
              </div>
              <div className="p-4 bg-card">
                 <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                 <p className="text-sm text-primary font-medium">{item.category}</p>
              </div>
            </Card>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center col-span-full py-24">
              <Search className="mx-auto h-16 w-16 text-muted-foreground" />
              <h3 className="mt-4 text-2xl font-headline font-semibold">No Projects Found</h3>
              <p className="mt-2 text-muted-foreground">Try selecting another category to see our work.</p>
          </div>
        )}

      </div>
    </>
  );
}
