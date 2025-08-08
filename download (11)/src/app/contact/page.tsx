import { ContactForm } from "@/components/contact/contact-form";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="w-full py-16 md:py-24 text-center bg-card">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              Let’s Build Your Future.
            </span>
          </h1>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-6">
            Have a project in mind? We'd love to hear about it. Fill out the form below or reach out to us directly.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-headline text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground mt-2">Use the form to get an AI-powered budget and framing suggestion, or use one of the methods below.</p>
            <div className="space-y-6 mt-8">
                <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:hello@visualz.dev" className="text-muted-foreground hover:text-primary">hello@visualz.dev</a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">(123) 456-7890</a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                        <h3 className="font-semibold">Office</h3>
                        <p className="text-muted-foreground">123 Future Drive, Tech City, 12345</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <Linkedin className="w-6 h-6 text-primary" />
                    <div>
                        <h3 className="font-semibold">Socials</h3>
                        <div className="flex gap-4">
                           <a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a>
                           <a href="#" className="text-muted-foreground hover:text-primary">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
             <div className="mt-8 rounded-lg overflow-hidden">
                <img src="https://placehold.co/600x400.png" alt="Map" className="w-full h-full object-cover" data-ai-hint="city map" />
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
