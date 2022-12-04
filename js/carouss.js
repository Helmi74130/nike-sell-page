let imgCarousel = document.querySelector('.img-carousel');

//const shoesOliveSrc = ["/img/nikeoilve.webp", "/img/nikeoliveback.webp", "/img/nikeolivetop.webp", "/img/nikeolivebottom.webp"];

/* let counter = -1
function loopTime(){
  
  setTimeout(() => {
    counter++

    if (counter <= 3) {
      imgCarousel.src = shoesOliveSrc[counter]
      piou()
    }else{
      counter = 0
      loopTime()
      imgCarousel.src = shoesOliveSrc[0]
    }
    console.log(counter);
  }, "500")
}

function piou(){
  setTimeout(() => {
    
    loopTime()
  }, "2000")
  
}

loopTime() */


let slider = document.querySelector('.more');
let mouseDown = false;
let startX;
let scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log(scrollLeft);
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  let x = e.pageX - slider.offsetLeft;
  let scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
  
});

slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);

