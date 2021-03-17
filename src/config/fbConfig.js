import { firebase } from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSING_SENDERID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({ timestampInSnapshots: true });

export default firebase;