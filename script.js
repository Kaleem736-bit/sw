// تحقق من صحة نموذج الاتصال
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            let valid = true;

            // تحقق من أن الحقول ليست فارغة
            if (!name || !email || !message) {
                alert("يرجى ملء جميع الحقول.");
                valid = false;
            }
            // تحقق من صحة البريد الإلكتروني
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("يرجى إدخال بريد إلكتروني صحيح.");
                valid = false;
            }

            if (!valid) {
                event.preventDefault(); // منع الإرسال إذا كانت هناك أخطاء
            } else {
                alert("تم إرسال الرسالة بنجاح!");
            }
        });
    }

    // تفعيل زر الحجز
    const bookingForm = document.querySelector("form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function(event) {
            alert("تم حجز الاستشارة بنجاح!");
        });
    }
});
