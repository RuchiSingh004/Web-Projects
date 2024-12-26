var arr = [
  {
    "profilePhoto": "https://images.unsplash.com/photo-1720048171419-b515a96a73b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "username": "john_doe",
    "story": "https://images.unsplash.com/photo-1586454743813-c418d89b09d9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "profilePhoto": "https://plus.unsplash.com/premium_photo-1669834759290-7ecb3793be45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    "username": "sara_smith",
    "story": "https://images.unsplash.com/photo-1577686394606-e8d21401c8fd?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "profilePhoto": "https://plus.unsplash.com/premium_photo-1682436594687-922216809102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
    "username": "mike_jones",
    "story": "https://images.unsplash.com/photo-1577686353255-255314859a7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
  },
  {
    "profilePhoto": "https://plus.unsplash.com/premium_photo-1661676277286-6345280d2be0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "username": "lucy_rose",
    "story": "https://images.unsplash.com/photo-1577394268058-c61e0a5ef2c9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "profilePhoto": "https://images.unsplash.com/photo-1734312621516-3d258db95e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    "username": "Elena",
    "story": "https://images.unsplash.com/photo-1680984588879-86af267ed2cb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "profilePhoto": "https://images.unsplash.com/photo-1730238103847-89a39888ffe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
    "username": "Klaus",
    "story": "https://images.unsplash.com/photo-1585205122286-d6fc6e911a6c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "profilePhoto": "https://images.unsplash.com/photo-1601580409637-3b5a8cf74c3b?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "username": "emma_williams",
    "story": "https://images.unsplash.com/photo-1589949864310-70b0f6c22041?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

var sum = ''

arr.forEach(function (elem, idx) {
  // console.log(elem.username);
  sum = sum + `<div class="story">
                    <img id=${idx} src="${elem.profilePhoto}" alt="">
                    <h3>${elem.username}</h3>
                </div>`

})
//  console.log(sum);
var stories = document.querySelector('.stories')
var fullshow = document.querySelector('#fullshow')
var h2 = document.querySelector('#fullshow h2')
var growth = document.querySelector('.growth')

stories.innerHTML = sum

stories.addEventListener('click', function (dets) {
  var grow = 0

  var golden = arr[dets.target.id]
  // console.log(golden.username);
  var int = setInterval(function () {
    grow++
    growth.style.width = grow + "%"

  }, 30)

  fullshow.style.display = 'block'
  fullshow.style.backgroundImage = `url(${golden.story})`
  h2.innerHTML = golden.username

  setTimeout(function () {
    fullshow.style.display = 'none'
    clearInterval(int)
  }, 3000)



})