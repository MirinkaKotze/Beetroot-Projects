// LESSON 31 - DOCUMENT OBJECT MODEL
// 2. Create an html page with OPEN button and a modal box.
// The modal box should have text and a CLOSE button. 
// The modal box is not displayed from the beginning. 
// It appears when clicking the OPEN button and disappears when clicking CLOSE.

//HTML POINTERS
const buttonOpen = document.getElementById('buttonOpen');
const modelBox = document.getElementById('modelBox');
const buttonClose = document.getElementById('buttonClose');

function open() {
    buttonOpen.classList.add('hidden');
    modelBox.classList.remove('hidden');
}

function close() {
    buttonOpen.classList.remove('hidden');
    modelBox.classList.add('hidden');
}

buttonOpen.addEventListener('click', open);
buttonClose.addEventListener('click', close);

