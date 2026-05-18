// ============================================================
//   DATA
// ============================================================
const projectData = {
  flutter: {
    title: 'Flutter Projects',
    subtitle: 'Cross-platform mobile apps built with Flutter & Dart',
    icon: '📱',
    iconBg: 'rgba(0,229,255,0.1)',
    projects: [
      {
        icon: '🛍️',
        title: 'Swift Drop PRO — E-Commerce App',
        desc: 'A full-featured e-commerce platform with dynamic product listings, cart management, Stripe payments, and real-time order tracking. Achieved 4.8★ on Play Store.',
        stack: ['Flutter','Dart','Firebase','Stripe','GetX'],
        color: '#00e5ff',
        link: 'https://swiftdrop-pro.netlify.app/', github: 'https://github.com/muhammedbadhushakh/swift-drop-pro'
      }

    ]
  },
  android: {
    title: 'Android Projects',
    subtitle: 'Native Android apps built with Java & Kotlin',
    icon: '🤖',
    iconBg: 'rgba(255,45,122,0.1)',
    projects: [
      {
        icon: '💊',
        title: 'Luvia — Medical Reminder App',
        desc: 'Luvia is a smart medicine reminder web app that helps users remember to take their medications on time through scheduled reminders. It provides a simple, responsive, and user-friendly interface for managing daily medicine routines across all devices.',
        stack: ['Kotlin', 'Jetpack Compose', 'Room', 'WorkManager', 'Firebase'],
        color: '#00e5ff',
        link: 'https://luviaweb.netlify.app',
        github: 'https://github.com/muhammedbadhushakh/luvia-app'
      },
      {
  icon: '🚑',
  title: 'HEALIO — Emergency Medical App',
  desc: 'Smart emergency healthcare app that instantly connects users with nearby doctors and ambulance services at the same time during critical situations. Features real-time location tracking, one-tap SOS alerts, emergency contacts, and fast medical response support.',
  stack: ['Kotlin','Firebase','Google Maps API','Realtime Database','MVVM'],
  color: '#ff3b30',
  link: 'https://healioapps.netlify.app',
  github: 'https://github.com/muhammedbadhushakh/healio-app'
},
      // {
      //   icon: '🎵',
      //   title: 'WavePlay — Music Player',
      //   desc: 'Feature-rich music player with custom equalizer, bass boost, crossfade, lyrics display, sleep timer, and beautiful album art visualizer. Supports 20+ audio formats.',
      //   stack: ['Java','ExoPlayer','MediaSession','FFmpeg','SQLite'],
      //   color: '#8b5cf6',
      //   link: '#', github: '#'
      // },
      // {
      //   icon: '📷',
      //   title: 'LensAI — Camera App',
      //   desc: 'AI-enhanced camera with real-time object detection, scene recognition, auto-portrait mode, document scanner, and ML-powered photo enhancement.',
      //   stack: ['Kotlin','CameraX','MLKit','TensorFlow Lite','Coroutines'],
      //   color: '#00ff88',
      //   link: '#', github: '#'
      // },
      // {
      //   icon: '🔐',
      //   title: 'VaultGuard — Password Manager',
      //   desc: 'Zero-knowledge encrypted password manager with biometric authentication, auto-fill service, password strength analyzer, and secure cloud backup.',
      //   stack: ['Kotlin','AES-256','Room DB','Biometric API','WorkManager'],
      //   color: '#f59e0b',
      //   link: '#', github: '#'
      // }
    ]
  },
  website: {
    title: 'Website Projects',
    subtitle: 'Full-stack web applications and modern frontend experiences',
    icon: '🌐',
    iconBg: 'rgba(139,92,246,0.1)',
    projects: [
{
  icon: '🎮',
  title: 'FunHub — Gaming & Entertainment Website',
  desc: 'Interactive gaming and entertainment platform featuring fun mini-games, multiplayer challenges, leaderboards, rewards, and a modern responsive design for endless user engagement.',
  stack: ['HTML','CSS','JavaScript','Firebase','Node.js'],
  color: '#7c3aed',
  link: 'https://funs-hub.web.app',
  github: 'https://github.com/muhammedbadhushakh/fun-hub'
},
{
  icon: '🐦',
  title: 'Flappy Bird — Fun Arcade Game',
  desc: 'Addictive arcade-style flying game with smooth controls, funny sound effects, obstacle challenges, score tracking, and colorful animations for an engaging gaming experience.',
  stack: ['HTML5','CSS3','JavaScript','Canvas API'],
  color: '#f59e0b',
  link: 'https://funflappy.netlify.app',
  github: 'https://github.com/muhammedbadhushakh/faiiapy'
},
{
  icon: '🗺️',
  title: 'Treasure Hunt — Campus Adventure Game',
  desc: 'Interactive college treasure hunt website where players solve clues, unlock levels, and find hidden QR codes across the campus to progress through exciting challenges and team-based missions.',
  stack: ['HTML','CSS','JavaScript','Firebase','QR Scanner API'],
  color: '#10b981',
  link: 'https://tresures-hunt.web.app',
  github: 'https://github.com/muhammedbadhushakh/tresure-hunter'
},
{
  icon: '🏴‍☠️',
  title: 'Campus Hunt 3.0 — Advanced Treasure Hunt',
  desc: 'Next-generation college treasure hunt platform featuring multi-level missions, hidden QR challenges, live team rankings, timed tasks, and interactive campus-based adventure gameplay for large-scale events.',
  stack: ['HTML','CSS','JavaScript','Firebase','Firebase','Realtime Database','QR Scanner API'],
  color: '#06b6d4',
  link: 'https://campous-hunt.web.app',
  github: 'https://github.com/muhammedbadhushakh/CAMPOUS-HUNT-3.0'
},
{
  icon: '📦',
  title: 'SwiftDrop — Delivery & Download Platform',
  desc: 'Modern e-commerce and digital delivery platform with a stylish landing page, fast product access, secure downloads, order tracking, and responsive UI designed for seamless user experience across all devices.',
  stack: ['HTML','CSS','Firebase','Netlify','JavaScript'],
  color: '#3b82f6',
  link: 'https://swiftdrop-pro.netlify.app',
  github: 'https://github.com/muhammedbadhushakh/swift-drop-pro-web'
},
{
  icon: '🚑',
  title: 'HEALIO — Emergency Medical Web Platform',
  desc: 'Advanced emergency healthcare web platform that instantly connects users with nearby doctors and ambulance services at the same time during critical situations. HEALIO provides one-tap SOS alerts, live location tracking, and rapid emergency response support through a fast and user-friendly interface.',
  stack: ['React','Firebase','Google Maps API','Tailwind CSS','Node.js'],
  color: '#ef4444',
  link: 'https://app.netlify.com/projects/healioapps',
  github: 'https://github.com/muhammedbadhushakh/heallio'
},
{
  icon: '💊',
  title: 'Luvia — Medicine Reminder Web App',
  desc: 'Smart medicine reminder web application that helps users manage daily medications with scheduled alerts, reminder notifications, and an easy-to-use responsive interface. Designed for all devices, Luvia ensures users never miss important doses while providing a smooth and modern healthcare experience.',
  stack: ['React','Firebase','Tailwind CSS','JavaScript','Netlify'],
  color: '#8b5cf6',
  link: 'https://luviaweb.netlify.app',
  github: 'https://github.com/muhammedbadhushakh/luvia-web'
},
{
  icon: '🌐',
  title: 'Personal Portfolio Website',
  desc: 'Modern responsive portfolio website showcasing projects, certifications, technical skills, resume, and creative works with smooth animations and interactive UI design.',
  stack: ['HTML5','CSS3','JavaScript','Firebase','Netlify'],
  color: '#06b6d4',
  link: 'https://muhammedbadhusha-k-h.netlify.app',
  github: 'https://github.com/muhammedbadhushakh/portfollio'
}
    ]
  },
  ai: {
    title: 'Python & AI Projects',
    subtitle: 'Machine learning models, NLP tools, and AI-powered applications',
    icon: '🧠',
    iconBg: 'rgba(0,255,136,0.1)',
    projects: [
      {
        icon: '🤖',
        title: 'DocuBot — RAG Chatbot',
        desc: 'Production-ready RAG (Retrieval-Augmented Generation) chatbot that ingests company documents and answers questions with citations. Deployed for 3 enterprise clients.',
        stack: ['Python','LangChain','OpenAI GPT-4','FAISS','FastAPI'],
        color: '#00ff88',
        link: '#', github: '#'
      },
      {
        icon: '👁️',
        title: 'VisionMark — Image Classifier',
        desc: 'Custom CNN achieving 94.7% accuracy on multi-class image classification. Includes active learning pipeline, explainability maps (Grad-CAM), and a web inference API.',
        stack: ['Python','PyTorch','FastAPI','OpenCV','Docker'],
        color: '#00e5ff',
        link: '#', github: '#'
      },
      {
        icon: '📈',
        title: 'StockSeer — Forecast Engine',
        desc: 'LSTM-based stock price prediction system with technical indicator features, hyperparameter tuning, backtesting framework, and interactive Streamlit dashboard.',
        stack: ['Python','TensorFlow','Streamlit','Pandas','Yahoo Finance'],
        color: '#8b5cf6',
        link: '#', github: '#'
      },
      {
        icon: '🗣️',
        title: 'SentimentIQ — NLP Pipeline',
        desc: 'Multi-label sentiment analysis pipeline for social media with aspect-level analysis, emotion detection, trend monitoring dashboard, and REST API for integration.',
        stack: ['Python','HuggingFace','BERT','FastAPI','Redis'],
        color: '#ff2d7a',
        link: '#', github: '#'
      }
    ]
  }
};

