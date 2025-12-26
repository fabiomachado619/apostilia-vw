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
  const [videoTracking, setVideoTracking] = useState({
    hasPlayed: false,
    hasPaused: false,
    hasCompleted: false,
    lastPercent: 0
  })

  const scrollObserverRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Função auxiliar para rastreamento
    const trackEvent = (eventName: string, params?: Record<string, any>) => {
      if (window.fbq) {
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

    // 2. Scroll Tracking - usando Intersection Observer
    const setupScrollTracking = () => {
      const scrollMarkers = [
        { id: 'scroll25', threshold: 0.25, name: 'Scroll25' },
        { id: 'scroll50', threshold: 0.50, name: 'Scroll50' },
        { id: 'scroll75', threshold: 0.75, name: 'Scroll75' },
        { id: 'scroll100', threshold: 1.00, name: 'Scroll100' }
      ]

      scrollObserverRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const marker = scrollMarkers.find(m => m.id === entry.target.id)
            if (marker && !scrollDepths[marker.id as keyof typeof scrollDepths]) {
              trackEvent(marker.name, {
                scroll_depth: Math.round(marker.threshold * 100) + '%',
                content_category: 'scroll_tracking'
              })
              setScrollDepths(prev => ({
                ...prev,
                [marker.id]: true
              }))
            }
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -10px 0px'
      })

      // Criar marcadores invisíveis na página
      scrollMarkers.forEach(marker => {
        const markerElement = document.createElement('div')
        markerElement.id = marker.id
        markerElement.style.cssText = `
          position: absolute;
          top: ${marker.threshold * 100}%;
          left: 0;
          width: 1px;
          height: 1px;
          visibility: hidden;
          pointer-events: none;
        `
        document.body.appendChild(markerElement)
        scrollObserverRef.current?.observe(markerElement)
      })
    }

    // Inicializar scroll tracking
    setupScrollTracking()

    // 3. Video Tracking - YouTube iframe
    const setupVideoTracking = () => {
      const youtubeIframe = document.querySelector('iframe[src*="youtube.com"]') as HTMLIFrameElement

      if (youtubeIframe) {
        // YouTube Iframe API - mais confiável
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

        // Quando a API do YouTube carregar
        window.onYouTubeIframeAPIReady = () => {
          const player = new (window as any).YT.Player(youtubeIframe, {
            events: {
              onStateChange: (event: any) => {
                // Play
                if (event.data === (window as any).YT.PlayerState.PLAYING && !videoTracking.hasPlayed) {
                  trackEvent('VideoPlay', {
                    video_title: 'Demonstração da Apostila Técnica VW',
                    video_percent: 0
                  })
                  setVideoTracking(prev => ({ ...prev, hasPlayed: true }))
                }

                // Pause
                if (event.data === (window as any).YT.PlayerState.PAUSED && videoTracking.hasPlayed && !videoTracking.hasPaused) {
                  const currentTime = player.getCurrentTime()
                  const duration = player.getDuration()
                  const percent = Math.round((currentTime / duration) * 100)

                  trackEvent('VideoPause', {
                    video_title: 'Demonstração da Apostila Técnica VW',
                    video_percent: percent
                  })
                  setVideoTracking(prev => ({ ...prev, hasPaused: true }))
                }

                // Complete (75%+)
                if (event.data === (window as any).YT.PlayerState.ENDED && !videoTracking.hasCompleted) {
                  trackEvent('VideoComplete', {
                    video_title: 'Demonstração da Apostila Técnica VW',
                    video_percent: 100
                  })
                  setVideoTracking(prev => ({ ...prev, hasCompleted: true }))
                }
              }
            }
          })
        }

        // Fallback para eventos básicos do iframe (menos preciso)
        const handleIframeInteraction = () => {
          if (!videoTracking.hasPlayed) {
            trackEvent('VideoPlay', {
              video_title: 'Demonstração da Apostila Técnica VW',
              video_percent: 0
            })
            setVideoTracking(prev => ({ ...prev, hasPlayed: true }))
          }
        }

        youtubeIframe.addEventListener('load', () => {
          // Adicionar listeners para interações básicas
          youtubeIframe.contentWindow?.addEventListener('click', handleIframeInteraction)
        })

        // Timeout fallback para detectar play
        setTimeout(() => {
          if (!videoTracking.hasPlayed) {
            const handleVisibilityChange = () => {
              if (document.hidden === false && !videoTracking.hasPlayed) {
                trackEvent('VideoPlay', {
                  video_title: 'Demonstração da Apostila Técnica VW',
                  video_percent: 0
                })
                setVideoTracking(prev => ({ ...prev, hasPlayed: true }))
                document.removeEventListener('visibilitychange', handleVisibilityChange)
              }
            }
            document.addEventListener('visibilitychange', handleVisibilityChange)
          }
        }, 5000)
      }
    }

    // Inicializar video tracking
    setupVideoTracking()

    // 4. WhatsApp Button Tracking
    const setupWhatsAppTracking = () => {
      // Click no botão flutuante
      const floatingButton = document.querySelector('button[aria-label="Contato via WhatsApp"]') as HTMLButtonElement
      if (floatingButton) {
        floatingButton.addEventListener('click', () => {
          trackEvent('ClickWhatsApp', {
            button_type: 'floating',
            content_category: 'contact'
          })
        })
      }

      // Click no botão do formulário
      const formButton = document.querySelector('button[type="submit"]') as HTMLButtonElement
      if (formButton) {
        formButton.addEventListener('click', () => {
          trackEvent('ClickWhatsApp', {
            button_type: 'form_submit',
            content_category: 'lead_generation'
          })
        })
      }
    }

    // 5. Form/Popup Tracking
    const setupFormTracking = () => {
      // Abrir popup
      const observePopup = () => {
        const popupObserver = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
              const popup = document.querySelector('[class*="fixed"][class*="inset-0"][class*="z-50"]')
              if (popup && popup.style.display !== 'none') {
                trackEvent('OpenPopup', {
                  popup_type: 'whatsapp_form',
                  content_category: 'lead_generation'
                })
              }
            }
          })
        })

        observePopup.observe(document.body, { childList: true, subtree: true })
      }

      observePopup()

      // Lead completion (quando o formulário é enviado)
      const form = document.querySelector('form') as HTMLFormElement
      if (form) {
        form.addEventListener('submit', () => {
          trackEvent('Lead', {
            content_category: 'whatsapp_lead',
            value: 0, // Pode adicionar valor monetário se desejar
            currency: 'BRL'
          })
        })
      }

      // Redirect para WhatsApp
      const originalOpen = window.open
      window.open = function(url: string, ...args) {
        if (url && url.includes('wa.me') || url.includes('whatsapp.com')) {
          trackEvent('RedirectWhatsApp', {
            whatsapp_number: url.match(/wa\.me\/(\d+)/)?.[1] || 'unknown',
            content_category: 'conversion'
          })
        }
        return originalOpen.call(window, url, ...args)
      }
    }

    // Inicializar todos os rastreamentos
    setupWhatsAppTracking()
    setupFormTracking()

    // Cleanup
    return () => {
      if (scrollObserverRef.current) {
        scrollObserverRef.current.disconnect()
      }

      // Limpar marcadores de scroll
      const markers = document.querySelectorAll('[id^="scroll"]')
      markers.forEach(marker => marker.remove())

      window.removeEventListener('load', trackViewContent)
    }
  }, [hasTrackedViewContent, scrollDepths, videoTracking])

  return null
}
