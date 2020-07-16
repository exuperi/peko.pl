const navItems = document.querySelectorAll('.hamburger__navigation-element');
const selectInput = document.getElementById('hamburger');

navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    selectInput.checked = false;
  })
})