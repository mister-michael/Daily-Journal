import API from "./data.js";
import renderHTML from "./entriesDOM.js"

const addEventListener = () => {
    const targetSubmitButton = document.getElementById("submit--button");

    targetSubmitButton.addEventListener("click", () => {

        const targetDateInput = document.getElementById("journalDate");
        const targetConceptsInput = document.getElementById("conceptsCovered");
        const targetJournalEntryInput = document.getElementById("journalEntry");
        const targetMoodInput = document.getElementById("mood");

        //if else if conditional to alert if an entry field is left blank or run the api.savejournalentry method which posts to json and writes to dom

        if (targetDateInput.value === "") {
            alert("you forgot the date, dummy")
        } else if (targetConceptsInput.value === "") {
            alert("you forgot the concept, dummy")
        } else if (targetJournalEntryInput.value === "") {
            alert("you forgot the entry, dummy")
        } else if (targetMoodInput.value === "") {
            alert("you forgot your mood, dummy")
        } else {

            // newJournalEntry is the object which will be posted to entries.json
            const newJournalEntry = {

                "date": targetDateInput.value,
                "concept": targetConceptsInput.value,
                "content": targetJournalEntryInput.value,
                "mood": targetMoodInput.value
            }

            //posts created entry to .json then re-print the entire dom from json which will include the new entry
            API.saveJournalEntry(newJournalEntry).then(() => API.getJournalEntries().then(renderHTML))
        }
    })
}

export default addEventListener;