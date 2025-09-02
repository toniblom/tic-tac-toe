// TODO
// Make function to check  if one player won
// Upadte text to show whose turn
// Make cursor pointer on clickable spaces
// Turn counter
// Make occupied spaces different color background

const infoText = document.querySelector('#info-text');
const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const a3 = document.querySelector('#a3');
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const c3 = document.querySelector('#c3');
const resetButton = document.querySelector("#reset-button");

const turnCounter = 0;


// Mark needs to be X every other turn, O every other
const addMark = (e) => {
    if (e.target.textContent === "") {
        e.target.textContent = "X";
    }
}

const reset = () => {
    a1.textContent = "";
    a2.textContent = "";
    a3.textContent = "";
    b1.textContent = "";
    b2.textContent = "";
    b3.textContent = "";
    c1.textContent = "";
    c2.textContent = "";
    c3.textContent = "";
    infoText.textContent = "";
}

const checkGrid = () => {
    // Check if X or O are 3 in a row
}


a1.addEventListener("click", addMark);
a2.addEventListener("click", addMark);
a3.addEventListener("click", addMark);
b1.addEventListener("click", addMark);
b2.addEventListener("click", addMark);
b3.addEventListener("click", addMark);
c1.addEventListener("click", addMark);
c2.addEventListener("click", addMark);
c3.addEventListener("click", addMark);

resetButton.addEventListener("click", reset);