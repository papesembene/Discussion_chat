import './style.css'
import './index.css'
import { createElement } from './composant.js'
import { users, contacts, archives, groupes, conversations,diffusions, saveData } from './datas.js'
import { checkRequired } from './validations.js'
import { initAuth, getCurrentUser,logout} from './auth.js';

initAuth(); 

const btnmessage = createElement('button', { class: 'flex justify-center items-center flex-col w-[70px] h-[70px] border border-yellow-500 p-4 rounded', id: 'btnmessage' });
const btngroups = createElement('button', { id: 'btngroup', class: 'flex justify-center items-center flex-col w-[70px] h-[70px] border border-yellow-500 p-4 rounded' });
const btndiff = createElement('button', { class: 'flex justify-center items-center flex-col w-[70px] h-[70px] border border-yellow-500 p-4 rounded', id: 'btndiff' });
const btnarchive = createElement('button', { id: 'btnarchive', class: 'flex justify-center items-center flex-col w-[70px] h-[70px] border border-yellow-500 p-4 rounded' });
const btndecconnexion = createElement('button', { id: 'btndeconn', class: 'flex justify-center items-center flex-col w-[70px] h-[70px] border border-yellow-500 p-4 rounded' });

const btnnew = createElement('button', { id: 'btnadd', class: 'flex justify-center items-center flex-col w-[70px] h-[70px] border border-yellow-500 p-4 rounded' });
const btnbackspace = createElement('button', { class: 'flex justify-center items-center  w-[40px] h-[40px] border border-yellow-500  rounded-[50%]' });
const btnarchive2 = createElement('button', {
  class: 'flex justify-center items-center w-[40px] h-[40px] border border-yellow-500 rounded-[50%]',
  title: 'Archiver la conversation sélectionnée',
  onclick: () => {
    if (selectedConversationIndex !== null) {
      const conversation = conversations[selectedConversationIndex];
      archives.push({ ...conversation, ownerId: getCurrentUser().id });
      saveData('archives', archives);
      conversations.splice(selectedConversationIndex, 1);
      saveData('conversations', conversations);
      selectedConversationIndex = null;
      document.getElementById('message-left').innerHTML = '';
      document.getElementById('current-info').innerHTML = '';
      document.getElementById('btnmessage').click();
    } else {
      showToast("Veuillez sélectionner une conversation à archiver.");
    }
  }
});
const btnsquare = createElement('button', { class: 'flex justify-center items-center  w-[40px] h-[40px] border border-yellow-500  rounded-[50%]' });
const btndelete = createElement('button', { class: 'flex justify-center items-center  w-[40px] h-[40px] border border-yellow-500  rounded-[50%]' });
const btnsend = createElement('button', { class: 'flex justify-center items-center w-[40px] h-[40px] bg-black text-white rounded-[50%] my-2 mx-4' });
const btnnewgroup = createElement('button', { id: 'btnnewgroup', class: 'flex justify-center items-center flex-col w-[70px] h-[70px]  p-4 rounded', title: 'ajouter un nouveau groupe' });
const iconenewgroupe = createElement('span', { class: 'text-black flex justify-center items-center' });
const iconeSlidersGroup = createElement('span', { class: 'text-black flex justify-center items-center' });
  
// Ajout des icônes aux boutons
iconenewgroupe.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>`;
btnnewgroup.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/></svg>`;
btnsend.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>`;
btnsquare.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-square-fill" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/></svg>`;
btndelete.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg>`;
btnmessage.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/></svg><span>Messages</span>`;
btngroups.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/></svg><span>Groupes</span>`;
btndiff.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 16a3 3 0 0 0-1.73.56l-2.45-1.45A3.7 3.7 0 0 0 16 14a4 4 0 0 0-3-3.86V7.82a3 3 0 1 0-2 0v2.32A4 4 0 0 0 8 14a3.7 3.7 0 0 0 .18 1.11l-2.45 1.45A3 3 0 0 0 4 16a3 3 0 1 0 3 3a3 3 0 0 0-.12-.8l2.3-1.37a4 4 0 0 0 5.64 0l2.3 1.37A3 3 0 1 0 20 16M4 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1m8-16a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0 12a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"/></svg><span>Diffusions</span>`;
btnarchive.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16"><path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/></svg><span>Archives</span>`;
btndecconnexion.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z"/>
  <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
</svg>
<span>Déconnexion</span>
`
btndecconnexion.addEventListener('click', () => {
  if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
    logout(); 
  }
});
btnnew.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/></svg><span>Nouveau</span>`;
btnbackspace.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L3.707 7.5H14.5A.5.5 0 0 1 15 8"/></svg>`;
btnarchive2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16"><path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/></svg>`;
iconeSlidersGroup.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-wide-connected" viewBox="0 0 16 16">
  <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/>
