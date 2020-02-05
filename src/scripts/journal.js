import API from "./data.js"
import renderHTML from "./entriesDOM.js";
import events from "./addEventListener.js"

events.addEventListener();
events.addFilterListener();

API.getJournalEntries().then(renderHTML)



