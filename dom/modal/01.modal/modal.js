const openButton = document.querySelector("#openOverlay");
const body = document.body;

openButton.addEventListener("click", e => {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    overlayElement.addEventListener("click", e => {
        console.log(e.target);
        if (!e.target.classList.contains("content")) {
            closeElement.click();
        }
        //if (e.target == overlayElement) {
        //    closeElement.click();
        //}
    });

    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");
    
    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    contentElement.innerHTML = "Hello world!";

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");    
    closeElement.textContent = "x";    
    closeElement.href = "#";   
    
    closeElement.addEventListener("click", e => {
        e.preventDefault();
        body.removeChild(overlayElement);
    });

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);
    
    body.appendChild(overlayElement);
})

function createModal(content) {  
}