import API from "./data.js"
import renderHTML from "./entriesDOM.js";

API.getJournalEntries().then(renderHTML)