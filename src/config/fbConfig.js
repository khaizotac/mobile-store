import { firebase } from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDpYCtHU4vWIOF58rn6LlZrsIZRbjPA5u0",
    authDomain: "mobile-store-6212d.firebaseapp.com",
    projectId: "mobile-store-6212d",
    storageBucket: "mobile-store-6212d.appspot.com",
    messagingSenderId: "287764770898",
    appId: "1:287764770898:web:649b839156dd7536092f8b",
    measurementId: "G-Q3T1P3ELK9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({ timestampInSnapshots: true });

export default firebase;