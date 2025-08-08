import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, CodeXml, LayoutTemplate, BarChartBig, Camera, Smartphone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <CodeXml className="w-10 h-10 text-primary" />,
    title: "Custom Websites",
    description: "We design and develop fully custom, multi-page websites that are responsive, SEO-ready, and built to perform. Your digital presence, handcrafted.",
    image: { src: "https://placehold.co/600x400.png", hint: "website code" },
    features: ["Multi-page architecture", "Responsive on all devices", "SEO optimized from day one", "Custom content management"],
    cta: { href: "/contact", text: "Start Your Website Project" },
  },
  {
    icon: <LayoutTemplate className="w-10 h-10 text-primary" />,
    title: "Landing Pages",
    description: "Get lightning-fast, conversion-focused landing pages built to support your advertising campaigns. We focus on a single goal: turning visitors into customers.",
    image: { src: "https://placehold.co/600x400.png", hint: "landing page" },
    features: ["A/B testing ready", "Optimized for speed", "Focused on one clear call-to-action", "Integrated with analytics"],
    cta: { href: "/contact", text: "Build a High-Converting Page" },
  },
  {
    icon: <BarChartBig className="w-10 h-10 text-primary" />,
    title: "Media Buying",
    description: "Our data-driven approach to media buying ensures your message reaches the right audience on the right platforms, maximizing your return on ad spend (ROAS).",
    image: { src: "https://placehold.co/600x400.png", hint: "analytics dashboard" },
    features: ["Strategy & planning", "Campaign management", "Performance tracking & reporting", "Cross-platform ad buying"],
    cta: { href: "/contact", text: "Launch Your Ad Campaign" },
  },
  {
    icon: <Camera className="w-10 h-10 text-primary" />,
    title: "Content Creation",
    description: "From professional photography to compelling video production, we create high-quality content that captures your brand's essence and engages your audience.",
    image: { src: "https://placehold.co/600x400.png", hint: "camera equipment" },
    features: ["Professional photography", "Full-service video production", "Drone videography", "Studio and on-location shoots"],
    cta: { href: "/contact", text: "Create Stunning Content" },
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Mobile Applications",
    description: "We build intuitive and beautiful cross-platform mobile applications for iOS and Android, focusing on a seamless user experience from concept to launch.",
    image: { src: "https://placehold.co/600x400.png", hint: "mobile app ui" },
    features: ["UI/UX design", "iOS and Android development", "App store submission support", "Post-launch maintenance"],
    cta: { href: "/contact", text: "Develop Your App" },
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="w-full py-16 md:py-24 text-center bg-card">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              Our Services
            </span>
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-6">
            A suite of solutions designed to build, launch, and grow your digital presence. Everything we do is custom, strategic, and built to last.
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        {services.map((service, index) => (
          <section key={service.title} className={`py-12 ${index < services.length - 1 ? 'border-b' : ''}`}>
            <div className={`grid md:grid-cols-2 gap-12 items-center`}>
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <div className="flex items-center gap-4">
                  {service.icon}
                  <h2 className="font-headline text-3xl md:text-4xl font-bold">{service.title}</h2>
                </div>
                <p className="mt-4 text-muted-foreground">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 font-semibold group" size="lg">
                  <Link href={service.cta.href}>
                    {service.cta.text}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:text-accent transition-colors group-hover:translate-x-1"/>
                  </Link>
                </Button>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={service.image.src}
                      alt={`${service.title} preview`}
                      width={600}
                      height={400}
                      className="rounded-md object-cover w-full h-full"
                      data-ai-hint={service.image.hint}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
