var welcomeBox = document.querySelector(".carousel")
var createItem = ''
var welcomeMenu = document.querySelector(".hero-menu")

// setTimeout(() => {
//     welcomeBox.classList.add("welcome-box-animation")
// }, 1000)

// setTimeout(() => {
//     welcomeMenu.classList.add("hero-menu-animation")
// }, 8000)



var i = 0
var words = ["You're Invited!", "On my 10,000th day of life", "Saturday, October 21st, 2023"]
var time = 4000

function changeWords(){

    if (createItem){
        createItem.remove()
    }

    createItem = document.createElement("div");
    // createItem.className = 'carousel-item';
    createItem.className = 'welcome-box-animation'
    createItem.innerHTML = "<p class='welcome-title'>" + words[i] + "</p>"




    welcomeBox.appendChild(createItem)
    
    carouselItem = createItem

    if(i < words.length-1){
        i++
    } else {
        return
    }

    setTimeout("changeWords()", time)
    
}

function insertHomeBtn(){

    var buttonItem = document.createElement("a")
    buttonItem.className = 'welcome-nav-links'
    buttonItem.setAttribute("href", "/home")
    buttonItem.innerHTML = '<p class="welcome-nav-links-font copperplate">Click here for awesomeness</p> '

    welcomeBox.appendChild(buttonItem)
}

window.onload=changeWords

setTimeout("insertHomeBtn()", 12000)