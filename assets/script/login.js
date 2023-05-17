var loginSubmit = document.querySelector('#login-submit')

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
        console.log('returned object?')

        if(response.ok){
            console.log('page should reload')
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText)
        }
    }
}

loginSubmit.addEventListener('click', login)