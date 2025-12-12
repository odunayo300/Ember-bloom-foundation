// Simple scroll reveal initializer
export default function initScrollReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          observer.unobserve(el);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.05,
    }
  );

  const els = document.querySelectorAll('[data-reveal]');
  els.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// Auto-initialize
if (typeof window !== 'undefined') {
  // run after next tick so components have mounted
  window.requestAnimationFrame(() => initScrollReveal());
}