// ============================================================
//   CURSOR
// ============================================================
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});
function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a,button,.category-card,.social-link,.tech-chip,.stat-card,.cert-card').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hover'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
});

// ============================================================
//   CARD MOUSE TRACKING (radial gradient)
// ============================================================
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
    const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
  });
});

// ============================================================
//   LOADER
// ============================================================
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.style.transition = 'opacity 0.6s ease';
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 700);
    initParticles();
    initScrollObserver();
    initTyped();
    initNavScroll();
    initCertFilter();
  }, 2200);
});

// ============================================================
//   PARTICLES
// ============================================================
function initParticles() {
  particlesJS('particles-js', {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 900 } },
      color: { value: ['#00e5ff','#ff2d7a','#8b5cf6'] },
      shape: { type: 'circle' },
      opacity: { value: 0.25, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.05, sync: false } },
      size: { value: 2, random: true },
      line_linked: { enable: true, distance: 130, color: '#00e5ff', opacity: 0.06, width: 1 },
      move: { enable: true, speed: 0.6, direction: 'none', random: true, straight: false, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: false } },
      modes: { grab: { distance: 140, line_linked: { opacity: 0.25 } } }
    },
    retina_detect: true
  });
}

// ============================================================
//   TYPING EFFECT
// ============================================================
function initTyped() {
  const phrases = [
    'Building Flutter Apps',
    'Native Android Dev',
    'Full Stack Web Dev',
    'Python AI Engineer',
    'Open Source Contributor',
  ];
  const el = document.getElementById('typedText');
  let pi = 0, ci = 0, deleting = false;

  function type() {
    const phrase = phrases[pi];
    if (deleting) {
      el.innerHTML = phrase.substring(0, ci--) + '<span class="typed-cursor"></span>';
      if (ci < 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 500); return; }
      setTimeout(type, 40);
    } else {
      el.innerHTML = phrase.substring(0, ci++) + '<span class="typed-cursor"></span>';
      if (ci > phrase.length) { deleting = true; setTimeout(type, 2200); return; }
      setTimeout(type, 70);
    }
  }
  type();
}

