// Mobile nav toggle — replaces the nicepage.js hamburger menu behavior
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });

  // Close the menu after a link is tapped (mobile)
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
    });
  });
});

// Updates carousel — manual navigation only, nothing auto-advances
document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector('.updates-carousel');
  if (!carousel) return;

  var slides = carousel.querySelectorAll('.updates-slide');
  var prevBtn = carousel.querySelector('.carousel-arrow.prev');
  var nextBtn = carousel.querySelector('.carousel-arrow.next');
  var current = 0;

  function showSlide(index) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle('active', i === index);
    });
    current = index;
  }

  prevBtn.addEventListener('click', function () {
    showSlide((current - 1 + slides.length) % slides.length);
  });

  nextBtn.addEventListener('click', function () {
    showSlide((current + 1) % slides.length);
  });
});
