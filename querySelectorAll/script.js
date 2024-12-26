var btns = document.querySelectorAll("button")
var body = document.querySelector('body')
// console.log(btns);
btns.forEach(function(elems){
    elems.addEventListener('click',function(){
        console.log(elems.innerHTML);
        body.style.backgroundColor = elems.innerHTML

        
        
        
    })
})
