const makeHTML = (journalEntry) => {
    return `
   <h2>${journalEntry.concept}</h2>
   <div>${journalEntry.date}</div>
   <article>${journalEntry.content}</article>
   <div>${journalEntry.mood}</div>
   `
};

const targetLocation = document.querySelector(".entryLog");

fetch("http://localhost:8088/entries")
    .then(responseFromApi => responseFromApi.json())
    .then(parsedDataFromApi => {
        console.table(parsedDataFromApi)
        parsedDataFromApi.forEach(entry => {
            targetLocation.innerHTML += makeHTML(entry)
        })
    })