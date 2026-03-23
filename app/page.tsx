import Image from 'next/image';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HiddenElements from './components/HiddenElements';
import GSAPInit from './components/GSAPInit';
import ExperienceSection from './components/ReviewsSlider';
import TechStackBanner from './components/PartnersSlider';

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const skills = [
  { category: 'Frontend', items: ['Next.js', 'React.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Mantine UI', 'Shadcn UI'] },
  { category: 'Backend', items: ['Node.js', 'Nest.js', 'GraphQL', 'gRPC', 'REST APIs', 'WebSockets'] },
  { category: 'Database & ORM', items: ['PostgreSQL', 'SQL', 'Prisma ORM', 'TypeORM', 'MongoDB'] },
  { category: 'Tools & Libraries', items: ['TanStack Query', 'Git', 'Microservices', 'Apollo Client', 'Docker'] },
];

const projects = [
  {
    num: '01',
    title: 'Worker Productivity Management Portal',
    role: 'Full Stack Developer & Frontend Team Lead',
    stack: ['Next.js', 'Nest.js', 'PostgreSQL', 'Prisma', 'gRPC', 'Microservices'],
    description: 'Architected and led the frontend development using a microservices-based approach. Engineered high-performance backend systems with Nest.js and Prisma, implementing gRPC for efficient, low-latency service communication. Contributed to both HLD and LLD for robust, scalable system architecture.',
  },
  {
    num: '02',
    title: 'Rail Cargo Management System',
    role: 'Full Stack Developer',
    stack: ['Next.js', 'Mantine UI', 'Tailwind CSS', 'TanStack Query'],
    description: 'Engineered a centralized web platform focused on high-efficiency cargo booking. Optimized application performance with TanStack Query for advanced server-state management — automated caching, synchronization, and intelligent error handling.',
  },
  {
    num: '03',
    title: 'Customer Relationship Management (CRM)',
    role: 'Full Stack Developer',
    stack: ['Next.js', 'Nest.js', 'TypeORM', 'PostgreSQL', 'Mantine UI', 'WebSockets'],
    description: 'Built a comprehensive CRM solution featuring advanced lead tracking, subscription lifecycles, and secure payment processing. Integrated WebSockets for real-time notifications and built a highly responsive administrative dashboard.',
  },
  {
    num: '04',
    title: 'E-Commerce Platform (User & Admin)',
    role: 'Full Stack Developer',
    stack: ['Next.js', 'Nest.js', 'TypeORM', 'PostgreSQL', 'TanStack Query'],
    description: 'Engineered a dual-sided platform with a seamless customer storefront and a data-driven admin panel. Developed secure checkout flows supporting multiple payment gateways including online payments and Cash on Delivery.',
  },
  {
    num: '05',
    title: 'Dance School Management System',
    role: 'Full Stack Developer',
    stack: ['Next.js 14', 'Nest.js', 'Shadcn UI', 'TanStack Query', 'Tailwind CSS'],
    description: 'Developed an end-to-end management suite to automate student registrations, class scheduling, and financial reporting. Utilized Shadcn UI and Next.js 14 to deliver a modern, accessible interface optimized for both desktop and mobile.',
  },
  {
    num: '06',
    title: 'Education Informative Application',
    role: 'Full Stack Developer',
    stack: ['Next.js', 'Tailwind CSS', 'GraphQL', 'Apollo Client', 'TanStack Query'],
    description: 'Engineered a highly responsive platform delivering structured academic content. Optimized data fetching with GraphQL, implementing efficient queries that eliminated over-fetching and significantly boosted page load performance.',
  },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function Home() {
  return (
    <div className="mil-wrapper" id="top">
      <Cursor />
      <Preloader />

      {/* Scrollbar progress */}
      <div className="mil-progress-track">
        <div className="mil-progress"></div>
      </div>

      <Navigation />

      <div className="mil-content">
        <div id="swupMain" className="mil-main-transition">

          {/* ═══════════════════════════════════════
              HERO / BANNER
          ═══════════════════════════════════════ */}
          <section className="mil-banner mil-dark-bg">
            <div className="mi-invert-fix">
              <div className="mil-animation-frame">
                <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6"></div>
                <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1"></div>
                <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1"></div>
              </div>
              <div className="mil-gradient"></div>
              <div className="container">
                <div className="mil-banner-content mil-up">
                  <h1 className="mil-muted mil-mb-60">
                    Building <span className="mil-thin">Scalable</span><br />
                    Web <span className="mil-thin">Applications.</span>
                  </h1>
                  <div className="row">
                    <div className="col-md-8 col-lg-6">
                      <p className="mil-light-soft mil-mb-60">
                        Hi, I&apos;m <strong style={{ color: 'rgba(255,152,0,1)' }}>Mohammed Hashil</strong> — a Software Engineer
                      </p>
                    </div>
                  </div>

                  <a href="#projects" className="mil-button mil-arrow-place mil-btn-space">
                    <span>View Projects</span>
                  </a>
                  <a href="#contact" className="mil-link mil-muted mil-arrow-place">
                    <span>Get In Touch</span>
                  </a>

                  <div className="mil-circle-text">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px" y="0px"
                      viewBox="0 0 300 300"
                      enableBackground="new 0 0 300 300"
                      xmlSpace="preserve"
                      className="mil-ct-svg mil-rotate"
                      data-value="360"
                    >
                      <defs>
                        <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                      </defs>
                      <circle cx="150" cy="100" r="75" fill="none" />
                      <g>
                        <use xlinkHref="#circlePath" fill="none" />
                        <text style={{ letterSpacing: '5px' }}>
                          <textPath xlinkHref="#circlePath">Full Stack · MERN · Next.js · </textPath>
                        </text>
                      </g>
                    </svg>
                    <a href="#about" className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"></a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════
              ABOUT
          ═══════════════════════════════════════ */}
          <section id="about">
            <div className="container mil-p-120-30">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 col-xl-5">
                  <div className="">
                    <h2 className="mil-up mil-mb-20">
                      About
                    </h2>
                    <p className="mil-up mil-mb-30" style={{ color: '#111', fontSize: '18px', lineHeight: '1.8', fontWeight: 400, letterSpacing: '-0.2px' }}>
                      I&apos;m a Full Stack Developer with 2+ years of professional experience building enterprise-grade web applications. Currently working as a <strong>Software Engineer</strong>, I specialize in the MERN stack and modern full-stack patterns.
                    </p>
                    <p className="mil-up mil-mb-60" style={{ color: '#111', fontSize: '18px', lineHeight: '1.8', fontWeight: 400, letterSpacing: '-0.2px' }}>
                      I&apos;m proficient in <strong>Next.js, React.js, Node.js, NestJS</strong>, and <strong>Prisma ORM</strong>, with hands-on experience in microservices architecture, gRPC, and real-time applications using WebSockets. I enjoy bridging the gap between clean UI and performant backends.
                    </p>

                    <div className="mil-about-quote">
                      <div style={{
                        display: 'flex',
                        gap: '30px',
                        flexWrap: 'wrap',
                      }}>
                        <div>
                          <h3 style={{ color: 'rgba(255,152,0,1)', marginBottom: '4px' }}>2+</h3>
                          <p style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888' }}>Years Experience</p>
                        </div>
                        <div>
                          <h3 style={{ color: 'rgba(255,152,0,1)', marginBottom: '4px' }}>12+</h3>
                          <p style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888' }}>Projects Shipped</p>
                        </div>
                        <div>
                          <h3 style={{ color: 'rgba(255,152,0,1)', marginBottom: '4px' }}>15+</h3>
                          <p style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: '#888' }}>Technologies</p>
                        </div>
                      </div>
                    </div>

                    <div className="mil-up" style={{ marginTop: '40px' }}>
                      <a
                        href="mailto:hashilhashy007@gmail.com"
                        className="mil-button mil-arrow-place mil-mb-60"
                      >
                        <span>Contact Me</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mil-about-photo mil-mb-90">
                    <div className="mil-lines-place"></div>
                    <div className="mil-up mil-img-frame" style={{ paddingBottom: '130%' }}>
                      <Image
                        src="/img/photo/1.jpg"
                        alt="Mohammed Hashil - Full Stack Developer"
                        className="mil-scale"
                        data-value-1="1"
                        data-value-2="1.2"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact info bar */}
              <div className="row" style={{ borderTop: '1px solid #eee', paddingTop: '40px', marginBottom: '60px' }}>
                {[
                  { icon: 'fas fa-envelope', label: 'Email', value: 'hashilhashy007@gmail.com', href: 'mailto:hashilhashy007@gmail.com' },
                  { icon: 'fas fa-phone', label: 'Phone', value: '+91 9946734217', href: 'tel:+919946734217' },
                  { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'Hashil-ck', href: 'https://www.linkedin.com/in/hashil-ck/' },
                  { icon: 'fab fa-github', label: 'GitHub', value: 'Hashil-ck', href: 'https://github.com/Hashil-ck' },
                ].map((item) => (
                  <div key={item.label} className="col-sm-6 col-lg-3" style={{ marginBottom: '20px' }}>
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: 'rgba(255,152,0,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <i className={item.icon} style={{ color: 'rgba(255,152,0,1)', fontSize: '16px' }}></i>
                        </div>
                        <div>
                          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#999', margin: '0 0 2px' }}>{item.label}</p>
                          <p style={{ fontWeight: 600, fontSize: '14px', margin: 0, color: '#222' }}>{item.value}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════
              SKILLS
          ═══════════════════════════════════════ */}
          <section className="mil-dark-bg" id="skills">
            <div className="mi-invert-fix">
              <div className="mil-animation-frame">
                <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{ top: '300px', right: '-100px' }}></div>
                <div className="mil-animation mil-position-2 mil-scale" data-value-1="2" data-value-2="1" style={{ left: '150px' }}></div>
              </div>
              <div className="container mil-p-120-0">
                <div className="mil-mb-120">
                  <div className="row">
                    <div className="col-lg-10">
                      <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">
                        Skilled in modern full-stack technologies,<br />from pixel-perfect UIs to scalable backend systems.
                      </span>
                    </div>
                  </div>

                  <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
                    <span className="mil-text-image">
                      <Image src="/img/photo/2.jpg" alt="coding" width={60} height={60} />
                    </span>
                    <h2 className="mil-h1 mil-muted mil-center">Technical <span className="mil-thin">Skills</span></h2>
                  </div>
                  <div className="mil-complex-text justify-content-center mil-up">
                    <h2 className="mil-h1 mil-muted mil-center">& <span className="mil-thin">Expertise.</span></h2>
                  </div>
                </div>

                <div className="row mil-services-grid m-0">
                  {skills.map((group) => (
                    <div key={group.category} className="col-md-6 col-lg-3 mil-services-grid-item p-0">
                      <div className="mil-service-card-sm mil-up" style={{ cursor: 'default' }}>
                        <h5 className="mil-muted mil-mb-30">{group.category}</h5>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {group.items.map((skill) => (
                            <span
                              key={skill}
                              style={{
                                background: 'rgba(255,255,255,0.07)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '4px',
                                padding: '4px 12px',
                                fontSize: '12px',
                                color: 'rgba(255,255,255,0.7)',
                                fontWeight: 500,
                                letterSpacing: '0.3px',
                              }}
                            >
                              {skill}
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

          {/* ═══════════════════════════════════════
              PROJECTS
          ═══════════════════════════════════════ */}
          <section id="projects">
            <div className="container mil-p-120-30">
              <div className="row align-items-center mil-mb-60">
                <div className="col-lg-7 mil-mb-30">
                  <h3 className="mil-up">Featured Projects:</h3>
                </div>
                <div className="col-lg-5 mil-mb-30">
                  <div className="mil-adaptive-right mil-up">
                    <a href="https://github.com/Hashil-ck" target="_blank" className="mil-link mil-dark mil-arrow-place">
                      <span>View GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row">
                {projects.map((project) => (
                  <div key={project.num} className="col-lg-6 mil-mb-60">
                    <div className="mil-blog-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                      {/* Header strip */}
                      <div style={{
                        background: '#111',
                        padding: '30px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '16px',
                      }}>
                        <div>
                          <p style={{
                            fontSize: '12px',
                            fontWeight: 700,
                            color: 'rgba(255,152,0,1)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            margin: '0 0 8px',
                          }}>
                            Project {project.num}
                          </p>
                          <h5 style={{ color: '#fff', margin: 0, lineHeight: 1.3, fontSize: '18px' }}>{project.title}</h5>
                        </div>
                        <div style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: 'rgba(255,152,0,1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <i className="fas fa-arrow-right" style={{ color: '#fff', fontSize: '14px' }}></i>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="mil-post-descr" style={{ padding: '28px 30px 30px' }}>
                        <div className="mil-labels mil-up mil-mb-30" style={{ alignItems: 'center' }}>
                          <div className="mil-label mil-upper mil-accent">Full Stack</div>
                          <div className="mil-label mil-upper">{project.role.includes('Lead') ? 'Team Lead' : 'Developer'}</div>
                        </div>
                        <p className="mil-post-text mil-up mil-mb-30">{project.description}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              style={{
                                background: '#f5f5f5',
                                border: '1px solid #e5e5e5',
                                borderRadius: '4px',
                                padding: '3px 10px',
                                fontSize: '11px',
                                fontWeight: 700,
                                color: '#444',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════
              EXPERIENCE SECTION (was Reviews)
          ═══════════════════════════════════════ */}
          <ExperienceSection />

          {/* ═══════════════════════════════════════
              TECH STACK BANNER (was Partners)
          ═══════════════════════════════════════ */}
          <TechStackBanner />

          {/* ═══════════════════════════════════════
              EDUCATION
          ═══════════════════════════════════════ */}
          <section>
            <div className="container mil-p-120-60">
              <div className="row align-items-center mil-mb-60">
                <div className="col-lg-6 mil-mb-30">
                  <h3 className="mil-up">Education &amp; Background:</h3>
                </div>
                <div className="col-lg-6 mil-mb-30">
                  <div className="mil-adaptive-right mil-up">
                    <a href="mailto:hashilhashy007@gmail.com" className="mil-link mil-dark mil-arrow-place">
                      <span>Hire Me</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Education card */}
                <div className="col-lg-6">
                  <div className="mil-blog-card mil-mb-60" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div style={{ background: '#f9f9f9', padding: '36px', borderLeft: '4px solid rgba(255,152,0,1)' }}>
                      <div className="mil-labels mil-up mil-mb-30">
                        <div className="mil-label mil-upper mil-accent">Education</div>
                        <div className="mil-label mil-upper">2020 – 2023</div>
                      </div>
                      <h4 className="mil-up mil-mb-30">Bachelor of Computer Applications</h4>
                      <p style={{ fontWeight: 600, color: 'rgba(255,152,0,1)', marginBottom: '8px', fontSize: '16px' }}>Calicut University</p>
                      <p className="mil-post-text mil-up" style={{ marginBottom: '20px' }}>
                        Completed a 3-year computer science program covering data structures, algorithms, software engineering, web technologies, and database management. Graduated from Malappuram, Kerala.
                      </p>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '8px' }}>
                        <i className="fas fa-map-marker-alt" style={{ color: 'rgba(255,152,0,1)' }}></i>
                        <span style={{ color: '#666', fontSize: '14px' }}>Malappuram, India</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Languages & soft skills card */}
                <div className="col-lg-6">
                  <div className="mil-blog-card mil-mb-60" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div style={{ background: '#f9f9f9', padding: '36px', height: '100%' }}>
                      <div className="mil-labels mil-up mil-mb-30">
                        <div className="mil-label mil-upper mil-accent">Languages</div>
                        <div className="mil-label mil-upper">Fluent</div>
                      </div>
                      <h4 className="mil-up mil-mb-30">Communication</h4>
                      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                        {['English', 'Malayalam'].map((lang) => (
                          <div key={lang} style={{
                            background: '#fff',
                            border: '2px solid rgba(255,152,0,0.2)',
                            borderRadius: '8px',
                            padding: '16px 28px',
                            textAlign: 'center',
                          }}>
                            <p style={{ fontWeight: 700, fontSize: '16px', margin: '0 0 4px', color: '#222' }}>{lang}</p>
                            <p style={{ fontSize: '12px', color: '#888', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Fluent</p>
                          </div>
                        ))}
                      </div>
                      <div className="mil-labels mil-up mil-mb-30" style={{ marginTop: '20px' }}>
                        <div className="mil-label mil-upper mil-accent">Availability</div>
                      </div>
                      <p className="mil-post-text mil-up">
                        Open to full-time opportunities, freelance projects, and technical collaborations. Feel free to reach out at
                        {' '}<a href="mailto:hashilhashy007@gmail.com" style={{ color: 'rgba(255,152,0,1)', fontWeight: 600 }}>hashilhashy007@gmail.com</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════
              FOOTER / CONTACT
          ═══════════════════════════════════════ */}
          <Footer />

        </div>
      </div>

      <HiddenElements />
      <GSAPInit />
    </div>
  );
}
