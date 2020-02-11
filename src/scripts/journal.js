import API from "./data.js"
import renderHTML from "./entriesDOM.js";
import events from "./addEventListener.js"

events.addSubmitListener();
events.addFilterListener();
events.addDeleteButtonListener();
events.addEditButtonListener();
events.searchFilter();

API.getJournalEntries().then(renderHTML)