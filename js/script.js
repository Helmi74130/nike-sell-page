/* 
* Open Modal FullScreen Shoes
*/
let modalImgFullscreen = document.querySelector('.modal-img-fullscreen');
let clickFullScreens = document.querySelectorAll('.click-fullscreen');
let imgFullScreen = document.querySelector('#imgFullScreen');

for (const clickFullScreen of clickFullScreens) {
    clickFullScreen.addEventListener('click', (e) => {
        modalImgFullscreen.classList.remove("none")
        imgFullScreen.src = e.target.src
    })
}
modalImgFullscreen.addEventListener("click", () => {
    modalImgFullscreen.classList.add("none")
})

/* 
 * Allows to increment a counter and to decrement when clicking on a button
 */
let qtyNumber = document.querySelector('#qtyNumber');
let btnLessQty = document.querySelector('#btnLessQty');
let btnMoreQty = document.querySelector('#btnMoreQty');
let qtyHeaderBasket = document.querySelector('#qtyHeaderBasket');
let addBasketButton = document.querySelector('#addBasket');
let modalOtherProduct = document.querySelector('.modal-other-product');
let closeModalBasket = document.querySelectorAll('.close-modal-basket');
let qtyBasket = document.querySelector('.qty-basket');

let count = 0;
qtyNumber.textContent = count;

btnMoreQty.addEventListener('click', () => {
    if (count >= 0 && count <= 9) {
        count++;
        qtyNumber.textContent = count;
    }
});
btnLessQty.addEventListener('click', () => {
    if (count >= 1) {
        count--;
        qtyNumber.textContent = count;
    }
});
addBasketButton.addEventListener('click', () => {
    qtyHeaderBasket.textContent = count;
    modalOtherProduct.classList.remove("none");
    modalOtherProduct.classList.remove("slide-exit");
    modalOtherProduct.classList.add("slide-entrance");
    if (count >= 1) {
        qtyBasket.style.background = "orange";
    } else {
        qtyBasket.style.background = "none";
    }

});

for (const close of closeModalBasket) {
    close.addEventListener('click', () => {
        modalOtherProduct.classList.add("slide-exit");
        modalOtherProduct.classList.remove("slide-entrance");
    });
};

/* 
 * This function allows to give an effect to the image as well as to the BG according to the position of the mouse
 */
let shoes = document.querySelector('#shoes');
let bgShoes = document.querySelector('#bgShoes');

function shoesParallax(e) {
    const speed = shoes.getAttribute('data-speed');

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) * 2;

    shoes.style.transform = `rotateX(${x}deg)`;
    shoes.style.transform = `rotateY(${x}deg)`;
    bgShoes.style.transform = `rotate(${y}deg)`;
};
shoes.addEventListener('mousemove', shoesParallax);

/* 
 * Allows you to modify the main image with an effect
 */
let shoesChoices = document.querySelectorAll('.shoes-color');

for (let i = 0; i < shoesChoices.length; i++) {
    const element = shoesChoices[i];

    element.addEventListener('click', (e) => {
        if (e.target.dataset.value !== shoes.getAttribute('src')) {
            shoes.classList.add('roll-entrance');
            shoes.classList.remove('roll-exit');
            changeImgSrc(e);
            setTimeout(() => {
                shoes.classList.add('roll-exit');
                shoes.src = e.target.dataset.value;
                shoes.classList.remove('roll-entrance');
                bgShoes.style.background = e.target.dataset.bg;
            }, 600);
        };
    });
};

/* 
 * This function allows you to switch the source images
 */
let imgDescriptions = document.querySelectorAll('.img-presentation');

const shoesOliveSrc = ["/img/nikeoilve.webp", "/img/nikeoliveback.webp", "/img/nikeolivetop.webp", "/img/nikeolivebottom.webp"];
const shoesBrownSrc = ["/img/nikebrun.webp", "/img/nikebruntwo.webp", "/img/nikebruntop.webp", "/img/nikebrunbottom.webp"];
const shoesGreySrc = ["/img/nikegrey.webp", "/img/nikegreyback.webp", "/img/nikegreytop.webp", "/img/nikegreybottom.webp"];
const shoesPastelSrc = ["/img/preview4.webp", "/img/preview1.webp", "/img/preview3.webp", "/img/preview2.webp", ];

