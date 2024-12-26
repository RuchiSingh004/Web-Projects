var box = document.querySelector(".box")
var h1 = document.querySelector("h1")
var btn = document.querySelector("button")

btn.addEventListener("click", function (){
        
        btn.innerHTML = "Requesting..."
     btn.style.backgroundColor = "yellow"
        h1.innerHTML = "Sending"
        h1.style.color = "yellow"

        setTimeout(function () {
            btn.innerHTML = "Unfollow"
            btn.style.backgroundColor = "green"
            h1.innerHTML = "Friend"
            h1.style.color = "green"
        }, 2000)
    
        btn.addEventListener("click", function(){
            btn.innerHTML = "Follow"
        btn.style.backgroundColor = "red"
           h1.innerHTML = "Stranger"
           h1.style.color = "red"
        })
        
        
})    