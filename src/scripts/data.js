const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(responseFromApi => responseFromApi.json())
    }
}











// const API = {
//     //line below is the same as getJournalEntries: function () {
//     getJournalEntries () {
//     return fetch("http://localhost:8088/entries")
//     .then(responseFromApi => responseFromApi.json())
//     }
// }