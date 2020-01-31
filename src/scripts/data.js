const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(responseFromApi => responseFromApi.json())
    }
}

export default API;