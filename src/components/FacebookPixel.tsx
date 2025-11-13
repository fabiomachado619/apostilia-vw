'use client'

import { useEffect } from 'react'

export default function FacebookPixel() {
  useEffect(() => {
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
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script')

    // Initialize Pixel
    fbq('init', '1356826896446202')
    
    // Track PageView
    fbq('track', 'PageView')
    /* eslint-enable @typescript-eslint/no-unused-expressions */
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