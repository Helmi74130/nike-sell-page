let shipment = document.querySelector('.shipment')
let modalShipment = document.querySelector('.modal-shipment')
let buttonCloseModalshipment = document.querySelector('#buttonCloseModalshipment')
let shoesDescriptionContent = document.querySelector('.shoes-description-content')

shipment.addEventListener('click', ()=>{
  openModal()
})

buttonCloseModalshipment.addEventListener('click', ()=>{
  closeModal()
})

function closeModal(){
  modalShipment.classList.add("swing-out-top-bck");
    setTimeout(() => {
      modalShipment.classList.add('none')
      shoesDescriptionContent.classList.remove("none");
      modalShipment.classList.remove("swing-out-top-bck");
      modalShipment.classList.remove("swing-in-top-fwd");
      shoesDescriptionContent.classList.add("swing-in-top-fwd");
    }, "700")
}

function openModal(){
  shoesDescriptionContent.classList.add("swing-out-top-bck");
    setTimeout(() => {
      modalShipment.classList.remove("none");
      shoesDescriptionContent.classList.add('none')
      modalShipment.classList.add("swing-in-top-fwd");
      shoesDescriptionContent.classList.remove("swing-out-top-bck");
      shoesDescriptionContent.classList.remove("swing-in-top-fwd");
    }, "700")
}