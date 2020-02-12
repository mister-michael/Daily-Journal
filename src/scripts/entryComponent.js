//journalEntry is defined in entriesDOM as an object within the entries.json array, the properties denoted here are properties of the .json objects

const makeHTML = (journalEntry) => {
    return `
   <h1>${journalEntry.concept}</h1>
    <div>Date: ${journalEntry.date}</div>
    <article>Entry: ${journalEntry.content}</article>
    <div>Mood: ${journalEntry.mood.mood}!</div>
    <div>Instructor: ${journalEntry.instructor.firstName} ${journalEntry.instructor.lastName}</div>
    <button id="editButton--${journalEntry.id}" class="editButton">Edit</button>
    <button id="deleteButton--${journalEntry.id}" class="deleteButton">Delete</button>
   `
};

export default makeHTML;