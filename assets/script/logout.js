var logoutBtn = document.querySelector('#logout-button')

async function logout(){
    const response = await fetch('api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'}
    });

    if(response.ok){
        document.location.replace('/home')
    } else {
        alert(response.statusText)
    }

    console.log("logout captured")
}

logoutBtn.addEventListener("click", logout)

console.log("page is read")