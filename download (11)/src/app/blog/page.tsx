import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Why Custom-Coded Websites Outperform Templates Every Time",
    summary: "Discover the tangible benefits of bespoke web development, from SEO and performance to security and scalability.",
    imgSrc: "https://placehold.co/600x400.png",
    hint: "code editor",
    date: "October 26, 2023",
    author: "Jane Doe",
  },
  {
    id: 2,
    title: "The Art of the High-Converting Landing Page",
    summary: "We break down the science and design principles behind landing pages that turn clicks into customers.",
    imgSrc: "https://placehold.co/600x400.png",
    hint: "marketing graph",
    date: "October 22, 2023",
    author: "John Smith",
  },
  {
    id: 3,
    title: "Maximizing ROAS: A Guide to Modern Media Buying",
    summary: "Learn how data-driven strategies and creative ad placements can transform your advertising budget into real growth.",
    imgSrc: "https://placehold.co/600x400.png",
    hint: "analytics chart",
    date: "October 18, 2023",
    author: "Alex Johnson",
  },
    {
    id: 4,
    title: "From Figma to App Store: Our Mobile Development Process",
    summary: "A behind-the-scenes look at how we design, develop, and launch mobile applications that users love.",
    imgSrc: "https://placehold.co/600x400.png",
    hint: "mobile ui",
    date: "October 15, 2023",
    author: "Samantha Lee",
  },
  {
    id: 5,
    title: "SEO in 2024: Beyond Keywords and Backlinks",
    summary: "Explore the technical SEO, user experience, and content strategies that dominate search rankings today.",
    imgSrc: "https://placehold.co/600x400.png",
    hint: "search engine",
    date: "October 11, 2023",
    author: "Mike Chen",
  },
  {
    id: 6,
    title: "The Unseen ROI of Professional Content Creation",
    summary: "Why investing in high-quality photography and videography is crucial for building a powerful brand identity.",
    imgSrc: "https://placehold.co/600x400.png",
    hint: "camera lens",
    date: "October 07, 2023",
    author: "Emily White",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="w-full py-16 md:py-24 text-center bg-card">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              Insights & Ideas
            </span>
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-6">
            Our thoughts on technology, creativity, and the business of building great digital products.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group flex flex-col">
              <Link href="#" className="block">
                <Image
                  src={post.imgSrc}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={post.hint}
                />
              </Link>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                    <h2 className="font-headline text-xl font-bold mt-2">
                        <Link href="#" className="hover:text-accent transition-colors">{post.title}</Link>
                    </h2>
                    <p className="mt-2 text-muted-foreground flex-grow">{post.summary}</p>
                </div>
                <div className="mt-4">
                    <Link href="#" className="font-semibold text-primary inline-flex items-center group/link hover:text-accent transition-colors">
                        Read More <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
