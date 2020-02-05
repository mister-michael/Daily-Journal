import makeHTML from "./entryComponent.js"

const renderHTML = (entry) => {

    //targets location on DOM to print to
    const targetLocation = document.querySelector(".entryLog");

    //resets the DOM so that when entry is submitted and page "refreshes"/re-prints, the original entries clear instead of pringting again
    targetLocation.innerHTML = '';

    //entry is the fetched .json array, element is each object in the array, for each element we call the makeHTML function and print to dom
    entry.forEach(element => {
        targetLocation.innerHTML += makeHTML(element)    
    });
}

export default renderHTML;