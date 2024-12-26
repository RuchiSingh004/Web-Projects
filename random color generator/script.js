let box = document.querySelector(".box")
let btn = document.querySelector("button")

btn.addEventListener("click", function(){
    // console.log("clicked")
    var a1 =Math.floor(Math.random()*225) 
    var a2 =Math.floor(Math.random()*225)
    var a3 =Math.floor(Math.random()*225)

    box.style.backgroundColor =`rgb(${a1},${a2},${a3})`
    
})