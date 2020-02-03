const makeHTML = (journalEntry) => {
    return `
   <h1>${journalEntry.concept}</h1>
    <div>${journalEntry.date}</div>
    <article>${journalEntry.content}</article>
    <div>${journalEntry.mood}</div>
   `
};


export default makeHTML;