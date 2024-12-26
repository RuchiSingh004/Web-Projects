var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")
var btn = document.querySelector("button")

btn.addEventListener("click", function(){
    // console.log("clicked")/

    var imgsrc1 = img1.getAttribute('src')
    var imgsrc2 = img2.getAttribute('src')

    img1.setAttribute('src', imgsrc2)
    img2.setAttribute('src', imgsrc1)
       
    
    
})