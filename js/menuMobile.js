const iconMenu = document.querySelector('#nav-icon3');
const textMenu = document.querySelector('.links');

iconMenu.addEventListener('click', () => {  
  let positionMenu = document.defaultView.getComputedStyle(textMenu, null).right;

  if(positionMenu == "-180px"){
    textMenu.style.right = "0px"
    iconMenu.classList.add("open");

  }
   else {
    textMenu.style.right = "-180px"
    iconMenu.classList.remove("open");

  }
})