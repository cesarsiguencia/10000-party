var navBar = document.querySelector("#nav")
var navBarLinks = document.querySelectorAll(".nav-links")
var posts = document.querySelectorAll('.dashboard-posts')
var timerProgress = document.querySelector(".timer-progress")
var dashboard = document.querySelector('.dashboard-carousel')
var barHeight = ""
var selectedElement = ""
var dummyForm = document.querySelector('.registration')

function homeParallax(event) {
    const hero = document.querySelector(".hero")
    const scrollPosition = event.target.scrollingElement.scrollTop;

    if (scrollPosition > 20) {
        hero.style.height = "100vh";
    } else {
        hero.style.height = "120vh";
    }
}

function loadParallax(event) {
    const hero = document.querySelector(".hero")
    hero.style.height = "120vh";
}

function welcomeTitlesParallax(event) {
    const hero2 = document.querySelector("#hero-2")
    const scrollPosition = event.target.scrollingElement.scrollTop;
    if (scrollPosition > 350) {
        hero2.style.opacity = 0;
        hero2.style.translate = "0 -50px";
        hero2.style.scale = "0.9";
    } else {
        hero2.style.opacity = 1;
        hero2.style.translate = 0;
        hero2.style.scale = 1;
    }
}


function venueImgsParallax() {
    const skylark1 = document.querySelector(".skylark-img")
    const skylark2 = document.querySelector(".skylark-img-2")
    const skylark3 = document.querySelector(".skylark-img-3")
    const venueBox = document.querySelector(".venue-split")

    const imgsArray = [skylark1, skylark2, skylark3] 
    const position = venueBox.getBoundingClientRect()

    if (position.top >= window.innerHeight ) {

        imgsArray.forEach((image)=>{
            image.style.backgroundSize = "110%"
        })
    } else {
        imgsArray.forEach((image)=>{
            image.style.backgroundSize = "100%"
        })
    }
}

function equationParallax() {
    const equationDiv = document.querySelector(".equation")
    const position = equationDiv.getBoundingClientRect()
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        equationDiv.style.scale = 1
    } else {
        equationDiv.style.scale = 0.75
    }
}

function storyParallax() {
    const storyDiv = document.querySelector(".about-story")
    const position = storyDiv.getBoundingClientRect()
    if (position.top <= window.innerHeight) {
        storyDiv.style.scale = 1
        storyDiv.style.opacity = 1
    } else {
        storyDiv.style.scale = 0.75
        storyDiv.style.opacity = 0.2
    }
}

var buttons = document.querySelectorAll('button')

function buttonScale (){
    setInterval(() => {
        buttons.forEach((single)=>{
            single.style.scale = 1.1
        })
    }, 2000);

    setTimeout(buttonDown, 1000)
}

function buttonDown (){
    
    setInterval(() => {
        buttons.forEach((single)=>{
            single.style.scale = 1.0
        })
    }, 2000);
}


// Home Page Function calls
window.onload = loadParallax
window.onload = buttonScale
document.addEventListener("scroll", homeParallax);
document.addEventListener("scroll", welcomeTitlesParallax)
document.addEventListener("scroll", venueImgsParallax)
document.addEventListener("scroll", equationParallax)
document.addEventListener("scroll", storyParallax)


