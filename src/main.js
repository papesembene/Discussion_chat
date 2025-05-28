import './style.css'
import './index.css'
import { createElement } from './composant.js'
import { users,archives,groupes,conversations } from './datas.js'
import { checkRequired } from './validations.js'

const btnmessage = createElement('button',{
  class:'flex justify-center items-center flex-col w-[70px] h-[70px] border border-yellow-500 p-4 rounded',
  id:'btnmessage'
},)
const btngroups = createElement('button',{
  id:'btngroup',
  class:'flex justify-center items-center flex-col w-[70px] h-[70px] border border-yellow-500 p-4 rounded'
},)

const btndiff = createElement('button',{
  class:'flex justify-center items-center flex-col w-[70px] h-[70px] border border-yellow-500 p-4 rounded',
  id:'btndiff'
},)
const btnarchive = createElement('button',{
  id:'btnarchive',
  class:'flex justify-center items-center flex-col w-[70px] h-[70px] border border-yellow-500 p-4 rounded'
},)
const btnnew = createElement('button',{
  id:'btnadd',
  class:'flex justify-center items-center flex-col w-[70px] h-[70px] border border-yellow-500 p-4 rounded'
},)
const btnbackspace = createElement('button',{
  class:'flex justify-center items-center  w-[40px] h-[40px] border border-yellow-500  rounded-[50%]'

},)
const btnarchive2 = createElement('button', {
  class: 'flex justify-center items-center w-[40px] h-[40px] border border-yellow-500 rounded-[50%]',
  title: 'Archiver la conversation sélectionnée',
  onclick: () => {
    if (selectedConversationIndex !== null) {
      const conversation = conversations[selectedConversationIndex];
      archives.push(conversation);
      conversations.splice(selectedConversationIndex, 1);
      selectedConversationIndex = null; 
      document.getElementById('btnmessage').click();
    } else {
      alert("Veuillez sélectionner une conversation à archiver.");
    }
  }
});

const btnsquare = createElement('button',{
  class:' flex justify-center items-center  w-[40px] h-[40px] border border-yellow-500  rounded-[50%]'

},)
const btndelete = createElement('button',{
  class:' flex justify-center items-center  w-[40px] h-[40px] border border-yellow-500  rounded-[50%]'

},)
btndelete.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
`
const btnsend = createElement('button',{
  class:' flex justify-center items-center w-[40px] h-[40px] bg-black text-white rounded-[50%] my-2 mx-4'
},)
const btnnewgroup = createElement('button',{
  id:'btnnewgroup',
  class:'flex justify-center items-center flex-col w-[70px] h-[70px]  p-4 rounded',
  title:'ajouter un nouveau groupe'
},)

const iconenewgroupe = createElement('span', {
  class: 'text-black flex justify-center items-center'
});
iconenewgroupe.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
`;


btnnewgroup.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
`
btnsend.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
`
btnsquare.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/>
</svg>
`
btnarchive2.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg>
`
btnbackspace.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
  <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
  <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
</svg>
`
btnmessage.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
</svg>
<span>Messages</span>
`
btngroups.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>
<span>Groupes</span>
`
btndiff.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 16a3 3 0 0 0-1.73.56l-2.45-1.45A3.7 3.7 0 0 0 16 14a4 4 0 0 0-3-3.86V7.82a3 3 0 1 0-2 0v2.32A4 4 0 0 0 8 14a3.7 3.7 0 0 0 .18 1.11l-2.45 1.45A3 3 0 0 0 4 16a3 3 0 1 0 3 3a3 3 0 0 0-.12-.8l2.3-1.37a4 4 0 0 0 5.64 0l2.3 1.37A3 3 0 1 0 20 16M4 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1m8-16a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0 12a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"/></svg>
<span>Diffusions</span>
`
btnarchive.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
</svg>
<span>Archives</span>
`
btnnew.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>
<span>Nouveau</span>
`

const main_content = createElement('div', {
  class: 'flex my-8 w-full mx-[100px] h-[850px] rounded-lg shadow-lg px-4 shadow-xl/30',
},)

