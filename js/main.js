/* ============================================
   BICUDO TERRAPLANAGEM — Main JavaScript
   ============================================ */

'use strict';

// ── Constantes ──
const WHATSAPP_NUMBER = '5511999999999'; // ⚠️ Substitua pelo número real
const WHATSAPP_MSG = encodeURIComponent('Olá, vim pelo site e gostaria de solicitar um orçamento de terraplanagem.');
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

/* ──────────────────────────────────────────
   1. Header — sticky com estilo ao rolar
────────────────────────────────────────── */
(function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ──────────────────────────────────────────
   2. Mobile menu
────────────────────────────────────────── */
(function initMobileMenu() {
  const toggleBtn  = document.getElementById('menu-toggle');
  const closeBtn   = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuLinks  = mobileMenu?.querySelectorAll('a');

  if (!toggleBtn || !mobileMenu) return;

  const open  = () => { mobileMenu.classList.add('open');    document.body.style.overflow = 'hidden'; };
  const close = () => { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; };

  toggleBtn.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  menuLinks?.forEach(link => link.addEventListener('click', close));
})();

/* ──────────────────────────────────────────
   3. Intersection Observer — fade-in animations
────────────────────────────────────────── */
(function initAnimations() {
  const els = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach(el => observer.observe(el));
})();

/* ──────────────────────────────────────────
   4. Hero — Ken Burns effect no load
────────────────────────────────────────── */
(function initHero() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  setTimeout(() => hero.classList.add('loaded'), 100);
})();

/* ──────────────────────────────────────────
   5. Contador animado
────────────────────────────────────────── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target   = parseInt(el.dataset.count, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1800;
    const start    = performance.now();

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const update = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value    = Math.floor(easeOut(progress) * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target + suffix;
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
})();

/* ──────────────────────────────────────────
   6. WhatsApp — injetar URL nos botões
────────────────────────────────────────── */
(function initWhatsApp() {
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    el.setAttribute('href', WHATSAPP_URL);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });
})();

/* ──────────────────────────────────────────
   7. Formulário — validação + envio
────────────────────────────────────────── */
(function initForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;

  // Máscara telefone
  const phoneInput = form.querySelector('#phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{4,5})(\d{0,4})/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d+)/, '($1) $2');
      }
      e.target.value = v;
    });
  }

  // Validação e redirecionamento para WhatsApp
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = form.querySelector('#name')?.value.trim();
    const phone   = form.querySelector('#phone')?.value.trim();
    const service = form.querySelector('#service')?.value;
    const message = form.querySelector('#message')?.value.trim();

    if (!name || !phone || !service) {
      showFieldError(form);
      return;
    }

    // Monta mensagem para WhatsApp
    const msg = encodeURIComponent(
      `Olá! Sou ${name}.\n\n` +
      `📱 Telefone: ${phone}\n` +
      `🔧 Serviço: ${service}\n` +
      `📝 Mensagem: ${message || 'Gostaria de solicitar um orçamento.'}`
    );

    // Abre WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener');

    // Mostra feedback de sucesso
    form.style.opacity = '0';
    form.style.transition = 'opacity 0.4s ease';
    setTimeout(() => {
      form.style.display = 'none';
      if (success) {
        success.classList.add('show');
      }
    }, 400);
  });

  function showFieldError(form) {
    const required = form.querySelectorAll('[required]');
    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#ef4444';
        field.addEventListener('input', () => {
          field.style.borderColor = '';
        }, { once: true });
      }
    });
  }
})();

/* ──────────────────────────────────────────
   8. Scroll suave para âncoras
────────────────────────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();

      const offset = 80; // altura do header fixo
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ──────────────────────────────────────────
   9. Active nav link ao rolar
────────────────────────────────────────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  const onScroll = () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-yellow');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-yellow');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ──────────────────────────────────────────
   10. Lazy loading de imagens
────────────────────────────────────────── */
(function initLazyImages() {
  if (!('IntersectionObserver' in window)) return;

  const images = document.querySelectorAll('img[data-src]');
  if (!images.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.remove('img-placeholder');
          observer.unobserve(img);
        }
      });
    },
    { rootMargin: '200px' }
  );

  images.forEach(img => observer.observe(img));
})();
