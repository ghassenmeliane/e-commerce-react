import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDb6w2IqOFKpQWITDQK0usLHvqqfVwvlUs",
    authDomain: "ecommercereactdb.firebaseapp.com",
    databaseURL: "https://ecommercereactdb.firebaseio.com",
    projectId: "ecommercereactdb",
    storageBucket: "ecommercereactdb.appspot.com",
    messagingSenderId: "293042173540",
    appId: "1:293042173540:web:b2ff914343c0f16245d171"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 