'use client';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Bluecast Technologies',
      period: 'Feb 2024 – Present',
      location: 'Ernakulam, India',
      highlights: [
        'Leading frontend development of enterprise-grade management portals using Next.js and microservices architecture.',
        'Building high-performance backend systems with Nest.js, Prisma ORM, and gRPC for low-latency service communication.',
        'Contributing to High-Level Design (HLD) and Low-Level Design (LLD) for scalable system architecture.',
        'Working across the full stack — from PostgreSQL schemas to pixel-perfect responsive UIs.',
      ],
      stack: ['Next.js', 'Nest.js', 'PostgreSQL', 'Prisma', 'gRPC', 'TypeScript'],
      current: true,
    },
    {
      role: 'MERN Stack Intern',
      company: 'Luminar Technolab',
      period: 'May 2023 – Jan 2024',
      location: 'Ernakulam, India',
      highlights: [
        'Developed full-stack features using MongoDB, Express.js, React.js, and Node.js.',
        'Translated Figma/UI designs into responsive, accessible React components.',
        'Practiced agile development workflows with team-based code reviews and version control.',
        'Built RESTful APIs and integrated third-party services for real-world project features.',
      ],
      stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
      current: false,
    },
  ];

  return (
    <section className="mil-soft-bg" id="experience">
      <div className="container mil-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
              2+ years of hands-on experience building<br />scalable full-stack applications.
            </span>
          </div>
        </div>

        <h2 className="mil-center mil-up mil-mb-60">
          Professional <span className="mil-thin">Experience</span>
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {experiences.map((exp, i) => (
              <div key={i} style={{ marginBottom: '60px' }}>
                {/* Experience Card */}
                <div style={{
                  background: '#fff',
                  borderRadius: '4px',
                  padding: '48px',
                  boxShadow: '0 2px 40px rgba(0,0,0,0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Active indicator */}
                  {exp.current && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      background: 'rgba(255, 152, 0, 1)',
                    }}></div>
                  )}

                  <div className="row justify-content-between align-items-start mil-mb-30">
                    <div className="col-lg-8">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <h4 style={{ margin: 0 }}>{exp.role}</h4>
                        {exp.current && (
                          <span style={{
                            background: 'rgba(255,152,0,0.12)',
                            color: 'rgba(255,152,0,1)',
                            fontSize: '11px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            padding: '4px 12px',
                            borderRadius: '20px',
                          }}>Current</span>
                        )}
                      </div>
                      <p style={{ fontWeight: 600, fontSize: '18px', marginBottom: '4px', color: 'rgba(255,152,0,1)' }}>{exp.company}</p>
                      <p style={{ color: '#888', fontSize: '14px', margin: 0 }}>
                        <i className="fas fa-map-marker-alt" style={{ marginRight: '6px' }}></i>{exp.location}
                      </p>
                    </div>
                    <div className="col-lg-4" style={{ textAlign: 'right' }}>
                      <p style={{ fontWeight: 600, color: '#333', fontSize: '15px' }}>
                        <i className="fas fa-calendar-alt" style={{ marginRight: '6px', color: 'rgba(255,152,0,1)' }}></i>
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <ul style={{ paddingLeft: '20px', marginBottom: '30px' }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ marginBottom: '10px', lineHeight: 1.7, color: '#555' }}>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.stack.map((tech) => (
                      <span key={tech} style={{
                        background: '#f5f5f5',
                        border: '1px solid #e8e8e8',
                        borderRadius: '4px',
                        padding: '4px 14px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#333',
                        letterSpacing: '0.3px',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
