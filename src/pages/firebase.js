// import { initializeApp } from 'firebase/app';
// import { getToken, getMessaging, onMessage } from 'firebase/messaging';

// const firebaseConfig = {
//     apiKey: "AIzaSyApfXA4X_RY15S5Hq-wxYlzOs6-YfFOE80",
//     authDomain: "react-test-3029f.firebaseapp.com",
//     databaseURL: "https://react-test-3029f-default-rtdb.firebaseio.com",
//     projectId: "react-test-3029f",
//     storageBucket: "react-test-3029f.appspot.com",
//     messagingSenderId: "547635026359",
//     appId: "1:547635026359:web:f044c3b40bf1fb51643032",
//     measurementId: "G-KXFZDV4BS0"
// };

// console.log('*** Environment ***', process.env.REACT_APP_ENV)
// console.log('*** Firebase Config ***', firebaseConfig)

// const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseApp);

import { initializeApp } from 'firebase/app';
import { getToken, getMessaging, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyApfXA4X_RY15S5Hq-wxYlzOs6-YfFOE80",
    authDomain: "react-test-3029f.firebaseapp.com",
    databaseURL: "https://react-test-3029f-default-rtdb.firebaseio.com",
    projectId: "react-test-3029f",
    storageBucket: "react-test-3029f.appspot.com",
    messagingSenderId: "547635026359",
    appId: "1:547635026359:web:f044c3b40bf1fb51643032",
    measurementId: "G-KXFZDV4BS0"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);


export const onForegroundMessage = () =>
  new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));