# X4G Worker (چند فایلی)

همون منطق قبلی `worker1.js` هست، فقط به چند فایل تقسیم شده. رفتار کد تغییر نکرده.

## ساختار
- `src/index.js`: ورودی Worker و هندلر اصلی (روتینگ)
- `src/config.js`: رمز ادمین و اسم KV
- `src/cache.js`: کش حافظه‌ای (۳۰ دقیقه)
- `src/utils.js`: ابزارهای UUID و parse کانفیگ VLESS
- `src/admin.js`: صفحه ادمین (HTML)
- `src/sub.js`: ساخت کانفیگ‌های ساب
- `src/direct.js`: حالت مستقیم (VLESS روی WebSocket)

## مراحل
1. اگه با wrangler دیپلوی می‌کنی، توی `wrangler.jsonc` بخش `kv_namespaces` رو با id KV خودت فعال کن.
   اگه از داشبورد دیپلوی می‌کنی، مثل قبل KV رو با اسم `opop` بایند کن.
2. `npx wrangler deploy` (یا Import a repository توی داشبورد).
3. آدرس Worker رو بردار و صفحه `/admin` رو باز کن.

## رمز ادمین (Secret)
رمز ادمین دیگه توی کد نیست. بعد از دیپلوی: Worker ← Settings ← Variables and Secrets ← Add ← نوع **Secret** با نام `ADMIN_PASSWORD`.
اگه این Secret ست نشه، پنل ادمین کلاً بسته میمونه (fail closed). بعد از تغییر رمز، یه بار دوباره لاگین کن.
