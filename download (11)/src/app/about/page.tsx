import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Gem, Lightbulb, Target, Zap } from "lucide-react";

const timelineEvents = [
  {
    year: "2018",
    title: "The Idea",
    description: "Frustrated with template-based websites, our founders envisioned a new kind of agency focused on 100% custom code.",
  },
  {
    year: "2019",
    title: "Visualz is Born",
    description: "With a small team and a big mission, we officially launched and landed our first client, building a bespoke e-commerce platform.",
  },
  {
    year: "2021",
    title: "Expanding Services",
    description: "We expanded beyond websites to include mobile apps and strategic media buying, becoming a full-service digital partner.",
  },
  {
    year: "2023",
    title: "Growing the Team",
    description: "Our team grew to over 20 talented developers, designers, and strategists, allowing us to take on larger, more complex projects.",
  },
];

const coreValues = [
    {
        icon: <Gem className="w-8 h-8 text-primary"/>,
        title: "Quality",
        description: "We are obsessed with quality. Every line of code, pixel, and strategy is crafted with the highest standards."
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-primary"/>,
        title: "Creativity",
        description: "We push creative boundaries to build unique digital experiences that captivate and convert."
    },
    {
        icon: <Target className="w-8 h-8 text-primary"/>,
        title: "Precision",
        description: "Our work is precise and purposeful. We focus on details that deliver measurable results and a flawless user experience."
    },
    {
        icon: <Zap className="w-8 h-8 text-primary"/>,
        title: "Speed",
        description: "We operate with agility and efficiency, delivering high-quality work on time, every time, without cutting corners."
    }
]

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-16 md:py-24 text-center bg-card">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              We Build Digital Futures
            </span>
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-6">
            Our mission is to empower innovative brands by building exceptional digital experiences from scratch. We believe in the power of custom solutions to create lasting value.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Meet the Architects of Your Vision</h2>
                <p className="mt-4 text-muted-foreground">
                    We are a collective of designers, developers, and strategists united by a passion for building things the right way. Our team is your team. We collaborate closely, challenge assumptions, and dedicate ourselves to your success.
                </p>
            </div>
            <div>
                <Card>
                    <CardContent className="p-2">
                        <Image src="https://placehold.co/600x400.png" alt="Visualz Team" width={600} height={400} className="rounded-lg object-cover" data-ai-hint="team collaboration"/>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Journey/Timeline Section */}
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Our Journey</h2>
            <div className="relative mt-12">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                {timelineEvents.map((event, index) => (
                    <div key={event.year} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
                         <div className="flex items-center justify-center w-full md:w-1/2 md:pr-8 md:group-odd:pr-0 md:group-odd:pl-8">
                            <Card className="w-full max-w-md">
                                <CardHeader>
                                    <CardTitle className="font-headline">{event.title} ({event.year})</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{event.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 bg-background p-1 rounded-full border-2 border-primary">
                            <div className="h-3 w-3 rounded-full bg-primary"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {coreValues.map((value) => (
                    <Card key={value.title} className="text-center">
                        <CardHeader>
                           <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                                {value.icon}
                            </div>
                            <CardTitle className="font-headline mt-4">{value.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{value.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
