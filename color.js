var _ = require('lodash');

console.log(_);

var array = [1,2,3,4,5,6,7,8,9];

console.log("answer is : ", _.without(array, 3));


var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var css = document.querySelector('h3');
var btn = document.getElementById('random');

function setGradient() {
    body.style.background = "linear-gradient(to right," 
                                + color1.value + ", " 
                                + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i=0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)] ;
    }
    return color;
}

function randomColors() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();

    setGradient();
}

// setGradient();

css.innerHTML = "linear-gradient(to right, rgb(87, 199, 255), rgb(255, 56, 172));";

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

btn.addEventListener('click', randomColors);


//DOM ADD NEW ELEMENT

// var newDiv = document.createElement('h1');

// newDiv.classList = "add-class";

// newDiv.id = "add-id";

// newDiv.textContent = "Dom Manipulation";

// var newDivText = document.createTextNode(' Jilele');

// newDiv.appendChild(newDivText);

// var body = document.querySelector('body');
// var script = document.querySelector('script');

// body.insertBefore(newDiv, script);

// console.log(body);
// console.log(script);

// console.log(newDiv);