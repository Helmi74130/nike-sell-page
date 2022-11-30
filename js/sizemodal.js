let sizes = document.querySelector('.sizes');
let modalSize = document.querySelector('.modal-size');
let buttonCloseModalSize = document.querySelector('#buttonCloseModalSize');
let modalSizeSelect = document.querySelectorAll('.button-size');
let textSizeUserSelect = document.querySelector('#textSizeUserSelect');
let modal = document.querySelector('.modal');
let body = document.querySelector('body');

/* 
 * These 2 functions open or close the sizes modal
 */
sizes.addEventListener('click', () => {
    modal.classList.remove("none");
    modalSize.classList.add("slide-in-right");
    modalSize.classList.remove("slide-out-right");
})

buttonCloseModalSize.addEventListener('click', () => {
    closeSizeModal()
})

modalSizeSelect.forEach(function(button) {
    button.addEventListener('click', (event) => {
        let userSizeSelect = event.target.textContent
        textSizeUserSelect.textContent = userSizeSelect
        closeSizeModal()
    });
});


function closeSizeModal() {
    modalSize.classList.remove("slide-in-right");
    modalSize.classList.add("slide-out-right");
    setTimeout(() => {
        modal.classList.add("none");
    }, "600")
}

function outsideClick(e) {
    if (e.target === modal) {
        closeSizeModal()
    }
}

window.addEventListener('click', outsideClick);