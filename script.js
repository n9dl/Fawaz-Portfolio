const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');
const hamburgerIcon = document.querySelector('.hamburger i');

// فتح وإغلاق القائمة عند الضغط على الهامبرغر
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // تغيير أيقونة الهامبرغر إلى X والعكس
    if(nav.classList.contains('active')){
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-xmark');
    } else {
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
    }
});

// إغلاق القائمة تلقائياً عند الضغط على أي رابط منها
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
    });
});

// سحب البيانات من لوحة التحكم وعرضها في الموقع
fetch('data/home.json')
  .then(response => response.json())
  .then(data => {
    document.querySelectorAll('[data-cms-bind]').forEach(el => {
      const key = el.getAttribute('data-cms-bind');
      if (data[key]) {
        // إذا كان العنصر صورة
        if (el.tagName === 'IMG') {
          el.src = data[key];
        } 
        // إذا كان العنصر رابط تواصل (يغير الرابط مو الأيقونة)
        else if (key.includes('link')) {
          el.href = data[key];
        } 
        // للنصوص العادية
        else {
          el.innerHTML = data[key];
        }
      }
    });
  })
  .catch(err => console.log('الموقع يعرض النسخة الأساسية (لا توجد تعديلات بعد)'));
