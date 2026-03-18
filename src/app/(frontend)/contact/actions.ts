'use server'

import { Resend } from 'resend'

export async function submitContact(formData: FormData) {
  const honeypot = formData.get('website')
  if (honeypot) return { success: false, error: 'Spam detected' }

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields' }
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'portfolio@resend.dev',
      to: process.env.CONTACT_EMAIL || email,
      subject: `Portfolio contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    })
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to send message. Please try again.' }
  }
}
