/**
 * Hymalya Brand Website - Interactive Effects & Core Logic
 * Author: Shreyam
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lenis Smooth Scroll
  let lenis;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 1,
      smoothWheel: true,
      touchMultiplier: 2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  // 2. Navbar Scroll Behavior
  const navbar = document.querySelector('.navbar.w-nav') || document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 3. Mobile Navigation Menu Toggle
  const menuBtn = document.querySelector('.menu-button.w-nav-button') || document.querySelector('.menu-button');
  const navMenu = document.querySelector('.nav-menu.w-nav-menu') || document.querySelector('.nav-menu');
  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = navMenu.classList.toggle('w--open');
      menuBtn.classList.toggle('w--open', isOpen);
      navMenu.style.display = isOpen ? 'block' : 'none';
      if (isOpen) {
        navMenu.style.opacity = '1';
        navMenu.style.transform = 'translateY(0)';
      }
    });
  }

  // 4. GSAP & SplitType Text Reveal Animations
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (typeof SplitType !== 'undefined') {
      const splitTargets = document.querySelectorAll('.reveal-type');
      splitTargets.forEach((el) => {
        try {
          const split = new SplitType(el, { types: 'words, chars' });
          gsap.set(split.chars, { opacity: 0.15, y: 4 });

          if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.create({
              trigger: el,
              start: 'top 85%',
              onEnter: () => {
                gsap.to(split.chars, {
                  opacity: 1,
                  y: 0,
                  stagger: 0.015,
                  duration: 0.4,
                  ease: 'power2.out'
                });
              },
              once: true
            });
          } else {
            gsap.to(split.chars, { opacity: 1, y: 0, stagger: 0.015, duration: 0.4 });
          }
        } catch (err) {
          console.warn('SplitType error on element', err);
        }
      });
    }

    // Fade up animations for sections & cards
    const fadeCards = document.querySelectorAll('.item-hero, .item-quolity, .faq-item, .item-connect');
    fadeCards.forEach((card, idx) => {
      if (typeof ScrollTrigger !== 'undefined') {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            once: true
          },
          opacity: 0,
          y: 24,
          duration: 0.6,
          delay: (idx % 4) * 0.1,
          ease: 'power2.out'
        });
      }
    });
  }

  // 5. Interactive Heritage Switcher (Home Page)
  const heritageData = {
    'ancient': {
      title: 'Ancient Origins',
      description: 'Over 250 million years ago, pristine seabeds were trapped beneath ancient continental collisions in what is now the Himalayan range. Protected from environmental contaminants, this primordial salt crystallized under immense pressure, preserving a complete spectrum of 84+ natural trace minerals.'
    },
    'traditional': {
      title: 'Traditional Harvesting',
      description: 'Our salt continues to be carefully extracted using traditional methods that have remained unchanged for generations. This time-honored approach preserves the salt\'s natural structure and mineral composition, ensuring its quality remains as pure as when it was first discovered.'
    },
    'modern': {
      title: 'Modern Excellence',
      description: 'We honor ancient heritage by implementing state-of-the-art optical grading, gentle sustainable packaging, and world-class laboratory testing to bring this sacred gift into modern culinary and wellness sanctuaries with uncompromising transparency.'
    }
  };

  const heritageBtns = document.querySelectorAll('[data-heritage-tab]');
  const heritageTitle = document.getElementById('heritage-active-title');
  const heritageDesc = document.getElementById('heritage-active-desc');

  if (heritageBtns.length > 0 && heritageTitle && heritageDesc) {
    heritageBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-heritage-tab');
        if (heritageData[key]) {
          heritageBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          if (typeof gsap !== 'undefined') {
            gsap.to([heritageTitle, heritageDesc], {
              opacity: 0,
              y: -8,
              duration: 0.2,
              onComplete: () => {
                heritageTitle.textContent = heritageData[key].title;
                heritageDesc.textContent = heritageData[key].description;
                gsap.to([heritageTitle, heritageDesc], {
                  opacity: 1,
                  y: 0,
                  duration: 0.3,
                  ease: 'power2.out'
                });
              }
            });
          } else {
            heritageTitle.textContent = heritageData[key].title;
            heritageDesc.textContent = heritageData[key].description;
          }
        }
      });
    });
  }

  // 6. Interactive Certificate Details Modal
  const certDetails = {
    'fda': {
      title: 'FDA Listed & Approved',
      subtitle: 'United States Food and Drug Administration',
      desc: 'Hymalya products are officially registered and compliant with US FDA regulations for food import, hygiene, and safe consumption across all 50 states.'
    },
    'iso': {
      title: 'ISO 22000 Certified',
      subtitle: 'International Organization for Standardization',
      desc: 'Ensures strict international standards for food safety management systems, tracing purity from extraction to sealed packaging.'
    },
    'haccp': {
      title: 'HACCP Compliant',
      subtitle: 'Hazard Analysis Critical Control Point',
      desc: 'Systematic preventive approach to food safety ensuring zero contamination from biological, chemical, and physical hazards.'
    },
    'organic': {
      title: '100% Organic Certification',
      subtitle: 'Pure Natural Mineral Integrity',
      desc: 'Certified unrefined and devoid of artificial anticaking agents, bleaches, chemical additives, or industrial processing.'
    },
    'nongmo': {
      title: 'Non-GMO Verified',
      subtitle: 'Non-Genetically Modified Organisms',
      desc: 'Pure mineral salt unaltered by modern genetic modifications, preserving ancient mineral structure.'
    },
    'gmp': {
      title: 'GMP Certified',
      subtitle: 'Good Manufacturing Practices',
      desc: 'Guarantees our packaging and handling facilities operate under stringent pharmaceutical-grade hygiene and safety protocols.'
    },
    'sgs': {
      title: 'SGS Inspected & Verified',
      subtitle: 'World\'s Leading Testing Company',
      desc: 'Rigorous third-party lab analysis verifying exact mineral concentration, heavy metal absence, and moisture equilibrium.'
    },
    'halal': {
      title: 'Halal Certified',
      subtitle: 'Islamic Dietary Compliance',
      desc: 'Formally audited and approved under Halal dietary requirements for global consumer confidence.'
    },
    'glutenfree': {
      title: 'Gluten-Free Certified',
      subtitle: 'Zero Cross-Contamination',
      desc: 'Dedicated non-gluten packaging line suitable for individuals with celiac disease or gluten sensitivities.'
    },
    'vegan': {
      title: 'Certified Vegan & Cruelty Free',
      subtitle: '100% Ethical & Earth-Derived',
      desc: 'Never tested on animals, free from animal derivatives, packaged using eco-conscious sustainable materials.'
    }
  };

  const certItems = document.querySelectorAll('[data-cert]');
  const modal = document.getElementById('cert-modal');
  const modalTitle = document.getElementById('cert-modal-title');
  const modalSubtitle = document.getElementById('cert-modal-subtitle');
  const modalDesc = document.getElementById('cert-modal-desc');
  const modalClose = document.getElementById('cert-modal-close');

  if (certItems.length > 0 && modal) {
    certItems.forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => {
        const certKey = item.getAttribute('data-cert');
        const data = certDetails[certKey];
        if (data && modalTitle && modalDesc) {
          modalTitle.textContent = data.title;
          if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
          modalDesc.textContent = data.desc;
          modal.classList.add('is-active');
        }
      });
    });

    if (modalClose) {
      modalClose.addEventListener('click', () => {
        modal.classList.remove('is-active');
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('is-active');
      }
    });
  }

  // 7. Interactive Toast for Contact / Wholesale Forms
  const forms = document.querySelectorAll('form');
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = '<span>✓</span> Thank you! Your inquiry has been received. Our team will get back to you shortly.';
  document.body.appendChild(toast);

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      toast.classList.add('show');
      form.reset();
      setTimeout(() => {
        toast.classList.remove('show');
      }, 4500);
    });
  });
});
