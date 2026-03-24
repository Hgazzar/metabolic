/* RICMH legacy — عد تنازلي + كاروسيل المتحدثين */
;(function () {
  const targetDate = new Date("2026-04-03T00:00:00").getTime()
  const countDays = document.getElementById("count-days")
  const countHours = document.getElementById("count-hours")
  const countMinutes = document.getElementById("count-minutes")
  const countSeconds = document.getElementById("count-seconds")

  function pad(value) {
    return String(value).padStart(2, "0")
  }

  function updateMainCounter() {
    const now = Date.now()
    const distance = targetDate - now

    if (distance <= 0) {
      if (countDays) countDays.textContent = "00"
      if (countHours) countHours.textContent = "00"
      if (countMinutes) countMinutes.textContent = "00"
      if (countSeconds) countSeconds.textContent = "00"
      return
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((distance / (1000 * 60)) % 60)
    const seconds = Math.floor((distance / 1000) % 60)

    if (countDays) countDays.textContent = pad(days)
    if (countHours) countHours.textContent = pad(hours)
    if (countMinutes) countMinutes.textContent = pad(minutes)
    if (countSeconds) countSeconds.textContent = pad(seconds)
  }

  updateMainCounter()
  setInterval(updateMainCounter, 1000)

  const speakersViewport = document.getElementById("speakers-viewport")
  const speakersTrack = document.getElementById("speakers-track")
  const speakersPrev = document.getElementById("speakers-prev")
  const speakersNext = document.getElementById("speakers-next")

  if (speakersTrack && speakersViewport) {
    const initialSlides = Array.from(speakersTrack.children)
    if (initialSlides.length > 1) {
      const firstClone = initialSlides[0].cloneNode(true)
      const lastClone = initialSlides[initialSlides.length - 1].cloneNode(true)
      speakersTrack.insertBefore(lastClone, initialSlides[0])
      speakersTrack.appendChild(firstClone)
    }

    const speakerSlides = Array.from(speakersTrack.children)
    const realSlidesCount = Math.max(1, speakerSlides.length - 2)
    let currentSpeakerIndex = realSlidesCount > 1 ? 1 : 0
    let autoSlideTimer = null

    const ease = "cubic-bezier(0.22, 1, 0.36, 1)"
    const slideTransition = `transform 0.65s ${ease}, opacity 0.65s ${ease}, filter 0.65s ${ease}, box-shadow 0.65s ${ease}`
    speakerSlides.forEach((slide) => {
      slide.style.willChange = "transform, opacity, filter, box-shadow"
      slide.style.transition = slideTransition
    })

    function getSlideGap() {
      const g = parseFloat(
        getComputedStyle(speakersTrack).columnGap || getComputedStyle(speakersTrack).gap || "0",
      )
      return Number.isFinite(g) ? g : 0
    }

    function getSlideLayoutWidth() {
      const ref = speakerSlides[Math.min(1, speakerSlides.length - 1)] || speakerSlides[0]
      const w = ref ? ref.offsetWidth : 0
      return w > 0 ? w : 920
    }

    function getOffsetForIndex(index) {
      if (!speakerSlides.length) return 0
      const slideW = getSlideLayoutWidth()
      const gapValue = getSlideGap()
      const vw = speakersViewport.clientWidth
      const slideCenterX = index * (slideW + gapValue) + slideW / 2
      const viewportCenterX = vw / 2
      return slideCenterX - viewportCenterX
    }

    function mapToRealIndex(index) {
      if (realSlidesCount <= 1) return 0
      if (index === 0) return realSlidesCount - 1
      if (index === speakerSlides.length - 1) return 0
      return index - 1
    }

    function updateSlidesVisualState() {
      const currentRealIndex = mapToRealIndex(currentSpeakerIndex)
      speakerSlides.forEach((slide, index) => {
        const slideRealIndex = mapToRealIndex(index)
        const rawDistance = Math.abs(slideRealIndex - currentRealIndex)
        const distance = Math.min(rawDistance, realSlidesCount - rawDistance)
        const cappedDistance = Math.min(distance, 2)

        if (cappedDistance === 0) {
          slide.style.opacity = "1"
          slide.style.transform = "scale(1)"
          slide.style.filter = "blur(0px)"
          slide.style.zIndex = "3"
          slide.style.boxShadow =
            "0 32px 80px rgba(0,0,0,0.22), 0 14px 40px rgba(0,0,0,0.14), 0 0 0 1px rgba(255,255,255,0.05)"
        } else if (cappedDistance === 1) {
          slide.style.opacity = "0.48"
          slide.style.transform = "scale(0.84)"
          slide.style.filter = "blur(2.25px)"
          slide.style.zIndex = "2"
          slide.style.boxShadow = "none"
        } else {
          slide.style.opacity = "0.22"
          slide.style.transform = "scale(0.8)"
          slide.style.filter = "blur(3.25px)"
          slide.style.zIndex = "1"
          slide.style.boxShadow = "none"
        }
      })
    }

    function setSpeakerPosition(withTransition = true) {
      speakersTrack.style.transition = withTransition
        ? `transform 0.65s ${ease}`
        : "transform 0s linear"
      const offsetX = getOffsetForIndex(currentSpeakerIndex)
      const x = Math.round(offsetX * 100) / 100
      speakersTrack.style.transform = `translate3d(-${x}px, 0, 0)`
      updateSlidesVisualState()
    }

    function goToNextSpeaker() {
      currentSpeakerIndex += 1
      setSpeakerPosition(true)
    }

    function goToPrevSpeaker() {
      currentSpeakerIndex -= 1
      setSpeakerPosition(true)
    }

    function repairSpeakersCarouselState() {
      const n = speakerSlides.length
      if (n <= 1) return

      if (currentSpeakerIndex < 0 || currentSpeakerIndex >= n) {
        currentSpeakerIndex = realSlidesCount > 1 ? 1 : 0
        return
      }
      if (currentSpeakerIndex === n - 1) {
        currentSpeakerIndex = 1
      } else if (currentSpeakerIndex === 0) {
        currentSpeakerIndex = n - 2
      }
    }

    function startAutoSlide() {
      if (autoSlideTimer) clearInterval(autoSlideTimer)
      autoSlideTimer = setInterval(() => {
        if (document.hidden) return
        goToNextSpeaker()
      }, 3600)
    }

    function stopAutoSlide() {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer)
        autoSlideTimer = null
      }
    }

    speakersTrack.addEventListener("transitionend", (event) => {
      if (event.propertyName !== "transform") return
      if (currentSpeakerIndex === speakerSlides.length - 1) {
        currentSpeakerIndex = 1
        setSpeakerPosition(false)
      } else if (currentSpeakerIndex === 0) {
        currentSpeakerIndex = speakerSlides.length - 2
        setSpeakerPosition(false)
      }
    })

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopAutoSlide()
        return
      }
      repairSpeakersCarouselState()
      requestAnimationFrame(() => {
        setSpeakerPosition(false)
        updateSlidesVisualState()
        startAutoSlide()
      })
    })

    window.addEventListener("pageshow", (event) => {
      if (!event.persisted) return
      repairSpeakersCarouselState()
      requestAnimationFrame(() => {
        setSpeakerPosition(false)
        updateSlidesVisualState()
        startAutoSlide()
      })
    })

    if (speakersPrev) speakersPrev.addEventListener("click", goToPrevSpeaker)
    if (speakersNext) speakersNext.addEventListener("click", goToNextSpeaker)

    window.addEventListener("resize", () => {
      requestAnimationFrame(() => setSpeakerPosition(false))
    })

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSpeakerPosition(false)
        startAutoSlide()
      })
    })
  }

  /** دخول تدريجي لكل أقسام الصفحة عند الاقتراب منها */
  function initScrollReveal() {
    const nodes = document.querySelectorAll(".scroll-reveal")
    if (!nodes.length) return

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduced) {
      nodes.forEach((el) => {
        el.classList.add("is-visible")
      })
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          io.unobserve(entry.target)
        })
      },
      /* بدون هامش سالب من الأسفل — وإلا شرائط نهاية الصفحة (حقوق/لوجو) لا تُعتبر داخلة الإطار */
      { root: null, rootMargin: "0px 0px 0px 0px", threshold: 0.01 },
    )

    nodes.forEach((el) => {
      io.observe(el)
    })
  }

  initScrollReveal()

  /** قائمة تنقل الجوال (همبرغر) */
  function initLegacyNav() {
    const drawer = document.getElementById("legacy-nav-drawer")
    const toggles = document.querySelectorAll(".legacy-nav-toggle")
    if (!drawer || !toggles.length) return

    const mq = window.matchMedia("(min-width: 1024px)")

    function setIcons(isOpen) {
      toggles.forEach((btn) => {
        const openIcon = btn.querySelector(".legacy-nav-icon-open")
        const closeIcon = btn.querySelector(".legacy-nav-icon-close")
        if (openIcon && closeIcon) {
          openIcon.classList.toggle("hidden", isOpen)
          closeIcon.classList.toggle("hidden", !isOpen)
        }
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false")
      })
    }

    function closeDrawer() {
      if (mq.matches) return
      drawer.classList.add("hidden")
      setIcons(false)
    }

    function openDrawer() {
      if (mq.matches) return
      drawer.classList.remove("hidden")
      setIcons(true)
    }

    toggles.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (drawer.classList.contains("hidden")) openDrawer()
        else closeDrawer()
      })
    })

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (!mq.matches) closeDrawer()
      })
    })

    mq.addEventListener("change", () => {
      if (mq.matches) {
        drawer.classList.remove("hidden")
        setIcons(false)
      } else {
        drawer.classList.add("hidden")
        setIcons(false)
      }
    })
  }

  initLegacyNav()
})()
