importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js'
);

firebase.initializeApp({
  messagingSenderId: '982233854704',
});

const initMessaging = firebase.messaging();
