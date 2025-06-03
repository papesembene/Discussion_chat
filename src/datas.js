const defaultUsers = [
  { id: 1, nom: "Paul", telephone: "772995851" },
  { id: 3, nom: "Pathe", telephone: "781562041" },
  { id: 4, nom: "Amy Colle", telephone: "781030848" },
  { id: 5, nom: "Pape", telephone: "781157773" },
  { id: 6, nom: "Mum", telephone: "784529557" }
];
const defaultContacts = [];
const defaultGroupes = [
  
];
const defaultDiffusions = [];
const defaultArchives = [];
const defaultConversations = [];
// const defaultMessages = [];

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key, defaultValue) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

const users = loadData('users', defaultUsers);
const contacts = loadData('contacts', defaultContacts);
const groupes = loadData('groupes', defaultGroupes);
const diffusions = loadData('diffusions', defaultDiffusions);
const archives = loadData('archives', defaultArchives);
const conversations = loadData('conversations', defaultConversations);
// const messages = loadData('messages', defaultMessages);

export {
  users, contacts,  diffusions, archives, groupes, conversations,
  saveData, loadData // pour utilisation dans main.js
};