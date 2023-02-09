importScripts(
  "https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js"
);
// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL:
    "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "", // config lại mainifest and firebase-mesaging-sw
  appId: "",
  measurementId: "",
});

// Initialize Firebase Cloud Messaging and get a reference to the service
// if (firebase.messaging.isSupported()) {
//   const messaging = initializedFirebaseApp.messaging();
// }
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  // logic in here

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

self.onnotificationclick = function (event) {
  //Place your on click logic here

  //example
  const endpoint = event.notification.data.type;
  self.clients.openWindow("/" + endpoint || "");
  event.notification.close();
};
