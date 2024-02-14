window.addEventListener('scroll', function() {
  const menu = document.getElementById('menu');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    menu.classList.add('scrolled');
  } else {
    menu.classList.remove('scrolled');
  }
});