function changeImgSrc(e) {
    switch (e.target.dataset.picture) {
        case '1':
            for (let i = 0; i < 4; i++) {
                imgDescriptions[i].src = shoesGreySrc[i];
            }
            break;
        case '2':
            for (let i = 0; i < 4; i++) {
                imgDescriptions[i].src = shoesOliveSrc[i];
            }
            break;
        case '3':
            for (let i = 0; i < 4; i++) {
                imgDescriptions[i].src = shoesBrownSrc[i];
            }
            break;
        case '4':
            for (let i = 0; i < 4; i++) {
                imgDescriptions[i].src = shoesPastelSrc[i];
            }
        default:
    };
};

/* 
 * RESPONSIVE CODE
 * This event listener allows to change the behavior according to the size of the screen
 */
let descriptionContent = document.querySelector('.description');
let btnHeader = document.querySelector('.responsive-button');
let headerNav = document.querySelector('.header-nav');

window.addEventListener('resize', function(e) {
    let screenSizes = e.target.innerWidth;

    if (screenSizes <= 1250) {
        headerNav.classList.add("none");
        btnHeader.classList.remove("none");
    } else {
        btnHeader.classList.add("none");
        headerNav.classList.remove("none");
        headerNav.classList.remove("scale-exit");
    };

    if (screenSizes <= 542) {
        descriptionContent.classList.remove('top');
        descriptionContent.classList.remove('fixed');
        descriptionContent.classList.add('absolute');
    } else {
        toggleFixedClass();
        observeImg();
        observeScroll();
    };
});

if (window.matchMedia("(max-width: 1250px)").matches) {
    headerNav.classList.add("none");
    btnHeader.classList.remove("none");
};

/* 
 * This function toggle the navbar in responsive mode
 */
function toggleNavHeader() {
    if (headerNav.classList.contains('scale-entrance')) {
        headerNav.classList.add("scale-exit");
        headerNav.classList.remove("scale-entrance");
    } else {
        headerNav.classList.remove("none");
        headerNav.classList.add("scale-entrance");
        headerNav.classList.remove("scale-exit");
    };
};
btnHeader.addEventListener('click', () => {
    toggleNavHeader();
});

/* 
 * These functions make the description sticky and change the behavior to responsive
 */

let images = document.querySelector('.images');
let lastImg = document.querySelector('#lastImg');

function toggleFixedClass() {
    window.addEventListener('scroll', () => {
        if (images.getBoundingClientRect().y < 0 && images.getBoundingClientRect().y < 100) {
            descriptionContent.classList.add('fixed');
        } else if (images.getBoundingClientRect().y > 0 && images.getBoundingClientRect().y > 100) {
            descriptionContent.classList.remove('fixed');
        };
    });
};

if (window.matchMedia("(min-width: 542px)").matches) {
    toggleFixedClass();
    observeImg();
    observeScroll();
};

function observeImg() {
    const observerLastImg = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            descriptionContent.classList.remove('top');
            descriptionContent.classList.remove('fixed');
            descriptionContent.classList.add('absolute');
        }
    }, {
        threshold: 0.99
    });

    observerLastImg.observe(lastImg);
};

function observeScroll() {
    window.addEventListener('scroll', () => {
        if (descriptionContent.getBoundingClientRect().y > 200 && descriptionContent.classList.contains('absolute')) {
            descriptionContent.classList.add('fixed');
            descriptionContent.classList.remove('absolute');
            descriptionContent.classList.add('top');
        };
    });
};


/* 
*Allows you to move the carousel
 */
let slider = document.querySelector('.more');

let starting;
let scrollLeft;
let mouse = false;

function catchSlider(e) {
  starting = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  mouse = true;
};
function releaseSlider() {
  mouse = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouse) { return; };
  let x = e.pageX - slider.offsetLeft;
  let scroll = x - starting;
  slider.scrollLeft = scrollLeft - scroll;
  
});

slider.addEventListener('mousedown', catchSlider, false);
slider.addEventListener('mouseup', releaseSlider, false);
slider.addEventListener('mouseleave', releaseSlider, false);


/* 
 * This function allows to shift the carousel by 1px on each call
 */

