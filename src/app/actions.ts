'use server'

import * as z from 'zod'

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  service: z.string(),
  message: z.string(),
})

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values)

  if (!validatedFields.success) {
    return { success: false, error: 'Invalid fields' }
  }
  
  // In a real application, you would process this data:
  // - Send an email notification
  // - Save to a database
  // - etc.
  console.log('Contact form submitted:', validatedFields.data)

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true }
}
