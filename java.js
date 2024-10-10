
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  const toggleMenu = document.createElement('div');
  toggleMenu.classList.add('menu-toggle');
  toggleMenu.innerHTML = '☰'; 


  document.querySelector('header').prepend(toggleMenu);


  toggleMenu.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
});
