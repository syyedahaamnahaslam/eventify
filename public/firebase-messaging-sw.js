/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyD4X1yWr22YT4kO0RoAuAEjmun-xZXaqE4",
  authDomain: "eventify-c71b2.firebaseapp.com",
  projectId: "eventify-c71b2",
  messagingSenderId: "759636526575",
  appId: "1:759636526575:web:e79e97a75df5c7f9c3621a",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Eventify";
  const options = {
    body: payload.notification?.body || "Booking update",
    icon: "/images/wedding.jpg",
  };
  self.registration.showNotification(title, options);
});
