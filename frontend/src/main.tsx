import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PORTFOLIO_GOOGLE_FONTS_STYLESHEET_URL } from '@dataservices/config/portfolioExternalResources'
import '@/styles/index.css'
import '@/styles/scss/global.scss'
import App from '@app/App'

const portfolioGoogleFontsStylesheet = document.createElement('link')
portfolioGoogleFontsStylesheet.href = PORTFOLIO_GOOGLE_FONTS_STYLESHEET_URL
portfolioGoogleFontsStylesheet.rel = 'stylesheet'
document.head.appendChild(portfolioGoogleFontsStylesheet)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