let speed = 1;

function loopTime(){
  let sizeForScroll = slider.scrollLeft + slider.offsetWidth
  if ( sizeForScroll < slider.scrollWidth) {
    setTimeout(() => {
      slider.scrollLeft += speed;
      loopTime() 
    }, "50");
  }else{
    setTimeout(()=>{
      slider.scrollLeft = 0;
    loopTime();
    }, '5000');
    
  };
};

loopTime();

/* 
 * These 2 functions open or close the comments modal
 */

let opinion = document.querySelector('#opinion');
let modalComments = document.querySelector('.modal-comments');
let buttonCloseModalComments = document.querySelector('#buttonCloseModalcomments');
let shoesDescriptionContents = document.querySelector('.shoes-description-content');


opinion.addEventListener('click', () => {
    openModalComments();
});

buttonCloseModalComments.addEventListener('click', () => {
    closeModalComments();
});

function closeModalComments() {
    modalComments.classList.add("rotate-exit");
    setTimeout(() => {
        modalComments.classList.add('none');
        shoesDescriptionContents.classList.remove("none");
        modalComments.classList.remove("rotate-exit");
        modalComments.classList.remove("swing-entrance");
        shoesDescriptionContents.classList.add("swing-entrance");
    }, "700");
};

function openModalComments() {
    shoesDescriptionContents.classList.add("rotate-exit");
    setTimeout(() => {
        modalComments.classList.remove("none");
        shoesDescriptionContents.classList.add('none');
        modalComments.classList.add("swing-entrance");
        shoesDescriptionContents.classList.remove("rotate-exit");
        shoesDescriptionContents.classList.remove("swing-entrance");
    }, "700");
};


/* 
 * These 2 functions open or close the shipment modal
 */

let shipment = document.querySelector('#shipment');
let modalShipment = document.querySelector('.modal-shipment');
let buttonCloseModalshipment = document.querySelector('#buttonCloseModalshipment');
let shoesDescriptionContent = document.querySelector('.shoes-description-content');

shipment.addEventListener('click', () => {
    openModal();
});

buttonCloseModalshipment.addEventListener('click', () => {
    closeModal();
});

function closeModal() {
    modalShipment.classList.add("rotate-exit");
    setTimeout(() => {
        modalShipment.classList.add('none');
        shoesDescriptionContent.classList.remove("none");
        modalShipment.classList.remove("rotate-exit");
        modalShipment.classList.remove("swing-entrance");
        shoesDescriptionContent.classList.add("swing-entrance");
    }, "700");
};

function openModal() {
    shoesDescriptionContent.classList.add("rotate-exit");
    setTimeout(() => {
        modalShipment.classList.remove("none");
        shoesDescriptionContent.classList.add('none');
        modalShipment.classList.add("swing-entrance");
        shoesDescriptionContent.classList.remove("rotate-exit");
        shoesDescriptionContent.classList.remove("swing-entrance");
    }, "700");
};


/* 
 * These 2 functions open or close the sizes modal
 */

let sizes = document.querySelector('.sizes');
let modalSize = document.querySelector('.modal-size');
let buttonCloseModalSize = document.querySelector('#buttonCloseModalSize');
let modalSizeSelect = document.querySelectorAll('.button-size');
let textSizeUserSelect = document.querySelector('#textSizeUserSelect');
let modal = document.querySelector('.modal');
let body = document.querySelector('body');


sizes.addEventListener('click', () => {
    modal.classList.remove("none");
    modalSize.classList.add("right-entrance");
    modalSize.classList.remove("right-exit");
});

buttonCloseModalSize.addEventListener('click', () => {
    closeSizeModal();
});

modalSizeSelect.forEach(function(button) {
    button.addEventListener('click', (event) => {
        let userSizeSelect = event.target.textContent;
        textSizeUserSelect.textContent = userSizeSelect;
        closeSizeModal();
    });
});

function closeSizeModal() {
    modalSize.classList.remove("right-slide");
    modalSize.classList.add("right-exit");
    setTimeout(() => {
        modal.classList.add("none");
    }, "600");
};

function outsideClick(e) {
    if (e.target === modal) {
        closeSizeModal();
    };
};

window.addEventListener('click', outsideClick);