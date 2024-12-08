const hamburger = document.getElementById('hamburger')
const darkMode = document.getElementById('dark-mode')
const navMenu = document.getElementById('nav-menu')
const closeIcon = document.getElementById('nav-close')
const navLink = document.querySelectorAll(".nav__link")

navLink.forEach(link =>
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden')
    hamburger.classList.remove('hidden')
    darkMode.classList.remove('hidden')
  })
)

hamburger.addEventListener('click', () => {
  navMenu.classList.remove('hidden')
  hamburger.classList.add('hidden')
  darkMode.classList.add('hidden')

})

closeIcon.addEventListener('click', () => {
  navMenu.classList.add('hidden')
  hamburger.classList.remove('hidden')
  darkMode.classList.remove('hidden')
})