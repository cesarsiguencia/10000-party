var welcomeBox = document.querySelector(".intro-box")
var carouselBox = document.querySelector("#carousel-words")
var wordBox = ''
var i = 0


function changeWords(){
    var words = ["You're Invited!", "On my 10,000th day of life", "Saturday, October 21st, 2023"]

    if(wordBox){
        wordBox.remove()
    }
    wordBox = document.createElement("div");
    wordBox.className = 'intro-box-words'
    wordBox.innerHTML = "<p class='welcome-title'>" + words[i] + "</p>"

    carouselBox.appendChild(wordBox)

    if(i < words.length-1){
        i++
    } else {
        return
    }

    setTimeout("changeWords()", 4000)
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
    const hero = document.querySelector(".hero")
    const scrollPosition = event.target.scrollingElement.scrollTop;
    
    console.log(scrollPosition)
    if (scrollPosition > 20) {
        hero.style.height = "100vh";
    } else {
        hero.style.height = "120vh";
    } 
} 

function loadParallax(event){
    const scrollPosition = event.target.scrollingElement.scrollTop;
    const hero = document.querySelector(".hero")
    hero.style.height = "120vh";
    event.target.scrollingElement.scrollTop = 0

}

function homeParallax(event){
    const hero2 = document.querySelector("#hero-2")
    const scrollPosition = event.target.scrollingElement.scrollTop;
    if(scrollPosition > 350){
        hero2.style.opacity = 0;
        hero2.style.translate = "0 -50px";
        hero2.style.scale = "0.9";
    } else {
        hero2.style.opacity = 1;
        hero2.style.translate = 0;
        hero2.style.scale = 1;
    }
}

function venueImgsParallax(event){
    const skylark1 = document.querySelector(".skylark-imgs")
    const skylark2 = document.querySelector(".skylark-imgs-2")
    const skylark3 = document.querySelector(".skylark-imgs-3")
    const scrollPosition = event.target.scrollingElement.scrollTop;
    if(scrollPosition > 2000){
        skylark1.style.backgroundSize = "230%"
        skylark2.style.backgroundSize = "200%"
        skylark3.style.backgroundSize = "200%"
    } else {
        skylark1.style.backgroundSize = "210%"
        skylark2.style.backgroundSize = "180%"
        skylark3.style.backgroundSize = "180%"
    }
}



document.addEventListener("scroll", introParallax);
window.onload=loadParallax
setTimeout("changeWords()", 1000)
setTimeout("insertHomeBtn()", 1000)
setTimeout("appearButton()", 12000)
document.addEventListener("scroll", homeParallax)
document.addEventListener("scroll", venueImgsParallax)