/**
 * يعرض صفحة HTML الثابتة من public/ — يُستخدم عندما يحمّل SPA (index.html)
 * لمسارات مثل /speakers.html حتى لا يعيد catch-all التوجيه للرئيسية.
 */
function LegacyIframePage({ src, title = "RICMH 2026" }) {
  return (
    <div className="fixed inset-0 z-0 flex h-[100dvh] w-full flex-col bg-black">
      <iframe title={title} src={src} className="h-full min-h-0 w-full flex-1 border-0" />
    </div>
  )
}

export default LegacyIframePage
