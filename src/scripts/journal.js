import API from "./data.js"
import renderHTML from "./entriesDOM.js";
import events from "./addEventListener.js"

events.addSubmitListener();
events.addFilterListener();
events.addDeleteButtonListener();
events.addEditButtonListener();


API.getJournalEntries().then(renderHTML)