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


export {
  users, contacts,  diffusions, archives, groupes, conversations,
  saveData, loadData // pour utilisation dans main.js
};
// Données des utilisateurs
const users = [
  {
    id: 1,
    nom: "Paul",
    telephone: "772995851",
    avatar: "https://via.placeholder.com/50/4A90E2/FFFFFF?text=AD",
    statut: "en ligne"
  },
  {
    id: 2,
    nom: "Pape Mor",
    telephone: "774818035",
    avatar: "https://via.placeholder.com/50/E74C3C/FFFFFF?text=MB",
    statut: "absent"
  },
  {
    id: 3,
    nom: "Pathe",
    telephone: "781562041",
    avatar: "https://via.placeholder.com/50/9B59B6/FFFFFF?text=FS",
    statut: "en ligne"
  },
  {
    id: 4,
    nom: "Amy Colle",
    telephone: "781030848",
    avatar: "https://via.placeholder.com/50/27AE60/FFFFFF?text=IF",
    statut: "occupé"
  }
];

// Groupes
const groupes = [
  {
    id: 1,
    nom: "Projet SEEK",
    participants: ['Paul', 'Amy', 'Pathe', 'Leytyr'],
    avatar: "https://via.placeholder.com/50/F39C12/FFFFFF?text=FD",
    dernierMessage: "Bonsoir Merci de répondre au sondage",
    heure: "16:00",
    nonLus: 5,
    administrateur: "Paul"
  },
  {
    id: 2,
    nom: "P7 dev web",
    participants: ['Paul', 'Amy'],
    avatar: "https://via.placeholder.com/50/8E44AD/FFFFFF?text=TD",
    dernierMessage: `
    Livrable 1 (Pour Mardi 27/05/2025 a  8h) : 
    design 
    ajout de contact
    ajout de groupe
    afficher la liste de contacts
    afficher la liste des groupes
    ajout des membres d’un groupe`,
    heure: "09:42",
    nonLus: 15,
    administrateur: "Me"
  }
];

// Diffusions
const diffusions = [
 
  {
    id: 2,
    nom: "Actualités Famille",
    destinataires: ["Paul", "Pape Mor", "Pathe","Amy Colle"],
    dernierMessage: "Félicitations pour le baptême !",
    heure: "11:20",
    createur: "sems"
  }
];

// Archives
const archives = [
  {
    id: 1,
    nom: "Aissatou diop Bangaly",
    type: "privee",
    dernierMessage: "Bonne chance aicha",
    dateArchivage: "2024-01-10",
    avatar: "https://via.placeholder.com/50/95A5A6/FFFFFF?text=CS"
  }
];

import man from './man.png'

const conversations = [
  {
    id: 1,
    participants: [1, 2],
    nom: "Paul",
    avatar:man,
    dernierMessage: "Inshallah à demain",
    heure: "14:25",
    nonLus: 1
  },
  {
    id: 2,
    participants: [1, 3],
    nom: "Pathe",
    avatar: man,
    dernierMessage: "Machallah très bien",
    heure: "13:45",
    nonLus: 2
  },
  {
    id: 3,
    participants: [1, 4],
    nom: "Amy Colle ",
    avatar: man,
    dernierMessage: "Baraka Allahu fik",
    heure: "12:30",
    nonLus: 1
  }
];

// Messages
const messages = [
  {
    id: 1,
    conversationId: 1,
    expediteur: 2,
    contenu: "Salam aleykoum Aminata",
    heure: "14:20",
    statut: "lu"
  },
  {
    id: 2,
    conversationId: 1,
    expediteur: 1,
    contenu: "Wa aleykoum salam Mamadou, comment tu vas ?",
    heure: "14:22",
    statut: "lu"
  },
  
  {
    id: 4,
    conversationId: 1,
    expediteur: 2,
    contenu: "Inshallah à demain",
    heure: "14:25",
    statut: "lu"
  }
 ,
  
];



export {users,messages,diffusions,archives,groupes,conversations}