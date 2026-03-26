/* ============================================
   BICUDO TERRAPLANAGEM — Main JavaScript
   ============================================ */

'use strict';

// ── Constantes ──
// ⚠️ SUBSTITUA pelo número real com DDI+DDD+número (apenas dígitos)
// Exemplo São Paulo: '5511987654321'
const WHATSAPP_NUMBER = '55XXXXXXXXXXX';
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

  const open  = () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

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
   6. WhatsApp — injetar URL + tracking GA4
────────────────────────────────────────── */
(function initWhatsApp() {
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    el.setAttribute('href', WHATSAPP_URL);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');

    el.addEventListener('click', () => {
      // GTM dataLayer push
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'whatsapp_click',
          event_category: 'engagement',
          event_label: el.dataset.source || document.title,
        });
      }
      // GA4 gtag direto (caso use GA4 sem GTM)
      if (typeof gtag === 'function') {
        gtag('event', 'click_whatsapp', {
          event_category: 'engagement',
          event_label: el.dataset.source || 'whatsapp_button',
        });
      }
    });
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

    // Abre WhatsApp — window.open pode ser bloqueado por popup blockers
    const waWindow = window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener');

    // Só mostra confirmação se o popup abriu OU como fallback informativo
    if (waWindow !== null) {
      // Popup abriu com sucesso
      form.style.opacity = '0';
      form.style.transition = 'opacity 0.4s ease';
      setTimeout(() => {
        form.style.display = 'none';
        if (success) success.classList.add('show');
      }, 400);
    } else {
      // Popup bloqueado — redireciona na própria aba como fallback
      window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    }
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

