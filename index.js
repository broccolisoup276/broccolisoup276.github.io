// Animation from https://www.w3schools.com/css/css3_2dtransforms.asp
// Function help from https://www.w3schools.com/jsref/event_onmouseover.asp

let s = 0
let n = 0
function rotate2D() {
    let frog1 =document.querySelector('#frog-2Danimate-rotate');
    n = n + 10;
    frog1.style.transform="rotate(" + n + "deg)";
}

function rotate3D() {
    let frog2 =document.querySelector('#frog-3Danimate-rotate');
    n = n + 10;
    if (n == 90 || n == 270) {
        n = n + 5;
    }
    frog2.style.transform="rotateY(" + n + "deg)";
}


document.addEventListener('DOMContentLoaded', function() {
    let frog1 =document.querySelector('#frog-2Danimate-rotate');
    let frog2 = document.querySelector('#frog-3Danimate-rotate');

    frog1.addEventListener('mouseover', function() {
        interval = setInterval("rotate2D()", 10);
    })

    frog1.addEventListener('mouseout', function(){
        clearInterval(interval);
    })

    frog2.addEventListener('mouseover', function() {
        interval = setInterval("rotate3D()", 10);
    })

    frog2.addEventListener('mouseout', function(){
        clearInterval(interval);
    })

    let sharks = dcoument.querySelector('#sharks');
    sharks.addEventListner('click', function() {
        s++;
        console.log(s);
        document.querySelector('#count').innerHTML = 'I love sharks x' + s;
    })
    })