const Fcontent = createElement('div',{
  class:' flex flex-col gap-1.5 w-[8%] bg-[#F0EFE8] h-9/10 mx-0 text-black justify-center items-center'
},[
 btnmessage,
 btngroups,
 btndiff,
 btnarchive,
 btnnew
])

const Scontent = createElement('div',{
  class:'w-[25%] bg-[#F9F7F5] h-9/10 mx-0 text-black text-2xl font-bold'

},
[
  createElement('div',{
    class:'mx-4 my-2'
  },'Discussions'),
 createElement('input', {
    class: ' block py-2.5 mx-4 w-[300px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-black dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer ',
    placeholder: 'Recherche',
    type: 'text'
  }),
  createElement('div',{},
    btnnewgroup
  )
 
]
)
let currentconversation = []

const Tcontent = createElement('div',{
  class:'w-[67%] bg-[#EFE7D9] h-9/10 mx-0'

},
[
  createElement('div',{
    class:'flex  justify-between border-b-2 border-white text-black'
  },
    [
      createElement('div',{
        class:'flex'
      },
        [
        createElement('div',{
        class:'w-[50px] h-[50px] rounded-[50%] bg-yellow-500 m-4'
      },),
       createElement('div',{
        class:'m-4 mx-0 text-lg text-4 font-bold',
        id:'current-info'
      },currentconversation.nom),
        ]
      ),
    
     
      createElement('div',{
        class:'flex m-4 gap-2 '
      },
        [
          btnbackspace,
          btnarchive2,
          btnsquare,
          btndelete
        ]
      ),
    ]
  ),
  createElement('div',{
    class:'flex  justify-between border-b-2 border-white h-[700px]'
  },'Discussion content'),
  createElement('div',{

  },
  createElement('div',{
    class:'flex justify-between border-b-2 border-white h-[65px]'
  },
    [
     createElement('input', {
    class: ' my-4 mx-4 bg-white border border-gray-400 rounded-[10px] px-2 py-1 w-[1000px] placeholder-gray-400 text-black text-sm ',
    placeholder: '',
    type: 'text'
  }),
    btnsend
    ]
  )
),
]
)

main_content.appendChild(Fcontent)
main_content.appendChild(Scontent)
main_content.appendChild(Tcontent)
const app = document.getElementById('app')
app.appendChild(main_content)


/**
 * clear le contenu ou supprimer contenu
 */
function clearUsersContainer() {
  const existing = document.getElementById('usersContainer');
  if (existing) {
    existing.remove();
  }
}

document.getElementById('btndiff').addEventListener('click',()=>{

  btndiff.style.backgroundColor='#E1B44A'
  btnmessage.style.backgroundColor='transparent'
  btnnew.style.backgroundColor='transparent'
  btnarchive.style.backgroundColor='transparent'
  btngroups.style.backgroundColor='transparent'
  clearUsersContainer()
  // if (document.getElementById('usersContainer')) return; 

  //   const allusers = createElement('div',{
  //     id:'usersContainer',
  //     class:'mx-6 text-lg ',
  //   vFor:{
  //     each:users,
  //     render:(user)=>{
  //         return createElement('div', {
  //           class:'w-[100%] h-[30%] border border-gray-400 rounded-[10px] my-4 p-4 flex justify-between '
  //       },[
  //         createElement('div',{},
  //         user.nom
  //       ),
  //       createElement('div',{},
  //         createElement('input',{
  //           type:'checkbox',
  //         })
  //       )
  //       ]) 
  //     }
  //   }
  // })
      let allusers = displayContact()
      Scontent.appendChild(allusers)
  
})

let selectedConversationIndex = null;

// pour afficher un groupe apres avoir cliquer sur messages

