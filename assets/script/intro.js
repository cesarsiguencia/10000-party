var welcomeBox = document.querySelector(".welcome-box")
var welcomeCarousel = document.querySelector("#welcome-carousel")
var welcomeTitleHolder = ''

function changeWords(currentIndex) {
    var welcomeWords = ["You're Invited!", "On my 10,000th day of life", "Saturday, October 21st, 2023"]

    if (welcomeTitleHolder) {
        welcomeTitleHolder.remove()
    }
    welcomeTitleHolder = document.createElement("div");
    welcomeTitleHolder.className = 'welcome-title-holder text-center'
    welcomeTitleHolder.innerHTML = "<p class='welcome-titles'>" + welcomeWords[currentIndex] + "</p>"

    welcomeCarousel.appendChild(welcomeTitleHolder)
    var nextIndex = ""
    if (currentIndex < welcomeWords.length - 1) {
        currentIndex++
    } else {
        return
    }
    nextIndex = currentIndex
    setTimeout(changeWords, 4000, nextIndex)
}

function insertHomeBtn() {
    var buttonItem = document.createElement("a")
    buttonItem.className = 'welcome-button'
    buttonItem.innerHTML = '<p class="welcome-button-font text-center copperplate-font">Click here for awesomeness</p> '
    welcomeBox.appendChild(buttonItem)
}

function appearButton() {
    var button = document.querySelector(".welcome-button")
    button.setAttribute("href", "homepage.html")
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
    const hero = document.querySelector(".hero")
    hero.style.height = "120vh";
    event.target.scrollingElement.scrollTop = 0
}

// Intro Page Function calls
window.onload = loadParallax
document.addEventListener("scroll", introParallax);
setTimeout(changeWords, 1000, 0)
setTimeout("insertHomeBtn()", 1000)
setTimeout("appearButton()", 12000)