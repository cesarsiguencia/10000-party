var logoutBtn = document.querySelector('#logout-button')

var modalSelected = document.querySelector('#modal')
var logoutModal = document.querySelector('#logout-modal')
var closeModalButton = document.querySelector('#modal-close')

async function logout(){

    const response = await fetch('api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'}
    });

    if(response.ok){
        logoutModal.style.height = "100vh"
    } else {
        alert(response.statusText)
    }

    console.log("logout captured")
}

// logoutBtn.addEventListener("click", logout)



logoutBtn.addEventListener("click", logout)

closeModalButton.addEventListener("click",function(){
    document.location.replace('/home')
})

// var logoutBtn = document.querySelector('#logout-button')

// var modalSelected = document.querySelector('#modal')
// var logoutModal = document.querySelector('#logout-modal')
// var closeModalButton = document.querySelector('#modal-close')

// async function logout(){

//     const response = await fetch('api/users/logout', {
//         method: 'post',
//         headers: { 'Content-Type': 'application/json'}
//     });

//     if(response.ok){
//         document.location.replace('/home')
//     } else {
//         alert(response.statusText)
//     }



    
    
// }



// logoutBtn.addEventListener("click", logout).then(() => {
//     setTimeout(() => {
//         logoutModal.style.height = "100vh"
//     }, 2000)
// })

// closeModalButton.addEventListener("click",function(){
//     logoutModal.style.height = "0px"
// })




