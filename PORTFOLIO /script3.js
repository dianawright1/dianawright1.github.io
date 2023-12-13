document.addEventListener('DOMContentLoaded', function () {
    const square = document.querySelector('.square');
    const body = document.body;

    square.addEventListener('mouseover', function () {
        body.style.backgroundColor = '#FFA500'; // Change this to the desired background color on hover
    });

    square.addEventListener('mouseout', function () {
        body.style.backgroundColor = '#75D66E'; // Change this to the original background color
    });
});