'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    fbq?: (...args: any[]) => void
    _fbq?: any[]
  }
}

export default function FacebookPixelTracking() {
  const hasTrackedViewContent = useRef(false)
  const scrollDepths = useRef({
    scroll25: false,
    scroll50: false,
    scroll75: false,
    scroll100: false
  })
  const scrollHandlerRef = useRef<(() => void) | null>(null)
  const isMounted = useRef(true)
  const trackViewContentRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    // Verificar se estamos no navegador
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return
    }

    // Função segura para verificar se Pixel está pronto
    const isPixelReady = (): boolean => {
      try {
        return !!(window.fbq && typeof window.fbq === 'function')
      } catch {
        return false
      }
    }

    // Função auxiliar para rastreamento com verificações de segurança
    const trackEvent = (eventName: string, params?: Record<string, any>) => {
      if (!isMounted.current) return
      
      try {
        if (!isPixelReady()) return

        const eventParams = {
          content_name: 'Apostila Técnica VW',
          timestamp: new Date().toISOString(),
          ...params
        }

        if (eventName.startsWith('Scroll')) {
          window.fbq!('trackCustom', eventName, eventParams)
        } else if (eventName === 'ViewContent' || eventName === 'Lead') {
          window.fbq!('track', eventName, eventParams)
        } else {
          window.fbq!('trackCustom', eventName, eventParams)
        }
      } catch (error) {
        // Silenciar todos os erros para não quebrar a página
      }
    }

    // 1. ViewContent - quando a página carregar completamente
    const trackViewContent = () => {
      if (!hasTrackedViewContent.current && document.readyState === 'complete') {
        // Aguardar Pixel estar pronto (máximo 5 segundos)
        let attempts = 0
        const checkAndTrack = () => {
          if (!isMounted.current) return
          
          if (isPixelReady()) {
            trackEvent('ViewContent', {
              content_type: 'landing_page',
              content_category: 'apostila_tecnica'
            })
            hasTrackedViewContent.current = true
          } else if (attempts < 50 && isMounted.current) {
            attempts++
            setTimeout(checkAndTrack, 100)
          }
        }
        checkAndTrack()
      }
    }

    trackViewContentRef.current = trackViewContent

    if (document.readyState === 'complete') {
      setTimeout(trackViewContent, 500)
    } else {
      window.addEventListener('load', trackViewContent, { once: true })
    }

    // 2. Scroll Tracking - versão ultra segura
    const setupScrollTracking = () => {
      if (!isMounted.current) return

      const handleScroll = () => {
        if (!isMounted.current) return

        try {
          const scrollTop = Math.max(
            window.pageYOffset || 0,
            document.documentElement?.scrollTop || 0,
            0
          )
          const windowHeight = window.innerHeight || 1
          const body = document.body
          const html = document.documentElement

          const documentHeight = Math.max(
            body?.scrollHeight || 0,
            body?.offsetHeight || 0,
            html?.clientHeight || 0,
            html?.scrollHeight || 0,
            html?.offsetHeight || 0,
            windowHeight
          )

          const maxScroll = Math.max(documentHeight - windowHeight, 1)
          if (maxScroll <= 0) return

          const scrollPercent = Math.min(Math.max(Math.round((scrollTop / maxScroll) * 100), 0), 100)

          // Disparar eventos apenas uma vez cada
          if (scrollPercent >= 25 && !scrollDepths.current.scroll25 && isPixelReady()) {
            trackEvent('Scroll25', { scroll_depth: '25%' })
            scrollDepths.current.scroll25 = true
          }
          if (scrollPercent >= 50 && !scrollDepths.current.scroll50 && isPixelReady()) {
            trackEvent('Scroll50', { scroll_depth: '50%' })
            scrollDepths.current.scroll50 = true
          }
          if (scrollPercent >= 75 && !scrollDepths.current.scroll75 && isPixelReady()) {
            trackEvent('Scroll75', { scroll_depth: '75%' })
            scrollDepths.current.scroll75 = true
          }
          if (scrollPercent >= 100 && !scrollDepths.current.scroll100 && isPixelReady()) {
            trackEvent('Scroll100', { scroll_depth: '100%' })
            scrollDepths.current.scroll100 = true
          }
        } catch (error) {
          // Silenciar erros
        }
      }

      // Throttle para performance
      let ticking = false
      const throttledScroll = () => {
        if (!ticking && isMounted.current) {
          requestAnimationFrame(() => {
            if (isMounted.current) {
              handleScroll()
            }
            ticking = false
          })
          ticking = true
        }
      }

      // Aguardar um pouco antes de adicionar listener
      setTimeout(() => {
        if (isMounted.current) {
          window.addEventListener('scroll', throttledScroll, { passive: true })
          scrollHandlerRef.current = throttledScroll
        }
      }, 1000)
    }

    // Aguardar DOM estar pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupScrollTracking, { once: true })
    } else {
      setTimeout(setupScrollTracking, 500)
    }

    // 3. WhatsApp Button Tracking
    const setupWhatsAppTracking = () => {
      setTimeout(() => {
        if (!isMounted.current) return

        try {
          const floatingButton = document.querySelector('button[aria-label="Contato via WhatsApp"]')
          if (floatingButton && isMounted.current) {
            const handleClick = () => {
              if (isPixelReady()) {
                trackEvent('ClickWhatsApp', {
                  button_type: 'floating',
                  content_category: 'contact'
                })
              }
            }
            floatingButton.addEventListener('click', handleClick)
          }

          const formButton = document.querySelector('button[type="submit"]')
          if (formButton && isMounted.current) {
            const handleSubmit = () => {
              if (isPixelReady()) {
                trackEvent('ClickWhatsApp', {
                  button_type: 'form_submit',
                  content_category: 'lead_generation'
                })
              }
            }
            formButton.addEventListener('click', handleSubmit)
          }
        } catch (error) {
          // Silenciar erros
        }
      }, 4000)
    }

    // 4. Form Tracking
    const setupFormTracking = () => {
      setTimeout(() => {
        if (!isMounted.current) return

        try {
          const form = document.querySelector('form')
          if (form && isMounted.current) {
            const handleSubmit = () => {
              if (isPixelReady()) {
                trackEvent('Lead', {
                  content_category: 'whatsapp_lead',
                  value: 0,
                  currency: 'BRL'
                })
              }
            }
            form.addEventListener('submit', handleSubmit)
          }
        } catch (error) {
          // Silenciar erros
        }
      }, 4000)
    }

    // Inicializar rastreamentos
    setupWhatsAppTracking()
    setupFormTracking()

    // Cleanup completo
    return () => {
      isMounted.current = false
      if (trackViewContentRef.current) {
        window.removeEventListener('load', trackViewContentRef.current)
      }
      if (scrollHandlerRef.current) {
        window.removeEventListener('scroll', scrollHandlerRef.current)
      }
    }
  }, []) // Dependências vazias - executa apenas uma vez na montagem

  return null
}