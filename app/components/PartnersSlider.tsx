'use client';

const skills = [
  'Next.js', 'React.js', 'Node.js', 'Nest.js',
  'TypeScript', 'JavaScript', 'PostgreSQL', 'Prisma ORM',
  'GraphQL', 'TanStack Query', 'Tailwind CSS', 'Mantine UI',
  'Shadcn UI', 'gRPC', 'Docker', 'Git',
];

export default function TechStackBanner() {
  // Duplicate for infinite scroll effect
  const doubled = [...skills, ...skills];

  return (
    <div className="mil-soft-bg">
      <div style={{ overflow: 'hidden', padding: '40px 0', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <div
          style={{
            display: 'flex',
            gap: '0',
            width: 'max-content',
            animation: 'mil-infinite-scroll 30s linear infinite',
          }}
        >
          {doubled.map((skill, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 40px',
                whiteSpace: 'nowrap',
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: i % 4 === 0 ? 'rgba(255,152,0,1)' : '#888',
                borderRight: '1px solid #e0e0e0',
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes mil-infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
