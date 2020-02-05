import API from "./data.js"
import renderHTML from "./entriesDOM.js";
import addEventListener from "./addEventListener.js"

addEventListener();

API.getJournalEntries().then(renderHTML)
