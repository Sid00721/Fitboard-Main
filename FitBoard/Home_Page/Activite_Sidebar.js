// Selecting the button element with the id 'btn' and the sidebar element with the class 'sidebar'
let btn = document.querySelector('#btn')
let side_bar = document.querySelector('.sidebar')

// Adding a click event listener to the button
btn.onclick = function () {
    side_bar.classList.toggle('active');
};





