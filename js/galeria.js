let blocoHome = document.querySelector("#home")
let blocoGallery = document.querySelector("#galeria")
let blocoProjeto = document.querySelector("#projeto")
let blocoSobre = document.querySelector("#sobre")
let blocoCalculadora = document.querySelector("#calculadora")
let blocoContato = document.querySelector("#contato")
let gallery = document.querySelectorAll(".imgGallery")
let bgImg1Full = document.querySelector(".bgImg1Full")
let img1Full = document.querySelector(".img1Full")
let img1 = document.querySelector(".img1")


//function to open and close imgs!
img1.onclick = function() {
  bgImg1Full.style.zIndex = "1"
}

bgImg1Full.onclick = function(e) {
  if(e.target == img1Full) {
    bgImg1Full.style.zIndex = "1"
  } else {
    bgImg1Full.style.zIndex = "-1"
  }
}
// function to animate gallery on scolling
function animeScroll() {
  
  let windowTop = window.pageYOffset;
  let isProjectLowerThanWindow = windowTop > blocoProjeto.offsetTop
  let isProjectGreatedThanWindow = windowTop < blocoProjeto.offsetTop
  let isHomeLowerThanWindow = windowTop > blocoHome.offsetTop 
  let isGalleryGreatedThanWindow = windowTop < blocoGallery.offsetTop
  let isGalleryLowerThanWindow = windowTop > blocoGallery.offsetTop

    if((isHomeLowerThanWindow && isGalleryGreatedThanWindow) || isProjectLowerThanWindow) {
        gallery.forEach(e => e.classList.remove("Slacken_left_Ricochet"))
    }
    else if( isGalleryLowerThanWindow && isProjectGreatedThanWindow) {
        gallery.forEach(e => e.classList.add("Slacken_left_Ricochet"))
    }
}

window.addEventListener('scroll', function() {
  animeScroll();
})
