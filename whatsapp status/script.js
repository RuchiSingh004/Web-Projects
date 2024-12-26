const peopleData = [
    {
        profilePic: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contactName: "My Status",
        time: "No Updates",
        story: "https://images.unsplash.com/photo-1586454743813-c418d89b09d9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePic: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contactName: "Neha Singh",
        time: "2 hours ago",
        "story": "https://images.unsplash.com/photo-1577686394606-e8d21401c8fd?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePic: "https://images.unsplash.com/photo-1653379671988-b32fceafb5e5?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contactName: "Varnita Jain",
        time: "5 minutes ago",
        "story": "https://images.unsplash.com/photo-1577686353255-255314859a7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
    },
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contactName: "Dheraaj ",
        time: "1 hour ago",
        story: "https://images.unsplash.com/photo-1577394268058-c61e0a5ef2c9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePic: "https://images.unsplash.com/photo-1678468826224-886aaccd22eb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contactName: "Ashis verma",
        time: "3 hours ago",
        story: "https://images.unsplash.com/photo-1680984588879-86af267ed2cb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contactName: "Bhupendra rajput",
        time: "10 minutes ago",
        story: "https://images.unsplash.com/photo-1585205122286-d6fc6e911a6c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contactName: "Suhani Thakur",
        time: "20 minutes ago",
        story: "https://images.unsplash.com/photo-1589949864310-70b0f6c22041?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    },
    {
        profilePic: "https://images.unsplash.com/photo-1500336624523-d727130c3328?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contactName: "Simran Banke",
        time: "45 minutes ago",
        story:"https://images.unsplash.com/photo-1720471132722-dfcba87f10be?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contactName: "Sarthak Sharma",
        time: "1 day ago",
        story:"https://images.unsplash.com/photo-1734012755159-0606af9bc1c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contactName: "Harsh Bhaiya",
        time: "2 days ago",
        story:"https://images.unsplash.com/photo-1721332149069-a470150ef51c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePic: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contactName: "Priyanshi Nema",
        time: "1 hour ago",
        story:"https://plus.unsplash.com/premium_photo-1732776567041-885234fdc3c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

var sum = ''

peopleData.forEach(function(elem,idx){
    // console.log(elem.contactName);
    sum = sum + ` <div class="status" id=${idx}>
                    <img src="${elem.profilePic}"alt="">
                    <div class="status-in">
                        <h4>${elem.contactName}</h4>
                        <h5>${elem.time}</h5>
                    </div>
                </div>`

    
})
// console.log(sum);

var whatstatus = document.querySelector('.whatstatus')
whatstatus.innerHTML = sum
var full = document.querySelector('#full')
var growth = document.querySelector('.growth')
var h4 = document.querySelector('#full h4')
var h5 = document.querySelector('#full h5')
var img = document.querySelector('.inner img')


whatstatus.addEventListener('click', function(dets){
    var grow = 0
    var golden = (peopleData[dets.target.id])

    var int = setInterval(function () {
        grow++
        growth.style.width = grow + "%"
    }, 30)
    
    full.style.display = 'block'
    full.style.backgroundImage = `url(${golden.story})`
    h4.innerHTML = golden.contactName
    h5.innerHTML = golden.time
    img.innerHTML = golden.profilePic


    setTimeout(function () {
        full.style.display = 'none'
        clearInterval(int)
      }, 3000)
    



    
})