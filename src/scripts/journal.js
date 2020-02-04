import API from "./data.js"
import renderHTML from "./entriesDOM.js";
import url from "./data.js"
// import makeHTML from "./entryComponent";

API.getJournalEntries().then(renderHTML)

const targetSubmitButton = document.getElementById("submit--button");

targetSubmitButton.addEventListener("click", () => {
    let dateOutput = ""
    let conceptsOutput = ""
    let journalEntryOutput = ""
    let moodOutput = ""

    const targetDateInput = document.getElementById("journalDate");
    const targetConceptsInput = document.getElementById("conceptsCovered");
    const targetJournalEntryInput = document.getElementById("journalEntry");
    const targetMoodInput = document.getElementById("mood");

    if (targetDateInput.value === "") {
        alert("you forgot the date, dummy")
    } else {
        dateOutput = targetDateInput.value
    }

    if (targetConceptsInput.value === "") {
        alert("you forgot the concept, dummy")
    } else {
        conceptsOutput = targetConceptsInput.value
    }

    if (targetJournalEntryInput.value === "") {
        alert("you forgot the entry, dummy")
    } else {
        journalEntryOutput = targetJournalEntryInput.value
    };

    if (targetMoodInput.value === "") {
        alert("you forgot your mood, dummy")
    } else {
        moodOutput = targetMoodInput.value;
    }

    console.log(dateOutput, conceptsOutput, journalEntryOutput, moodOutput)

    const newJournalEntry = {
    
            
                "date": dateOutput,
                "concept": conceptsOutput,
                "content": journalEntryOutput,
                "mood": moodOutput
    }

    console.log(newJournalEntry)

    fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
        .then(resp => resp.json())
        API.getJournalEntries().then(renderHTML)
})

addMoodFilterClickeEventListener = (evt) => {

}








// targetSubmitButton.addEventListener("click", function (evt) {

// })

// buttonElement.addEventListener('click', function (event) {
//     alert('Element clicked through function!');
//   });