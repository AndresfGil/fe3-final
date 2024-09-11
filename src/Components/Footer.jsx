import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const { state } = useContextGlobal()
  return (
    <footer
      className={`footer ${state.theme ? 'footer-light' : 'footer-dark'}`}
    >
      <div className="footer-logoLinks">
        <img src="/images/DH.png" alt="DH-logo" className="footer-logo" />
        <div className="footer-socialIcons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/ico-facebook.png"
              alt="Facebook"
              className="social-icon"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/ico-instagram.png"
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/ico-tiktok.png"
              alt="TikTok"
              className="social-icon"
            />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/ico-whatsapp.png"
              alt="WhatsApp"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