// ============================================================
//   SCROLL / REVEAL / NAV
// ============================================================
function initNavScroll() {
  const nav = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);

    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  });
}

function initScrollObserver() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.skill-bar').forEach(bar => {
          bar.classList.add('animated');
          bar.style.width = (parseFloat(bar.dataset.width) * 100) + '%';
        });
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  document.querySelectorAll('.skill-bar').forEach(bar => io.observe(bar.closest('.skill-item')));
}

// ============================================================
//   CERTIFICATE FILTER
// ============================================================
function initCertFilter() {
  const filters = document.querySelectorAll('.cert-filter');
  const cards = document.querySelectorAll('.cert-card');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const categories = card.dataset.category || '';
        const matches = filter === 'all' || categories.includes(filter);

        if (matches) {
          card.style.display = '';
          // Re-trigger reveal animation
          card.classList.remove('visible');
          setTimeout(() => card.classList.add('visible'), 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ============================================================
//   PROJECT PAGES
// ============================================================
function openProjectPage(category) {
  const data = projectData[category];
  if (!data) return;

  document.getElementById('pageTitle').textContent = data.title;
  document.getElementById('pageSubtitle').textContent = data.subtitle;
  const iconEl = document.getElementById('pageIcon');
  iconEl.textContent = data.icon;
  iconEl.style.background = data.iconBg;

  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = data.projects.map((p, i) => {
    // ✅ FIX: Only block clicks for placeholder '#' links
    const demoAttrs = p.link === '#'
      ? 'onclick="return false"'
      : 'target="_blank" rel="noopener noreferrer"';
    const githubAttrs = p.github === '#'
      ? 'onclick="return false"'
      : 'target="_blank" rel="noopener noreferrer"';

    return `
    <div class="project-detail-card" style="animation: fadeInUp 0.5s ${i * 0.1}s ease both;">
      <div class="project-img-placeholder" style="background:linear-gradient(135deg,${p.color}15,${p.color}08);">
        <span style="position:relative;z-index:1;font-size:3.5rem;filter:drop-shadow(0 0 20px ${p.color}60)">${p.icon}</span>
        <div style="position:absolute;bottom:12px;right:12px;font-family:var(--font-mono);font-size:0.55rem;color:${p.color};letter-spacing:0.15em;border:1px solid ${p.color}40;padding:3px 8px;border-radius:2px;background:rgba(0,0,0,0.4);">PREVIEW</div>
      </div>
      <div class="project-card-body">
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-desc">${p.desc}</p>
        <div class="project-card-stack">
          ${p.stack.map(t => `<span class="stack-tag" style="border-color:${p.color}30;color:${p.color}">${t}</span>`).join('')}
        </div>
        <div class="project-card-links">
          <a href="${p.link}" class="proj-link primary" ${demoAttrs}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>
          <a href="${p.github}" class="proj-link" ${githubAttrs}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  `;
  }).join('');

  document.getElementById('main-page').classList.remove('active');
  document.getElementById('project-page').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closePage(e) {
  e.preventDefault();
  document.getElementById('project-page').classList.remove('active');
  document.getElementById('main-page').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

// ============================================================
//   CONTACT FORM
// ============================================================
// ============================================================
//   EMAILJS CONFIG — Replace these three values with yours
//   from https://dashboard.emailjs.com
// ============================================================
const EMAILJS_PUBLIC_KEY  = '';   // e.g. 'abc123XYZ'
const EMAILJS_SERVICE_ID  = '';   // e.g. 'service_xxxxxx'
const EMAILJS_TEMPLATE_ID = '';  // e.g. 'template_xxxxxx'


emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

function handleSubmit(e) {
  e.preventDefault();
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const btn     = form.querySelector('button');

  // Basic guard so the demo still works before keys are set
  if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    alert('⚠️ Please set your EmailJS keys in script.js before testing.');
    return;
  }

  btn.innerHTML = '<span>Sending…</span>';
  btn.disabled  = true;

  emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
    .then(() => {
      form.style.display    = 'none';
      success.style.display = 'block';
      form.reset();
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      btn.innerHTML = '<span>Send Message</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
      btn.disabled  = false;
      alert('❌ Failed to send message. Please try again or email me directly at badub410@gmail.com');
    });
}

// ============================================================
//   MOBILE MENU
// ============================================================
function openMobileMenu() {
  document.getElementById('mobileMenu').classList.add('open');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ============================================================
//   SMOOTH SCROLL FOR INTERNAL LINKS
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
// ============================================================
//   CERTIFICATE MODAL
// ============================================================
function openCert(src, title) {
  const overlay  = document.getElementById('certModal');
  const titleEl  = document.getElementById('certModalTitle');
  const bodyEl   = document.getElementById('certModalBody');

  titleEl.textContent = title;

  if (src) {
    // Real image/file — show it inline
    bodyEl.innerHTML = `<img src="${src}" alt="${title}" loading="lazy">`;
  } else {
    // No file yet — show a friendly coming-soon state
    bodyEl.innerHTML = `
      <div class="cert-modal-coming">
        <div class="cert-coming-icon">📄</div>
        <strong style="color:#fff">${title}</strong>
        <p>Certificate image not yet uploaded.</p>
        <p>Add the file path to <code>openCert()</code> in index.html to display it here.</p>
      </div>`;
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCertModal(e) {
  // Close only on backdrop click or the X button (not clicks inside the box)
  if (e && e.target !== document.getElementById('certModal')) return;
  document.getElementById('certModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('certModal').classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ============================================================
//   TOAST
// ============================================================
function showToast(msg) {
  const toast = document.getElementById('certToast');
  document.getElementById('certToastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}