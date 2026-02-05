importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// ⚠️ INCOLLA QUI LA STESSA CONFIGURAZIONE CHE HAI MESSO NELL'INDEX
const firebaseConfig = {
    apiKey: "IL_TUO_API_KEY",
    projectId: "IL_TUO_PROJECT_ID",
    messagingSenderId: "IL_TUO_SENDER_ID",
    appId: "IL_TUO_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Gestisce le notifiche quando l'app è in background (chiusa)
messaging.onBackgroundMessage((payload) => {
  console.log('Notifica ricevuta in background:', payload);
  
  const title = payload.notification.title;
  const options = {
    body: payload.notification.body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    vibrate: [200, 100, 200]
  };

  self.registration.showNotification(title, options);
});