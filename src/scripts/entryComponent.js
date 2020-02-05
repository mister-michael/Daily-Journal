//journalEntry is defined in entriesDOM as an object within the entries.json array, the properties denoted here are properties of the .json objects

const makeHTML = (journalEntry) => {
    return `
   <h1>${journalEntry.concept}</h1>
    <div>${journalEntry.date}</div>
    <article>${journalEntry.content}</article>
    <div>"${journalEntry.mood}!"</div>
    <button id="button--${journalEntry.id}" class="deleteButton">Delete</button>
   `
};

export default makeHTML;