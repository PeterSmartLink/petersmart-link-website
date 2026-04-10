'use server';
/**
 * @fileOverview A chatbot flow for answering questions about the business.
 *
 * - chat - A function that handles the chat conversation.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { SITE_CONFIG, CONTACT_INFO } from '@/lib/constants';

const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe('The conversation history.'),
  message: z.string().describe('The latest user message.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export type ChatOutput = string;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  const { history, message } = input;

  const prompt = `You are "Next", a friendly and helpful AI assistant for ${SITE_CONFIG.name} (${SITE_CONFIG.url}).
Your goal is to provide information about the business and assist users by using only the information available on the website.
Your knowledge is strictly limited to the content on ${SITE_CONFIG.url} and its subdomains. Do not use any external information.

If you cannot find the answer on the website, say "I couldn't find that information on the website, but you can contact them directly for help." and then provide the contact information.

If a user expresses that they want to talk to a human agent, a person, or customer support, you MUST provide them with the contact information directly. Say: "You can contact us by phone at ${CONTACT_INFO.phone} or by email at ${CONTACT_INFO.email}." Do not ask them if they want the contact information, just provide it.

Keep your answers brief and to the point.
`;

  const { output } = await ai.generate({
    model: 'gemini-1.5-flash-latest',
    prompt: prompt,
    history: [...history, { role: 'user', content: message }],
  });

  return output!.text;
}
