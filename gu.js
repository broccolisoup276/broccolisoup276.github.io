let n = 0;

document.addEventListener('DOMContentLoaded', function() {
    let sharks = document.querySelector('#sharks');
    sharks.addEventListener('click', function() {
        n++;
        document.querySelector('#count').innerHTML = 'I love sharks x' + n;
    })
    })
