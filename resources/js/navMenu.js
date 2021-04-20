window.addEventListener('load', () => {
  const navMenu = document.getElementById('nav__menu');
  document.addEventListener('click', (e) => !navMenu.contains(e.target) &&
    toggleNavMenu(e, false));
});

window.toggleNavMenu = (e, state = null) => {
  e.stopPropagation()

  state = state === null ? !window.isNavMenuOpen : state
  window.isNavMenuOpen = state

  const iconX = document.getElementById('icon--x')
  const iconHamburger = document.getElementById('icon--hamburger')
  const navMenuFloatingPanel = document.getElementById('nav__menu--floating-panel')
  const navMenuResponsivePanel = document.getElementById('nav__menu--responsive')

  const swapClasses = (elem, class1, class2) => {
    elem.classList.remove(class1)
    elem.classList.add(class2)
  }

  if (window.isNavMenuOpen) {
    swapClasses(iconX, 'hidden', 'inline-flex')
    swapClasses(iconHamburger, 'inline-flex', 'hidden')
    swapClasses(navMenuFloatingPanel, 'hidden', 'inline-block')
    swapClasses(navMenuResponsivePanel, 'hidden', 'block')
  } else {
    swapClasses(iconX, 'inline-flex', 'hidden')
    swapClasses(iconHamburger, 'hidden', 'inline-flex')
    swapClasses(navMenuFloatingPanel, 'inline-block', 'hidden')
    swapClasses(navMenuResponsivePanel, 'block', 'hidden')
  }
}
