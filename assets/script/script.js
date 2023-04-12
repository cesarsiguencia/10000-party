var welcomeBox = document.querySelector(".intro-box")
var carouselBox = document.querySelector("#carousel-words")
var createItem = ''
var i = 0
var words = ["You're Invited!", "On my 10,000th day of life", "Saturday, October 21st, 2023"]
var time = 4000

function changeWords(){
    if (createItem){
        createItem.remove()
    }
    createItem = document.createElement("div");
    createItem.className = 'intro-box-words'
    createItem.innerHTML = "<p class='welcome-title'>" + words[i] + "</p>"

    carouselBox.appendChild(createItem)

    if(i < words.length-1){
        i++
    } else {
        return
    }

    setTimeout("changeWords()", time)
}

function insertHomeBtn(){
    var buttonItem = document.createElement("a")
    buttonItem.className = 'welcome-button'
    buttonItem.innerHTML = '<p class="welcome-button-font copperplate">Click here for awesomeness</p> '
    welcomeBox.appendChild(buttonItem)
}

function appearButton(){
    var button = document.querySelector(".welcome-button")
    button.setAttribute("href", "/home")
    button.style.opacity = 1
}



function introParallax(event){
    // const h1 = document.getElementById("h1"),
    const hero = document.querySelector(".hero")
    // button = document.getElementById("button");
    
    const scrollPosition = event.target.scrollingElement.scrollTop;
    console.log(scrollPosition)
    if (scrollPosition > 20) {
        hero.style.height = "100vh";
    } else {
        hero.style.height = "120vh";
    }
    
    
} 

function loadParallax(event){
    const hero = document.querySelector(".hero")
    hero.style.height = "120vh";
    event.target.scrollingElement.scrollTop = 0

}





document.addEventListener("scroll", introParallax);
window.onload=loadParallax
setTimeout("changeWords()", 1000)
setTimeout("insertHomeBtn()", 1000)
setTimeout("appearButton()", 12000)