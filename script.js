/**
 * mrhaseebkhalid.com — Portfolio Scripts
 * GSAP animations, navbar, mobile menu, smooth scroll
 */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  // ---------- Lucide Icons ----------
  function initIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  // ---------- Navbar scroll state ----------
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  function handleNavbarScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  }

  // ---------- Mobile menu ----------
  function toggleMobileMenu(forceClose) {
    const isOpen = navMenu.classList.contains('navbar__nav--open');
    const shouldOpen = forceClose === true ? false : !isOpen;

    navMenu.classList.toggle('navbar__nav--open', shouldOpen);
    navToggle.classList.toggle('navbar__toggle--active', shouldOpen);
    navToggle.setAttribute('aria-expanded', shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  }

  navToggle.addEventListener('click', () => toggleMobileMenu());

  navMenu.querySelectorAll('.nav-link, .navbar__cta-mobile').forEach((link) => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // ---------- Smooth scroll offset for fixed navbar ----------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---------- GSAP Animations ----------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });


    // Set initial state FIRST before any animation runs
    gsap.set(
      ['.hero__eyebrow', '.hero__trust', '.hero__headline', '.hero__subheadline', '.hero__ctas', '.hero__availability', '.hero__stats', '.hero__scroll'],
      { y: 28 }
    );

    heroTl
      .to('.hero__eyebrow', { opacity: 1, y: 0, duration: 0.6, delay: 0.2 })
      .to('.hero__trust', { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
      .to('.hero__headline', { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .to('.hero__subheadline', { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
      .to('.hero__ctas', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .to('.hero__availability', { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
      .to('.hero__stats', { opacity: 1, y: 0, duration: 0.6 }, '-=0.2')
      .to('.hero__scroll', { opacity: 1, y: 0, duration: 0.5 }, '-=0.1');


      
    // Section reveals
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    // Stagger service cards
    ScrollTrigger.batch('.services__grid .reveal', {
      start: 'top 85%',
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          overwrite: true,
        });
      },
    });

    // Stagger testimonial cards
    ScrollTrigger.batch('.testimonials__grid .reveal', {
      start: 'top 85%',
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          overwrite: true,
        });
      },
    });

    // Stagger process steps
    ScrollTrigger.batch('.process-step.reveal', {
      start: 'top 88%',
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          overwrite: true,
        });
      },
    });

    // Portfolio cards stagger
    ScrollTrigger.batch('.portfolio-card.reveal', {
      start: 'top 85%',
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: 'power3.out',
          overwrite: true,
        });
      },
    });
  } else {
    // No GSAP or reduced motion — show everything
    document.querySelectorAll('.reveal, .hero__eyebrow, .hero__headline, .hero__subheadline, .hero__ctas, .hero__stats, .hero__scroll').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  // ---------- Form submit feedback (optional UX) ----------
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      const btn = this.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Sending...';
        btn.disabled = true;
      }
    });
  }

  // ---------- Init on DOM ready ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIcons);
  } else {
    initIcons();
  }

  // Re-init icons after Lucide deferred script loads
  window.addEventListener('load', initIcons);
})();
