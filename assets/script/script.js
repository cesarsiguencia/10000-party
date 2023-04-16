var welcomeBox = document.querySelector(".welcome-box")
var welcomeCarousel = document.querySelector("#welcome-carousel")
var welcomeTitleHolder = ''
var i = 0
var x = 1
var y = 0
var header = document.querySelector("#mobileMenu")
var navBar = document.querySelector("#nav")
var navBarLinks = document.querySelectorAll(".nav-links")
var clicked = 1
var posts = document.querySelectorAll('.dashboard-posts')
var timerProgress = document.querySelector(".timer-progress")
var dashboard = document.querySelector('.dashboard-carousel')
var barHeight = ""
var selectedElement = ""




function changeWords() {
    var welcomeWords = ["You're Invited!", "On my 10,000th day of life", "Saturday, October 21st, 2023"]

    if (welcomeTitleHolder) {
        welcomeTitleHolder.remove()
    }
    welcomeTitleHolder = document.createElement("div");
    welcomeTitleHolder.className = 'welcome-title-holder'
    welcomeTitleHolder.innerHTML = "<p class='welcome-titles'>" + welcomeWords[i] + "</p>"


    welcomeCarousel.appendChild(welcomeTitleHolder)

    if (i < welcomeWords.length - 1) {
        i++
    } else {
        return
    }

    setTimeout("changeWords()", 4000)
}

function insertHomeBtn() {
    var buttonItem = document.createElement("a")
    buttonItem.className = 'welcome-button'
    buttonItem.innerHTML = '<p class="welcome-button-font copperplate">Click here for awesomeness</p> '
    welcomeBox.appendChild(buttonItem)
}

function appearButton() {
    var button = document.querySelector(".welcome-button")
    button.setAttribute("href", "/home")
    button.style.opacity = 1
}


function introParallax(event) {
    const hero = document.querySelector(".hero")
    const scrollPosition = event.target.scrollingElement.scrollTop;

    if (scrollPosition > 20) {
        hero.style.height = "100vh";
    } else {

        hero.style.height = "120vh";
    }
}

function loadParallax(event) {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    const hero = document.querySelector(".hero")
    hero.style.height = "120vh";
    event.target.scrollingElement.scrollTop = 0

}

function homeParallax(event) {
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



function venueImgsParallax(event) {
    const skylark1 = document.querySelector(".skylark-imgs")
    const skylark2 = document.querySelector(".skylark-imgs-2")
    const skylark3 = document.querySelector(".skylark-imgs-3")
    const scrollPosition = event.target.scrollingElement.scrollTop;
    if (scrollPosition > 2000) {
        skylark1.style.backgroundSize = "230%"
        skylark2.style.backgroundSize = "200%"
        skylark3.style.backgroundSize = "200%"
    } else {
        skylark1.style.backgroundSize = "210%"
        skylark2.style.backgroundSize = "180%"
        skylark3.style.backgroundSize = "180%"
    }
}

function hamburgerMenu() {
    var screenWidth = document.body.clientWidth 
    if (screenWidth <= 768) {
        const btn = document.getElementById("mobile-menu")
        btn.classList.toggle("active")
        navBar.classList.toggle("mobile-effect")
        shrinkMenu()
    } 



}

function shrinkMenu() {

    if (clicked == 1) {
        navBarLinks.forEach((link) => {
            link.style.height = "50px"
            link.style.opacity = 1
        })
        clicked = 0
        return
    }

    if (clicked == 0) {
        navBarLinks.forEach((link) => {
            link.style.height = "0px"
            link.style.opacity = 0
        })
        clicked = 1
        return
    }

}

function bringBarBack(){
    var screenWidth = document.body.clientWidth
    if (screenWidth > 768){
        navBarLinks.forEach((link) => {
            link.removeAttribute("style")
        })
    }
}






function postsCarousel() {

    if (x == 1) {
        posts.forEach((post) => {
            post.style.transform = "translate(-100%)"
        })
        x = 2
        return
    }

    if (x == 2) {
        posts.forEach((post) => {
            post.style.transform = "translate(-200%)"
        })
        x = 3
        return
    }

    if (x == 3) {
        posts.forEach((post) => {
            post.style.transform = "translate(0%)"
        })
        x = 1
        return
    }






}



function smoothScroll(event) {
    barHeight = navBar.clientHeight;
    


    var section = event.target.id
    selectedElement = document.querySelector(`${section}`)
    selectedElement.style.opacity = 0
    selectedElement.scrollIntoView({
        block: 'start',
        behavior: 'smooth',

    });




    setTimeout(scrollAdjuster, 800)


}

function scrollAdjuster() {
    window.scrollBy({
        behavior: 'smooth',
        top: -`${barHeight + 20}`
    })
    selectedElement.style.transition = "2s"
    selectedElement.style.opacity = 1

    

}

function timeProgress(){
    y = y + 0.5
    timerProgress.style.width = `${y}%`

    if(y == 100){
        y = 0
    }
    

}

// function scrollIntoViewWithOffset(event){
//     offset = navBar.clientHeight;
//     var section = event.target.id
//     console.log(section)
//     selectedElement = document.querySelector(`${section}`)
//     window.scrollTo({
//       behavior: 'smooth',
//       top:
//         selectedElement.getBoundingClientRect().top -
//         document.body.getBoundingClientRect().top - offset,
//     })
// }
// navBar.addEventListener("click", scrollIntoViewWithOffset)


document.addEventListener("scroll", introParallax);
window.onload = loadParallax
setTimeout("changeWords()", 1000)
setTimeout("insertHomeBtn()", 1000)
setTimeout("appearButton()", 12000)
document.addEventListener("scroll", homeParallax)
document.addEventListener("scroll", venueImgsParallax)
header.addEventListener("click", hamburgerMenu)
setInterval(postsCarousel, 8000)
setInterval(timeProgress, 40)


navBar.addEventListener("click", smoothScroll)
window.addEventListener("resize", bringBarBack)

