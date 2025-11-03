function createParagraph(){
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

window.createParagraph = createParagraph; // expose it globally. We have to do it because we have used type="module" but used inline js handler.