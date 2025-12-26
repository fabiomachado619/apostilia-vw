'use client'

import { useEffect } from 'react'

export default function FacebookPixel() {
  useEffect(() => {
    // Verificar se estamos no navegador
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return
    }

    try {
      // Facebook Pixel Code
      /* eslint-disable @typescript-eslint/no-unused-expressions */
      !(function(f, b, e, v, n, t, s) {
        if (f.fbq) return
        n = f.fbq = function(...args: any[]) {
          n.callMethod ? n.callMethod(...args) : n.queue.push(args)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = !0
        n.version = '2.0'
        n.queue = []
        t = b.createElement(e)
        t.async = !0
        t.src = 'https://connect.facebook.net/en_US/fbevents.js'
        s = b.getElementsByTagName(e)[0]
        if (s && s.parentNode) {
          s.parentNode.insertBefore(t, s)
        }
      })(window, document, 'script')

      // Initialize Pixel - com verificação de segurança
      const initPixel = () => {
        try {
          if (window.fbq && typeof window.fbq === 'function') {
            window.fbq('init', '1356826896446202')
            
            // Track PageView
            window.fbq('track', 'PageView')
          } else {
            // Aguardar Pixel carregar
            setTimeout(initPixel, 100)
          }
        } catch (error) {
          // Silenciar erros para não quebrar a página
        }
      }

      // Aguardar um pouco antes de inicializar
      setTimeout(initPixel, 100)
      /* eslint-enable @typescript-eslint/no-unused-expressions */
    } catch (error) {
      // Silenciar erros para não quebrar a renderização
    }
  }, [])

  return (
    <>
      {/* Noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook/tr?id=1356826896446202&ev=PageView&noscript=1"
          alt="Facebook Pixel"
        />
      </noscript>
    </>
  )
}