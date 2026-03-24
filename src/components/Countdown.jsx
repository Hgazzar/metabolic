import { useEffect, useMemo, useState } from "react"

const targetDate = new Date("2026-04-05T00:00:00")

function getTimeLeft() {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now

  if (distance <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" }
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((distance / 1000 / 60) % 60)
  const seconds = Math.floor((distance / 1000) % 60)

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  }
}

function TimeBlock({ label, value }) {
  return (
    <div className="flex min-w-[78px] flex-col items-center gap-2">
      <div className="font-heading text-[38px] font-extrabold leading-none text-white">
        {value}
      </div>
      <span className="font-body text-xs text-[#B9FF85]">{label}</span>
    </div>
  )
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => window.clearInterval(timerId)
  }, [])

  const items = useMemo(
    () => [
      { label: "Days", value: timeLeft.days },
      { label: "Hours", value: timeLeft.hours },
      { label: "Minutes", value: timeLeft.minutes },
      { label: "Seconds", value: timeLeft.seconds },
    ],
    [timeLeft]
  )

  return (
    <div className="mx-auto mt-12 w-full max-w-[700px] rounded-card border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-md md:px-8">
      <div className="flex items-center justify-between gap-3 text-left md:gap-4">
        {items.map((item, index) => (
          <div
            key={item.label}
            className="flex items-center gap-3 md:gap-4"
          >
            <TimeBlock label={item.label} value={item.value} />
            {index !== items.length - 1 && (
              <span className="mb-5 font-heading text-3xl font-semibold text-white">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countdown
