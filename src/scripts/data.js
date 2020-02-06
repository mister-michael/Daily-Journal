const url = "http://localhost:8088/entries"

const API = {
    getJournalEntries() {

        return fetch(url)
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
        return fetch(`${url}/${journalEntry.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(journalEntry)
        })
    },
};


export default API;