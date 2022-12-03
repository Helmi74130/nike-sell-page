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
    modalShipment.classList.add("rotate-out");
    setTimeout(() => {
        modalShipment.classList.add('none');
        shoesDescriptionContent.classList.remove("none");
        modalShipment.classList.remove("rotate-out");
        modalShipment.classList.remove("swing-in-top-fwd");
        shoesDescriptionContent.classList.add("swing-in-top-fwd");
    }, "700");
};

function openModal() {
    shoesDescriptionContent.classList.add("rotate-out");
    setTimeout(() => {
        modalShipment.classList.remove("none");
        shoesDescriptionContent.classList.add('none');
        modalShipment.classList.add("swing-in-top-fwd");
        shoesDescriptionContent.classList.remove("rotate-out");
        shoesDescriptionContent.classList.remove("swing-in-top-fwd");
    }, "700");
};