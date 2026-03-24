import SubPageShell from "../components/SubPageShell"

function ContactPage() {
  return (
    <SubPageShell
      title="تواصل معنا"
      description="بريد اللجنة المنظمة، الهاتف، وقنوات التواصل الرسمية."
    >
      <ul className="list-inside list-disc space-y-2 font-body text-sm text-bodyText">
        <li>البريد: info@example.com (استبدل بالبيانات الرسمية)</li>
        <li>الهاتف: +966 …</li>
        <li>العنوان: الرياض، المملكة العربية السعودية</li>
      </ul>
    </SubPageShell>
  )
}

export default ContactPage
