const url = "http://localhost:8088/entries"

const API = {
    getJournalEntries() {
        return fetch(url)
            .then(responseFromApi => responseFromApi.json())
    }
}

export default API;