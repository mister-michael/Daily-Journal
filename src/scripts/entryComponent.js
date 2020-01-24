const makeHTML = (journalEntry) => {
    return `
   <h1>${journalEntry.concept}</h1>
    <div>${journalEntry.date}</div>
    <article>${journalEntry.content}</article>
    <div>${journalEntry.mood}</div>
   `
};




// const makeHTML = (journalEntry) => {
//     return `
//    <h2>${journalEntry.concept}</h2>
//    <div>${journalEntry.date}</div>
//    <article>${journalEntry.content}</article>
//    <div>${journalEntry.mood}</div>
//    `
// };

