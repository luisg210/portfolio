import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeModeProvider } from '@/context/ThemeModeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import './index.css';
import App from './App';

const redirectTo = sessionStorage.getItem('redirectTo');
if (redirectTo) {
  sessionStorage.removeItem('redirectTo');
  window.history.replaceState(null, '', redirectTo);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeModeProvider>
        <BrowserRouter basename="/portfolio">
          <App />
        </BrowserRouter>
      </ThemeModeProvider>
    </LanguageProvider>
  </StrictMode>
);
