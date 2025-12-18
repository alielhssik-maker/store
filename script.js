// عناصر النموذج
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

// عند الإرسال
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    message: messageInput.value
  };

  localStorage.setItem("contactMessage", JSON.stringify(data));
  alert("✅ تم حفظ الرسالة بنجاح");

  showSavedMessage();
  form.reset();
});

// عرض الرسالة المحفوظة
function showSavedMessage() {
  const saved = localStorage.getItem("contactMessage");
  if (!saved) return;

  const data = JSON.parse(saved);

  document.getElementById("savedMessage").style.display = "block";
  document.getElementById("showName").textContent = data.name;
  document.getElementById("showEmail").textContent = data.email;
  document.getElementById("showPhone").textContent = data.phone || "-";
  document.getElementById("showMessage").textContent = data.message;
}

// حذف الرسالة
function deleteMessage() {
  if (confirm("هل أنت متأكد من حذف الرسالة؟")) {
    localStorage.removeItem("contactMessage");
    document.getElementById("savedMessage").style.display = "none";
  }
}

// عرض الرسالة تلقائياً عند فتح الصفحة
showSavedMessage();
