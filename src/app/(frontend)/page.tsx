import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  const { docs: projects } = await payload.find({
    collection: 'projects',
    where: { featured: { equals: true } },
    limit: 3,
  })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: { _status: { equals: 'published' } },
    limit: 3,
    sort: '-publishedAt',
  })

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
      {/* Hero */}
      <section style={{ padding: '80px 0 60px' }}>
        <div
          style={{
            fontSize: '12px',
            color: '#D4A84B',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{ width: '24px', height: '1px', background: '#D4A84B', display: 'inline-block' }}
          ></span>
          Available for work
        </div>
        <h1
          style={{
            fontSize: 'clamp(36px, 5vw, 58px)',
            lineHeight: 1.05,
            letterSpacing: '-1.5px',
            marginBottom: '20px',
            fontWeight: 400,
          }}
        >
          Building things
          <br />
          for the <em style={{ color: '#D4A84B' }}>web</em>
        </h1>
        <p
          style={{
            fontSize: '16px',
            color: '#9A9896',
            maxWidth: '420px',
            lineHeight: 1.7,
            marginBottom: '36px',
          }}
        >
          Full-stack developer focused on clean code, fast interfaces, and products that people
          actually enjoy using.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link
            href="/projects"
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
            View my work
          </Link>
          <Link
            href="/contact"
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
            Get in touch
          </Link>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #2A2A2E', margin: '0' }} />

      {/* Featured Projects */}
      <section style={{ padding: '52px 0' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '32px',
          }}
        >
          <h2 style={{ fontSize: '26px', fontWeight: 400, letterSpacing: '-0.5px' }}>
            Featured projects
          </h2>
          <Link
            href="/projects"
            style={{ fontSize: '13px', color: '#D4A84B', textDecoration: 'none' }}
          >
            View all →
          </Link>
        </div>

        {projects.length === 0 ? (
          <p style={{ color: '#5E5D5B', fontSize: '14px' }}>
            No featured projects yet — add some in your admin panel.
          </p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '16px',
            }}
          >
            {projects.map((project: any) => (
              <div
                key={project.id}
                style={{
                  background: '#181820',
                  border: '1px solid #2A2A2E',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '140px',
                    background: '#1C1C1F',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    borderBottom: '1px solid #2A2A2E',
                  }}
                >
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail.url}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    '⬡'
                  )}
                </div>
                <div style={{ padding: '18px' }}>
                  <h3
                    style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      marginBottom: '8px',
                      color: '#F0EFE8',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#9A9896',
                      lineHeight: 1.55,
                      marginBottom: '14px',
                    }}
                  >
                    {project.excerpt}
                  </p>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {project.techStack?.slice(0, 3).map((t: any, i: number) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '11px',
                          padding: '3px 10px',
                          borderRadius: '100px',
                          background: '#1C1C1F',
                          color: '#5E5D5B',
                        }}
                      >
                        {t.tag}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      marginTop: '14px',
                      paddingTop: '14px',
                      borderTop: '1px solid #2A2A2E',
                    }}
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        style={{ fontSize: '12px', color: '#9A9896', textDecoration: 'none' }}
                      >
                        Live demo ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        style={{ fontSize: '12px', color: '#9A9896', textDecoration: 'none' }}
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #2A2A2E', margin: '0' }} />

      {/* Latest Posts */}
      <section style={{ padding: '52px 0' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '32px',
          }}
        >
          <h2 style={{ fontSize: '26px', fontWeight: 400, letterSpacing: '-0.5px' }}>
            Latest writing
          </h2>
          <Link
            href="/posts"
            style={{ fontSize: '13px', color: '#D4A84B', textDecoration: 'none' }}
          >
            Read all →
          </Link>
        </div>

        {posts.length === 0 ? (
          <p style={{ color: '#5E5D5B', fontSize: '14px' }}>
            No posts yet — write your first one in the admin panel.
          </p>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1px',
              border: '1px solid #2A2A2E',
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#2A2A2E',
            }}
          >
            {posts.map((post: any) => (
              <Link
                key={post.id}
                href={`/posts/${post.slug}`}
                style={{
                  background: '#181820',
                  padding: '22px 24px',
                  textDecoration: 'none',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '16px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: '#5E5D5B',
                      marginBottom: '8px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#F0EFE8',
                      marginBottom: '8px',
                    }}
                  >
                    {post.title}
                  </div>
                  <div style={{ fontSize: '13px', color: '#9A9896', lineHeight: 1.55 }}>
                    {post.meta?.description}
                  </div>
                </div>
                <div style={{ color: '#5E5D5B', fontSize: '18px' }}>→</div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #2A2A2E', margin: '0' }} />

      {/* Status */}
      <section style={{ padding: '52px 0 24px' }}>
        <h2
          style={{
            fontSize: '26px',
            fontWeight: 400,
            letterSpacing: '-0.5px',
            marginBottom: '24px',
          }}
        >
          Currently
        </h2>
        <div
          style={{
            background: '#181820',
            border: '1px solid #2A2A2E',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            gap: '20px',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#3DD68C',
              flexShrink: 0,
              marginTop: '5px',
            }}
          ></div>
          <div>
            <div
              style={{
                fontSize: '11px',
                color: '#D4A84B',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '6px',
              }}
            >
              Working on
            </div>
            <div style={{ fontSize: '14px', color: '#F0EFE8', lineHeight: 1.55 }}>
              My portfolio website — built with Next.js and Payload CMS
            </div>
            <div style={{ fontSize: '13px', color: '#9A9896', marginTop: '4px' }}>
              Open to new opportunities
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid #2A2A2E',
          padding: '32px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div style={{ fontSize: '12px', color: '#5E5D5B' }}>
          © 2025 Your Name. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            ['GitHub', '#'],
            ['LinkedIn', '#'],
            ['Twitter', '#'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{ fontSize: '12px', color: '#5E5D5B', textDecoration: 'none' }}
            >
              {label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  )
}
