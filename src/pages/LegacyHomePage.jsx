/**
 * الصفحة الرئيسية = نسخة الـ HTML الكاملة المحفوظة (نفس الشكل السابق قبل React).
 * الصفحات الفرعية تبقى على مكوّنات React من SiteLayout.
 */
function LegacyHomePage() {
  return (
    <div className="fixed inset-0 z-0 flex h-[100dvh] w-full flex-col bg-black">
      <iframe
        title="RICMH 2026"
        src="/ricmh-legacy-full.html"
        className="h-full min-h-0 w-full flex-1 border-0"
      />
    </div>
  )
}

export default LegacyHomePage
