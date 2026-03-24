import SubPageShell from "../components/SubPageShell"

function SpeakersPage() {
  return (
    <SubPageShell
      title="المتحدثون"
      description="قائمة المتحدثين والسير الذاتية القصيرة."
    >
      <p className="font-body text-sm leading-relaxed text-bodyText">
        جاهز لاستقبال بطاقات المتحدثين (صورة، اسم، تخصص، جلسة) بنفس أسلوب الواجهة الحالية.
      </p>
    </SubPageShell>
  )
}

export default SpeakersPage
