importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// ⚠️ INCOLLA QUI LA STESSA CONFIGURAZIONE CHE HAI MESSO NELL'INDEX
const firebaseConfig = {
            apiKey: "AIzaSyBjmVbMe9PFI6eL7ZmehxqvTqWouPPMSXU",
            authDomain: "cantoriapp-ba256.firebaseapp.com",
            projectId: "cantoriapp-ba256",
            storageBucket: "cantoriapp-ba256.firebasestorage.app",
            messagingSenderId: "150338748496",
            appId: "1:150338748496:web:28829d560e26073ecf5155"
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
