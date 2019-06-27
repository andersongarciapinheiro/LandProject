let bgImg1Full = document.querySelector(".bgImg1Full");
let img1Full = document.querySelector(".img1Full");
let img1 = document.querySelector(".img1");


img1.onclick = function() {
  bgImg1Full.style.zIndex = "1"
}

bgImg1Full.onclick = function() {
  bgImg1Full.style.zIndex = "-1"
}