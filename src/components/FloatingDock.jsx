function FloatingDock() {
  return (
    <>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        dir="ltr"
        className="fixed bottom-6 left-1/2 z-[1000] flex w-max min-w-0 max-w-[min(80%,280px)] -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-[#7EC147] px-3 py-2.5 font-heading text-sm font-semibold text-white shadow-lg transition hover:opacity-90 md:bottom-8"
      >
        <svg
          className="h-5 w-5 shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.93 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.93 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.38 13.88c-.23.65-1.15 1.18-1.59 1.26-.41.08-.94.11-1.52-.1-.35-.12-.8-.44-1.38-.85-2.43-1.67-4.01-2.68-5.01-4.02-.75-.99-1.05-1.76-1.12-2.39-.1-.93.24-1.38.41-1.57.18-.2.39-.23.52-.23h.42c.17 0 .4.06.61.46.76 1.71.81 1.89.81 1.89.05.11.08.24 0 .38-.12.23-.35.36-.61.55-.18.14-.42.33-.61.5-.21.18-.43.38-.18.72.25.35 1.11 1.83 2.38 2.96 1.64 1.46 3.02 1.91 3.46 2.13.44.22.7.19.96-.11.25-.31 1.08-1.26 1.37-1.69.29-.42.48-.35.81-.21.33.14 2.09.99 2.45 1.17.36.18.6.27.69.42.09.15.09.88-.14 1.53z" />
        </svg>
        <span>Contact Us</span>
      </a>
      <a
        href="#top"
        aria-label="العودة لأعلى الصفحة"
        className="fixed bottom-6 right-4 z-[1000] flex h-11 w-11 items-center justify-center rounded-full bg-gray-300 text-gray-700 shadow-lg transition hover:bg-gray-400 max-[380px]:bottom-[5.25rem] sm:bottom-6 md:bottom-8 md:right-8"
      >
        <span className="font-heading text-lg leading-none">↑</span>
      </a>
    </>
  )
}

export default FloatingDock
