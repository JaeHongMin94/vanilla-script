const navbar = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navbar.addEventListener('click', function () {
  links.classList.toggle('show-links');
});
