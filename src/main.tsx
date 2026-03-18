import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// Intersection Observer – adds .visible class to trigger CSS animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.07 }
);

// Observe any element with an anim-* class after each React paint
const observeAnimatedEls = () => {
  document.querySelectorAll('[class*="anim-"]').forEach((el) => {
    if (!el.classList.contains('visible')) observer.observe(el);
  });
};

// Call after every route change via MutationObserver
const mo = new MutationObserver(observeAnimatedEls);
document.addEventListener('DOMContentLoaded', () => {
  mo.observe(document.body, { childList: true, subtree: true });
  observeAnimatedEls();
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