document.getElementById('btnmessage').addEventListener('click',()=>{

  btnmessage.style.backgroundColor='#E1B44A'
  btndiff.style.backgroundColor='transparent'
  btnnew.style.backgroundColor='transparent'
  btnarchive.style.backgroundColor='transparent'
  btngroups.style.backgroundColor='transparent'
  clearUsersContainer()
  if (document.getElementById('usersContainer')) return; 
    const allusers = createElement('div',{
      id:'usersContainer',
      class:'mx-6 text-lg ',
    vFor:{
      each:conversations,
     render: (conversation,index) => {
  return createElement('div', {
    class: ' conversation-item w-full border border-gray-400 rounded-[10px] my-4 p-4 flex gap-4 cursor-pointer',
  
    onclick: function () {
      document.querySelectorAll('.conversation-item').forEach(el => {
        el.classList.remove('bg-[#F3F4F6]', 'border-yellow-500'); 
      });
      this.classList.add('bg-[#F3F4F6]', 'border-yellow-500'); 
       selectedConversationIndex = index;
       currentconversation = conversation
        const nomElement = document.getElementById('current-info');
        if (nomElement) 
        {
          nomElement.textContent = currentconversation.nom;
        }
       
    },
    
  }, [
    createElement('img', {
      src: conversation.avatar,
      class: 'w-[50px] h-[50px] rounded-full object-cover border-2'
    }),
    createElement('div', {
      class: 'flex justify-between w-full'
    }, [
      createElement('div', {
        class: 'flex flex-col'
      }, [
        createElement('span', {
          class: 'text-sm font-medium'
        }, conversation.nom),
        createElement('span', {
          class: 'text-xs text-gray-600'
        }, conversation.dernierMessage)
      ]),
      createElement('div', {
        class: 'text-xs text-gray-500 self-start'
      }, [
        conversation.heure,
       createElement('div',{
        class:'w-[30px] h-[30px] bg-black text-white  flex justify-center items-center rounded-[50%]'
       },
         conversation.nonLus.toString()
       )
      ])
    ])
  ]);
}

    }
  })
  Scontent.appendChild(allusers)
  
})
// pour afficher un groupe apres avoir cliquer sur groupes
document.getElementById('btngroup').addEventListener('click', () => {
  btngroups.style.backgroundColor = '#E1B44A';
  btnmessage.style.backgroundColor = 'transparent';
  btnnew.style.backgroundColor = 'transparent';
  btndiff.style.backgroundColor = 'transparent';
  btnarchive.style.backgroundColor = 'transparent';

  clearUsersContainer(); 

  displayGroup(); 
});


// pour ajouter un nouveau contact
document.getElementById('btnadd').addEventListener('click', () => {
  btnnew.style.backgroundColor = '#E1B44A';
  btndiff.style.backgroundColor = 'transparent';
  btnmessage.style.backgroundColor = 'transparent';
  btngroups.style.backgroundColor = 'transparent';
  btnarchive.style.backgroundColor = 'transparent';

  clearUsersContainer();

  if (document.getElementById('usersContainer')) return;

  // Inputs
  const nomInput = createElement('input', {
    id: 'nomInput',
    type: 'text',
    placeholder: 'Nom',
    // class: 'border p-2 rounded-lg w-full bg-transparent'
    class: ' block py-2.5 mx-4 w-[300px] my-4 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-black dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer ',

  });

  const nomError = createElement('div', {
    id: 'nomError',
    class: 'text-red-500 text-sm hidden'
  });

  const telInput = createElement('input', {
    id: 'telInput',
    type: 'tel',
    placeholder: 'Téléphone',
    // class: 'border p-2 rounded-lg w-full bg-transparent'
    class: ' block py-2.5 mx-4 w-[300px] text-sm text-gray-900 my-4 bg-transparent border-0 border-b-2 border-gray-300  dark:text-black dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer ',

  });

  const telError = createElement('div', {
    id: 'telError',
    class: 'text-red-500 text-sm hidden'
  });

  // Form
  const form = createElement('form', {
    class: 'flex flex-col gap-2',
    onsubmit: (e) => {
      e.preventDefault();

      const fields = [
        { input: nomInput, errorElement: nomError, message: 'Le nom est requis' },
        { input: telInput, errorElement: telError, message: 'Le téléphone est requis' }
      ];

      if (!checkRequired(fields)) return;
      const memenumb = users.filter(user=>user.nom.startsWith(nomInput.value) && user.telephone===telInput.value)
      let nomfinal = nomInput.value
      if (memenumb.length>0) 
      {
        nomfinal = `${nomInput.value}${memenumb.length+1}`
      }
      users.push({
        id: users.length + 1,
        nom: nomfinal,
        telephone: telInput.value.trim()
      });

      clearUsersContainer();
      const allusers = displayContact();

      btnnew.style.backgroundColor = 'transparent';
      btndiff.style.backgroundColor = '#E1B44A';
      Scontent.appendChild(allusers);
    }
  }, [
    nomInput,
    nomError,
    telInput,
    telError,
    createElement('button', {
      type: 'submit',
      class: 'bg-[#E1B44A] w-[300px] text-white py-2.5 mx-4 rounded-lg mt-2'
    }, 'Ajouter')
  ]);

  const allusers = createElement('div', {
    id: 'usersContainer',
    class: 'mx-6 text-lg mt-4'
  }, form);

  Scontent.appendChild(allusers);
  
});


