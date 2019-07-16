// let home = document.querySelector(".home")
// let galeria = document.querySelector(".galeria")
// let projeto = document.querySelector(".projeto")
// let sobre = document.querySelector(".sobre")
// let calculadora = document.querySelector(".calculadora")
// let contato = document.querySelector(".contato")
// let windowHeight = 947


// home.addEventListener('click', () => {
//   window.scroll(0, 0)
// })
// galeria.addEventListener('click', () => {
//    window.scroll(0, windowHeight)
// })
// projeto.addEventListener('click', () => {
//   window.scroll(0, windowHeight * 2)
// })
// sobre.addEventListener('click', () => {
//   window.scroll(0, windowHeight * 3)
// })
// calculadora.addEventListener('click', () => {
//   window.scroll(0, windowHeight * 4)
// })
// contato.addEventListener('click', () => {
//   window.scroll(0, windowHeight * 5)
// })

let sections = document.querySelectorAll('nav a');

sections.forEach(i => {
  i.addEventListener('click', scrollToIdOnClick)
})


function scrollToIdOnClick(event) {
  event.preventDefault()
  const to = getScrollToByHref(event.target)
  scrollToPosition(to)  
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // })
  smoothScrollTo(0, to)
}

function getScrollToByHref(element) {
  const id = element.getAttribute('href')
  return document.querySelector(id).offsetTop;
}




// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
  * @param {int} duration: animation duration in ms
  */
 function smoothScrollTo(endX, endY, duration) {
   const startX = window.scrollX || window.pageXOffset;
   const startY = window.scrollY || window.pageYOffset;
   const distanceX = endX - startX;
   const distanceY = endY - startY;
   const startTime = new Date().getTime();
 
   duration = typeof duration !== 'undefined' ? duration : 400;
 
   // Easing function
   const easeInOutQuart = (time, from, distance, duration) => {
     if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
     return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
   };
 
   const timer = setInterval(() => {
     const time = new Date().getTime() - startTime;
     
     const newX = easeInOutQuart(time, startX, distanceX, duration);
     const newY = easeInOutQuart(time, startY, distanceY, duration);
     if (time >= duration) {
       clearInterval(timer);
     }
     window.scroll(newX, newY);
   }, 1000 / 60); // 60 fps
 };

