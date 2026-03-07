/**
 * mobile-fx.js — Cyberpunk Blog Animations
 * Handles: reading progress, scroll entrance, tap ripple, typewriter
 */
(function () {
  'use strict';

  /* ── Reading Progress ──────────────────────────────────────── */
  var progressBar     = document.getElementById('reading-progress');
  var mobileBarFill   = document.getElementById('mobile-bar-fill');
  var mobileBarPct    = document.getElementById('mobile-bar-pct');
  var mobileBarTop    = document.getElementById('mobile-bar-top');

  function getScrollPct() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var height    = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0;
  }

  function updateProgress() {
    var pct = getScrollPct();
    var pctStr = pct.toFixed(0) + '%';
    if (progressBar)   progressBar.style.width = pctStr;
    if (mobileBarFill) mobileBarFill.style.width = pctStr;
    if (mobileBarPct)  mobileBarPct.textContent  = pctStr;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ── Mobile Back-to-Top ────────────────────────────────────── */
  if (mobileBarTop) {
    mobileBarTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Scroll Entrance Animations (IntersectionObserver) ─────── */
  if (typeof IntersectionObserver !== 'undefined') {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('cb-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    /* Elements with .cb-fade already in HTML */
    document.querySelectorAll('.cb-fade').forEach(function (el) {
      observer.observe(el);
    });

    /* Dynamically add .cb-fade to blog list rows (index page) */
    document.querySelectorAll('.row.list-items, .row.list-data').forEach(function (el) {
      if (!el.classList.contains('cb-fade')) {
        el.classList.add('cb-fade');
        observer.observe(el);
      }
    });

    /* Post body paragraphs — gentle entrance */
    document.querySelectorAll('.blog-main-content > p, .blog-main-content > h2, .blog-main-content > h3, .blog-main-content > ul, .blog-main-content > ol').forEach(function (el) {
      if (!el.classList.contains('cb-fade')) {
        el.classList.add('cb-fade');
        observer.observe(el);
      }
    });
  } else {
    /* Fallback: show everything immediately */
    document.querySelectorAll('.cb-fade').forEach(function (el) {
      el.classList.add('cb-visible');
    });
  }

  /* ── Tap Ripple (touch devices) ────────────────────────────── */
  function createRipple(evt, el) {
    var rect  = el.getBoundingClientRect();
    var touch = evt.changedTouches ? evt.changedTouches[0] : evt;
    var x = touch.clientX - rect.left;
    var y = touch.clientY - rect.top;
    var size  = Math.max(rect.width, rect.height);

    var ripple = document.createElement('span');
    ripple.className = 'cb-ripple';
    ripple.style.cssText = [
      'width:'      + size + 'px',
      'height:'     + size + 'px',
      'left:'       + (x - size / 2) + 'px',
      'top:'        + (y - size / 2) + 'px',
      'position:absolute',
      'border-radius:50%',
      'pointer-events:none'
    ].join(';');

    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.appendChild(ripple);
    setTimeout(function () { if (ripple.parentNode) ripple.parentNode.removeChild(ripple); }, 750);
  }

  var rippleTargets = document.querySelectorAll('.post-card, a.link, #switch, .button, .podcast-episode');
  rippleTargets.forEach(function (el) {
    el.addEventListener('touchstart', function (e) {
      createRipple(e, this);
    }, { passive: true });
  });

  /* ── Typewriter Effect ─────────────────────────────────────── */
  var typeEl = document.querySelector('.typewriter-text');
  if (typeEl) {
    var fullText = typeEl.getAttribute('data-text') || typeEl.textContent;
    typeEl.textContent = '';
    var i = 0;

    function typeNext() {
      if (i < fullText.length) {
        typeEl.textContent += fullText.charAt(i);
        i++;
        setTimeout(typeNext, 55 + Math.random() * 45);
      }
    }
    setTimeout(typeNext, 600);
  }

  /* ── Language Switch Visual Feedback ───────────────────────── */
  var switchBtn = document.getElementById('switch');
  if (switchBtn) {
    switchBtn.addEventListener('click', function () {
      var btn = this;
      btn.style.opacity = '0.4';
      btn.style.transform = 'scale(0.96)';
      setTimeout(function () {
        btn.style.opacity   = '1';
        btn.style.transform = 'scale(1)';
      }, 550);
    });
  }

  /* ── Post card keyboard accessibility ──────────────────────── */
  document.querySelectorAll('.post-card').forEach(function (card) {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'link');
    card.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        var link = card.querySelector('a');
        if (link) link.click();
      }
    });
  });

})();
