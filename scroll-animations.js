/* ========================= */
/* scroll-animations.js      */
/* جذور الثقافية             */
/* ========================= */

document.addEventListener('DOMContentLoaded', function () {

  /* --- تطبيق كلاسات الحركة على العناصر --- */

  // العناوين والوصف في كل الأقسام
  document.querySelectorAll('.section-title, .section-subtitle').forEach(function (el) {
    el.classList.add('fade-up');
  });

  // كاردات الخدمات — تأخير متدرج
  document.querySelectorAll('.service-card').forEach(function (el, i) {
    el.classList.add('fade-up', 'delay-' + ((i % 6) + 1));
  });

  // كاردات التخصص — تأخير متدرج
  document.querySelectorAll('.specialty-card').forEach(function (el, i) {
    el.classList.add('fade-up', 'delay-' + (i + 1));
  });

  // كاردات المبادرات — تأخير متدرج
  document.querySelectorAll('.initiative-card').forEach(function (el, i) {
    el.classList.add('fade-up', 'delay-' + (i + 1));
  });

  // كاردات الرقمي — تأخير متدرج
  document.querySelectorAll('.digital-card').forEach(function (el, i) {
    el.classList.add('fade-up', 'delay-' + (i + 1));
  });

  // خطوات الشراكة — تأخير متدرج
  document.querySelectorAll('.step').forEach(function (el, i) {
    el.classList.add('fade-up', 'delay-' + (i + 1));
  });

  // كاردات الفريق — تأخير متدرج
  document.querySelectorAll('.team-card').forEach(function (el, i) {
    el.classList.add('fade-up', 'delay-' + (i + 1));
  });

  // قسم "من نحن" — الصورة من اليمين، النص من اليسار
  var aboutImage   = document.querySelector('.about-image');
  var aboutContent = document.querySelector('.about-content');
  if (aboutImage)   aboutImage.classList.add('fade-left');
  if (aboutContent) aboutContent.classList.add('fade-right');

  /* --- Intersection Observer --- */

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(function (el) {
    observer.observe(el);
  });

});
