const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");



const min = 1;
const max = 6;
let randomNum1;


myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent =  randomNum1;
    
}

