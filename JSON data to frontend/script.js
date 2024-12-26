var info = [
    {
    user:'suhani',
    city:'pune',
    age:24,
    college:'lnct'
},
{
    user:'rupesh',
    city:'hydrabad',
    age:26,
    college:'mittal'
},
{
    user:'mitthika',
    city:'noida',
    age:30,
    college:'jnct'
}
]

var sum = ''

info.forEach(function(elem){
   sum = sum + `<div class="card">
        <h1>${elem.user}</h1>
        <h2>city :${elem.city}</h2>
        <h2>Age :${elem.age}</h2>
        <h2>college:${elem.college}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt voluptate reprehenderit exped.</p> 
        </div>`
 
})
var body = document.querySelector("body")
// console.log(sum);
body.innerHTML = sum
