var navBar = document.querySelector("#nav")
var navBarLinks = document.querySelectorAll(".nav-links")
var posts = document.querySelectorAll('.dashboard-posts')
var timerProgress = document.querySelector(".timer-progress")
var dashboard = document.querySelector('.dashboard-carousel')
var barHeight = ""
var selectedElement = ""
var dummyForm = document.querySelector('.registration')
const hero = document.querySelector(".hero")
hero.style.height = "120vh";

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
    event.target.scrollingElement.scrollTop = 0
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
            image.style.backgroundSize = "140%"
        })
    } else {
        imgsArray.forEach((image)=>{
            image.style.backgroundSize = "110%"
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

// function playToBeReal(){
//     const audioToBeReal = document.querySelector('#top-audio')
//     const storyTime = document.querySelector('#story')
//     const heroTime = document.querySelector('.hero')
//     const positionStory = storyTime.getBoundingClientRect()
//     const positionHero = heroTime.getBoundingClientRect()

//     if (positionHero.top <= 0){
//         audioToBeReal.play()
//         audioToBeReal.volume = 0.3
//     }
//     if (positionStory.top <= window.innerHeight) {
//         audioToBeReal.remove()
//     } 
// }

function playSinCara(){
    const audioSinCara = document.querySelector('#bottom-audio')
    const footerTime = document.querySelector('#signUp')
    const venueTime = document.querySelector('#albums')
    const positionFooter= footerTime.getBoundingClientRect()
    const positionVenue = venueTime.getBoundingClientRect()
    audioSinCara.pause()
    audioSinCara.volume = 0

    if (positionVenue.top <= window.innerHeight){
        audioSinCara.play()
        audioSinCara.volume = 0.1
        
    }

    if (positionFooter.top <= window.innerHeight) {

        audioSinCara.pause()
        audioSinCara.remove()
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

var x = 1
// var y = 0

function timeCarousel() {
    // y = y + 1


    // if (x == 1) {
    //     y = 0
        if (x < 7) {
            posts.forEach((post) => {
                post.style.transform = `translate(-${x}00%)`
            })
            x = x +1
            return
        }

    
        if (x == 7) {
            posts.forEach((post) => {
                post.style.transform = "translate(0%)"
            })
            x = 1
            return
        }
        setInterval(timeCarousel, 4000)
        console.log('worked')

    // }
    
}
    






// Home Page Function calls

window.onload = loadParallax
window.onload = buttonScale
// document.addEventListener("scroll", playToBeReal)
// document.addEventListener("touchmove", playToBeReal)
document.addEventListener("scroll", playSinCara)
document.addEventListener("touchmove", playSinCara)
document.addEventListener("scroll", homeParallax);
document.addEventListener("scroll", welcomeTitlesParallax)
document.addEventListener("scroll", venueImgsParallax)
document.addEventListener("scroll", equationParallax)
document.addEventListener("scroll", storyParallax)
setInterval(timeCarousel, 2000)