</svg>
`;
// Layout principal
const main_content = createElement('div', {
  class: 'flex my-8 w-full mx-[90px] h-[850px] rounded-lg shadow-lg px-4 shadow-xl/30'
});
// Création des sections du layout
const Fcontent = createElement('div', { class: 'flex flex-col gap-1.5 w-[8%] bg-[#F0EFE8] h-9/10 mx-0 text-black justify-center items-center' }, [btnmessage, btngroups, btndiff, btnarchive, btnnew,btndecconnexion]);
const Scontent = createElement('div', { class: 'w-[25%] bg-[#F9F7F5] h-9/10 mx-0 text-black text-2xl font-bold' }, [
  createElement('div', { class: 'mx-4 my-2' }, 'Discussions'),
  createElement('input', { 
    class: 'block py-2.5 mx-4 w-[300px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:text-black dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer'
    , placeholder: 'Recherche', 
    type: 'text' ,
    id:'searchInput'
  }),
  createElement('div', {}, btnnewgroup)
]);

let currentconversation = [];
let currentgroup = null; 
let utilisateursSelectionnes = [];

// Création de la barre d'outils 
const toolbarActions = createElement('div', {
  id: 'toolbar-actions',
  class: `flex m-4 gap-2`
}, [btnbackspace, btnarchive2, btnsquare, btndelete]);


const Tcontent = createElement('div', { class: 'w-[67%] bg-[#EFE7D9] h-9/10 mx-0' }, [
  createElement('div', { class: 'flex justify-between border-b-2 border-white text-black' }, [
    createElement('div', { class: `flex flex-col`, id: 'current-info-bar' }, [
      createElement('div', { class: 'flex items-center' }, [
        createElement('div', { class: 'w-[50px] h-[50px] rounded-[50%] bg-yellow-500 m-4', id: 'current-avatar' }, ''),
        createElement('div', { class: 'm-4 mx-0 text-lg text-4 font-bold', id: 'current-info' }, '')
      ]),
      createElement('div', { class: 'ml-4 text-xs text-gray-600 flex justify-center gap-4', id: 'current-members' }, '')
    ]),
    toolbarActions
  ]),
  createElement('div', { class: 'flex justify-between border-b-2 border-white h-[700px]' }, [
    createElement('div', { id: 'message-left', class: 'w-full p-4' })
  ]),
  createElement('div', {}, createElement('div', { class: 'flex justify-between border-b-2 border-white h-[65px]' }, [
    createElement('input', { class: 'my-4 mx-4 bg-white border border-gray-400 rounded-[10px] px-2 py-1 w-[1000px] placeholder-gray-400 text-black text-sm', placeholder: '', type: 'text', id: 'inputField' }),
    btnsend
  ]))
]);
//ajout des sections au main 
main_content.appendChild(Fcontent);
main_content.appendChild(Scontent);
main_content.appendChild(Tcontent);
const app = document.getElementById('app');
app.appendChild(main_content);

btndiff.addEventListener('click', () => {
  console.log('diffusion');
  btndiff.style.backgroundColor = '#E1B44A';
  btnmessage.style.backgroundColor = 'transparent';
  btngroups.style.backgroundColor = 'transparent';
  btnarchive.style.backgroundColor = 'transparent';
  btnnew.style.backgroundColor = 'transparent';
  clearUsersContainer();
  let selectedContacts = [];
  const container = createElement('div', { id: 'usersContainer', class: 'mx-6 text-lg' });
  contacts
    .filter(c => c.ownerId === getCurrentUser().id)
    .forEach(user => {
      const initiales = user.nom.split(' ').map(part => part[0]?.toUpperCase()).join('').slice(0, 2);
      const avatar = createElement('div', {
        class: 'w-10 h-10 bg-[#E1B44A] text-white rounded-full flex items-center justify-center font-bold text-sm'
      }, initiales);
      const name = createElement('span', { class: 'ml-2 font-medium text-base' }, user.nom);
      const checkbox = createElement('input', {
        type: 'checkbox',
        class: 'w-5 h-5 accent-yellow-500',
        onchange: (e) => {
          if (e.target.checked) {
            selectedContacts.push(user);
          } else {
            selectedContacts = selectedContacts.filter(u => u.id !== user.id);
          }
        }
      });
      const line = createElement('div', {
        class: 'flex items-center justify-between border border-gray-300 rounded-[10px] my-2 p-3 hover:bg-yellow-50 transition'
      }, [
        createElement('div', { class: 'flex items-center' }, [avatar, name]),
        checkbox
      ]);
      container.appendChild(line);
    });
    Scontent.appendChild(container);

  const inputField = document.getElementById('inputField');
  if (inputField) {
    inputField.value = '';
    inputField.placeholder = "Votre message ...";
    inputField.onkeydown = null;
    inputField.onkeyup = function(e) {
      if (e.key === 'Enter' && inputField.value.trim() && selectedContacts.length > 0) {
        const messageText = inputField.value.trim();
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        selectedContacts.forEach(user => {
          let conv = conversations.find(c =>
            c.participants.length === 2 &&
            c.participants.includes(getCurrentUser().id) &&
            c.participants.includes(user.id)
          );
          if (!conv) {
            conv = {
              id: conversations.length + 1,
              ownerId: getCurrentUser().id,
              participants: [getCurrentUser().id, user.id],
              nom: user.nom,
              avatar: '',
              dernierMessage: '',
              heure: '',
              nonLus: { [getCurrentUser().id]: 0, [user.id]: 0 },
              messages: [],
              brouillon: ''
            };
            conversations.push(conv);
          }     
          conv.messages.push({
            expediteur: getCurrentUser().id,
            contenu: messageText,
            heure: currentTime
          });
          conv.dernierMessage = messageText;
          conv.heure = currentTime;
          conv.nonLus[user.id] = (conv.nonLus[user.id] || 0) + 1;
        });
        saveData('conversations', conversations);
        inputField.value = '';     
        btnmessage.click();
        showToast('Message envoyé à tous les contacts sélectionnés !');
      }
    };
  }
});

/**
 * @returns {void}
 * @description  clear le conteneur .
 */
function clearUsersContainer() {
  const existing = document.getElementById('usersContainer');
  if (existing) existing.remove();
}


/**
 * 
 * @returns {HTMLElement} - Un  div .
 * @description Affiche la liste des contacts de l'utilisateur actuel.
 */
function displayContact() {
  if (document.getElementById('usersContainer')) return;
  const getInitiales = (nom) => nom.split(' ').map(part => part[0]?.toUpperCase()).join('').slice(0, 2);
  return createElement('div', {
    id: 'usersContainer',
    class: 'mx-6 text-lg',
    vFor: {
      each: contacts.filter(c => c.ownerId === getCurrentUser().id),
      render: (user) => {
        const initiales = getInitiales(user.nom);
        const initialCircle = createElement('div', { class: 'w-10 h-10 bg-[#E1B44A] text-white rounded-full flex items-center justify-center mr-4 font-bold text-sm' }, initiales);
        const userInfo = createElement('div', { class: 'flex items-center gap-2' }, [initialCircle, createElement('span', {}, user.nom)]);
        return createElement('div', { class: 'w-[100%] h-[30%] border border-gray-400 rounded-[10px] my-4 p-4 flex justify-between items-center' }, [
          userInfo,
          createElement('div', {}, createElement('input', { type: 'checkbox', class: 'w-5 h-5 border-2 border-blue-600 rounded-sm' }))
        ]);
      }
    }
  });
}
let selectedConversationIndex = null;
let selectedGroupIndex = null; 
document.getElementById('btnmessage').addEventListener('click', () => {
  btnmessage.style.backgroundColor = '#E1B44A';
  btndiff.style.backgroundColor = 'transparent';
  btnnew.style.backgroundColor = 'transparent';
  btnarchive.style.backgroundColor = 'transparent';
  btngroups.style.backgroundColor = 'transparent';
  clearUsersContainer(); 
  if (document.getElementById('usersContainer')) return;
  const allusers = createElement('div', {
    id: 'usersContainer',
    class: 'mx-6 text-lg ',
    vFor: {
      each: conversations.filter(c => c.participants && c.participants.includes(getCurrentUser().id)),
      render: (conversation, index) => {
    
        const lastMsg = conversation.messages && conversation.messages.length > 0
          ? conversation.messages[conversation.messages.length - 1]
          : null;
        let expediteurAffichage = '';
        if (lastMsg && lastMsg.expediteur !== getCurrentUser().id) {
          const expediteur = users.find(u => u.id === lastMsg.expediteur);
          if (expediteur) {
            const contact = contacts.find(
              c => c.ownerId === getCurrentUser().id && c.telephone === expediteur.telephone
            );
            expediteurAffichage = contact ? contact.nom : expediteur.telephone;
          }
        }
        return createElement('div', {
          class: `transition ease-in-out delay-150 hover:bg-yellow-200 hover:scale-105 conversation-item w-full border border-gray-400 rounded-[10px] my-4 p-4 flex gap-4 cursor-pointer`,
          onclick: function () {
            document.querySelectorAll('.conversation-item').forEach(el => el.classList.remove('bg-[#F3F4F6]', 'border-yellow-500'));
            this.classList.add('bg-[#F3F4F6]', 'border-yellow-500');
            selectedConversationIndex = index;
            selectedGroupIndex = null;
            currentconversation = conversation;
            displayMessages(conversation);
            const inputField = document.getElementById('inputField');
          if (inputField) {
            inputField.oninput = function() {
              if (selectedConversationIndex !== null && selectedGroupIndex === null) {
                conversations[selectedConversationIndex].brouillon = inputField.value;
                saveData('conversations', conversations);
                document.getElementById('btnmessage').click();
              }
            };
          }

          }
        }, [
          createElement('div', { class: 'w-[50px] h-[50px] rounded-full bg-[#E1B44A] flex items-center justify-center text-white font-bold ' }, conversation.nom ? conversation.nom.charAt(0).toUpperCase() : 'U'),
          createElement('div', { class: 'flex flex-col flex-1' }, [
            createElement('div', { class: 'flex justify-between items-center' }, [
              createElement('span', { class: 'text-sm font-medium text-black' },
                expediteurAffichage
                  ? `${expediteurAffichage} :`
                  : (conversation.nom || 'Utilisateur inconnu')
              ),
              createElement('span', { class: 'text-xs text-gray-500' }, conversation.heure || '')
            ]),
            createElement('div', { class: 'flex justify-between items-center mt-1' }, [
              createElement('span', { class: `text-xs ${conversation.brouillon ? 'text-[red]':'text-gray-600'} truncate max-w-[200px]` },
                conversation.brouillon
                  ? '[Brouillon] ' + conversation.brouillon
                  : (conversation.dernierMessage || 'Pas de messages')
              ),
              conversation.nonLus && conversation.nonLus[getCurrentUser().id] > 0
                ? createElement('span', { class: 'bg-black text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center' }, conversation.nonLus[getCurrentUser().id].toString())
                : null
            ])
          ])
        ]);
      }
    }
  });
  Scontent.appendChild(allusers);
});


const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function () {
    const search = this.value.trim().toLowerCase();
    clearUsersContainer();
    let filteredContacts;
    if (search === '*') {
      filteredContacts = contacts.filter(c => c.ownerId === getCurrentUser().id);
    } else if (search.length === 0) {
      filteredContacts = [];
    } else {
      filteredContacts = contacts.filter(c =>
        c.ownerId === getCurrentUser().id &&
        (
          (c.nom && c.nom.toLowerCase().includes(search)) ||
          (c.telephone && c.telephone.toLowerCase().includes(search))
        )
      );
    }
    const getInitiales = (nom) => nom.split(' ').map(part => part[0]?.toUpperCase()).join('').slice(0, 2);
    const usersContainer = createElement('div', { id: 'usersContainer', class: 'mx-6 text-lg' });

    filteredContacts.forEach(user => {
      const initiales = getInitiales(user.nom);
      const avatar = createElement('div', {
        class: 'w-10 h-10 bg-[#E1B44A] text-white rounded-full flex items-center justify-center font-bold text-sm'
      }, initiales);
      const name = createElement('span', { class: 'ml-2 font-medium text-base' }, user.nom);
      const tel = createElement('span', { class: 'ml-2 text-gray-500 text-sm' }, user.telephone);
      const line = createElement('div', {
        class: 'flex items-center gap-4 border border-gray-300 rounded-[10px] my-2 p-3 hover:bg-yellow-50 transition'
      }, [
        avatar,
        name,
        tel
      ]);
      usersContainer.appendChild(line);
    });

    Scontent.appendChild(usersContainer);
  });
}
/**
 * @returns {void}
 * @description Affiche la liste des groupes auxquels l'utilisateur actuel appartient.
 */
function displayGroup() 
{
  let container = document.getElementById('usersContainer');
  if (!container) {
    container = createElement('div', { id: 'usersContainer', class: 'mx-6 text-lg' });
    Scontent.appendChild(container);
  } else {
    container.innerHTML = '';
  }

  groupes.forEach((groupe, index) => {
    if (!groupe.participants.includes(getCurrentUser().id)) return;
    const groupItem = createElement('div', {
      class: `transition ease-in-out delay-150 hover:bg-yellow-200 hover:scale-105 group-item w-full border border-gray-400 rounded-[10px] my-4 p-4 flex gap-4 cursor-pointer`,
      onclick: function () {
        document.querySelectorAll('.group-item').forEach(el => el.classList.remove('bg-[#F3F4F6]', 'border-yellow-500'));
        this.classList.add('bg-[#F3F4F6]', 'border-yellow-500');
        selectedGroupIndex = groupe.id;
        selectedConversationIndex = null;
        currentgroup = groupe;
        const nomElement = document.getElementById('current-info');
        const membersElement = document.getElementById('current-members');
        if (nomElement) nomElement.textContent = groupe.nom;
        if (membersElement) {
          const membres = groupe.participants
            .map(uid => users.find(u => u.id === uid))
            .filter(Boolean)
            .map(u => u.nom || u.telephone)
            .join(', ');
          membersElement.textContent = `Membres (${groupe.participants.length}) : ${membres}`;
        }
        displayGroupMessages(groupe);
        let btnAddMember = document.getElementById('btnAddMember');
        if (!btnAddMember) {
          btnAddMember = createElement('button', {
            id: 'btnAddMember',
            class: 'bg-[#E1B44A] text-white py-2 px-4 rounded-lg mb-4',
            onclick: () => showAddMemberInterface()
          }, 'Ajouter des membres');
          container.insertBefore(btnAddMember, container.firstChild);
        }
        if (groupe.administrateurs && groupe.administrateurs.includes(getCurrentUser().id)) {
          btnAddMember.classList.remove('hidden');
        } else {
          btnAddMember.classList.add('hidden');
        }
        if (groupe.administrateurs.includes(getCurrentUser().id)) {
          let btnManage = document.getElementById('btnManageMembers');
          if (btnManage) btnManage.remove();
          btnManage = createElement('button', {
            id: 'btnManageMembers',
            class: 'bg-transparent rounded-full ml-2 flex items-center justify-center',
            title: 'Gérer les membres',
            style: 'border: none; outline: none; cursor: pointer;',
            onclick: () => showGroupMembers(groupe)
          }, [iconeSlidersGroup]);
          const membersElement = document.getElementById('current-members');
          if (membersElement) membersElement.appendChild(btnManage);
        }
      }
    }, [
      createElement('div', { class: 'w-[50px] h-[50px] bg-[#E1B44A] text-white rounded-full flex items-center justify-center font-bold text-sm' }, groupe.nom.slice(0, 2).toUpperCase()),
      createElement('div', { class: 'flex flex-col' }, [
        createElement('span', { class: 'text-sm font-medium' }, groupe.nom),
        createElement('span', { class: 'text-xs text-gray-600' }, `participants: ${groupe.participants.length}`)
      ])
    ]);
    container.appendChild(groupItem);
  });
  if (selectedGroupIndex) {
    const groupDivs = container.querySelectorAll('.group-item');
    groupDivs.forEach(div => {
     
      if (div.textContent.includes(groupes.find(g => g.id === selectedGroupIndex).nom)) {
        div.classList.add('bg-[#F3F4F6]', 'border-yellow-500');
      }
    });
  }
}
document.getElementById('btnnewgroup').addEventListener('click', () => {
  clearUsersContainer();
  if (document.getElementById('usersContainer')) return;
  utilisateursSelectionnes = [];
  const getInitiales = (nom) => nom.split(' ').map(part => part[0]?.toUpperCase()).join('').slice(0, 2);
  const input = createElement('input', { type: 'text', placeholder: 'Nom du groupe', class: 'w-full h-[40px] bg-transparent border border-gray-400 rounded-[8px] p-2 mb-4 outline-none' });
  const iconetxt = createElement('div', { class: 'flex items-center gap-2 mb-4 text-black font-semibold' }, [iconenewgroupe]);
  const btnAjouter = createElement('button', {
    id: 'btnAjouter',
    class: 'bg-[#F0EFE8] w-[50px] h-[50px] text-black shadow-lg rounded-full mt-4 flex justify-center items-center transition duration-300',
    style: { display: 'none' },
    onclick: () => {
      const nomGroupe = input.value.trim();
      if (!nomGroupe) {
        showToast('Veuillez entrer un nom de groupe');
        return;
      }
      const participantIds = [getCurrentUser().id, ...utilisateursSelectionnes.map(u => u.id).filter(id => id !== getCurrentUser().id)];
      groupes.push({
        id: groupes.length + 1,
        nom: nomGroupe,
        participants: participantIds,
        administrateurs: [getCurrentUser().id], 
        messages: [],
        brouillon: ''
      });
      saveData('groupes', groupes);

     
utilisateursSelectionnes.forEach(user => {
  if (!users.find(u => u.id === user.id)) {
    users.push({
      id: user.id,
      nom: user.nom,
      telephone: user.telephone
    });
  }
});
saveData('users', users);

      utilisateursSelectionnes = [];
      input.value = '';
      btnAjouter.style.display = 'none';
      displayGroup();
    }
  }, [iconenewgroupe]);
  const usersdiv = createElement('div', { id: 'usersContainer', class: 'mx-6 text-lg' });
  usersdiv.appendChild(iconetxt);
  usersdiv.appendChild(input);
  usersdiv.appendChild(btnAjouter);
  contacts.filter(c => c.ownerId === getCurrentUser().id).forEach(user => {
    const initiales = getInitiales(user.nom);
    const cercleInitiales = createElement('div', { class: 'w-10 h-10 bg-[#E1B44A] text-white rounded-full flex items-center justify-center mr-4 font-bold text-sm' }, initiales);
    const infoNom = createElement('div', { class: 'flex items-center gap-2' }, [cercleInitiales, createElement('span', {}, user.nom)]);
    const checkbox = createElement('input', {
      type: 'checkbox',
      onchange: (e) => {
        if (e.target.checked) utilisateursSelectionnes.push(user);
        else {
          const index = utilisateursSelectionnes.findIndex(u => u.id === user.id);
          if (index !== -1) utilisateursSelectionnes.splice(index, 1);
        }
        btnAjouter.style.display = utilisateursSelectionnes.length > 0 ? 'block' : 'none';
      }
    });
    const userItem = createElement('div', { class: 'w-full border border-gray-400 rounded-[10px] my-4 p-4 flex justify-between items-center' }, [infoNom, createElement('div', {}, checkbox)]);
    usersdiv.appendChild(userItem);
  });
  Scontent.appendChild(usersdiv);
});


/**
 * 
 * @returns {void}
 * @description Affiche l'interface pour ajouter des membres à un groupe sélectionné.
 */
function showAddMemberInterface() {
  const selectedGroup = groupes.find(g => g.id === selectedGroupIndex);
  if (!selectedGroup) return;
 
  
  if (!selectedGroup.administrateurs || !selectedGroup.administrateurs.includes(getCurrentUser().id)) {
    showToast("Seul un administrateur du groupe peut ajouter des membres.");
    return;
  }
  clearUsersContainer();
  let nouveauxMembres = [];
  const getInitiales = (nom) => nom.split(' ').map(part => part[0]?.toUpperCase()).join('').slice(0, 2);
  const container = createElement('div', { id: 'usersContainer', class: 'mx-6 text-lg' });
  const titre = createElement('h3', { class: 'text-lg font-bold mb-4' }, `Ajouter des membres à "${selectedGroup.nom}"`);
  const btnRetour = createElement('button', { class: 'bg-gray-500 text-white py-2 px-4 rounded-lg mb-4 mr-2', onclick: () => { clearUsersContainer(); displayGroup(); } }, 'Retour');
  const btnConfirmer = createElement('button', {
    class: 'bg-[#E1B44A] text-white py-2 px-4 rounded-lg mb-4 hidden',
    onclick: () => {
      nouveauxMembres.forEach(membre => {
        if (!selectedGroup.participants.includes(membre.id)) {
          selectedGroup.participants.push(membre.id);
        }
      });
      saveData('groupes', groupes);
      showToast(`${nouveauxMembres.length} membre(s) ajouté(s) au groupe "${selectedGroup.nom}"`);
      clearUsersContainer();
      displayGroup();
      displayGroupMessages(selectedGroup);
    }
  }, 'Confirmer');
  container.appendChild(titre);
  container.appendChild(btnRetour);
  container.appendChild(btnConfirmer);
  contacts.filter(user => user.ownerId === getCurrentUser().id && !selectedGroup.participants.includes(user.id)).forEach(user => {
    const initiales = getInitiales(user.nom);
    const cercleInitiales = createElement('div', { class: 'w-10 h-10 bg-[#E1B44A] text-white rounded-full flex items-center justify-center mr-4 font-bold text-sm' }, initiales);
    const infoNom = createElement('div', { class: 'flex items-center gap-2' }, [cercleInitiales, createElement('span', {}, user.nom)]);
    const checkbox = createElement('input', {
      type: 'checkbox',
      class: 'w-5 h-5',
      onchange: (e) => {
        if (e.target.checked) nouveauxMembres.push(user);
        else {
          const index = nouveauxMembres.findIndex(u => u.id === user.id);
          if (index !== -1) nouveauxMembres.splice(index, 1);
        }
        if (nouveauxMembres.length > 0) btnConfirmer.classList.remove('hidden');
        else btnConfirmer.classList.add('hidden');
      }
    });
    const userItem = createElement('div', { class: 'w-full border border-gray-400 rounded-[10px] my-2 p-4 flex justify-between items-center' }, [infoNom, createElement('div', {}, checkbox)]);
    container.appendChild(userItem);
  });
  Scontent.appendChild(container);
}

btnsend.addEventListener('click', () => {
  const messageText = document.getElementById('inputField').value.trim();
  if (!messageText) return;
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  if (selectedConversationIndex !== null && selectedGroupIndex === null) {
    const conversation = conversations[selectedConversationIndex];
    if (!conversation.messages) conversation.messages = [];
    conversation.messages.push({
      expediteur: getCurrentUser().id,
      contenu: messageText,
      heure: currentTime
    });
    conversation.dernierMessage = messageText;
    conversation.heure = currentTime;
    conversation.brouillon = '';
    saveData('conversations', conversations);
    document.getElementById('inputField').value = '';
    displayMessages(conversation);
    btnmessage.click();
    return; 
  }

  if (selectedGroupIndex !== null && selectedConversationIndex === null) {
    const groupe = groupes.find(g => g.id === selectedGroupIndex);
    if (!groupe) return;
    if (!groupe.messages) groupe.messages = [];
    groupe.messages.push({
      expediteur: getCurrentUser().id,
      contenu: messageText,
      heure: currentTime
    });
    groupe.dernierMessage = messageText;
    groupe.heure = currentTime;
    saveData('groupes', groupes);
    document.getElementById('inputField').value = '';
    displayGroupMessages(groupe);
    displayGroup();
  }
});

/**
 * 
 * @param {Array} conversation 
 * @returns {void}
 * @description Affiche les messages d'une conversation .
 */
function displayMessages(conversation) {
  reloadData();
  const nomElement = document.getElementById('current-info');
  const membersElement = document.getElementById('current-members');
  if (nomElement) {

  let displayName = conversation.nom;
 
  if (!displayName) {
    const otherId = conversation.participants.find(id => id !== getCurrentUser().id);
    let otherUser = users.find(u => u.id === otherId);
    if (!otherUser) {
      const convContact = contacts.find(c => c.id === otherId);
      if (convContact) {
        displayName = convContact.nom || convContact.telephone;
      } else {
        displayName = 'Utilisateur inconnu';
      }
    } else {
      const contact = contacts.find(
        c => c.ownerId === getCurrentUser().id && c.telephone === otherUser.telephone
      );
      displayName = contact ? contact.nom : (otherUser.nom || otherUser.telephone);
    }
  }
  nomElement.textContent = displayName;
}
  if (membersElement) membersElement.textContent = '';

  const msgcontainer = document.getElementById('message-left');
  msgcontainer.innerHTML = '';

  const inputField = document.getElementById('inputField');
  if (inputField) {
    if (conversation.brouillon) {
      inputField.value = conversation.brouillon;
    } else {
      inputField.value = '';
    }
  }

  if (!conversation.messages || conversation.messages.length === 0) {
    const nonMessage = createElement('div', { class: 'flex justify-center items-center h-full text-gray-500' }, 'Aucun message dans cette conversation');
    msgcontainer.appendChild(nonMessage);
    return;
  }

  conversation.messages.forEach(msg => {
    const isMine = msg.expediteur === getCurrentUser().id;
    let expediteurUser = users.find(u => u.id === msg.expediteur);
    if (!expediteurUser) {
      const convContact = contacts.find(c => c.id === msg.expediteur);
      if (convContact) {
        expediteurUser = users.find(u => u.telephone === convContact.telephone);
      }
    }
    let expediteurNom = null;
    if (!isMine && expediteurUser) {
      const contact = contacts.find(
        c => c.ownerId === getCurrentUser().id && c.telephone === expediteurUser.telephone
      );
      expediteurNom = contact ? contact.nom : (expediteurUser.nom || expediteurUser.telephone);
    }

    const msgdiv = createElement('div', { class: `flex mb-4 ${isMine ? 'justify-end' : 'justify-start'}` }, [
      createElement('div', {
        class: `max-w-[70%] p-3 rounded-lg ${isMine ? 'bg-[#E1B44A] text-white rounded-br-none' : 'bg-white text-black border border-gray-200 rounded-bl-none'}`
      }, [
        !isMine ? createElement('div', { class: 'font-bold text-xs mb-1' }, expediteurNom) : null,
        createElement('div', {}, msg.contenu),
        createElement('div', { class: `text-xs mt-1 ${isMine ? 'text-yellow-100' : 'text-gray-500'}` }, msg.heure)
      ])
    ]);
    msgcontainer.appendChild(msgdiv);
  });
  msgcontainer.scrollTop = msgcontainer.scrollHeight;
}


// Ajout d'un contact
document.getElementById('btnadd').addEventListener('click', () => {
  btnnew.style.backgroundColor = '#E1B44A';
  btndiff.style.backgroundColor = 'transparent';
  btnmessage.style.backgroundColor = 'transparent';
  btngroups.style.backgroundColor = 'transparent';
  btnarchive.style.backgroundColor = 'transparent';
  clearUsersContainer();
  if (document.getElementById('usersContainer')) return;
  const nomInput = createElement('input', { id: 'nomInput', type: 'text', placeholder: 'Nom', class: 'block py-2.5 mx-4 w-[300px] my-4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:text-red dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer' });
  const nomError = createElement('div', { id: 'nomError', class: 'text-red-500 text-sm hidden' });
  const telInput = createElement('input', { id: 'telInput', type: 'tel', placeholder: 'Téléphone', class: 'block py-2.5 mx-4 w-[300px] text-sm text-gray-900 my-4 bg-transparent border-0 border-b-2 border-gray-300 dark:text-black dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer' });
  const telError = createElement('div', { id: 'telError', class: 'text-red-500 text-sm hidden' });
  const form = createElement('form', {
    class: 'flex flex-col gap-2',
    onsubmit: (e) => {
      e.preventDefault();
      const fields = [
        { input: nomInput, errorElement: nomError, message: 'Le nom est requis' },
        { input: telInput, errorElement: telError, message: 'Le téléphone est requis' }
      ];
      if (!checkRequired(fields)) return;
      const memenumb = contacts.filter(c => c.nom.startsWith(nomInput.value) && c.telephone === telInput.value && c.ownerId === getCurrentUser().id);
      let nomfinal = nomInput.value;
      if (memenumb.length > 0) nomfinal = `${nomInput.value}${memenumb.length + 1}`;
      const newId = Date.now();

      contacts.push({
        id: newId,
        nom: nomfinal,
        telephone: telInput.value.trim(),
        ownerId: getCurrentUser().id
      });
      saveData('contacts', contacts);

      let userContact = users.find(u => u.telephone === telInput.value.trim());
      if (!userContact) {
        userContact = {
          id: newId,
          nom: nomfinal,
          telephone: telInput.value.trim()
        };
        users.push(userContact);
        saveData('users', users);
}
      const newConv = {
        id: conversations.length + 1,
        ownerId: getCurrentUser().id,
        participants: [getCurrentUser().id, userContact.id],
        nom: nomfinal,
        avatar: '',
        dernierMessage: '',
        heure: '',
        nonLus: { [getCurrentUser().id]: 0, [userContact.id]: 0 },
        messages: [],
        brouillon: '' 
      };
      conversations.push(newConv);
      saveData('conversations', conversations);

      btnmessage.click();
      setTimeout(() => {
        const index = conversations.findIndex(c => c.id === newConv.id);
        if (index !== -1) {
          selectedConversationIndex = index;
          currentconversation = conversations[index];
          const nomElement = document.getElementById('current-info');
          const membersElement = document.getElementById('current-members');
          if (nomElement) nomElement.textContent = currentconversation.nom;
          if (membersElement) membersElement.textContent = '';
          displayMessages(currentconversation);
        }
      }, 100);
    }
  }, [nomInput, nomError, telInput, telError, createElement('button', { type: 'submit', class: 'bg-[#E1B44A] w-[300px] text-white py-2.5 mx-4 rounded-lg mt-2' }, 'Ajouter')]);
  const allusers = createElement('div', { id: 'usersContainer', class: 'mx-6 text-lg mt-4' }, [form, displayContact()]);
  Scontent.appendChild(allusers);
});

document.getElementById('btnarchive').addEventListener('click', () => {
  btnarchive.style.backgroundColor = '#E1B44A';
  btndiff.style.backgroundColor = 'transparent';
  btnnew.style.backgroundColor = 'transparent';
  btnmessage.style.backgroundColor = 'transparent';
  btngroups.style.backgroundColor = 'transparent';
  clearUsersContainer();
  if (document.getElementById('usersContainer')) return;
  const allusers = createElement('div', {
    id: 'usersContainer',
    class: 'mx-6 text-lg ',
    vFor: {
      each: archives.filter(a => a.ownerId === getCurrentUser().id),
      render: (archive, index) => {
        return createElement('div', {
          class: 'w-full border border-gray-400 rounded-[10px] my-4 p-4 flex gap-4 cursor-pointer archive-item',
          title: 'Double-cliquer pour désarchiver',
          ondblclick: () => {
            conversations.push(archive);
            saveData('conversations', conversations);
            archives.splice(index, 1);
            saveData('archives', archives);
            document.getElementById('btnarchive').click();
          }
        }, [
          createElement(
            'div',
            { class: 'w-[50px] h-[50px] rounded-full bg-[#E1B44A] flex items-center justify-center text-white font-bold text-xl' },
            (archive.nom || archive.telephone || 'U').charAt(0).toUpperCase()
          ),
          createElement('div', { class: 'flex justify-between w-full' }, [
            createElement('div', { class: 'flex flex-col' }, [
              createElement('span', { class: 'text-sm font-medium' }, archive.nom),
              createElement('span', { class: 'text-xs text-gray-600' }, archive.dernierMessage)
            ]),
            createElement('div', { class: 'text-xs text-gray-500 self-start' }, [archive.heure])
          ])
        ]);
      }
    }
  });
  Scontent.appendChild(allusers);
});


document.getElementById('btnnewgroup').addEventListener('click', () => {
  clearUsersContainer();
  if (document.getElementById('usersContainer')) return;
  utilisateursSelectionnes = [];
  const getInitiales = (nom) => nom.split(' ').map(part => part[0]?.toUpperCase()).join('').slice(0, 2);
  const input = createElement('input', { type: 'text', placeholder: 'Nom du groupe', class: 'w-full h-[40px] bg-transparent border border-gray-400 rounded-[8px] p-2 mb-4 outline-none' });
  const iconetxt = createElement('div', { class: 'flex items-center gap-2 mb-4 text-black font-semibold' }, [iconenewgroupe]);
  const btnAjouter = createElement('button', {
    id: 'btnAjouter',
    class: 'bg-[#F0EFE8] w-[50px] h-[50px] text-black shadow-lg rounded-full mt-4 flex justify-center items-center transition duration-300',
    style: { display: 'none' },
    onclick: () => {
      const nomGroupe = input.value.trim();
      if (!nomGroupe) {
        showToast('Veuillez entrer un nom de groupe');
        return;
      }
   
      const participantIds = [getCurrentUser().id, ...utilisateursSelectionnes.map(u => u.id).filter(id => id !== getCurrentUser().id)];
      groupes.push({
        id: groupes.length + 1,
        nom: nomGroupe,
        participants: participantIds,
        administrateurs: [getCurrentUser().id], 
        messages: [],
        brouillon: ''
      });
      saveData('groupes', groupes);
    utilisateursSelectionnes.forEach(user => {
      if (!users.find(u => u.id === user.id)) {
        users.push({
          id: user.id,
          nom: user.nom,
          telephone: user.telephone
        });
      }
    });
    saveData('users', users);

          utilisateursSelectionnes = [];
          input.value = '';
          btnAjouter.style.display = 'none';
          displayGroup();
        }
      }, [iconenewgroupe]);
      const usersdiv = createElement('div', { id: 'usersContainer', class: 'mx-6 text-lg' });
      usersdiv.appendChild(iconetxt);
      usersdiv.appendChild(input);
      usersdiv.appendChild(btnAjouter);
      contacts.filter(c => c.ownerId === getCurrentUser().id).forEach(user => {
        const initiales = getInitiales(user.nom);
        const cercleInitiales = createElement('div', { class: 'w-10 h-10 bg-[#E1B44A] text-white rounded-full flex items-center justify-center mr-4 font-bold text-sm' }, initiales);
        const infoNom = createElement('div', { class: 'flex items-center gap-2' }, [cercleInitiales, createElement('span', {}, user.nom)]);
        const checkbox = createElement('input', {
          type: 'checkbox',
          onchange: (e) => {
            if (e.target.checked) utilisateursSelectionnes.push(user);
            else {
              const index = utilisateursSelectionnes.findIndex(u => u.id === user.id);
              if (index !== -1) utilisateursSelectionnes.splice(index, 1);
            }
            btnAjouter.style.display = utilisateursSelectionnes.length > 0 ? 'block' : 'none';
          }
        });
        const userItem = createElement('div', { class: 'w-full border border-gray-400 rounded-[10px] my-4 p-4 flex justify-between items-center' }, [infoNom, createElement('div', {}, checkbox)]);
        usersdiv.appendChild(userItem);
      });
      Scontent.appendChild(usersdiv);
});


function reloadData() {
  // Recharger les données depuis le localStorage si besoin
  // Exemple :
  // users = loadData('users', []);
  // contacts = loadData('contacts', []);
  // groupes = loadData('groupes', []);
  // conversations = loadData('conversations', []);
  // diffusions = loadData('diffusions', []);
  // archives = loadData('archives', []);
}


users.forEach(u => {
  if (!contacts.find(c => c.id === u.id)) {
    contacts.push({
      id: u.id,
      nom: u.nom,
      telephone: u.telephone,
      ownerId: getCurrentUser() ? getCurrentUser().id : 1 
    });
  }
});
saveData('contacts', contacts);

document.getElementById('btngroup').addEventListener('click', () => {
  btngroups.style.backgroundColor = '#E1B44A';
  btnmessage.style.backgroundColor = 'transparent';
  btndiff.style.backgroundColor = 'transparent';
  btnarchive.style.backgroundColor = 'transparent';
  btnnew.style.backgroundColor = 'transparent';
  clearUsersContainer();
  displayGroup();
});

/**
 * Affiche les messages d'un groupe sélectionné.
 * @param {Object} groupe 
 */
function displayGroupMessages(groupe) {
  const nomElement = document.getElementById('current-info');
  const membersElement = document.getElementById('current-members');
  if (nomElement) nomElement.textContent = groupe.nom;
  if (membersElement) {
    const membres = groupe.participants
      .map(uid => {
        const user = users.find(u => u.id === uid);
        if (!user) return '';
        const isAdmin = groupe.administrateurs.includes(uid);
        if (uid === getCurrentUser().id && isAdmin) return 'Vous [admin]';
        return (user.nom || user.telephone) + (isAdmin ? ' [admin]' : '');
      })
      .filter(Boolean)
      .join(', ');
    membersElement.textContent = `Membres (${groupe.participants.length}) : ${membres}`;
  }

  const inputField = document.getElementById('inputField');
  if (inputField) inputField.value = '';

  const msgcontainer = document.getElementById('message-left');
  msgcontainer.innerHTML = '';

  if (!groupe.messages || groupe.messages.length === 0) {
    const nonMessage = createElement('div', { class: 'flex justify-center items-center h-full text-gray-500' }, 'Aucun message dans ce groupe');
    msgcontainer.appendChild(nonMessage);
    return;
  }

  groupe.messages.forEach(msg => {
    const isMine = msg.expediteur === getCurrentUser().id;
    const expediteurUser = users.find(u => u.id === msg.expediteur);
    let expediteurNom = expediteurUser ? (expediteurUser.nom || expediteurUser.telephone) : 'Utilisateur inconnu';

    const msgdiv = createElement('div', { class: `flex mb-4 ${isMine ? 'justify-end' : 'justify-start'}` }, [
      createElement('div', {
        class: `max-w-[70%] p-3 rounded-lg ${isMine ? 'bg-[#E1B44A] text-white rounded-br-none' : 'bg-white text-black border border-gray-200 rounded-bl-none'}`
      }, [
        !isMine ? createElement('div', { class: 'font-bold text-xs mb-1' }, expediteurNom) : null,
        createElement('div', {}, msg.contenu),
        createElement('div', { class: `text-xs mt-1 ${isMine ? 'text-yellow-100' : 'text-gray-500'}` }, msg.heure)
      ])
    ]);
    msgcontainer.appendChild(msgdiv);
  });

  msgcontainer.scrollTop = msgcontainer.scrollHeight;
  if (groupe.administrateurs.includes(getCurrentUser().id)) {
    const membersElement = document.getElementById('current-members');
    if (membersElement && !document.getElementById('btnManageMembers')) {
      let btnManage = createElement('button', {
        id: 'btnManageMembers',
        class: 'bg-transparent rounded-full ml-2 flex items-center justify-center',
        title: 'Gérer les membres',
        style: 'border: none; outline: none; cursor: pointer;',
        onclick: () => showGroupMembers(groupe)
      }, [iconeSlidersGroup.cloneNode(true)]);
      membersElement.appendChild(btnManage);
    }
  }
}

function showGroupMembers(groupe) {
  if (!groupe) return;
  const oldModal = document.getElementById('groupMembersModal');
  if (oldModal) oldModal.remove();
  const overlay = createElement('div');
  overlay.id = 'groupMembersOverlay';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0,0,0,0.25)';
  overlay.style.zIndex = 999;
  const container = createElement('div');
  container.id = 'groupMembersModal';
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.background = '#fff';
  container.style.border = '1px solid #ccc';
  container.style.zIndex = 1000;
  container.style.width = '350px';
  container.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)';
  container.style.borderRadius = '16px';
  container.style.padding = '24px 20px 20px 20px';

  
  const header = createElement('div');
  header.className = 'flex justify-between items-center mb-4';
  header.innerHTML = `<span class="font-bold text-lg text-[#E1B44A]">Gestion des membres</span>`;
  const btnClose = createElement('button', {
    class: 'ml-2 px-2 py-1 bg-gray-200 hover:bg-gray-400 text-gray-700 rounded-full',
    style: 'font-size:18px; font-weight:bold;',
    title: 'Fermer',
    onclick: () => {
      overlay.remove();
      container.remove();
      displayGroupMessages(groupe);
      displayGroup();
      setTimeout(() => {
        const groupDivs = document.querySelectorAll('.group-item');
        groupDivs.forEach(div => {
          if (div.textContent.includes(groupe.nom)) {
            div.classList.add('bg-[#F3F4F6]', 'border-yellow-500');
          }
        });
      }, 50);
    }
  }, '×');
  header.appendChild(btnClose);
  container.appendChild(header);


  groupe.participants.forEach(uid => {
    const user = users.find(u => u.id === uid);
    if (!user) return;
    const isAdmin = groupe.administrateurs.includes(uid);

    const line = createElement('div');
    line.className = 'flex items-center justify-between gap-2 mb-3 p-2 rounded hover:bg-[#F9F7F5]';

   
    const info = createElement('div');
    info.className = 'flex items-center gap-2';
    const avatar = createElement('div');
    avatar.className = 'w-8 h-8 rounded-full bg-[#E1B44A] text-white flex items-center justify-center font-bold text-xs';
    avatar.textContent = (user.nom || user.telephone).slice(0,2).toUpperCase();
    info.appendChild(avatar);
    const name = createElement('span');
    name.className = 'font-medium text-sm';
    if (uid === getCurrentUser().id && isAdmin) {
      name.textContent = 'Vous [admin]';
    } else {
      name.textContent = (user.nom || user.telephone) + (isAdmin ? ' [admin]' : '');
    }
    info.appendChild(name);
    if (isAdmin) {
      const badge = createElement('span');
      badge.className = 'ml-2 text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full border border-yellow-300';
      badge.textContent = 'admin';
      info.appendChild(badge);
    }
    line.appendChild(info);
    if (groupe.administrateurs.includes(getCurrentUser().id) && uid !== getCurrentUser().id) {
      const actions = createElement('div');
      actions.className = 'flex gap-1';
      if (!isAdmin) {
        actions.appendChild(createElement('button', {
          class: 'px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded text-xs',
          title: 'Promouvoir admin',
          onclick: () => {
            groupe.administrateurs.push(uid);
            saveData('groupes', groupes);
            showGroupMembers(groupe);
            displayGroupMessages(groupe);
            displayGroup();
          }
        }, 'Admin'));
      }
      actions.appendChild(createElement('button', {
        class: 'px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-xs',
        title: 'Retirer du groupe',
        onclick: () => {
          groupe.participants = groupe.participants.filter(id => id !== uid);
          groupe.administrateurs = groupe.administrateurs.filter(id => id !== uid);
          saveData('groupes', groupes);
          showGroupMembers(groupe);
          displayGroupMessages(groupe);
          displayGroup();
        }
      }, 'Retirer'));
      line.appendChild(actions);
       }
    container.appendChild(line);
  });

  overlay.appendChild(container);
  document.body.appendChild(overlay);
}

/**
 * 
 * @param {string} message 
 * @param {string} type 
 * @description Affiche un toast message.
 */
function showToast(message, type = 'info') {
  let toast = createElement('toast-message');
  if (!toast) {
    toast = createElement('div');
   
    toast.id = 'toast-message';
    toast.style.position = 'fixed';
    toast.style.top = '30px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.zIndex = 9999;
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '8px';
    toast.style.fontWeight = 'bold';
    toast.style.fontSize = '16px';
    toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    document.body.appendChild(toast);
  }
  toast.style.background = type === 'error' ? '#F87171' : '#E1B44A';
  toast.style.color = type === 'error' ? '#fff' : '#222';
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 2000);
}


