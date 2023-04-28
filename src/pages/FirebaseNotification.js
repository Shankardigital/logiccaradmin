// import React from 'react'
// import {
//   initializeApp
// } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";

// import {
//   getMessaging,
//   getToken,
//   onMessage
// } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-messaging.js";

// function FirebaseNotification() {
//   const firebaseApp = initializeApp({
//     apiKey: "AIzaSyApfXA4X_RY15S5Hq-wxYlzOs6-YfFOE80",
//     authDomain: "react-test-3029f.firebaseapp.com",
//     databaseURL: "https://react-test-3029f-default-rtdb.firebaseio.com",
//     projectId: "react-test-3029f",
//     storageBucket: "react-test-3029f.appspot.com",
//     messagingSenderId: "547635026359",
//     appId: "1:547635026359:web:2e0dde577ca138ef643032",
//     measurementId: "G-3TP3S478Q5"


//   });

//   const messaging = getMessaging(firebaseApp);

//   onMessage(messaging, (payload) => {
//     console.log('[firebase-messaging.js] Received foreground message ', payload);

//     if (!(self.Notification && self.Notification.permission === 'granted')) {
//       return;
//     }

//     Notification.requestPermission()
//       .then((permission) => {
//         if (permission === "granted") {

//           var notification = new Notification(payload.data.title, {
//             body: payload.data.body,
//             icon: '/pwa/icon-512x512.png',
//             badge: '/favicon.ico',
//             tag: 'renotify',
//             renotify: true,
//             //"actions": [
//             //	{ "action": "yes", "title": "Yes", "icon": "images/yes.png" },
//             //    { "action": "no", "title": "No", "icon": "images/no.png" }
//             //]
//           });
//           notification.onclick = function () {
//             console.log(console.log(this));
//           };

//           setTimeout(() => {
//             notification.close();
//           }, 3000);
//         }
//       })

//   });


//   if ('serviceWorker' in navigator) {

//     /*
//     navigator.serviceWorker.getRegistrations().then(function(registrations) {
//        for(let registration of registrations) {
//           registration.unregister()
//       }
//     });
//     */

//     navigator.serviceWorker.register('/firebase-messaging-sw.js', { type: 'module' })
//       .then(registration => {
//         console.log('😎 Le Service Worker (firebase-messaging-sw.js) démarre');

//         getToken(messaging, {
//           vapidKey: "BNcnjXpExLwFc3rtzjHN9Yybk4Wgda4ZD7y4MwNU55gkvQHZYXN5dEk7LbB-ivkSigdIBkLgXCzGBLChhBZnMZo",
//           serviceWorkerRegistration: registration
//         })
//           .then(function (token) {
//             console.log(token);
//           })
//           .catch(function (err) {
//             console.error("Didn't get notification permission", err);
//           });

//       })
//       .catch(error => {
//         console.error('😥 L\'enregistrement (firebase-messaging-sw.js) ne s\'est pas bien passé :', error);
//       });

//   }
//   return (
//     <div>FirebaseNotification</div>
//   )
// }

// export default FirebaseNotification


import React from 'react'

function FirebaseNotification() {
  return (
    <div>FirebaseNotification</div>
  )
}

export default FirebaseNotification
