var button = document.querySelector("button")
var bulb = document.querySelector("#bulb")

var tap = 0
button.addEventListener("click", function () {
    if (tap == 0) {
        bulb.style.backgroundColor = "yellow"
        button.innerHTML = "off"
        tap = 1
    } else {
        bulb.style.backgroundColor = "transparent"
        button.innerHTML = "on"
        tap = 0
    }
})