// const journalEntry =
// {
//     date: "01/21/2020",
//     concept: "JSON",
//     content: "We learned about JSON files",
//     mood: "sublime",
// }

// let journalEntries = [];

// journalEntries.push(journalEntry);

const makeHTML = (journalEntry) => {
    return `
   <h2>${journalEntry.concept}</h2>
   <div>${journalEntry.date}</div>
   <article>${journalEntry.content}</article>
   <div>${journalEntry.mood}</div>
   `
};

// const renderJournalEntries = (entries) => {
    const targetLocation = document.querySelector(".entryLog");
//     for (let i = 0; i < entries.length; i++) {
//         const entry = entries[i];
//         targetLocation.innerHTML += makeJournalEntryComponent(entry);
//     }
// }

// renderJournalEntries(journalEntries);

// console.log(journalEntries)

fetch("http://localhost:8088/entries")
    .then(responseFromApi => responseFromApi.json())
    .then(parsedDataFromApi => {
        console.table(parsedDataFromApi)
        parsedDataFromApi.forEach(entry => {
            targetLocation.innerHTML += makeHTML(entry)})})