const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click",updateBtn);

function updateBtn(){
    if(btn.textContent === "Start Machine"){
        btn.textContent = "Stop Machine";
        txt.textContent = "The machine has started!";
    }
    else{
        btn.textContent = "Start Machine";
        txt.textContent = "The machine is stopped";
    }
}

// A control which swaps between two states is generally referred to as a toggle. It toggles between one state and another.