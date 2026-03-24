import { CalendarDays, MapPin, Users } from "lucide-react"
import Countdown from "./Countdown"
import InfoCard from "./InfoCard"
import heroBg from "../../assets/hero-bg.jpg"
import speakerImage from "../../assets/dr-speaker.png"

function CirclePattern() {
  return (
    <svg
      viewBox="0 0 680 680"
      className="pointer-events-none absolute -left-40 top-1/2 z-20 h-[760px] w-[760px] -translate-y-1/2 opacity-80"
      fill="none"
      aria-hidden="true"
    >
      {[85, 140, 195, 250, 305, 360].map((radius) => (
        <circle
          key={radius}
          cx="210"
          cy="340"
          r={radius}
          stroke="rgba(122, 200, 67, 0.42)"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  )
}

function HeroSection() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden bg-pureBlack pb-16 pt-24 md:pb-20 md:pt-28">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black/90" />

        <div className="relative mx-auto flex min-h-[78vh] w-full max-w-[1180px] items-start px-4 md:px-10 lg:items-center">
          <div className="z-30 w-full text-right lg:w-[56%]">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.28em] text-primaryGreen">
              Riyadh International Conference
            </p>
            <h1
              dir="ltr"
              className="mt-2 font-heading text-7xl font-extrabold leading-[0.9] text-white sm:text-[86px] lg:text-[132px]"
            >
              RICMH2026
            </h1>
            <p className="mt-5 max-w-[650px] font-body text-base leading-8 text-white/85 md:text-lg">
              المؤتمر الدولي للبحث والابتكار في الرعاية الصحية المتكاملة. منصة
              تجمع الخبراء وصناع القرار لتبادل الرؤى وصناعة مستقبل صحي مستدام.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-end gap-3">
              <span className="rounded-full border border-white/35 bg-white/10 px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white">
                5 April 2026
              </span>
              <span className="rounded-full border border-white/35 bg-white/10 px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-white">
                Riyadh, Saudi Arabia
              </span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[46%] lg:block">
          <img
            src={speakerImage}
            alt="Conference Speaker"
            className="absolute inset-0 z-10 h-full w-full object-cover object-top opacity-95"
          />
          <CirclePattern />
        </div>

        <div className="relative z-30 mx-auto w-full max-w-[1180px] px-4 md:px-10">
          <Countdown />
        </div>
      </section>

      <section className="relative z-20 -mt-6 px-4 pb-20 md:px-10">
        <div className="mx-auto grid w-full max-w-[1180px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            icon={CalendarDays}
            title="Conference Date"
            subtitle="05 April 2026"
            gradientClass="bg-cyan-grad"
          />
          <InfoCard
            icon={MapPin}
            title="Location"
            subtitle="Riyadh, Saudi Arabia"
            gradientClass="bg-gold-grad text-pureBlack"
          />
          <InfoCard
            icon={Users}
            title="Expected Attendees"
            subtitle="500+ Healthcare Leaders"
            gradientClass="bg-green-grad"
          />
        </div>
      </section>
    </main>
  )
}

export default HeroSection
