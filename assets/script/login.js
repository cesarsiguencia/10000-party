var loginBtn = document.querySelector('#login-button')
var loginModal = document.querySelector('#login-modal')
var loginSubmit = document.querySelector('#login-submit')
var closeModalButton = document.querySelector('#modal-close')


async function login(){

    const loginEmail = document.querySelector('#login-email').value.trim()
    const loginPassword = document.querySelector('#login-password').value.trim()

    if(loginEmail && loginPassword){
        const response = await fetch('api/users/login', {
            method:'post',
            body: JSON.stringify({
                loginEmail,
                loginPassword
            }),
            headers:{'Content-Type':'application/json'}
        })

        if(response.ok){
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText)
        }
    }
}

loginBtn.addEventListener('click', function(){
    loginModal.style.height = "100vh"
})

loginSubmit.addEventListener('click', login)

closeModalButton.addEventListener('click',function(){
    loginModal.style.height = "0px"
})