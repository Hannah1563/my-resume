// Example: Responsive Navbar Toggle
const toggleButton = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
