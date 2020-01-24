//fetch data . make html method . then function
API.getJournalEntries().then(renderHTML)







//backup copy v.1
    // const makeHTML = (journalEntry) => {
//     return `
//    <h1>${journalEntry.concept}</h1>
//     <div>${journalEntry.date}</div>
//     <article>${journalEntry.content}</article>
//     <div>${journalEntry.mood}</div>
//    `
// };

// const renderHTML = (entry) => {
//         const targetLocation = document.querySelector(".entryLog");
//         targetLocation.innerHTML = +makeHTML(entry)
//     }

// fetch("http://localhost:8088/entries")
//     .then(responseFromApi => responseFromApi.json())
//     .then(parsedDataFromApi => {
//         console.table(parsedDataFromApi)
//         parsedDataFromApi.forEach(entry => {
//             renderHTML(entry)
//         })
//     })














// const htmlMakeAndRender = {
//     makeHTML(journalEntry) {
//         console.log("makeHTML")

//         return `
//    <h2>${journalEntry.concept}</h2>
//    <div>${journalEntry.date}</div>
//    <article>${journalEntry.content}</article>
//    <div>${journalEntry.mood}</div>
//    `
//     };

//     renderHTML(entries) {
//         const targetLocation = document.querySelector(".entryLog");
//         entries.forEach(entry =>) {
//             targetLocation.innerHTML += this.makeHTML(journalEntry)
//         }
//     }
// }



// //fetch page
// const entriesUrl = "http://localhost:8088/entries";

// .then(parsedDataFromApi => {
//     console.table(parsedDataFromApi)
//     parsedDataFromApi.forEach(entry => {
//         targetLocation.innerHTML += makeHTML(entry)
//     })
// }

// const fetchObject = {
//         fetchAndParseData() {
//             return fetch(entriesUrl).then(responseFromApi => responseFromApi.json())
//         }

//     //end fetch page

//     fetchedData  () {
//       const fetchPromise = fetchObject.fetchAndParseData();
//       fetchPromise.then(entriesList => {
//           entriesList.forEach(entry => {

//           })
//       })
//     }
// }