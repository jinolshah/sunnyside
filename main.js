const outputter = document.getElementById("out")
const theme = document.getElementById("fixed")
const body = document.querySelector("body")
const text = document.querySelector("p")

function initiate() {
    setTheme = localStorage.getItem("theme")
    if (setTheme) {
        theme.innerText = setTheme
        body.setAttribute("data-theme", setTheme)
    }
    else{
        theme.innerText = "light"
        body.setAttribute("data-theme", "light")
    }
}

initiate()

affirmation_num = Math.floor(Math.random()*affirmations.length)

outputter.textContent = affirmations[affirmation_num]

theme.addEventListener("click", themeSwitch)

function themeSwitch() {
    if (theme.innerText === "light") {
        theme.innerText = "dark"
        body.setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark")
    }
    else {
        theme.innerText = "light"
        body.setAttribute("data-theme", "light")
        localStorage.setItem("theme", "light")
    }
}