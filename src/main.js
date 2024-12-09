const hamburger = document.getElementById('hamburger')
const darkModeBtn = document.getElementById('dark-mode-btn')
const lightModeBtn = document.getElementById('light-mode-btn')
const navMenu = document.getElementById('nav-menu')
const closeIcon = document.getElementById('nav-close')
const navLink = document.querySelectorAll(".nav__link")

navLink.forEach(link =>
  link.addEventListener('click', () => {
    navMenu.classList.add('hidden')
    hamburger.classList.remove('hidden')
    closeIcon.classList.add('hidden')
    // darkMode.classList.remove('hidden')
  })
)

// hamburger.addEventListener('click', () => {
//   setTimeout(() => {
//     navMenu.classList.remove('hidden')
//     hamburger.classList.add('hidden')
//     hamburger.classList.remove('left-full')
//     hamburger.classList.add('left-0')
//     closeIcon.classList.remove('hidden')
//     navMenu.classList.add('translate-y-[108px]')
//     navMenu.classList.add('ease-in 4.8s')
//     hamburger.style.transition = "all .5s"
//     closeIcon.style.transition = "all .5s"
//     navMenu.style.transition = "all 6.5s"
//     // darkMode.classList.add('hidden')
//   }, 150)

// })

// closeIcon.addEventListener('click', () => {
//   setTimeout(() => {
//     navMenu.classList.add('hidden')
//     hamburger.classList.remove('hidden')
//     hamburger.classList.add('left-full')
//     hamburger.classList.remove('left-0')
//     closeIcon.classList.add('hidden')
//     navMenu.classList.remove('translate-y-[108px]')
//     navMenu.classList.add('ease-in 4.8s')
//     hamburger.style.transition = "all .5s"
//     closeIcon.style.transition = "all .5s"
//     navMenu.style.transition = "all 6.5s"
//     // darkMode.classList.remove('hidden')
//   }, 150)
// })

// function darkMode(){
//   darkModeBtn.classList.add('hidden')
//   lightModeBtn.classList.remove('hidden')
// }
// function lightMode(){
//   darkModeBtn.classList.remove('hidden')
//   lightModeBtn.classList.add('hidden')
// }

// darkModeBtn.addEventListener('click', lightMode())
// lightModeBtn.addEventListener('click', darkMode())


function Menu(e) {
  e.name === 'menu' ? (e.name = "close", navMenu.classList.add('top-[58px]'), navMenu.classList.add('opacity-100')) : (e.name = "menu", navMenu.classList.remove('top-[60px]'), navMenu.classList.remove('opacity-100'))
}