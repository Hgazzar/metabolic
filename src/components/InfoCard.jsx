function InfoCard({ icon: Icon, title, subtitle, gradientClass }) {
  return (
    <article
      className={`flex min-h-24 items-center gap-4 rounded-card p-5 text-white shadow-[0_14px_34px_rgba(0,0,0,0.35)] ${gradientClass}`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.08em]">
          {title}
        </h3>
        <p className="mt-1 font-body text-sm text-current">{subtitle}</p>
      </div>
    </article>
  )
}

export default InfoCard
