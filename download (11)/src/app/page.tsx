
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CodeXml, Megaphone, Smartphone, ArrowRight, Eye, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Masonry, { type Item as MasonryItem } from "@/components/masonry";


const services = [
  {
    icon: <CodeXml className="w-8 h-8 text-primary" />,
    title: "Custom Websites",
    description: "Multi-page, responsive, and SEO-ready sites built from scratch to tell your unique story.",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: "Landing Pages",
    description: "High-speed, conversion-focused pages designed to maximize the impact of your ad campaigns.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Mobile Applications",
    description: "Engaging, cross-platform mobile apps with intuitive UI/UX that users will love.",
  },
];

const clientLogos = [
  { src: "https://placehold.co/140x60.png", alt: "InnovateCo", hint: "abstract shape" },
  { src: "https://placehold.co/140x60.png", alt: "Quantum", hint: "geometric pattern" },
  { src: "https://placehold.co/140x60.png", alt: "Apex", hint: "mountain logo" },
  { src: "https://placehold.co/140x60.png", alt: "Stellar", hint: "star logo" },
  { src: "https://placehold.co/140x60.png", alt: "Momentum", hint: "arrow logo" },
  { src: "https://placehold.co/140x60.png", alt: "Synergy", hint: "interlocking circles" },
];

const portfolioItems = [
  {
    imgSrc: "https://placehold.co/600x400.png",
    title: "Project Alpha",
    category: "Website",
    hint: "dashboard ui"
  },
  {
    imgSrc: "https://placehold.co/600x400.png",
    title: "Project Beta",
    category: "Mobile App",
    hint: "mobile app"
  },
  {
    imgSrc: "https://placehold.co/600x400.png",
    title: "Project Gamma",
    category: "Landing Page",
    hint: "website screenshot"
  },
];

const masonryItems: MasonryItem[] = [
    { id: "1", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop", url: "#", height: 400, hint: "code editor" },
    { id: "2", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop", url: "#", height: 250, hint: "mobile ui" },
    { id: "3", img: "https://images.unsplash.com/photo-1526657782461-9fe13a399e42?q=80&w=600&auto=format&fit=crop", url: "#", height: 600, hint: "media production" },
    { id: "4", img: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=600&auto=format&fit=crop", url: "#", height: 500, hint: "wireframe sketch" },
    { id: "5", img: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=600&auto=format&fit=crop", url: "#", height: 350, hint: "server room" },
    { id: "6", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", url: "#", height: 550, hint: "app analytics" },
    { id: "7", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", url: "#", height: 300, hint: "digital art" },
    { id: "8", img: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=600&auto=format&fit=crop", url: "#", height: 450, hint: "circuit board" },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};


export default function Home({ isLoading }: { isLoading?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full h-[80vh] md:h-[90vh] relative overflow-hidden">
         <div className="absolute inset-0 z-0">
             <Masonry items={masonryItems} blurToFocus={true} />
         </div>
         <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
             <motion.div 
              className="container px-4 md:px-6"
              variants={containerVariants}
              initial="hidden"
              animate={!isLoading ? "visible" : "hidden"}
            >
              <motion.h1 
                className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter"
                variants={itemVariants}
              >
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  We Build Digital Futures.
                </span>
              </motion.h1>
              <motion.p 
                className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-6"
                variants={itemVariants}
              >
                Visualz is a digital agency that crafts bespoke websites, apps, and campaigns from the ground up.
              </motion.p>
              <motion.div 
                className="mt-8 flex justify-center gap-4"
                variants={itemVariants}
              >
                <Button asChild size="lg" className="font-semibold group">
                  <Link href="/portfolio">
                    <Eye className="mr-2 h-5 w-5 group-hover:text-accent transition-colors"/>
                    See Our Work
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold group">
                  <Link href="/contact">
                     <FileText className="mr-2 h-5 w-5 group-hover:text-accent transition-colors"/>
                     Get a Quote
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">What We Build</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-4">
            Our expertise lies in creating digital solutions that are as unique as your business.
          </p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="text-center h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <motion.div 
          className="container px-4 md:px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-headline text-5xl font-bold text-primary">50+</h3>
              <p className="text-muted-foreground mt-2 font-medium">Happy Clients</p>
            </div>
            <div>
              <h3 className="font-headline text-5xl font-bold text-primary">100%</h3>
              <p className="text-muted-foreground mt-2 font-medium">Custom Code</p>
            </div>
            <div>
              <h3 className="font-headline text-5xl font-bold text-primary">1B+</h3>
              <p className="text-muted-foreground mt-2 font-medium">Ad Impressions</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Client Logos */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Trusted by Industry Leaders</h2>
          <div className="mt-12">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {clientLogos.map((logo, index) => (
                  <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5 flex items-center justify-center">
                    <Image src={logo.src} alt={logo.alt} width={140} height={60} className="grayscale hover:grayscale-0 transition-all duration-300" data-ai-hint={logo.hint} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Mini Portfolio */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Featured Work</h2>
          <motion.div 
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}
           >
            {portfolioItems.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <Link href="/portfolio" >
                  <Card className="overflow-hidden group h-full">
                    <Image src={item.imgSrc} alt={item.title} width={600} height={400} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={item.hint} />
                    <CardContent className="p-4">
                      <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                      <p className="text-sm text-primary font-medium">{item.category}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="font-semibold group">
              <Link href="/portfolio">
                Explore Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:text-accent transition-colors"/>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="sticky bottom-0 w-full bg-background/80 backdrop-blur-sm p-4 border-t z-10">
        <div className="container mx-auto flex items-center justify-between">
            <p className="text-lg font-semibold text-foreground hidden sm:block">Ready to build something real?</p>
            <Button asChild className="font-semibold group">
                <Link href="/contact">
                  Let's Talk <ArrowRight className="ml-2 h-5 w-5 group-hover:text-accent transition-colors group-hover:translate-x-1"/>
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
