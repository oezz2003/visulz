'use server';

/**
 * @fileOverview An AI agent that analyzes contact form inputs and suggests an appropriate budget and project framing.
 *
 * - analyzeContactForm - A function that handles the contact form analysis process.
 * - ContactFormInput - The input type for the analyzeContactForm function.
 * - ContactFormOutput - The return type for the analyzeContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  company: z.string().describe('The company of the person submitting the form.'),
  message: z.string().describe('The message from the person submitting the form describing their project.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  suggestedBudget: z.string().describe('A suggested budget range for the project based on the message.'),
  projectFramingSuggestions: z.string().describe('Suggestions on how to best frame the project request to align with the agency\'s expertise.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function analyzeContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  return analyzeContactFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contactFormAnalyzerPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  prompt: `You are an AI assistant that analyzes contact form inputs for a digital agency called "Visualz".

  Based on the following information provided in the contact form, suggest an appropriate budget range for the project and provide suggestions on how to best frame the project request to align with the agency's expertise. Consider Visualz' focus on bespoke websites, apps, and campaigns.

  Name: {{{name}}}
  Email: {{{email}}}
  Company: {{{company}}}
  Message: {{{message}}}

  Provide the output in JSON format.
  `,
});

const analyzeContactFormFlow = ai.defineFlow(
  {
    name: 'analyzeContactFormFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
