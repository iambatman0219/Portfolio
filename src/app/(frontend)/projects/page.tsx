import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'

export default async function ProjectsPage() {
  const payload = await getPayload({ config: configPromise })

  const { docs: projects } = await payload.find({
    collection: 'projects',
    limit: 100,
    sort: '-createdAt',
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
          All projects
        </h1>
        <p style={{ fontSize: '16px', color: '#9A9896', lineHeight: 1.7 }}>
          {projects.length} projects — side projects, client work, and open source.
        </p>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #2A2A2E', margin: '0 0 52px' }} />

      {projects.length === 0 ? (
        <p style={{ color: '#5E5D5B', fontSize: '14px' }}>
          No projects yet — add some in your admin panel.
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '16px',
            paddingBottom: '80px',
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
                  borderBottom: '1px solid #2A2A2E',
                  overflow: 'hidden',
                }}
              >
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail.url}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <span style={{ fontSize: '32px', color: '#2A2A2E' }}>⬡</span>
                )}
              </div>
              <div style={{ padding: '18px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '8px',
                  }}
                >
                  <h3 style={{ fontSize: '15px', fontWeight: 500, color: '#F0EFE8', flex: 1 }}>
                    {project.title}
                  </h3>
                  <span
                    style={{
                      fontSize: '10px',
                      padding: '2px 8px',
                      borderRadius: '100px',
                      background: project.status === 'completed' ? '#0d1f12' : '#1a1a0d',
                      color: project.status === 'completed' ? '#3DD68C' : '#D4A84B',
                      marginLeft: '8px',
                      flexShrink: 0,
                    }}
                  >
                    {project.status}
                  </span>
                </div>
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
                <div
                  style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}
                >
                  {project.techStack?.slice(0, 4).map((t: any, i: number) => (
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
                    paddingTop: '14px',
                    borderTop: '1px solid #2A2A2E',
                  }}
                >
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '12px', color: '#D4A84B', textDecoration: 'none' }}
                    >
                      Live demo ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
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
    </main>
  )
}
