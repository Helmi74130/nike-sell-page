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

shoes.addEventListener('mousemove', shoesParallax)

function shoesParallax(e) {
  const speed = shoes.getAttribute('data-speed')

  const x = (window.innerWidth - e.pageX*speed)/100
  const y = (window.innerHeight - e.pageY*speed)

  shoes.style.transform = `rotateX(${x}deg)`
  shoes.style.transform = `rotateY(${x}deg)`
  bgShoes.style.transform = `rotate(${y}deg)`
}

window.addEventListener('scroll', ()=>{
  //console.log(images.getBoundingClientRect().y);
  if (images.getBoundingClientRect().y < 0 && images.getBoundingClientRect().y < 100) {
    descriptionContent.classList.add('fixed')
  }else if (images.getBoundingClientRect().y > 0 && images.getBoundingClientRect().y > 100){
    descriptionContent.classList.remove('fixed')
  }
})



const observerLastImg = new IntersectionObserver((entries)=>{
  if(entries[0].isIntersecting ){
    descriptionContent.classList.remove('top')
    descriptionContent.classList.remove('fixed')
    descriptionContent.classList.add('absolute')
    console.log('vu');
  }
}, {threshold: 0.99});

observerLastImg.observe(lastImg)



window.addEventListener('scroll', ()=>{
  //console.log(descriptionContent.getBoundingClientRect().y);
  if (descriptionContent.getBoundingClientRect().y > 200 && descriptionContent.classList.contains('absolute')) {
    descriptionContent.classList.add('fixed')
    descriptionContent.classList.remove('absolute')
    descriptionContent.classList.add('top')
  }
})




/* const observerDescr = new IntersectionObserver((entries)=>{
  if(entries[0].isIntersecting){
    descriptionContent.classList.add('fixed')
  }
}, {threshold: 0.33});

const observerImage = new IntersectionObserver((entries)=>{
  if(!entries[0].isIntersecting){
    descriptionContent.classList.remove('fixed')
    //descriptionContent.classList.add('absolute')
  }
}, {threshold: 0.33});



observerImage.observe(images)

observerDescr.observe(descriptionContent)
 */
