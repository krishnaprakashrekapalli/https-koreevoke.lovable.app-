import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// Hide the initial KORE preloader after the app mounts. Keep a small minimum
// display time so the logo animation always has a beat to breathe, then fade.
(() => {
  const preloader = document.getElementById('kore-preloader');
  if (!preloader) return;
  const MIN_VISIBLE_MS = 900;
  const start = performance.now();
  const hide = () => {
    const elapsed = performance.now() - start;
    const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
    setTimeout(() => {
      preloader.classList.add('is-hidden');
      preloader.addEventListener(
        'transitionend',
        () => preloader.remove(),
        { once: true }
      );
    }, wait);
  };
  if (document.readyState === 'complete') hide();
  else window.addEventListener('load', hide, { once: true });
})();
