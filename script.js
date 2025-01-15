// script.js

// وظيفة للتحقق من صحة نموذج الحجز
function validateBookingForm(event) {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    // التحقق من أن جميع الحقول مليئة
    if (name === '' || email === '' || date === '') {
        alert('يرجى ملء جميع الحقول.');
        return;
    }

    // التحقق من تنسيق البريد الإلكتروني
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('يرجى إدخال بريد إلكتروني صالح.');
        return;
    }

    // عرض رسالة تأكيد بعد الحجز
    alert(`تم الحجز بنجاح!\nالاسم: ${name}\nالبريد الإلكتروني: ${email}\nتاريخ الاستشارة: ${date}`);
}

// إضافة حدث التحميل للنموذج
document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.querySelector('form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', validateBookingForm);
    }
});
