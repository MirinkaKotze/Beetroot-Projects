// LESSON 31 - DOCUMENT OBJECT MODEL
// 3. Create an html page with streetlights and a button that switches the color to the next one.

const redLight = document.getElementById('redLight');
const greenLight = document.getElementById('greenLight');
const yellowLight = document.getElementById('yellowLight');
const nextButton = document.getElementById('nextButton');

function red() {
    redLight.style.backgroundColor = 'red';
    yellowLight.style.backgroundColor = 'black';
    greenLight.style.backgroundColor = 'black';
}

function yellow() {
    redLight.style.backgroundColor = 'black';
    yellowLight.style.backgroundColor = 'yellow';
    greenLight.style.backgroundColor = 'black';
}

function green() {
    redLight.style.backgroundColor = 'black';
    yellowLight.style.backgroundColor = 'black';
    greenLight.style.backgroundColor = 'green';
}

let count = 0;
function lightSwitcher() {
    switch(count) {
        case 0:
            red()
            count++
            break;
        case 1:
            yellow();
            count++
           break;
        case 2:
            green()   
            count = 0;         
            break;
    }
}

nextButton.addEventListener('click', lightSwitcher)