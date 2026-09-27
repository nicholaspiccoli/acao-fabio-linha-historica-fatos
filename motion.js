(() => {
  'use strict';

  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('motion-ready');
  root.dataset.motion = reduceMotion ? 'reduced' : 'active';

  const revealables = [...document.querySelectorAll('[data-reveal], [data-title-reveal], [data-phase-in], [data-stagger]')];

  document.querySelectorAll('[data-stagger]').forEach(group => {
    [...group.children].forEach((child, index) => child.style.setProperty('--reveal-delay', `${Math.min(index * 70, 350)}ms`));
  });

  const alreadyVisible = el => {
    const rect = el.getBoundingClientRect();
    return rect.top < innerHeight * .92 && rect.bottom > 0;
  };

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });

    revealables.forEach(el => alreadyVisible(el) ? el.classList.add('is-visible') : observer.observe(el));
  }

  // Scroll progress and subtle phase state; native scroll remains fully owned by the browser.
  const progressBar = document.getElementById('progressBar');
  let ticking = false;
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const progress = max > 0 ? scrollY / max : 0;
    if (progressBar) progressBar.style.transform = `scaleX(${Math.max(0, Math.min(1, progress)).toFixed(4)})`;
    ticking = false;
  };
  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateScroll);
  }, { passive: true });
  updateScroll();

  // Chapter rail.
  const scenes = [...document.querySelectorAll('.motion-scene[data-chapter]')];
  const dots = document.getElementById('chapterDots');
  const chapterIndex = document.getElementById('chapterIndex');
  const chapterName = document.getElementById('chapterName');
  const dotMap = new Map();

  if (dots) {
    scenes.forEach((scene, index) => {
      if (!scene.id) scene.id = `scene-${index + 1}`;
      const a = document.createElement('a');
      a.href = `#${scene.id}`;
      a.setAttribute('aria-label', `${String(index + 1).padStart(2,'0')} — ${scene.dataset.chapter}`);
      a.title = scene.dataset.chapter;
      dots.appendChild(a);
      dotMap.set(scene, a);
    });
  }

  const setChapter = scene => {
    const index = scenes.indexOf(scene);
    if (index < 0) return;
    dotMap.forEach(dot => dot.classList.remove('active'));
    dotMap.get(scene)?.classList.add('active');
    if (chapterIndex) chapterIndex.textContent = String(index + 1).padStart(2,'0');
    if (chapterName) chapterName.textContent = scene.dataset.chapter || '';
  };

  if ('IntersectionObserver' in window && scenes.length) {
    const chapterObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setChapter(visible[0].target);
    }, { threshold: [.18,.36,.55], rootMargin: '-22% 0px -50% 0px' });
    scenes.forEach(scene => chapterObserver.observe(scene));
    setChapter(scenes[0]);
  }

  // Evidence ledger filters.
  const filters = [...document.querySelectorAll('.filter[data-filter]')];
  const ledgerItems = [...document.querySelectorAll('#ledger article[data-kind]')];
  filters.forEach(btn => btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filters.forEach(b => b.classList.toggle('active', b === btn));
    ledgerItems.forEach(item => {
      const visible = filter === 'all' || item.dataset.kind === filter;
      item.hidden = !visible;
    });
  }));

  // Evidence image lightbox using native dialog.
  const dialog = document.getElementById('imageDialog');
  const dialogImage = document.getElementById('dialogImage');
  const dialogCaption = document.getElementById('dialogCaption');
  const dialogClose = document.getElementById('dialogClose');
  document.querySelectorAll('.image-open').forEach(button => {
    button.addEventListener('click', () => {
      if (!dialog || !dialogImage) return;
      dialogImage.src = button.dataset.image || button.querySelector('img')?.src || '';
      dialogImage.alt = button.querySelector('img')?.alt || 'Documento ampliado';
      if (dialogCaption) dialogCaption.textContent = button.dataset.caption || '';
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
  });
  dialogClose?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', e => {
    const rect = dialog.getBoundingClientRect();
    const outside = e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
    if (outside) dialog.close();
  });

  document.getElementById('printBtn')?.addEventListener('click', () => window.print());

  // Keyboard convenience for internal hash navigation: do not override browser scrolling.
  addEventListener('hashchange', () => {
    const target = document.getElementById(location.hash.slice(1));
    if (target) target.setAttribute('tabindex', '-1');
  });
})();
