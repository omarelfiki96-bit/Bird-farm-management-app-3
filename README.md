# Bird Farm Manager V3

إصدار تطويري لإدارة مزرعة العصافير، يعمل كتطبيق ويب تقدمي (PWA) ويحفظ البيانات محليًا على الجهاز باستخدام localStorage.

## الأقسام
- لوحة تحكم وتقويم ومهام وأهداف.
- ملفات العصافير: رقم الدبلة، النوع، العمر الحقيقي أو التقديري، الحالة، المصدر، بيانات الشراء والبيع، النسب، الصور، والسجل الزمني.
- العائلة والنسب.
- الأزواج والأعشاش والبيض والزغاليل.
- مكتبة الأدوية والكورسات العلاجية وتمديدها وسجلها.
- تنبيهات داخل التطبيق وإشعارات المتصفح أثناء تشغيل التطبيق.
- الوجبات الجانبية وخلطات الحبوب والإضاءة.
- المبيعات والمصروفات.
- بحث وفرز وتصفية ومساعد محلي للاستعلامات والتقارير البسيطة.
- واجهة عربية وإنجليزية.

## التخزين والخصوصية
البيانات والصور تحفظ محليًا في المتصفح. لا توجد مزامنة سحابية في هذا الإصدار. يجب تنزيل نسخة احتياطية JSON بانتظام، خصوصًا قبل مسح بيانات المتصفح أو تغيير الهاتف. الصور يتم تصغيرها قبل التخزين، لكن مساحة localStorage محدودة.

## حدود مهمة
- إشعارات الهاتف تعتمد على إذن المتصفح، وتعمل عندما يكون التطبيق مفتوحًا أو نشطًا؛ لا يوجد دفع إشعارات موثوق أثناء إغلاق التطبيق بالكامل.
- مساعد المزرعة الحالي محلي قائم على قواعد واستعلامات للبيانات، وليس نموذج ذكاء اصطناعي توليديًا أو Agent متصلًا بخدمة خارجية. إضافة نموذج LLM حقيقي تحتاج مزودًا خارجيًا واتصالًا بالإنترنت وموافقة منفصلة على مشاركة البيانات.
- هذا البرنامج لا يوصي بجرعات طبية؛ سجّل الجرعات وفق تعليمات الطبيب البيطري أو ملصق المنتج.
- لا توجد مزامنة بين الأجهزة.

## النشر
ارفع محتويات هذا المجلد إلى جذر مستودع GitHub المتصل بـ Cloudflare Pages. إعدادات Cloudflare Pages للموقع الثابت: Build command فارغ، Build output directory `/` أو `.` حسب إعداد المشروع، وRoot directory `/`.

## V3.1 update notes
- Added a dedicated Supplements page, separate from the medicines list.
- Supplements can be classified by administration route: drinking water, food/mix, direct, or other.
- Supplement courses are listed separately and can be started from the Supplements page.
- Refined the shared blue visual styling across cards, section headers, buttons, fields, and calendar cells.
- Existing localStorage database key and existing records are preserved; older medicine records default to the medicine category.

Note: This is a frontend/local-data update. Browser-level end-to-end testing and mobile PWA notification behavior still require a real-device test.


## V3.2 updates
- Courses can target one bird, a selected group, or all birds currently marked as present. The target list is stored on the course so later-added birds are not added retroactively.
- Course start and extension events are written to each targeted bird's timeline. Existing single-bird courses remain readable through the legacy `birdId` field.
- Bird profiles include Arabic speech-to-text notes using the browser Speech Recognition API (`ar-EG`), with editable transcript saved to that bird's local timeline. Browser support and microphone permission are required; this feature saves the transcript, not a separate audio recording.
