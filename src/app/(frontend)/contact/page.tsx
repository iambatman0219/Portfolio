'use client'

import { useState } from 'react'
import Link from 'next/link'
import { submitContact } from './actions'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.currentTarget)
    const result = await submitContact(formData)
    if (result.success) {
      setStatus('success')
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Something went wrong')
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: '#181820',
    border: '1px solid #2A2A2E',
    borderRadius: '12px',
    color: '#F0EFE8',
    fontSize: '14px',
    fontFamily: 'system-ui, sans-serif',
    outline: 'none',
  }

  return (
    <main
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 24px',
        fontFamily: 'system-ui, sans-serif',
        color: '#F0EFE8',
        minHeight: '100vh',
      }}
    >
      <section style={{ padding: '80px 0 52px' }}>
        <Link
          href="/"
          style={{
            fontSize: '13px',
            color: '#9A9896',
            textDecoration: 'none',
            marginBottom: '32px',
            display: 'inline-block',
          }}
        >
          ← Back home
        </Link>
        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 400,
            letterSpacing: '-1.5px',
            marginBottom: '16px',
          }}
        >
          Get in touch
        </h1>
        <p style={{ fontSize: '16px', color: '#9A9896', lineHeight: 1.7, maxWidth: '480px' }}>
          Have a project in mind, want to collaborate, or just want to say hello? I typically reply
          within 48 hours.
        </p>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #2A2A2E', margin: '0 0 52px' }} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          paddingBottom: '80px',
        }}
      >
        {/* Form */}
        <div>
          {status === 'success' ? (
            <div
              style={{
                background: '#0d1f12',
                border: '1px solid #1a4a2a',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>✓</div>
              <div
                style={{ fontSize: '16px', fontWeight: 500, marginBottom: '8px', color: '#3DD68C' }}
              >
                Message sent!
              </div>
              <div style={{ fontSize: '14px', color: '#9A9896' }}>
                I'll get back to you within 48 hours.
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {/* Honeypot */}
              <input
                name="website"
                type="text"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label
                  style={{
                    fontSize: '12px',
                    color: '#9A9896',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: '12px',
                    color: '#9A9896',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  style={{
                    fontSize: '12px',
                    color: '#9A9896',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Subject
                </label>
                <select name="subject" style={inputStyle}>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="General">General</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    fontSize: '12px',
                    color: '#9A9896',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="What's on your mind?"
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              {status === 'error' && (
                <div
                  style={{
                    fontSize: '13px',
                    color: '#E24B4A',
                    background: '#1f0d0d',
                    padding: '10px 14px',
                    borderRadius: '8px',
                  }}
                >
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  background: status === 'sending' ? '#2A2A2E' : '#D4A84B',
                  color: status === 'sending' ? '#9A9896' : '#1A1510',
                  padding: '13px 26px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 500,
                  border: 'none',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  fontFamily: 'system-ui, sans-serif',
                  alignSelf: 'flex-start',
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>

        {/* Contact info */}
        <div style={{ paddingTop: '8px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 500, marginBottom: '24px' }}>
            Other ways to reach me
          </h2>
          {[
            { label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
            {
              label: 'GitHub',
              value: 'github.com/iambatman0219',
              href: 'https://github.com/iambatman0219',
            },
            { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: '#' },
            { label: 'Twitter', value: '@yourhandle', href: '#' },
          ].map(({ label, value, href }) => (
            <div key={label} style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', color: '#5E5D5B', marginBottom: '4px' }}>{label}</div>
              <a href={href} style={{ fontSize: '14px', color: '#D4A84B', textDecoration: 'none' }}>
                {value}
              </a>
            </div>
          ))}
          <div
            style={{
              marginTop: '32px',
              padding: '16px',
              background: '#181820',
              borderRadius: '12px',
              border: '1px solid #2A2A2E',
            }}
          >
            <div style={{ fontSize: '12px', color: '#5E5D5B', marginBottom: '6px' }}>
              Response time
            </div>
            <div style={{ fontSize: '14px', color: '#9A9896' }}>
              I typically reply within 48 hours on weekdays.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