/* ──────────────────────────────────────────
   11. Carrossel "Obras em Andamento"
────────────────────────────────────────── */
(function initObrasPlayer() {

  /* ═══════════════════════════════════════
     A. CARROSSEL
  ═══════════════════════════════════════ */
  const track    = document.getElementById('obras-track');
  const viewport = document.getElementById('obras-viewport');
  const btnPrev  = document.getElementById('obras-prev');
  const btnNext  = document.getElementById('obras-next');
  const dotsWrap = document.getElementById('obras-dots');
  const counter  = document.getElementById('obras-counter');
  const progress = document.getElementById('obras-progress');

  if (!track || !viewport) return;

  const cards    = track.querySelectorAll('.obra-card');
  const total    = cards.length;
  if (!total) return;

  const GAP      = 20; // px — deve ser igual ao gap do CSS
  let   index    = 0;  // card atual (leftmost visível)
  let   visible  = 3;  // cards visíveis simultaneamente

  /* — Quantos cards cabem por breakpoint — */
  const getVisible = () => {
    const w = window.innerWidth;
    if (w <= 640)  return 1;
    if (w <= 1024) return 2;
    return 3;
  };

  /* — Largura de um card em px — */
  const cardWidth = () => cards[0]?.offsetWidth || 0;

  /* — Máximo índice navegável — */
  const maxIndex = () => Math.max(0, total - visible);

  /* — Aplica transform no track — */
  const applyTranslate = (animated = true) => {
    if (!animated) track.classList.add('no-transition');
    const offset = index * (cardWidth() + GAP);
    track.style.transform = `translateX(-${offset}px)`;
    if (!animated) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => track.classList.remove('no-transition'));
      });
    }
  };

  /* — Atualiza dots, counter, barra e botões — */
  const updateUI = () => {
    // Dots
    const dotEls = dotsWrap?.querySelectorAll('.c-dot') || [];
    dotEls.forEach((d, i) => d.classList.toggle('active', i === index));

    // Contador
    if (counter) counter.textContent = `${index + 1} / ${total}`;

    // Barra de progresso
    if (progress) {
      const pct = total > 1 ? (index / (total - 1)) * 100 : 100;
      progress.style.width = `${pct}%`;
    }

    // Botões de seta
    if (btnPrev) btnPrev.disabled = index === 0;
    if (btnNext) btnNext.disabled = index >= maxIndex();
  };

  /* — Navega para o índice N — */
  const goTo = (n, animated = true) => {
    index = Math.max(0, Math.min(n, maxIndex()));
    applyTranslate(animated);
    updateUI();
  };

  /* — Cria dots dinamicamente — */
  const buildDots = () => {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = 'c-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Vídeo ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  };

  /* — Inicializa — */
  const init = () => {
    visible = getVisible();
    buildDots();
    applyTranslate(false);
    updateUI();
  };

  /* — Recalcula ao redimensionar — */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      visible = getVisible();
      index   = Math.min(index, maxIndex());
      applyTranslate(false);
      updateUI();
    }, 150);
  });

  /* — Botões de seta — */
  btnPrev?.addEventListener('click', () => goTo(index - 1));
  btnNext?.addEventListener('click', () => goTo(index + 1));

  /* — Arrastar com mouse (drag) — */
  let isDragging = false, dragStartX = 0, dragStartIndex = 0;

  viewport.addEventListener('mousedown', (e) => {
    isDragging   = true;
    dragStartX   = e.clientX;
    dragStartIndex = index;
    viewport.classList.add('is-dragging');
    track.classList.add('no-transition');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diff   = dragStartX - e.clientX;
    const offset = (dragStartIndex * (cardWidth() + GAP)) + diff;
    track.style.transform = `translateX(-${Math.max(0, offset)}px)`;
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    viewport.classList.remove('is-dragging');
    track.classList.remove('no-transition');

    const diff      = dragStartX - e.clientX;
    const threshold = cardWidth() * 0.25;

    if (diff > threshold)       goTo(dragStartIndex + 1);
    else if (diff < -threshold) goTo(dragStartIndex - 1);
    else                        goTo(dragStartIndex);
  });

  /* — Touch (mobile swipe) — */
  let touchStartX = 0, touchStartIndex = 0;

  viewport.addEventListener('touchstart', (e) => {
    touchStartX     = e.touches[0].clientX;
    touchStartIndex = index;
    track.classList.add('no-transition');
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    const diff   = touchStartX - e.touches[0].clientX;
    const offset = (touchStartIndex * (cardWidth() + GAP)) + diff;
    track.style.transform = `translateX(-${Math.max(0, offset)}px)`;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    track.classList.remove('no-transition');
    const diff      = touchStartX - e.changedTouches[0].clientX;
    const threshold = cardWidth() * 0.2;

    if (diff > threshold)       goTo(touchStartIndex + 1);
    else if (diff < -threshold) goTo(touchStartIndex - 1);
    else                        goTo(touchStartIndex);
  });

  /* — Inicializa após fontes/layout prontos — */
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }

  /* ═══════════════════════════════════════
     B. PLAYER DE VÍDEO por card
  ═══════════════════════════════════════ */
  let currentPlaying = null;

  const resetCardUI = (card) => {
    card.classList.remove('is-playing');
    const overlay = card.querySelector('.obra-overlay');
    const playBtn = card.querySelector('.obra-play-btn');
    const video   = card.querySelector('video');
    if (overlay) overlay.style.opacity = '1';
    if (playBtn) playBtn.classList.remove('is-hidden');
    if (video)   video.removeAttribute('controls');
  };

  const playCard = (card) => {
    const video   = card.querySelector('video');
    const overlay = card.querySelector('.obra-overlay');
    const playBtn = card.querySelector('.obra-play-btn');
    if (!video) return;

    // Para o card anterior
    if (currentPlaying && currentPlaying !== card) {
      const prevVideo = currentPlaying.querySelector('video');
      if (prevVideo && !prevVideo.paused) prevVideo.pause();
      resetCardUI(currentPlaying);
    }
    currentPlaying = card;

    video.setAttribute('controls', '');
    if (overlay) overlay.style.opacity = '0';
    if (playBtn) playBtn.classList.add('is-hidden');
    card.classList.add('is-playing');

    video.play().catch(() => resetCardUI(card));
  };

  cards.forEach(card => {
    const playBtn = card.querySelector('.obra-play-btn');
    const overlay = card.querySelector('.obra-overlay');
    const video   = card.querySelector('video');

    playBtn?.addEventListener('click', (e) => { e.stopPropagation(); playCard(card); });
    overlay?.addEventListener('click', () => playCard(card));
    video?.addEventListener('ended', () => { resetCardUI(card); currentPlaying = null; });
  });

  /* — Pausa ao sair da viewport — */
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (!entry.isIntersecting) {
          const v = entry.target.querySelector('video');
          if (v && !v.paused) { v.pause(); resetCardUI(entry.target); }
        }
      }),
      { threshold: 0.2 }
    );
    cards.forEach(c => obs.observe(c));
  }

})();
