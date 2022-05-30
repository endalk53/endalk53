let colors = [ 'blue','yellow' , 'black', 'red', 'brown', 'orange' ]; // color array
let button = document.getElementById('button'); // get button
button.addEventListener('click',function(){
     // add event listener
var randomcolor = colors[Math.floor(Math.random() * colors.length)]

let container = document.getElementById('container');
container.style.background=randomcolor
})