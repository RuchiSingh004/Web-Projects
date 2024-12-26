var bulb = document.querySelector(".bulb")
var btn = document.querySelector("button")

var flag = 1
btn.addEventListener("click", function () {
     
    if (flag == 1) {
        bulb.style.backgroundColor = "yellow"
        btn.innerHTML = "OFF"
        flag = 0
    }
    else{
        bulb.style.backgroundColor = "transparent"
        btn.innerHTML = "ON"
        flag = 1
    }
})