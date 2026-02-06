importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAIB56h4OiO79B1AXMiG75C_EchLcI7S5s",
    authDomain: "cantoriapp-e18b1.firebaseapp.com",
    projectId: "cantoriapp-e18b1",
    storageBucket: "cantoriapp-e18b1.firebasestorage.app",
    messagingSenderId: "21232278125",
    appId: "1:21232278125:web:6b82fed0650b385a717d64"
});

const messaging = firebase.messaging();
// Non aggiungiamo altro: Firebase mostrerà la notifica da solo 
// usando il titolo e il corpo che inviamo dallo script.
