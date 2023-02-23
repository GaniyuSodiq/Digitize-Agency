const harmburgerButton = document.getElementsByClassName('harmburger')[0]
const navigationUl = document.getElementsByClassName('navigation-ul')[0]

harmburgerButton.addEventListener('click', () => {navigationUl.classList.toggle('active')})