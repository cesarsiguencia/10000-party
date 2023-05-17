var modalLoginNav = document.querySelector('#modal-login')
var modalLogoutNav = document.querySelector('#logout-button')
var modal = document.querySelector('.modal')

var logoutModal = document.querySelector('#logout-modal')

var closeModalButton = document.querySelector('#modal-close')


function loadModal(){
    console.log('WORKING!!')
    modal.style.height = "100vh"
}

function removeModal(){
    console.log('ME TOOOO')
    modal.style.height = "0px"
}



modalLoginNav.addEventListener("click",loadModal)
modalLogoutNav.addEventListener("click",loadModal)
closeModalButton.addEventListener("click", removeModal)