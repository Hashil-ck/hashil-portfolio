'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

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
          <div
            style={{
              position: 'relative',
              background: '#1c1c1e', // Darker, more professional slate
              border: '1px solid #2c2c2e',
              width: '100%',
              maxWidth: '480px', // Better than percentage for responsiveness
              padding: '40px',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              animation: 'slideUp 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute', top: '24px', right: '24px',
                background: '#2c2c2e', border: 'none', color: '#fff',
                width: '32px', height: '32px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', fontSize: '18px', transition: '0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#3a3a3c'}
              onMouseOut={(e) => e.currentTarget.style.background = '#2c2c2e'}
            >
              &times;
            </button>

            <h3 style={{ color: '#fff', marginBottom: '8px', fontSize: '24px', fontWeight: 600, letterSpacing: '-0.5px' }}>
              Get In Touch
            </h3>
            <p style={{ color: '#a1a1aa', fontSize: '15px', marginBottom: '32px', lineHeight: '1.5' }}>
              Have a project in mind? Fill out the form and I'll get back to you within 24 hours.
            </p>

            {state.succeeded ? (
              <div style={{ padding: '40px 20px', textAlign: 'center' }}>
                <div style={{
                  color: '#34c759', fontSize: '48px', marginBottom: '20px',
                  background: 'rgba(52, 199, 89, 0.1)', width: '80px', height: '80px',
                  borderRadius: '50%', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', margin: '0 auto 20px'
                }}>
                  <i className="fas fa-check"></i>
                </div>
                <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '8px' }}>Message Sent!</h4>
                <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6' }}>
                  Thanks for reaching out. <br />I'll be in touch soon.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    background: '#fff', color: '#000', border: 'none', height: '48px',
                    borderRadius: '12px', padding: '0 40px', marginTop: '30px',
                    fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: '0.2s'
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label htmlFor="email" style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    style={{
                      background: '#2c2c2e', color: '#fff', border: '1px solid #3a3a3c',
                      padding: '0 16px', height: '52px', borderRadius: '12px',
                      fontSize: '15px', outline: 'none', transition: '0.2s border-color'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#fff'}
                    onBlur={(e) => e.target.style.borderColor = '#3a3a3c'}
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: '#ff453a', fontSize: '12px' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label htmlFor="message" style={{ color: '#fff', fontSize: '14px', fontWeight: 500 }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    style={{
                      background: '#2c2c2e', color: '#fff', border: '1px solid #3a3a3c',
                      padding: '16px', minHeight: '140px', borderRadius: '12px',
                      fontSize: '15px', resize: 'none', width: '100%', outline: 'none',
                      transition: '0.2s border-color'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#fff'}
                    onBlur={(e) => e.target.style.borderColor = '#3a3a3c'}
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} style={{ color: '#ff453a', fontSize: '12px' }} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  style={{
                    background: state.submitting ? '#3a3a3c' : '#fff',
                    color: '#000', border: 'none', height: '52px',
                    borderRadius: '12px', fontSize: '16px', fontWeight: 600,
                    width: '100%', marginTop: '8px', cursor: state.submitting ? 'not-allowed' : 'pointer',
                    transition: '0.2s transform, 0.2s opacity'
                  }}
                  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
