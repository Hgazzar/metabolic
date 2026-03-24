# RICMH 2026 — React + صفحات فرعية

## تشغيل المشروع

```bash
npm install
npm run dev
```

- **الجذر `/`:** يعرض **`ricmh-legacy-full.html`** داخل iframe (نفس شكل الـ HTML الكامل السابق).
- **الصفحات الفرعية** (`/program` …): واجهة React مع `SiteLayout`.
- الملف: `public/ricmh-legacy-full.html` (يُنسخ إلى `dist/` عند البناء).

### ملفات الليجاسي المنفصلة

| ملف | الغرض |
|-----|--------|
| `public/css/ricmh-legacy.css` | أنيميشن + قواعد الفوتر |
| `public/js/ricmh-legacy.js` | العد التنازلي + كاروسيل المتحدثين |
| `public/js/tailwind-config-legacy.js` | إعداد خطوط Tailwind CDN |

Tailwind نفسه لا يزال من **CDN** (مثل قبل)؛ باقي الـ utility في الـ HTML.

## الصفحات

| المسار        | الوصف        |
| ------------- | ------------ |
| `/`           | الرئيسية     |
| `/program`    | البرنامج     |
| `/speakers`   | المتحدثون    |
| `/register`   | التسجيل      |
| `/venue`      | الموقع       |
| `/contact`    | تواصل        |

## أرشيف

- `archive/ricmh-landing-snapshot.html` — نسخة احتياطية من الـ HTML قبل تحويل مدخل `index.html` إلى Vite.

## تم حذفه (تنضيف)

- `index.backup.html`, `BACKUP_README.md`, `BACKUP-NOTES.md`, مجلد `dist/` القديم، قاعدة Cursor الخاصة بنسخ `index`.
