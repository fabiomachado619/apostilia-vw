'use client'

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    fbq: (...args: any[]) => void
    _fbq: any[]
  }
}

export default function FacebookPixelTracking() {
  const [hasTrackedViewContent, setHasTrackedViewContent] = useState(false)
  const [scrollDepths, setScrollDepths] = useState({
    scroll25: false,
    scroll50: false,
    scroll75: false,
    scroll100: false
  })

  const scrollObserverRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Verificar se estamos no navegador
    if (typeof window === 'undefined') return

    // Função auxiliar para rastreamento com verificações de segurança
    const trackEvent = (eventName: string, params?: Record<string, any>) => {
      try {
        if (window.fbq && typeof window.fbq === 'function') {
          const eventParams = {
            content_name: 'Apostila Técnica VW',
            timestamp: new Date().toISOString(),
            ...params
          }

          if (eventName.startsWith('Scroll')) {
            window.fbq('trackCustom', eventName, eventParams)
          } else if (eventName === 'ViewContent' || eventName === 'Lead') {
            window.fbq('track', eventName, eventParams)
          } else {
            window.fbq('trackCustom', eventName, eventParams)
          }

          console.log('Facebook Pixel Event:', eventName, eventParams)
        }
      } catch (error) {
        console.warn('Facebook Pixel tracking error:', error)
      }
    }

    // 1. ViewContent - quando a página carregar completamente
    const trackViewContent = () => {
      if (!hasTrackedViewContent && document.readyState === 'complete') {
        trackEvent('ViewContent', {
          content_type: 'landing_page',
          content_category: 'apostila_tecnica'
        })
        setHasTrackedViewContent(true)
      }
    }

    if (document.readyState === 'complete') {
      trackViewContent()
    } else {
      window.addEventListener('load', trackViewContent)
    }

    // 2. Scroll Tracking - versão simplificada
    const setupScrollTracking = () => {
      let lastScrollPercent = 0

      const handleScroll = () => {
        try {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          const windowHeight = window.innerHeight
          const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          )

          const scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100)

          // Evitar múltiplos disparos do mesmo percentual
          if (scrollPercent === lastScrollPercent) return
          lastScrollPercent = scrollPercent

          // Disparar eventos nos marcos definidos
          if (scrollPercent >= 25 && !scrollDepths.scroll25) {
            trackEvent('Scroll25', { scroll_depth: '25%' })
            setScrollDepths(prev => ({ ...prev, scroll25: true }))
          }
          if (scrollPercent >= 50 && !scrollDepths.scroll50) {
            trackEvent('Scroll50', { scroll_depth: '50%' })
            setScrollDepths(prev => ({ ...prev, scroll50: true }))
          }
          if (scrollPercent >= 75 && !scrollDepths.scroll75) {
            trackEvent('Scroll75', { scroll_depth: '75%' })
            setScrollDepths(prev => ({ ...prev, scroll75: true }))
          }
          if (scrollPercent >= 100 && !scrollDepths.scroll100) {
            trackEvent('Scroll100', { scroll_depth: '100%' })
            setScrollDepths(prev => ({ ...prev, scroll100: true }))
          }
        } catch (error) {
          console.warn('Scroll tracking error:', error)
        }
      }

      // Throttle para performance
      let ticking = false
      const throttledScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll()
            ticking = false
          })
          ticking = true
        }
      }

      window.addEventListener('scroll', throttledScroll, { passive: true })
    }

    // Inicializar scroll tracking
    setupScrollTracking()

    // 3. WhatsApp Button Tracking - simplificado
    const setupWhatsAppTracking = () => {
      // Usar timeout para garantir que os elementos estão carregados
      setTimeout(() => {
        try {
          // Click no botão flutuante
          const floatingButton = document.querySelector('button[aria-label="Contato via WhatsApp"]')
          if (floatingButton) {
            floatingButton.addEventListener('click', () => {
              trackEvent('ClickWhatsApp', {
                button_type: 'floating',
                content_category: 'contact'
              })
            })
          }

          // Click no botão do formulário
          const formButton = document.querySelector('button[type="submit"]')
          if (formButton) {
            formButton.addEventListener('click', () => {
              trackEvent('ClickWhatsApp', {
                button_type: 'form_submit',
                content_category: 'lead_generation'
              })
            })
          }
        } catch (error) {
          console.warn('WhatsApp tracking setup error:', error)
        }
      }, 2000)
    }

    // 4. Form Tracking - simplificado
    const setupFormTracking = () => {
      setTimeout(() => {
        try {
          // Lead completion (quando o formulário é enviado)
          const form = document.querySelector('form')
          if (form) {
            form.addEventListener('submit', () => {
              trackEvent('Lead', {
                content_category: 'whatsapp_lead',
                value: 0,
                currency: 'BRL'
              })
            })
          }
        } catch (error) {
          console.warn('Form tracking setup error:', error)
        }
      }, 2000)
    }

    // Inicializar rastreamentos básicos
    setupWhatsAppTracking()
    setupFormTracking()

    // Cleanup básico
    return () => {
      window.removeEventListener('load', trackViewContent)
    }
  }, [hasTrackedViewContent, scrollDepths, videoTracking])

  return null
}
