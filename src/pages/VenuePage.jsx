import SubPageShell from "../components/SubPageShell"

function VenuePage() {
  return (
    <SubPageShell
      title="الموقع والوصول"
      description="الفندق أو المركز، خريطة Google، مواقف السيارات."
    >
      <p className="font-body text-sm leading-relaxed text-bodyText">
        يمكن تضمين نفس كتلة الخريطة والفندق من التصميم السابق هنا كمكوّن React.
      </p>
    </SubPageShell>
  )
}

export default VenuePage
