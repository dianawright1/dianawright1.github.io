// script2.js
document.addEventListener('DOMContentLoaded', function () {
    const square = document.querySelector('.square');
    const body = document.body;

    square.addEventListener('mouseover', function () {
        body.style.backgroundColor = '#75D66E'; 
    });

    square.addEventListener('mouseout', function () {
        body.style.backgroundColor = '#FFB0C1'; 
    });
});
