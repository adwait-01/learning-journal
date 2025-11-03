const welcomeEl = document.getElementById("welcome-el");

const userName = prompt("What's your name?");
const greeting = "Hello! Nice to meet you";

welcomeEl.innerText = `${greeting} ${userName}`;