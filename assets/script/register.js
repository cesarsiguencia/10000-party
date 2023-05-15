var modalSelected = document.querySelector('#modal')
var loginModal = document.querySelector('#login-modal')
var closeModalButton = document.querySelector('#modal-close')


function loadModal(){
    loginModal.style.height = "100vh"
}

function removeModal(){
    loginModal.style.height = "0px"
}

modalSelected.addEventListener("click",loadModal)
closeModalButton.addEventListener("click", removeModal)