document.getElementById('btnarchive').addEventListener('click',()=>{

  btnarchive.style.backgroundColor='#E1B44A'
  btndiff.style.backgroundColor='transparent'
  btnnew.style.backgroundColor='transparent'
  btnmessage.style.backgroundColor='transparent'
  btngroups.style.backgroundColor='transparent'

  
  clearUsersContainer()
  
  if (document.getElementById('usersContainer')) return; 
    const allusers = createElement('div',{
      id:'usersContainer',
      class:'mx-6 text-lg ',
    vFor:{
      each:archives,
      render: (archive, index) => {
  return createElement('div', {
    class: 'w-full border border-gray-400 rounded-[10px] my-4 p-4 flex gap-4 cursor-pointer archive-item',
    title: 'Double-cliquer pour désarchiver',
    ondblclick: () => {
      conversations.push(archive);          
      archives.splice(index, 1);         
      document.getElementById('btnarchive').click(); 
    }
  }, [
    createElement('img', {
      src: archive.avatar,
      class: 'w-[50px] h-[50px] rounded-full object-cover border-2'
    }),
    createElement('div', {
      class: 'flex justify-between w-full'
    }, [
      createElement('div', {
        class: 'flex flex-col'
      }, [
        createElement('span', {
          class: 'text-sm font-medium'
        }, archive.nom),
        createElement('span', {
          class: 'text-xs text-gray-600'
        }, archive.dernierMessage)
      ]),
      createElement('div', {
        class: 'text-xs text-gray-500 self-start'
      }, [
        archive.heure
      ])
    ])
  ]);
}


    }
  })
  Scontent.appendChild(allusers)
  
})

let utilisateursSelectionnes = []; 

document.getElementById('btnnewgroup').addEventListener('click', () => {
  clearUsersContainer();
  if (document.getElementById('usersContainer')) return;

  utilisateursSelectionnes = []; 

  const getInitiales = (nom) => {
    return nom
      .split(' ')
      .map(part => part[0]?.toUpperCase())
      .join('')
      .slice(0, 2);
  };

  const input = createElement('input', {
    type: 'text',
    placeholder: 'Nom du groupe',
    class: 'w-full h-[40px] bg-transparent border border-gray-400 rounded-[8px] p-2 mb-4 outline-none'
  });

  const iconetxt = createElement('div', {
    class: 'flex items-center gap-2 mb-4 text-black font-semibold'
  }, [iconenewgroupe]);

  const btnAjouter = createElement('button', {
    id: 'btnAjouter',
    class: 'bg-[#F0EFE8] w-[50px] h-[50px] text-black shadow-lg rounded-full mt-4 flex justify-center items-center transition duration-300',
    style: {
      display: 'none'
    },
    onclick: () => {
      const nomGroupe = input.value.trim();
      if (!nomGroupe) {
        alert('Veuillez entrer un nom de groupe');
        // Swal.fire("Veuillez entrer un nom de groupe!");
        return;
      }

      console.log('Nom du groupe :', nomGroupe);
      console.log('Utilisateurs sélectionnés :', [...utilisateursSelectionnes]); 

      groupes.push({
        nom: nomGroupe,
        participants: [...utilisateursSelectionnes],
        administrateur:'Moi'
      });

      utilisateursSelectionnes = []; 
      input.value = '';
      btnAjouter.style.display = 'none';
      let allgroupes = displayGroup();
      Scontent.appendChild(allgroupes);

    }
  }, [iconenewgroupe]);

  const usersdiv = createElement('div', {
    id: 'usersContainer',
    class: 'mx-6 text-lg'
  });

  usersdiv.appendChild(iconetxt);
  usersdiv.appendChild(input);
  usersdiv.appendChild(btnAjouter);

  if (!users || users.length === 0) {
    console.warn(" Aucun utilisateur trouvé.");
  }

  users.forEach(user => {
    const initiales = getInitiales(user.nom);

    const cercleInitiales = createElement('div', {
      class: 'w-10 h-10 bg-[#E1B44A] text-white rounded-full flex items-center justify-center mr-4 font-bold text-sm'
    }, initiales);

    const infoNom = createElement('div', {
      class: 'flex items-center gap-2'
    }, [
      cercleInitiales,
      createElement('span', {}, user.nom)
    ]);

    const checkbox = createElement('input', {
      type: 'checkbox',
      onchange: (e) => {
        if (e.target.checked) {
          utilisateursSelectionnes.push(user);
        } else {
          const index = utilisateursSelectionnes.findIndex(u => u.id === user.id);
          if (index !== -1) utilisateursSelectionnes.splice(index, 1);
        }
        btnAjouter.style.display = utilisateursSelectionnes.length > 0 ? 'block' : 'none';
      }
    });

    const userItem = createElement('div', {
      class: 'w-full border border-gray-400 rounded-[10px] my-4 p-4 flex justify-between items-center'
    }, [
      infoNom,
      createElement('div', {}, checkbox)
    ]);

    usersdiv.appendChild(userItem);
  });

  Scontent.appendChild(usersdiv);
});

