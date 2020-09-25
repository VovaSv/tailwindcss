const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const mediaQuery = window.matchMedia('(min-width: 768px)')

burger.addEventListener('click', () => menu.classList.toggle('hidden'));


// If you want to force close menu in large screen incase you forgot to close.
function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
  }

  mediaQuery.addListener(handleTabletChange)
  handleTabletChange(mediaQuery);
