var btn = document.querySelector("button")
var body = document.querySelector("body")


btn.addEventListener("click",function(){
    const rotate = Math.random() * 360;
    // console.log("clicked")
    var img = document.createElement("img")
    img.setAttribute("src","https://www.pngall.com/wp-content/uploads/4/True-Bug-PNG-HD-Image.png")
    document.body.appendChild(img)
    img.style.position = "absolute"
    img.style.height = "100px"
    img.style.width = "100px"
    img.style.rotate = rotate + "deg";
    img.style.top = Math.floor(Math.random()*100) + "%"
     img.style.left = Math.floor(Math.random()*100) + "%"
})