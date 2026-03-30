import { createPortal } from "react-dom"
import { useEffect, useState } from "react"

function applyRegisterFixedStyles(el) {
  if (!el) return
  el.style.setProperty("position", "fixed", "important")
  el.style.setProperty("bottom", "24px", "important")
  el.style.setProperty("left", "32px", "important")
  el.style.setProperty("transform", "none", "important")
  el.style.setProperty("z-index", "9999", "important")
  el.style.setProperty("display", "flex", "important")
}

function FloatingDock() {
  const [mountNode, setMountNode] = useState(null)

  useEffect(() => {
    setMountNode(document.body)
  }, [])

  if (!mountNode) return null

  return createPortal(
    <>
      <a
        ref={applyRegisterFixedStyles}
        href="https://rekaz.io/blantastyk/reservation/book-a-ticket"
        dir="ltr"
        className="items-center justify-center gap-1 rounded-full bg-[#7EC147] px-4 py-2.5 font-heading text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
        aria-label="Register now"
      >
        <span>Register Now</span>
        <span aria-hidden="true">→</span>
      </a>
      <a
        href="#top"
        aria-label="العودة لأعلى الصفحة"
        className="fixed bottom-6 right-4 z-[9999] flex h-11 w-11 items-center justify-center rounded-full bg-gray-300 text-gray-700 shadow-lg transition hover:bg-gray-400 max-[380px]:bottom-[5.25rem] sm:bottom-6 md:bottom-8 md:right-8"
      >
        <span className="font-heading text-lg leading-none">↑</span>
      </a>
    </>,
    mountNode
  )
}

export default FloatingDock
