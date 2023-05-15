var modalSelected = document.querySelector('#modal')
var loginModal = document.querySelector('#login-modal')
var closeModalButton = document.querySelector('#modal-close')
var signUpForm = document.querySelector('#form-registration')

function loadModal(){
    loginModal.style.height = "100vh"
}

function removeModal(){
    loginModal.style.height = "0px"
}


async function signUpFormHandler(event){
    event.preventDefault()

    const firstName = document.querySelector('#form-first-name')
    const lastName = document.querySelector('#form-first-name')
    const email = document.querySelector('#form-email')
    const username = document.querySelector('#form-username')
    const password = document.querySelector('#form-password')

    if(firstName && lastName && email && username && password){
        const response = await fetch('api/users', {
            method: 'post',
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        })

        if(response.ok){
            console.log('fetch successful')
        } else {
            alert(response.statusText)
        }
    }
}



modalSelected.addEventListener("click",loadModal)
closeModalButton.addEventListener("click", removeModal)
signUpForm.addEventListener("submit", signUpFormHandler)