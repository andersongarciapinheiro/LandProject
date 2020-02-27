let getDom = el => {
  let elemento = document.querySelector(el)
  return elemento
}

let bgs = ['setBg-a', 'setBg-b', 'setBg-c']

getDom(".right").onclick = () => {
  getDom(".carrosel-img1").classList.add(bgs[1])
}

getDom(".left").onclick = () => {
  getDom(".carrosel-img1").classList.add(bgs[0])
}


// function bgRight() {

// }




console.log(bgs.map)