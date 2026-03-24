import SubPageShell from "../components/SubPageShell"

function ProgramPage() {
  return (
    <SubPageShell
      title="البرنامج العلمي"
      description="جدول الجلسات والمحاور سيتم إضافته هنا بصيغة احترافية قابلة للتحديث."
    >
      <p className="font-body text-sm leading-relaxed text-bodyText">
        يمكن ربط هذا القسم لاحقًا بملف JSON أو CMS. حاليًا هذه صفحة فرعية جاهزة ضمن هيكل
        React.
      </p>
    </SubPageShell>
  )
}

export default ProgramPage
