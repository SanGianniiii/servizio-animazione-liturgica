importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// ⚠️ INCOLLA QUI LA STESSA CONFIGURAZIONE CHE HAI MESSO NELL'INDEX
 const firebaseConfig = {
    apiKey: "AIzaSyAIB56h4OiO79B1AXMiG75C_EchLcI7S5s",
    authDomain: "cantoriapp-e18b1.firebaseapp.com",
    projectId: "cantoriapp-e18b1",
    storageBucket: "cantoriapp-e18b1.firebasestorage.app",
    messagingSenderId: "21232278125",
    appId: "1:21232278125:web:6b82fed0650b385a717d64",
    measurementId: "G-5CDCBR02FM"
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

