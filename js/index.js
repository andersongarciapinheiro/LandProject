let getDom = el => document.querySelector(el)

let bgs = ['setBg-a', 'setBg-b', 'setBg-c']
let index = 0
let qtdBg = bgs.length - 1
let carrosel = getDom(".carrosel-img1")
let rightButton = getDom(".right")
let leftButton = getDom(".left")



rightButton.onclick = rightClick

function rightClick() {
  clickRight()
  clickDisable()
  carrosel.addEventListener("transitionend", clickEnable)
}

function leftClick() {
  clickLeft()
  clickDisable()
  carrosel.addEventListener("transitionend", clickEnable)
}

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

function clickDisable() {
  rightButton.onclick = null
  leftButton.onclick = null
}

function clickEnable() {
  rightButton.onclick = rightClick
  leftButton.onclick = leftClick
}