/**
 * 
 * cette fonction permet d'afficher les contacts 
 */
function displayContact() {
  if (document.getElementById('usersContainer')) return;

  // Fonction pour générer les initiales
  const getInitiales = (nom) => {
    return nom
      .split(' ')
      .map(part => part[0]?.toUpperCase())
      .join('')
      .slice(0, 2);
  };

  return createElement('div', {
    id: 'usersContainer',
    class: 'mx-6 text-lg',
    vFor: {
      each: users,
      render: (user) => {
        const initiales = getInitiales(user.nom);

        const initialCircle = createElement('div', {
          class: 'w-10 h-10 bg-[#E1B44A] text-white rounded-full flex items-center justify-center mr-4 font-bold'
        }, initiales);

        const userInfo = createElement('div', {
          class: 'flex items-center gap-2'
        }, [
          initialCircle,
          createElement('span', {}, user.nom)
        ]);

        return createElement('div', {
          class: 'w-[100%] h-[30%] border border-gray-400 rounded-[10px] my-4 p-4 flex justify-between items-center'
        }, [
          userInfo,
          createElement('div', {},
            createElement('input', {
              type: 'checkbox',
              class: 'w-5 h-5 border-2 border-blue-600 rounded-sm'
            })
          )
        ]);
      }
    }
  });
}


let selectedGroupIndex = null;
/**
 * cette fonction permet d'afficher un groupe
 */
function displayGroup() {
  let container = document.getElementById('usersContainer');

  if (!container) {
    container = createElement('div', {
      id: 'usersContainer',
      class: 'mx-6 text-lg'
    });
    Scontent.appendChild(container); 
  } else {
    container.innerHTML = ''; 
  }

 
  const btnAddMember = createElement('button', {
    id: 'btnAddMember',
    class: 'bg-[#E1B44A] text-white py-2 px-4 rounded-lg mb-4 hidden',
    onclick: () => showAddMemberInterface()
  }, 'Ajouter des membres');
  
  container.appendChild(btnAddMember);

  groupes.forEach((groupe, index) => {
    const groupItem = createElement('div', {
      class: 'group-item w-full border border-gray-400 rounded-[10px] my-4 p-4 flex gap-4 cursor-pointer',
      onclick: function() {
       
        document.querySelectorAll('.group-item').forEach(el => {
          el.classList.remove('bg-[#F3F4F6]', 'border-yellow-500');
        });
        
        this.classList.add('bg-[#F3F4F6]', 'border-yellow-500');
        selectedGroupIndex = index;
        document.getElementById('btnAddMember').classList.remove('hidden');
      }
    }, [
      createElement('div', {
        class: 'w-[50px] h-[50px] bg-[#E1B44A] text-white rounded-full flex items-center justify-center font-bold text-sm'
      }, groupe.nom.slice(0, 2).toUpperCase()),

      createElement('div', {
        class: 'flex justify-between w-full'
      }, [
        createElement('div', {
          class: 'flex flex-col'
        }, [
          createElement('span', {
            class: 'text-sm font-medium'
          }, groupe.nom),
          createElement('span', {
            class: 'text-xs text-gray-600'
          }, `participants: ${groupe.participants.length + 1}`)
        ]),
        createElement('div', {
          class: 'text-sm text-gray-500 self-start'
        }, `Admin: ${groupe.administrateur}`)
      ])
    ]);

    container.appendChild(groupItem);
  });
}


