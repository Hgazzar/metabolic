import { NavLink } from "react-router-dom"

const navItems = [
  { kind: "route", to: "/", label: "الرئيسية", end: true },
  { kind: "route", to: "/program", label: "البرنامج" },
  { kind: "speakers", label: "المتحدثون" },
  { kind: "route", to: "/register", label: "التسجيل" },
  { kind: "route", to: "/venue", label: "الموقع" },
  { kind: "route", to: "/contact", label: "تواصل" },
]

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-5 md:px-10">
      <nav className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 rounded-full border border-white/20 bg-black/45 px-5 py-3 backdrop-blur-md md:px-8">
        <NavLink
          to="/"
          className="shrink-0 font-heading text-xl font-semibold tracking-[0.2em] text-white md:text-2xl"
        >
          RICMH<span className="text-primaryGreen">2026</span>
        </NavLink>

        <ul className="hidden flex-1 flex-wrap items-center justify-center gap-4 font-body text-sm text-white/85 lg:flex xl:gap-8">
          {navItems.map((item) =>
            item.kind === "speakers" ? (
              <li key="speakers">
                <a
                  href={`${import.meta.env.BASE_URL}speakers.html`}
                  className="transition hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ) : (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    [
                      "transition hover:text-white",
                      isActive ? "font-semibold text-white" : "",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        <NavLink
          to="/register"
          className="shrink-0 rounded-full bg-primaryGreen px-5 py-2 font-heading text-xs font-semibold text-white transition hover:brightness-105"
        >
          سجل الآن
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
