let shipment = document.querySelector('#shipment');
let modalShipment = document.querySelector('.modal-shipment');
let buttonCloseModalshipment = document.querySelector('#buttonCloseModalshipment');
let shoesDescriptionContent = document.querySelector('.shoes-description-content');

/* 
 * These 2 functions open or close the shipment modal
 */

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