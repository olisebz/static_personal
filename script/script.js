document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.getElementById('nav-links');
  const burgerMenu = document.querySelector('.burger-menu');

  function toggleMenu() {
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  }

  burgerMenu.addEventListener('click', toggleMenu);
});
