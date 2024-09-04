document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.getElementById('nav-links');
  const burgerMenu = document.querySelector('.burger-menu');
  const themeToggle = document.getElementById('theme-toggle');

  function toggleMenu() {
    navLinks.classList.toggle('active');
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  burgerMenu.addEventListener('click', toggleMenu);
  themeToggle.addEventListener('click', toggleTheme);
});
