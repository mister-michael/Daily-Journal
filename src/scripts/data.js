const baseUrl = "http://localhost:8088/entries";
const urlExpanded = "http://localhost:8088/entries?_expand=mood";

const API = {
    getJournalEntries() {

        return fetch(urlExpanded)
            .then(responseFromApi => responseFromApi.json())
    },
    saveJournalEntry(entry) {

        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    deleteEntry(buttonId) {
        return fetch(`http://localhost:8088/entries/${buttonId}`, {
            method: "DELETE"
        })
    },
    updateEntry(journalEntry) {
        return fetch(`${baseUrl}/${journalEntry.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntry)
        })
    },
};

// const targetHidden = document.getElementById(entryId)
// const hiddenValue = targetHidden.value
// console.log(hiddenValue)


export default API;