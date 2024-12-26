var card = document.querySelector(".card")
var img = document.querySelector("img")
var h1 = document.querySelector("h1")
var btn = document.querySelector("button")

var flag = 1
btn.addEventListener("click", function(){
    // console.log("clicked")

    if(flag==1){
        btn.innerHTML = "Requesting"
    btn.style.backgroundColor = "yellow"
    h1.style.color = "yellow"
    img.style.borderColor = "yellow"

    setTimeout(function () {
        btn.innerHTML = "Unfollow"
        btn.style.backgroundColor = "green"
        h1.innerHTML = "Friend"
        h1.style.color = "green"
        btn.style.marginLeft = "50px"
        img.style.borderColor = "green"
        h1.style.marginLeft = "40px"
    }, 2000)

    flag=0
    }
    else{
        btn.innerHTML = "Follow"
    btn.style.backgroundColor = "red"
    h1.innerHTML = "Elena Gilbert"
    h1.style.marginLeft = "10px"
    h1.style.color = "red"
    img.style.borderColor = "red"
    flag=1
    }

    
    

})