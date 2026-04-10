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
import { SITE_CONFIG, CONTACT_INFO, services, NAV_LINKS, blogPosts } from '@/lib/constants';

const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })).describe('The conversation history.'),
  message: z.string().describe('The latest user message.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export type ChatOutput = string;

// Simple string for prompt to avoid complex data structures
const businessInfo = `
Business Name: ${SITE_CONFIG.name}
Tagline: ${SITE_CONFIG.tagline}
Description: ${SITE_CONFIG.description}
Founder: ${SITE_CONFIG.founder.name}
Founded: ${SITE_CONFIG.business.founded}

Contact Information:
Email: ${CONTACT_INFO.email}
Phone: ${CONTACT_INFO.phone}
WhatsApp: ${CONTACT_INFO.whatsapp}
Address: ${CONTACT_INFO.address}

Services offered:
${services.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Navigation Links:
${NAV_LINKS.map(l => `- ${l.title}: ${l.href}`).join('\n')}

Recent Blog Posts:
${blogPosts.map(p => `- ${p.title}`).join('\n')}
`;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  const { history, message } = input;

  const prompt = `You are "Next", a friendly and helpful AI assistant for ${SITE_CONFIG.name}.
Your goal is to provide information about the business and assist users.
Use the following information about the business to answer user questions. Be concise and helpful.

${businessInfo}

If a user expresses that they want to talk to a human agent, a person, or customer support, you MUST provide them with the contact information directly. For example, say: "I can help with that. You can contact us by phone at ${CONTACT_INFO.phone} or by email at ${CONTACT_INFO.email}." Do not ask them if they want the contact information, just provide it.

Keep your answers brief and to the point.
`;

  const { output } = await ai.generate({
    model: 'googleai/gemini-2.5-flash',
    prompt: prompt,
    history: [...history, { role: 'user', content: message }],
  });

  return output!.text;
}
