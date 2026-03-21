import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// ── Scroll-reveal: IntersectionObserver thêm class .visible ──────────────────
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target as HTMLElement;

      // Lấy stagger-index từ data attribute nếu có (ưu tiên hơn class)
      const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : null;
      if (delay !== null) {
        el.style.transitionDelay = `${delay}s`;
      }

      el.classList.add('visible');
      io.unobserve(el);
    });
  },
  {
    threshold: 0.06,      // hiện khi 6% phần tử lọt vào viewport
    rootMargin: '0px 0px -40px 0px', // trigger sớm hơn 1 chút trước khi chạm đáy
  }
);

// Observe tất cả element có class anim-*
const observeAll = () => {
  document.querySelectorAll('[class*="anim-"]').forEach((el) => {
    if (!el.classList.contains('visible')) io.observe(el);
  });
};

// Re-observe sau mỗi lần DOM thay đổi (route change, modal open, v.v.)
const mo = new MutationObserver(observeAll);

document.addEventListener('DOMContentLoaded', () => {
  mo.observe(document.body, { childList: true, subtree: true });
  observeAll();
});

// Fallback: gọi lại sau khi React mount xong
setTimeout(observeAll, 80);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
