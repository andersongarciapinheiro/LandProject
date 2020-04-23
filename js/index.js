let getDom = el => document.querySelector(el)

let bgs = ['setBg-a', 'setBg-b', 'setBg-c']
let index = 0
let qtdBg = bgs.length - 1
let carrosel = getDom(".carrosel-img1")
let rightButton = getDom(".right")
let leftButton = getDom(".left")
let line = document.querySelectorAll(".menu-line")
let bannerText = document.querySelectorAll(".banner-text")

let logoBanner = document.querySelectorAll(".logoBanner")
let pTitle = document.querySelectorAll(".p-title")
let pText = document.querySelectorAll(".p-text")
let bt = document.querySelectorAll(".bt")




rightButton.onclick = rightClick
leftButton.onclick = leftClick

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
  classRemove(logoBanner[index],"resetLeft")
  classRemove(pTitle[index],"resetLeft")
  classRemove(pText[index],"resetLeft")
  classRemove(bt[index],"resetLeft")
  classRemove(bannerText[index],"show-display")
  classRemove (line[index], "line-selected")
  classRemove(carrosel,bgs[index])
  index = index === qtdBg ? 0 : index + 1
  classAdd(carrosel, bgs[index])^
  classAdd(line[index], "line-selected")
  classAdd(bannerText[index], "show-display")
  classAdd(logoBanner[index],"resetLeft")
  classAdd(pTitle[index],"resetLeft")
  classAdd(pText[index],"resetLeft")
  classAdd(bt[index],"resetLeft")
}

function clickLeft() {
  classRemove(bannerText[index],"show-display")
  classRemove (line[index], "line-selected")
  classRemove(carrosel,bgs[index])
  index = index === 0 ? qtdBg : index - 1
  classAdd(carrosel, bgs[index])^
  classAdd(line[index], "line-selected")
  classAdd(bannerText[index], "show-display")
}

function clickDisable() {
  rightButton.onclick = null
  leftButton.onclick = null
}

function clickEnable() {
  rightButton.onclick = rightClick
  leftButton.onclick = leftClick
}


function classAdd(el, elClass) {
  el.classList.add(elClass)
}


function classRemove(el, elClass) {
  el.classList.remove(elClass)
}
