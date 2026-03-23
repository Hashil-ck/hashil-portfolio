'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [logoAnimating, setLogoAnimating] = useState(false);
  const logoContainerRef = useRef<HTMLAnchorElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSubmenuClick = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleLogoClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (logoAnimating) return;

    setMenuOpen(false);
    setLogoAnimating(true);

    const { default: gsap } = await import('gsap');
    const { ScrollToPlugin } = await import('gsap/ScrollToPlugin');
    gsap.registerPlugin(ScrollToPlugin);

    // Smooth scroll to top synced with the animation duration
    gsap.to(window, { duration: 1.5, scrollTo: 0, ease: "power3.inOut" });

    if (!logoContainerRef.current) {
      setLogoAnimating(false);
      return;
    }

    const rect = logoContainerRef.current.getBoundingClientRect();
    const clone = logoContainerRef.current.cloneNode(true) as HTMLElement;
    
    clone.style.position = 'fixed';
    clone.style.top = `${rect.top}px`;
    clone.style.left = `${rect.left}px`;
    clone.style.width = `${rect.width}px`;
    clone.style.height = `${rect.height}px`;
    clone.style.zIndex = '10000';
    clone.style.margin = '0';
    clone.style.transform = 'none';
    // Remove onClick from clone to prevent issues
    clone.onclick = null;
    clone.style.pointerEvents = 'none';

    document.body.appendChild(clone);

    // Hide original temporarily
    logoContainerRef.current.style.opacity = '0';

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const dx = centerX - (rect.left + rect.width / 2);
    const dy = centerY - (rect.top + rect.height / 2);

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.removeChild(clone);
        if (logoContainerRef.current) logoContainerRef.current.style.opacity = '1';
        setLogoAnimating(false);
      }
    });

    tl.to(clone, {
      x: dx,
      y: dy,
      scale: 8,
      rotationY: 1080, // Three full 3D spins left-to-right
      duration: 1.5,
      ease: "power3.out",
    })
    .to(clone, {
      duration: 1 // Keep at center for 1 second
    })
    .to(clone, {
      x: 0,
      y: 0,
      scale: 1,
      rotationY: 0,
      duration: 1.2,
      ease: "power3.inOut"
    });
  };

  return (
    <>
      {/* Blur Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 9998,
          opacity: logoAnimating ? 1 : 0,
          pointerEvents: logoAnimating ? 'auto' : 'none',
          transition: 'opacity 0.6s ease'
        }}
      />
      {/* Menu frame */}
      <div className={`mil-menu-frame${menuOpen ? ' mil-active' : ''}`}>
        <div className="mil-frame-top">
          {/* Empty placeholder to keep flex spacing for the menu button */}
          <div className="mil-logo"></div>
          <div className={`mil-menu-btn${menuOpen ? ' mil-active' : ''}`} onClick={toggleMenu}>
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="mil-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="mil-main-menu" id="swupMenu">
                  <ul>
                    {[
                      { name: 'About Me', id: '#about' },
                      { name: 'Skills', id: '#skills' },
                      { name: 'Projects', id: '#projects' },
                      { name: 'Experience', id: '#experience' },
                      { name: 'Contact', id: '#contact' },
                    ].map((item) => (
                      <li key={item.name} className={activeSubmenu === item.name ? 'mil-active' : ''}>
                        <a
                          href={item.id}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollTo(item.id);
                            handleSubmenuClick(item.name);
                          }}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="col-xl-7">
                <div className="mil-menu-right-frame">
                  <div className="mil-animation-in">
                    <div className="mil-animation-frame">
                      <div className="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2"></div>
                    </div>
                  </div>
                  <div className="mil-menu-right">
                    <div className="row">
                      <div className="col-lg-8 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Featured Projects</h6>
                        <ul className="mil-menu-list">
                          <li><a href="#projects" className="mil-light-soft" onClick={(e) => { e.preventDefault(); scrollTo('#projects'); setMenuOpen(false); }}>Worker Productivity Portal</a></li>
                          <li><a href="#projects" className="mil-light-soft" onClick={(e) => { e.preventDefault(); scrollTo('#projects'); setMenuOpen(false); }}>Rail Cargo Management System</a></li>
                          <li><a href="#projects" className="mil-light-soft" onClick={(e) => { e.preventDefault(); scrollTo('#projects'); setMenuOpen(false); }}>CRM Application</a></li>
                          <li><a href="#projects" className="mil-light-soft" onClick={(e) => { e.preventDefault(); scrollTo('#projects'); setMenuOpen(false); }}>E-Commerce Platform</a></li>
                          <li><a href="#projects" className="mil-light-soft" onClick={(e) => { e.preventDefault(); scrollTo('#projects'); setMenuOpen(false); }}>Dance School Management</a></li>
                          <li><a href="#projects" className="mil-light-soft" onClick={(e) => { e.preventDefault(); scrollTo('#projects'); setMenuOpen(false); }}>Education Informative App</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Connect</h6>
                        <ul className="mil-menu-list">
                          <li><a href="https://github.com/Hashil-ck" target="_blank" className="mil-light-soft">GitHub</a></li>
                          <li><a href="mailto:hashilhashy007@gmail.com" className="mil-light-soft">Email Me</a></li>
                          <li><a href="tel:+919946734217" className="mil-light-soft">Call Me</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="mil-divider mil-mb-60"></div>
                    <div className="row justify-content-between">
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Location</h6>
                        <p className="mil-light-soft mil-up">Malappuram, Kerala, India <span className="mil-no-wrap">+91 9946734217</span></p>
                      </div>
                      <div className="col-lg-4 mil-mb-60">
                        <h6 className="mil-muted mil-mb-30">Open To</h6>
                        <p className="mil-light-soft">Full-time roles, freelance projects and exciting collaborations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* curtain */}
      <div className="mil-curtain"></div>

      {/* frame */}
      <div className="mil-frame">
        <div className="mil-frame-top">
          {/* Empty placeholder to keep flex spacing for the menu button */}
          <div className="mil-logo"></div>
          <div className={`mil-menu-btn${menuOpen ? ' mil-active' : ''}`} onClick={toggleMenu}>
            <span></span>
          </div>
        </div>
        <div className="mil-frame-bottom">
          <div className="mil-current-page"></div>
          <div className="mil-back-to-top">
            <a href="#top" className="mil-link mil-dark mil-arrow-place">
              <span>Back to top</span>
            </a>
          </div>
        </div>
      </div>

      {/* Standalone Logo Frame to escape Invert Filter */}
      <div className="mil-frame" style={{ pointerEvents: 'none', zIndex: 9999, background: 'transparent' }}>
        <div className="mil-frame-top">
          <a ref={logoContainerRef} href="#top" className="mil-logo" onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center', pointerEvents: 'auto', transition: 'opacity 0.2s' }}>
            <Image src="/img/profile icon.png" alt="Logo" width={45} height={45} style={{ objectFit: 'contain' }} priority />
          </a>
        </div>
      </div>
    </>
  );
}
