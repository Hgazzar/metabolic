function SubPageShell({ title, description, children }) {
  return (
    <main className="min-h-[calc(100vh-120px)] bg-pageBg pb-20 pt-28 text-bodyText">
      <div className="mx-auto w-full max-w-4xl space-y-6 px-6 md:px-10">
        <header className="space-y-2 text-right">
          <h1 className="font-heading text-3xl font-bold text-pureBlack md:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl font-body text-base leading-relaxed text-bodyText">
              {description}
            </p>
          ) : null}
        </header>
        <div className="rounded-lg border border-[#eeeeee] bg-white p-6 shadow-sm md:p-8">
          {children}
        </div>
      </div>
    </main>
  )
}

export default SubPageShell
