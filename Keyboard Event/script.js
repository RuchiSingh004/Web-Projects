var moveX = 0
var moveY = 0
var img = document.querySelector("img")
document.addEventListener("keydown",function(dets){
    // console.log(dets.code)

    if(dets.code == 'ArrowRight'&& moveX<85)
    {
        moveX++
        img.style.left = moveX +'%'
    }
    else if(dets.code == 'ArrowLeft' && moveX>0)
    {
        moveX--
        img.style.left = moveX +'%'
        
    }
    else if(dets.code == 'ArrowUp' && moveY>0)
        {
            moveY--
            img.style.top = moveY +'%'
            
   
        }
    else if(dets.code == 'ArrowDown'&& moveY<67)
        {
            moveY++
            img.style.top = moveY +'%'
                
        } 
    else{
        console.log("otherss");
        
    }
        
    
    
})