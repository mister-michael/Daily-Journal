import API from "./data.js"
import renderHTML from "./entriesDOM.js";
import events from "./addSubmitListener.js"

events.addSubmitListener();
events.addFilterListener();
events.addDeleteButtonEL();

API.getJournalEntries().then(renderHTML)