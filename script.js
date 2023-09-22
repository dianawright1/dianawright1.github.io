// references to the buttons by their IDs
const topLeftButton = document.getElementById('top-left');
const topRightButton = document.getElementById('top-right');
const bottomLeftButton = document.getElementById('bottom-left');
const bottomRightButton = document.getElementById('bottom-right');

// Function to change the background color randomly
function changeButtonColor(button) {
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    button.style.backgroundColor = randomColor;
}

// click event listeners to each button
topLeftButton.addEventListener('click', () => changeButtonColor(topLeftButton));
topRightButton.addEventListener('click', () => changeButtonColor(topRightButton));
bottomLeftButton.addEventListener('click', () => changeButtonColor(bottomLeftButton));
bottomRightButton.addEventListener('click', () => changeButtonColor(bottomRightButton));
