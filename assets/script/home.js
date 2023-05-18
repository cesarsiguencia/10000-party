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


function venueImgsParallax(event) {
    const skylark1 = document.querySelector(".skylark-img")
    const skylark2 = document.querySelector(".skylark-img-2")
    const skylark3 = document.querySelector(".skylark-img-3")
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

var x = 1
var y = 0

function timeCarousel() {
    y = y + 0.5
    timerProgress.style.width = `${y}%`

    if (y == 100) {
        y = 0
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
}

// function smoothScroll(event) {
//     // barHeight = navBar.clientHeight;

//     var section = event.target.id

//     selectedElement = document.querySelector(`${section}`)
//     selectedElement.style.opacity = 0
//     selectedElement.scrollIntoView({
//         block: 'start',
//         behavior: 'smooth',

//     });
//     selectedElement.style.transition = "2s"
//     selectedElement.style.opacity = 1
//     // setTimeout(scrollAdjuster, 800)
// }

// function scrollAdjuster() {
//     window.scrollBy({
//         behavior: 'smooth',
//         top: -`${barHeight + 20}`
//     })
// }


// Home Page Function calls
window.onload = loadParallax
document.addEventListener("scroll", homeParallax);
document.addEventListener("scroll", welcomeTitlesParallax)
document.addEventListener("scroll", venueImgsParallax)
setInterval(timeCarousel, 40)
// navBar.addEventListener("click", smoothScroll)
dummyForm.addEventListener('click', function(){
    document.location.replace('/register')
})
