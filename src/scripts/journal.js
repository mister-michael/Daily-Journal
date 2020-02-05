import API from "./data.js"
import renderHTML from "./entriesDOM.js";
import addEventListener from "./addEventListener.js"

addEventListener();

API.getJournalEntries().then(renderHTML)

const targetJuicedFilter = document.getElementById("juiced-filter")
const targetStokedFilter = document.getElementById("stoked-filter")
const targetOkFilter = document.getElementById("ok-filter")
const targetBummedFilter = document.getElementById("bummed-filter")
const targetNhilisticFilter = document.getElementById("nhilistic-filter")


// targetJuicedFilter.addEventListener("click", event => {
//     const juiced = event.target.value;
//     console.log(juiced)

// })
const filterButtonArray = document.getElementsByName("moodFieldset")
console.log(filterButtonArray)

filterButtonArray.forEach(button => {
    button.addEventListener("click", event => {
        const mood = event.target.value;
        console.log(event)
        API.getJournalEntries()
            .then(entries => {
                renderHTML(entries.filter(element => element.mood === mood))
            })
    })})

// targetOkFilter.addEventListener("click", event => {
//     const ok = event.target.value;
//     console.log(ok)
// })

// targetBummedFilter.addEventListener("click", event => {
//     const bummed = event.target.value;
//     console.log(bummed)
// })

// targetNhilisticFilter.addEventListener("click", event => {
//     const nhilistic = event.target.value;
//     console.log(nhilistic)
// })