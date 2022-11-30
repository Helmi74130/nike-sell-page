let qtyNumber = document.querySelector('#qtyNumber');
let btnLessQty = document.querySelector('#btnLessQty');
let btnMoreQty = document.querySelector('#btnMoreQty');
let qtyHeaderBasket = document.querySelector('#qtyHeaderBasket');
let addBasketButton = document.querySelector('#addBasket');
let shoes = document.querySelector('#shoes');
let bgShoes = document.querySelector('#bgShoes');
let descriptionContent = document.querySelector('.description');
let footer = document.querySelector('#footer');
let images = document.querySelector('.images');
let lastImg = document.querySelector('#lastImg');
let btnHeader = document.querySelector('.responsive-button');
let headerNav = document.querySelector('.header-nav');

/* 
* Allows to increment a counter and to decrement when clicking on a button
*/

let count = 0;
qtyNumber.textContent = count

btnMoreQty.addEventListener('click', ()=>{
  if( count >= 0 && count <=9){
    count++
    qtyNumber.textContent = count
  } 
})
btnLessQty.addEventListener('click', ()=>{
  if( count >= 1){
    count--
    qtyNumber.textContent = count
  }
})
addBasketButton.addEventListener('click', ()=>{
  qtyHeaderBasket.textContent = count
})

/* 
* This function allows to give an effect to the image as well as to the BG according to the position of the mouse
*/
function shoesParallax(e) {
  const speed = shoes.getAttribute('data-speed')

  const x = (window.innerWidth - e.pageX*speed)/100
  const y = (window.innerHeight - e.pageY*speed)*2

  shoes.style.transform = `rotateX(${x}deg)`
  shoes.style.transform = `rotateY(${x}deg)`
  bgShoes.style.transform = `rotate(${y}deg)`
}
shoes.addEventListener('mousemove', shoesParallax)


/* 
* RESPONSIVE FUNCTIONS
*/


/* 
* This event listener allows to change the behavior according to the size of the screen
*/
window.addEventListener('resize', function(e){
  let screenSizes = e.target.innerWidth

  if(screenSizes <= 1250){
    headerNav.classList.add("none")
    btnHeader.classList.remove("none")
  }else{
    btnHeader.classList.add("none")
    headerNav.classList.remove("none")
    headerNav.classList.remove("scale-out-ver-top")
  }

  if(screenSizes <= 542){ 
    descriptionContent.classList.remove('top')
    descriptionContent.classList.remove('fixed')
    descriptionContent.classList.add('absolute')
  }else{
    toggleFixedClass()
    observeImg()
    observeScroll()
  }
});

if (window.matchMedia("(max-width: 1250px)").matches) {
  headerNav.classList.add("none")
  btnHeader.classList.remove("none")
}


/* 
* This function toggle the navbar in responsive mode
*/
function toggleNavHeader(){
  if(headerNav.classList.contains('scale-in-ver-top')){
    headerNav.classList.add("scale-out-ver-top")
    headerNav.classList.remove("scale-in-ver-top")
  }else{
    headerNav.classList.remove("none")
    headerNav.classList.add("scale-in-ver-top")
    headerNav.classList.remove("scale-out-ver-top")
  }
}
btnHeader.addEventListener('click', ()=>{
  toggleNavHeader()
})

/* 
* These functions make the description sticky and change the behavior to responsive
*/

function toggleFixedClass(){
  window.addEventListener('scroll', ()=>{
    if (images.getBoundingClientRect().y < 0 && images.getBoundingClientRect().y < 100) {
      descriptionContent.classList.add('fixed')
    }else if (images.getBoundingClientRect().y > 0 && images.getBoundingClientRect().y > 100){
      descriptionContent.classList.remove('fixed')
    }
  })
}

if (window.matchMedia("(min-width: 542px)").matches) {
  toggleFixedClass()
  observeImg()
  observeScroll()
}

function observeImg(){
  const observerLastImg = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting ){
      descriptionContent.classList.remove('top')
      descriptionContent.classList.remove('fixed')
      descriptionContent.classList.add('absolute')
    }
  }, {threshold: 0.99});
  
  observerLastImg.observe(lastImg)
}

function observeScroll(){
  window.addEventListener('scroll', ()=>{
    if (descriptionContent.getBoundingClientRect().y > 200 && descriptionContent.classList.contains('absolute')) {
      descriptionContent.classList.add('fixed')
      descriptionContent.classList.remove('absolute')
      descriptionContent.classList.add('top')
    }
  })
}