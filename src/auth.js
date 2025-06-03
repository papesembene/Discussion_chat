import { createElement } from './composant.js'
import { users } from './datas.js'


let currentUser = null;


function isAuthenticated() {
  return currentUser !== null;
}


function login(tel) {
  const user = users.find(u => u.telephone === tel);
  if (user) {
    currentUser = user;
    return { success: true, user };
  }
  return { success: false, message: 'Numéro de téléphone inconnu' };
}

function logout() {
  currentUser = null;
  showLoginForm();
  
  const mainApp = document.getElementById('app');
  if (mainApp) mainApp.style.display = 'none';
}

function getCurrentUser() {
  return currentUser;
}


function createLoginForm() {
  const loginContainer = createElement('div', {
    id: 'loginContainer',
    class: 'fixed inset-0 bg-gray-100 flex items-center justify-center z-50'
  });

  const loginCard = createElement('div', {
    class: 'bg-white p-8 rounded-lg shadow-xl w-96 border border-gray-200'
  });

  const title = createElement('h2', {
    class: 'text-2xl font-bold text-center mb-6 text-gray-800'
  }, 'Connexion Chat App');

  const telInput = createElement('input', {
    id: 'telInput',
    type: 'tel',
    placeholder: 'Numéro de téléphone',
    class: 'w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-yellow-500'
  });

  const errorMessage = createElement('div', {
    id: 'errorMessage',
    class: 'text-red-500 text-sm mb-4 hidden'
  });

  const loginButton = createElement('button', {
    class: 'w-full bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 transition duration-200',
    onclick: handleLogin
  }, 'Se connecter');

  loginCard.appendChild(title);
  loginCard.appendChild(telInput);
  loginCard.appendChild(errorMessage);
  loginCard.appendChild(loginButton);
  loginContainer.appendChild(loginCard);

  
  telInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  });

  return loginContainer;
}


function handleLogin() {
  const tel = document.getElementById('telInput').value.trim();
  const errorDiv = document.getElementById('errorMessage');

  errorDiv.classList.add('hidden');
  errorDiv.textContent = '';

  if (!tel) {
    showError('Veuillez entrer votre numéro de téléphone');
    return;
  }

  const user = users.find(u => u.telephone === tel);
  if (user) {
    currentUser = user;
    hideLoginForm();
    showMainApp();
    showWelcomeMessage(user.nom);
   
  } else {
    showError('Numéro de téléphone inconnu');
  }
}

function showError(message) {
  const errorDiv = document.getElementById('errorMessage');
  errorDiv.textContent = message;
  errorDiv.classList.remove('hidden');
}


function showLoginForm() {
  
  const mainApp = document.getElementById('app');
  if (mainApp) {
    mainApp.style.display = 'none';
  }

  const existingLogin = document.getElementById('loginContainer');
  if (existingLogin) {
    existingLogin.remove();
  }

 
  const loginForm = createLoginForm();
  document.body.appendChild(loginForm);
}

function hideLoginForm() {
  const loginContainer = document.getElementById('loginContainer');
  if (loginContainer) {
    loginContainer.remove();
  }
}

function showMainApp() {
  const mainApp = document.getElementById('app');
  if (mainApp) {
    mainApp.style.display = 'block';
  }
}


function showWelcomeMessage(userName) {

  const welcomeDiv = createElement('div', {
    class: 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50',
    style: { animation: 'fadeInOut 3s ease-in-out' }
  }, `Bienvenue, ${userName}!`);

  document.body.appendChild(welcomeDiv);

  setTimeout(() => {
    welcomeDiv.remove();
  }, 3000);
}

function createLogoutButton() {
  const logoutButton = createElement('button', {
    id: 'logoutButton',
    class: 'fixed top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 z-40',
    onclick: () => {
      if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        logout();
      }
    }
  }, 'Déconnexion');
  return logoutButton;
}

function addAuthStyles() {
  const style = createElement('style', {}, `
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(-20px); }
      20% { opacity: 1; transform: translateY(0); }
      80% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-20px); }
    }
  `);
  document.head.appendChild(style);
}

function initAuth() {
  addAuthStyles();
  if (!isAuthenticated()) {
    showLoginForm();
  } else {
    showMainApp();
  }
}


function requireAuth(callback) {
  return function(...args) {
    if (!isAuthenticated()) {
      showLoginForm();
      return;
    }
    return callback.apply(this, args);
  };
}


export {
  initAuth,
  isAuthenticated,
  login,
  logout,
  getCurrentUser,
  requireAuth,
  showLoginForm,
  hideLoginForm,
  createLogoutButton
};