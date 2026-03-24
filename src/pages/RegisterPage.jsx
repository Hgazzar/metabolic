import SubPageShell from "../components/SubPageShell"

function RegisterPage() {
  return (
    <SubPageShell
      title="التسجيل"
      description="روابط الدفع أو نماذج التسجيل الرسمية للمؤتمر."
    >
      <p className="font-body text-sm leading-relaxed text-bodyText">
        اربط هذا القسم بنظام التذاكر أو نموذج جهة التنظيم عند الجاهزية.
      </p>
    </SubPageShell>
  )
}

export default RegisterPage
