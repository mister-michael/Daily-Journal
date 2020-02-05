import API from "./data.js"
import renderHTML from "./entriesDOM.js";
import events from "./addEventListener.js"

events.addEventListener();
events.addFilterListener();
events.addDeleteButtonEL();

API.getJournalEntries().then(renderHTML)



