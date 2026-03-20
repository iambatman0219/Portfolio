import Link from 'next/link'

export default function AboutPage() {
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
            marginBottom: '24px',
          }}
        >
          About me
        </h1>
        <p
          style={{
            fontSize: '16px',
            color: '#9A9896',
            lineHeight: 1.8,
            maxWidth: '600px',
            marginBottom: '16px',
          }}
        >
          Hi, I&apos;m Beuce Wayne &mdash; a full-stack developer based in Durgapur. I build web
          applications with a focus on clean code, good performance, and user experience that
          actually makes sense.
        </p>
        <p style={{ fontSize: '16px', color: '#9A9896', lineHeight: 1.8, maxWidth: '600px' }}>
          I&apos;ve been writing code for 5 months. I started with c & java, and now I mostly work
          with TypeScript, React, and Node.js.
        </p>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #2A2A2E', margin: '0 0 52px' }} />

      {/* Skills */}
      <section style={{ marginBottom: '52px' }}>
        <h2
          style={{
            fontSize: '22px',
            fontWeight: 400,
            letterSpacing: '-0.5px',
            marginBottom: '24px',
          }}
        >
          What I work with
        </h2>
        {[
          {
            level: 'Expert',
            color: '#3DD68C',
            tags: ['TypeScript', 'React', 'Next.js', 'Node.js'],
          },
          {
            level: 'Proficient',
            color: '#D4A84B',
            tags: ['PostgreSQL', 'Tailwind CSS', 'Docker', 'AWS'],
          },
          { level: 'Learning', color: '#9A9896', tags: ['Rust', 'Go', 'Machine Learning'] },
        ].map(({ level, color, tags }) => (
          <div
            key={level}
            style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '16px' }}
          >
            <div style={{ fontSize: '12px', color, minWidth: '80px', paddingTop: '6px' }}>
              {level}
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '13px',
                    padding: '5px 14px',
                    borderRadius: '100px',
                    border: '1px solid #2A2A2E',
                    color: '#9A9896',
                    background: '#181820',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #2A2A2E', margin: '0 0 52px' }} />

      {/* Timeline */}
      <section style={{ marginBottom: '52px' }}>
        <h2
          style={{
            fontSize: '22px',
            fontWeight: 400,
            letterSpacing: '-0.5px',
            marginBottom: '24px',
          }}
        >
          Experience
        </h2>
        {[
          {
            year: '2024 – Now',
            title: 'Freelance Developer',
            place: 'Self-employed',
            desc: 'Building web apps for clients across various industries.',
          },
          {
            year: '2022 – 2024',
            title: 'Junior Developer',
            place: 'Company Name',
            desc: 'Worked on full-stack features using React and Node.js.',
          },
          {
            year: '2020 – 2022',
            title: 'CS Degree',
            place: 'Your University',
            desc: 'Studied computer science, focused on software engineering.',
          },
        ].map(({ year, title, place, desc }) => (
          <div
            key={year}
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr',
              gap: '20px',
              marginBottom: '28px',
            }}
          >
            <div style={{ fontSize: '12px', color: '#5E5D5B', paddingTop: '2px' }}>{year}</div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 500, marginBottom: '4px' }}>{title}</div>
              <div style={{ fontSize: '13px', color: '#D4A84B', marginBottom: '6px' }}>{place}</div>
              <div style={{ fontSize: '13px', color: '#9A9896', lineHeight: 1.55 }}>{desc}</div>
            </div>
          </div>
        ))}
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #2A2A2E', margin: '0 0 52px' }} />

      {/* Currently learning */}
      <section style={{ marginBottom: '52px' }}>
        <h2
          style={{
            fontSize: '22px',
            fontWeight: 400,
            letterSpacing: '-0.5px',
            marginBottom: '16px',
          }}
        >
          Currently exploring
        </h2>
        <p style={{ fontSize: '15px', color: '#9A9896', lineHeight: 1.7 }}>
          Right now I&apos;m diving into Rust for systems programming, and learning more about
          distributed systems. Also reading <em>Designing Data-Intensive Applications</em>.
        </p>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #2A2A2E', margin: '0 0 52px' }} />

      {/* CTA */}
      <section
        style={{
          paddingBottom: '80px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Link
          href="/contact"
          style={{
            background: '#D4A84B',
            color: '#1A1510',
            padding: '12px 26px',
            borderRadius: '100px',
            fontSize: '13px',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          Get in touch
        </Link>
        <a
          href="/resume.pdf"
          style={{
            background: 'transparent',
            color: '#F0EFE8',
            padding: '12px 26px',
            borderRadius: '100px',
            fontSize: '13px',
            border: '1px solid #2A2A2E',
            textDecoration: 'none',
          }}
        >
          Download resume
        </a>
      </section>
    </main>
  )
}