/**
 * 
 * cette function permet d'afficher l'interface  pour ajouter un membre dans un groupe
 */
function showAddMemberInterface() {
  if (selectedGroupIndex === null) return;
  
  clearUsersContainer();
  
  const selectedGroup = groupes[selectedGroupIndex];
  let nouveauxMembres = [];
  
  const getInitiales = (nom) => {
    return nom
      .split(' ')
      .map(part => part[0]?.toUpperCase())
      .join('')
      .slice(0, 2);
  };

  const container = createElement('div', {
    id: 'usersContainer',
    class: 'mx-6 text-lg'
  });


  const titre = createElement('h3', {
    class: 'text-lg font-bold mb-4'
  }, `Ajouter des membres à "${selectedGroup.nom}"`);


  const btnRetour = createElement('button', {
    class: 'bg-gray-500 text-white py-2 px-4 rounded-lg mb-4 mr-2',
    onclick: () => {
      clearUsersContainer();
      displayGroup();
    }
  }, 'Retour');

  const btnConfirmer = createElement('button', {
    class: 'bg-[#E1B44A] text-white py-2 px-4 rounded-lg mb-4 hidden',
    onclick: () => {
      nouveauxMembres.forEach(membre => {
        if (!selectedGroup.participants.find(p => p.id === membre.id)) {
          selectedGroup.participants.push(membre);
        }
      });
      alert(`${nouveauxMembres.length} membre(s) ajouté(s) au groupe "${selectedGroup.nom}"`);
  
      clearUsersContainer();
      displayGroup();
    }
  }, 'Confirmer');

  container.appendChild(titre);
  container.appendChild(btnRetour);
  container.appendChild(btnConfirmer);

  
  const utilisateursDisponibles = users.filter(user => 
    !selectedGroup.participants.find(p => p.id === user.id)
  );

  if (utilisateursDisponibles.length === 0) {
    const messageVide = createElement('div', {
      class: 'text-center text-gray-500 mt-8'
    }, 'Tous les utilisateurs sont déjà membres de ce groupe.');
    container.appendChild(messageVide);
  } else {
    utilisateursDisponibles.forEach(user => {
      const initiales = getInitiales(user.nom);

      const cercleInitiales = createElement('div', {
        class: 'w-10 h-10 bg-[#E1B44A] text-white rounded-full flex items-center justify-center mr-4 font-bold text-sm'
      }, initiales);

      const infoNom = createElement('div', {
        class: 'flex items-center gap-2'
      }, [
        cercleInitiales,
        createElement('span', {}, user.nom)
      ]);

      const checkbox = createElement('input', {
        type: 'checkbox',
        class: 'w-5 h-5',
        onchange: (e) => {
          if (e.target.checked) {
            nouveauxMembres.push(user);
          } else {
            const index = nouveauxMembres.findIndex(u => u.id === user.id);
            if (index !== -1) nouveauxMembres.splice(index, 1);
          }
          
          // Afficher/masquer le bouton de confirmation
          if (nouveauxMembres.length > 0) {
            btnConfirmer.classList.remove('hidden');
          } else {
            btnConfirmer.classList.add('hidden');
          }
        }
      });

      const userItem = createElement('div', {
        class: 'w-full border border-gray-400 rounded-[10px] my-2 p-4 flex justify-between items-center'
      }, [
        infoNom,
        createElement('div', {}, checkbox)
      ]);

      container.appendChild(userItem);
    });
  }

  Scontent.appendChild(container);
}