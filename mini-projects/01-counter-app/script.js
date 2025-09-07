const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

const label = document.getElementById("number");

// let count;
let count = 0;

function increase(){
    // count = document.getElementById("number").textContent;
    // count = +count;
    count ++;
    label.textContent = count;
}

function decrease(){
    // count = document.getElementById("number").textContent;
    // count = +count;
    count --;
    label.textContent = count;
}

function reset(){
    count = 0;
    label.textContent = count;
}

increaseBtn.addEventListener("click",increase);
decreaseBtn.addEventListener("click",decrease);
resetBtn.addEventListener("click",reset);