const openMenu = document.querySelector('.openmenu')
const closeMenu = document.querySelector('.closemenu')
const mainMenu = document.querySelector('.mainmenu')
openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)
function show () {
  mainMenu.style.display = 'flex'
}
function close () {
  mainMenu.style.display = 'none'
}
