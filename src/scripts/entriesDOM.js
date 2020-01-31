import makeHTML from "./entryComponent.js"

const renderHTML = (entry) => {
    const targetLocation = document.querySelector(".entryLog");
    entry.forEach(element => {
        targetLocation.innerHTML += makeHTML(element)    
    });
}

export default renderHTML;