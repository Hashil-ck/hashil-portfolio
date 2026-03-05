'use client';

import { useEffect } from 'react';

export default function GSAPInit() {
  useEffect(() => {
    // Dynamically load GSAP and plugins to avoid SSR issues
    const initGSAP = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const { ScrollToPlugin } = await import('gsap/ScrollToPlugin');

      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      const accent = 'rgba(255, 152, 0, 1)';
      const dark = '#000';

      // =====================
      // Append arrow/dodecahedron/lines to their placeholders
      // =====================
      const milArrow = document.querySelector('.mil-hidden-elements .mil-arrow');
      const milDodecahedron = document.querySelector('.mil-hidden-elements .mil-dodecahedron');
      const milLines = document.querySelector('.mil-hidden-elements .mil-lines');

      document.querySelectorAll('.mil-arrow-place').forEach((place) => {
        if (milArrow) place.appendChild(milArrow.cloneNode(true));
      });
      document.querySelectorAll('.mil-animation').forEach((anim) => {
        if (milDodecahedron) anim.appendChild(milDodecahedron.cloneNode(true));
      });
      document.querySelectorAll('.mil-lines-place').forEach((place) => {
        if (milLines) place.appendChild(milLines.cloneNode(true));
      });

      // Current page active menu item
      const activeMenuItem = document.querySelector('.mil-main-menu ul li.mil-active > a');
      const currentPage = document.querySelector('.mil-current-page');
      if (activeMenuItem && currentPage) {
        currentPage.appendChild(activeMenuItem.cloneNode(true));
      }

      // =====================
      // Preloader
      // =====================
      const timeline = gsap.timeline();
      timeline.to('.mil-preloader-animation', { opacity: 1 });
      timeline.fromTo(
        '.mil-animation-1 .mil-h3',
        { y: '30px', opacity: 0 },
        { y: '0px', opacity: 1, stagger: 0.4 }
      );
      timeline.to('.mil-animation-1 .mil-h3', { opacity: 0, y: '-30' }, '+=.3');
      timeline.fromTo('.mil-reveal-box', 0.1, { opacity: 0 }, { opacity: 1, x: '-30' });
      timeline.to('.mil-reveal-box', 0.45, { width: '100%', x: 0 }, '+=.1');
      timeline.to('.mil-reveal-box', { right: '0' });
      timeline.to('.mil-reveal-box', 0.3, { width: '0%' });
      timeline.fromTo('.mil-animation-2 .mil-h3', { opacity: 0 }, { opacity: 1 }, '-=.5');
      timeline.to('.mil-animation-2 .mil-h3', 0.6, { opacity: 0, y: '-30' }, '+=.5');
      timeline.to('.mil-preloader', 0.8, { opacity: 0, ease: 'sine' }, '+=.2');
      timeline.fromTo(
        '.mil-up',
        0.8,
        { opacity: 0, y: 40, scale: 0.98, ease: 'sine' },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          onComplete: function () {
            const preloader = document.querySelector('.mil-preloader') as HTMLElement;
            if (preloader) preloader.classList.add('mil-hidden');
          },
        },
        '-=1'
      );

      // =====================
      // Scroll progress bar
      // =====================
      gsap.to('.mil-progress', {
        height: '100%',
        ease: 'sine',
        scrollTrigger: { scrub: 0.3 },
      });

      // =====================
      // Back to top
      // =====================
      const btt = document.querySelector('.mil-back-to-top .mil-link');
      if (btt) {
        gsap.set(btt, { x: -30, opacity: 0 });
        gsap.to(btt, {
          x: 0,
          opacity: 1,
          ease: 'sine',
          scrollTrigger: {
            trigger: 'body',
            start: 'top -40%',
            end: 'top -40%',
            toggleActions: 'play none reverse none',
          },
        });
      }

      // =====================
      // Cursor
      // =====================
      const cursor = document.querySelector('.mil-ball');
      if (cursor) {
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        document.addEventListener('pointermove', (e) => {
          gsap.to(cursor, { duration: 0.6, ease: 'sine', x: e.clientX, y: e.clientY });
        });

        const handleCursorEnter = (el: Element | null, width: number, height: number, opacity: number) => {
          if (!el) return;
          el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { width, height, opacity, duration: 0.2, ease: 'sine' });
          });
          el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { width: 20, height: 20, opacity: 0.1, duration: 0.2, ease: 'sine' });
          });
        };

        document.querySelectorAll('.mil-drag, .mil-more, .mil-choose').forEach((el) => {
          handleCursorEnter(el, 90, 90, 1);
        });

        document.querySelectorAll('a:not(.mil-choose):not(.mil-more):not(.mil-drag):not(.mil-accent-cursor), input, textarea, .mil-accordion-menu').forEach((el) => {
          el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 0, duration: 0.2, ease: 'sine' });
          });
          el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, duration: 0.2, ease: 'sine' });
          });
        });

        document.body.addEventListener('mousedown', () => {
          gsap.to(cursor, { scale: 0.1, duration: 0.2, ease: 'sine' });
        });
        document.body.addEventListener('mouseup', () => {
          gsap.to(cursor, { scale: 1, duration: 0.2, ease: 'sine' });
        });
      }

      // =====================
      // Scroll animations
      // =====================
      document.querySelectorAll('.mil-up').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40, scale: 0.98, ease: 'sine' },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.4,
            scrollTrigger: {
              trigger: section,
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      document.querySelectorAll('.mil-scale').forEach((section) => {
        const value1 = parseFloat((section as HTMLElement).dataset.value1 || '1');
        const value2 = parseFloat((section as HTMLElement).dataset.value2 || '1');
        gsap.fromTo(
          section,
          { scale: value1, ease: 'sine' },
          {
            scale: value2,
            scrollTrigger: {
              trigger: section,
              scrub: true,
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      if (window.innerWidth > 960) {
        document.querySelectorAll('.mil-parallax').forEach((section) => {
          const value1 = parseFloat((section as HTMLElement).dataset.value1 || '0');
          const value2 = parseFloat((section as HTMLElement).dataset.value2 || '0');
          gsap.fromTo(
            section,
            { y: value1, ease: 'sine' },
            {
              y: value2,
              scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }

      document.querySelectorAll('.mil-rotate').forEach((section) => {
        const value = parseFloat((section as HTMLElement).dataset.value || '0');
        gsap.fromTo(
          section,
          { rotate: 0, ease: 'sine' },
          {
            rotate: value,
            scrollTrigger: {
              trigger: section,
              scrub: true,
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // =====================
      // Anchor scroll
      // =====================
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          if (!href || href === '#.' || href === '#') return;
          e.preventDefault();
          const target = document.querySelector(href);
          if (!target) return;
          const offset = window.innerWidth < 1200 ? 90 : 0;
          gsap.to(window, {
            duration: 0.4,
            scrollTo: { y: target, offsetY: offset },
          });
        });
      });
    };

    // small delay to ensure DOM is ready
    const timer = setTimeout(initGSAP, 100);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
