const renderHTML = (entry) => {
    const targetLocation = document.querySelector(".entryLog");
    entry.forEach(element => {
        targetLocation.innerHTML += makeHTML(element)    
    });
}

// thenObject = {
//     thenFunction() {
//         API.then(parsedDataFromApi => {
//             console.table(parsedDataFromApi)
//             parsedDataFromApi.forEach(entry => {
//                 renderHTML(entry)
//             })
//         })
//     }
// }



// const targetLocation = document.querySelector(".entryLog");

// const thenObject = {
//     renderJournalEntries() {
//         .then(parsedDataFromApi => {
//             console.table(parsedDataFromApi)
//             parsedDataFromApi.forEach(entry => {
//                 targetLocation.innerHTML += makeHTML(entry)
//             })
//         })
//     }
// }