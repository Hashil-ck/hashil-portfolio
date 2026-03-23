'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Hook up to the actual Formspree endpoint so it actually sends emails!
  const [state, handleSubmit] = useForm("mzdjlwpn");

  if (!isOpen) return null;

  return (
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
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          background: '#0a0a0a', // Ultra-premium deep OLED black
          border: '1px solid rgba(255, 255, 255, 0.1)',
          width: '100%',
          maxWidth: '480px',
          padding: '40px',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05)',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '24px', right: '24px',
            background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#fff',
            width: '32px', height: '32px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: '18px', transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          &times;
        </button>

        <h3 style={{ color: '#fff', margin: '0 0 8px 0', fontSize: '28px', fontWeight: 600, letterSpacing: '-0.5px', lineHeight: 1.2 }}>
          Get In Touch
        </h3>
        <p style={{ color: '#a1a1aa', fontSize: '15px', margin: '0 0 32px 0', lineHeight: '1.5' }}>
          Have a project in mind? Fill out the form and I'll get back to you within 24 hours.
        </p>

        {state.succeeded ? (
          <div style={{ padding: '40px 20px', textAlign: 'center', animation: 'fadeIn 0.3s ease-out' }}>
            <div style={{
              color: '#10b981', fontSize: '48px', marginBottom: '20px',
              background: 'rgba(16, 185, 129, 0.1)', width: '80px', height: '80px',
              borderRadius: '50%', display: 'flex', alignItems: 'center',
              justifyContent: 'center', margin: '0 auto 20px',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}>
              <i className="fas fa-check"></i>
            </div>
            <h4 style={{ color: '#fff', fontSize: '22px', margin: '0 0 8px 0', fontWeight: 600 }}>Message Sent!</h4>
            <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
              Thanks for reaching out. <br />I'll be in touch with you shortly.
            </p>
            <button
              onClick={onClose}
              style={{
                background: '#fff', color: '#000', border: 'none', height: '48px',
                borderRadius: '12px', padding: '0 40px', marginTop: '32px',
                fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                width: '100%'
              }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="email" style={{ color: '#e4e4e7', fontSize: '14px', fontWeight: 500 }}>Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="hello@example.com"
                style={{
                  background: '#121212', color: '#fff', border: '1px solid rgba(255,255,255,0.1)',
                  padding: '0 16px', height: '52px', borderRadius: '12px',
                  fontSize: '15px', outline: 'none', transition: 'all 0.2s',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.target.style.boxShadow = '0 0 0 2px rgba(255,255,255,0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.2)';
                }}
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="message" style={{ color: '#e4e4e7', fontSize: '14px', fontWeight: 500 }}>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
                style={{
                  background: '#121212', color: '#fff', border: '1px solid rgba(255,255,255,0.1)',
                  padding: '16px', minHeight: '140px', borderRadius: '12px',
                  fontSize: '15px', resize: 'none', width: '100%', outline: 'none',
                  transition: 'all 0.2s',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.target.style.boxShadow = '0 0 0 2px rgba(255,255,255,0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.2)';
                }}
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} style={{ color: '#ef4444', fontSize: '13px', marginTop: '4px' }} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              style={{
                background: state.submitting ? '#52525b' : '#fff',
                color: state.submitting ? '#a1a1aa' : '#000', 
                border: 'none', height: '52px',
                borderRadius: '12px', fontSize: '16px', fontWeight: 600,
                width: '100%', marginTop: '8px', cursor: state.submitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: state.submitting ? 'none' : '0 4px 14px rgba(255,255,255,0.15)'
              }}
              onMouseOver={(e) => {
                if(!state.submitting) {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,255,255,0.2)';
                }
              }}
              onMouseOut={(e) => {
                if(!state.submitting) {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(255,255,255,0.15)';
                }
              }}
              onMouseDown={(e) => !state.submitting && (e.currentTarget.style.transform = 'scale(0.98)')}
              onMouseUp={(e) => !state.submitting && (e.currentTarget.style.transform = 'translateY(-1px)')}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
