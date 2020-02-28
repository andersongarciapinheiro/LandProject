let getDom = el => document.querySelector(el)

let bgs = ['setBg-a', 'setBg-b', 'setBg-c']
let index = 0
let qtdBg = bgs.length - 1
let carrosel = getDom(".carrosel-img1")
let rightButton = getDom(".right")
let leftButton = getDom(".left")








// rightButton.onclick = null


rightButton.onclick = () => {
  clickRight()
  
}

leftButton.onclick = () => {
  clickLeft()
}









//////////  FUNCTIONS !!

function clickRight() {
  carrosel.classList.remove(bgs[index])
  index = index === qtdBg ? 0 : index + 1
  carrosel.classList.add(bgs[index])
}

function clickLeft() {
  carrosel.classList.remove(bgs[index])
  index = index === 0 ? qtdBg : index - 1
  carrosel.classList.add(bgs[index])
}