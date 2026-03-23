'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import { ContactModal } from './ContactModal';

export default function Footer() {
  const [state, handleSubmit] = useForm("mzdjlwpn");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="mil-dark-bg" id="contact">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-5 mil-mb-60">
              <div className="mil-muted mil-logo mil-up mil-mb-30">Hashil.</div>
              <p className="mil-light-soft mil-up mil-mb-30">Let&apos;s build something great together.</p>

              <button onClick={() => setIsModalOpen(true)} className="mil-button mil-arrow-place mil-up">
                <span >Send Message</span>
              </button>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="mil-footer-menu mil-mb-60">
                    <ul>
                      <li className="mil-up"><a href="#about">About Me</a></li>
                      <li className="mil-up"><a href="#skills">Skills</a></li>
                      <li className="mil-up"><a href="#projects">Projects</a></li>
                      <li className="mil-up"><a href="#experience">Experience</a></li>
                      <li className="mil-up mil-active"><a href="#contact">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-6 col-lg-5">
                  <ul className="mil-menu-list mil-up mil-mb-60">
                    <li><a href="mailto:hashilhashy007@gmail.com" className="mil-light-soft">hashilhashy007@gmail.com</a></li>
                    <li><a href="tel:+919946734217" className="mil-light-soft">+91 9946734217</a></li>
                    <li><a href="#." className="mil-light-soft">Kerala, India</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mil-divider mil-mb-60"></div>

          <div className="row align-items-center mil-up">
            <div className="col-md-6 col-lg-6 mil-mb-30">
              <p className="mil-light-soft" style={{ margin: 0 }}>© 2026 Mohammed Hashil. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 col-lg-6 mil-mb-30">
              <ul className="mil-social-icons" style={{ margin: 0, justifyContent: 'flex-end' }}>
                <li>
                  <a href="https://github.com/Hashil-ck" target="_blank" className="social-icon" title="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:hashilhashy007@gmail.com" className="social-icon" title="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="tel:+919946734217" className="social-icon" title="Phone">
                    <i className="fas fa-phone"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/hashil-ck/" target="_blank" className="social-icon" title="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal Overlay */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            zIndex: 99999,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            padding: '20px',
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={() => setIsModalOpen(false)}
        >
          {/* Modal Container */}
          <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </footer>
  );
}
