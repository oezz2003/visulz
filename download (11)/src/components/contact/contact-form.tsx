"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { analyzeContactForm, ContactFormOutput } from "@/ai/flows/contact-form-analyzer";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<ContactFormOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      message: "",
    },
  });

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    setAiResponse(null);

    try {
      const response = await analyzeContactForm({
        name: data.name,
        email: data.email,
        company: data.company || "Not provided",
        message: data.message,
      });
      setAiResponse(response);
      toast({
        title: "Analysis Complete!",
        description: "We've analyzed your request. See the suggestions below.",
      });
    } catch (error) {
      console.error("Error analyzing form:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with our AI assistant. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h3 className="font-headline text-2xl font-bold">Project Details</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="InnovateCo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated Budget (Optional)</FormLabel>
                 <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="< $10,000">&lt; $10,000</SelectItem>
                      <SelectItem value="$10,000 - $25,000">$10,000 - $25,000</SelectItem>
                      <SelectItem value="$25,000 - $50,000">$25,000 - $50,000</SelectItem>
                      <SelectItem value="$50,000+">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tell us about your project</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your goals, timeline, and what you're looking to build."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full font-semibold group">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
                <>
                <Wand2 className="mr-2 h-4 w-4 group-hover:text-accent transition-colors" />
                 Analyze & Submit
                </>
            )}
          </Button>
        </form>
      </Form>

      {aiResponse && (
        <Card className="mt-8 bg-secondary border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
                <Wand2 className="h-6 w-6 text-primary"/>
                <CardTitle className="font-headline">AI-Powered Suggestions</CardTitle>
            </div>
            <CardDescription>
                Based on your request, here are some initial thoughts to help guide our conversation.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">Suggested Budget</h4>
              <p className="text-muted-foreground">{aiResponse.suggestedBudget}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Project Framing Suggestions</h4>
              <p className="text-muted-foreground">{aiResponse.projectFramingSuggestions}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
