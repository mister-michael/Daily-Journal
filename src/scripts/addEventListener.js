import API from "./data.js";
import renderHTML from "./entriesDOM.js"

const events = {
    updateFormFields(journalEntryId) {
        const hiddenEntryIdInput = document.querySelector("#entryId");
        const targetDateInput = document.getElementById("journalDate");
        const targetConceptsInput = document.getElementById("conceptsCovered");
        const targetJournalEntryInput = document.getElementById("journalEntry");
        const targetMoodInput = document.getElementById("mood");

        fetch(`http://localhost:8088/entries/${journalEntryId}`)
            .then(resp => resp.json())
            .then(entry => {

                hiddenEntryIdInput.value = entry.id
                targetDateInput.value = entry.date
                targetConceptsInput.value = entry.concept
                targetJournalEntryInput.value = entry.content
                targetMoodInput.value = entry.mood

            })
    },
    clearForm() {

        const targetDateInput = document.getElementById("journalDate");
        const targetConceptsInput = document.getElementById("conceptsCovered");
        const targetJournalEntryInput = document.getElementById("journalEntry");
        const targetMoodInput = document.getElementById("mood");

        const hiddenEntryIdInput = document.getElementById("entryId")

        hiddenEntryIdInput.value = ""
        targetDateInput.value = ""
        targetConceptsInput.value = ""
        targetJournalEntryInput.value = ""
        targetMoodInput.value = ""

    },
    addSubmitListener() {
        //target submit button

        const targetSubmitButton = document.getElementById("submit--button");


        targetSubmitButton.addEventListener("click", () => {

            const targetDateInput = document.getElementById("journalDate");
            const targetConceptsInput = document.getElementById("conceptsCovered");
            const targetJournalEntryInput = document.getElementById("journalEntry");
            const targetMoodInput = document.getElementById("mood");

            const hiddenEntryIdInput = document.getElementById("entryId")

            const journalEntry = {
                "date": targetDateInput.value,
                "concept": targetConceptsInput.value,
                "content": targetJournalEntryInput.value,
                "mood": targetMoodInput.value
            }
            //if else if conditional to alert if an entry field is left blank or run the api.savejournalentry method which posts to json and writes to dom
            if (hiddenEntryIdInput !== "") {
                journalEntry.id = parseInt(hiddenEntryIdInput.value);
                API.updateEntry(journalEntry)
                    .then(() => {
                        API.getJournalEntries()
                            .then(renderHTML)
                            .then(events.clearForm)
                    })
            } else {
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
                    //posts created entry to .json then re-print the entire dom from json which will include the new entry
                    API.saveJournalEntry(journalEntry).then(() => API.getJournalEntries().then(renderHTML))
                        .then(events.clearForm)

                }
            }
        })
    },
    addFilterListener() {
        //target the filter button divs which were each given the same name
        const filterButtonArray = document.getElementsByName("moodFieldset")

        //for each button
        filterButtonArray.forEach(button => {

            //listen for a click
            button.addEventListener("click", event => {

                //define a variable to hold the value="" classification in the button's div
                const mood = event.target.value;

                //fetch the journal entries
                API.getJournalEntries()

                    //then filter out the entries whose object.mood is equal to const mood
                    .then(entries => {
                        renderHTML(entries.filter(element => element.mood === mood))
                    })
            })
        })
    },
    searchFilter() {

        const searchBar = document.querySelector("#searchBar");

        searchBar.addEventListener("keypress", event => {

            if (event.key === 'Enter') {

                API.getJournalEntries()
                    .then(entries => {
                        const entryArray = []
                        entries.forEach(entry => {
                            const entryVals = Object.values(entry)
                            const searchBarInput = searchBar.value

                            for (const val of entryVals) {
                                if (typeof val === 'string' && val.includes(searchBarInput) && !entryArray.includes(entry)) {
                                    entryArray.push(entry)
                                }
                            }
                            //look into break to break out of loop
                        })
                        renderHTML(entryArray)
                    })
            }
        })
    },
    addDeleteButtonListener() {
        //target the dom location for all printed entries
        const targetDom = document.querySelector(".entryLog");

        //add event listener to targetDom
        targetDom.addEventListener("click", event => {

            //target ids that start with button-- (which are the buttons) by setting that condition
            if (event.target.id.startsWith("deleteButton--")) {
                //denote the entry to delete by targeting the id of the entry which meets the condition
                //split button--# into array [button, #]
                //specify the # by denoting array position [1]
                const entryToDelete = event.target.id.split("--")[1]

                //fetch delete method which takes an index as its parameter removes that entry from .json
                //the index we isolated with the split
                API.deleteEntry(entryToDelete)
                    //fetch the updated .json and render to the DOM
                    .then(API.getJournalEntries)
                    .then(renderHTML)
            }
        })
    },
    addEditButtonListener() {

        const targetDom = document.querySelector(".entryLog")
        // <button id="editButton--${journalEntry.id}" class="editButton">Edit</button>
        targetDom.addEventListener("click", event => {

            if (event.target.id.startsWith("editButton--")) {
                const journalEntryToEdit = event.target.id.split("--")[1];

                events.updateFormFields(journalEntryToEdit)
            }

        })
    }
}
export default events;