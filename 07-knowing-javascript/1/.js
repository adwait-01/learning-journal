function updateName(){
    const userName = prompt("What is your name?");
    button.textContent = `Player 1: ${userName}`;
}

const button = document.querySelector("button");

button.addEventListener("click",updateName);