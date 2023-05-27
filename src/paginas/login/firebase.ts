import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAtzEPbiYf75gJcV9-q2Db8llY6Z5BdqII",
  authDomain: "stellar-builder-387916.firebaseapp.com",
  projectId: "stellar-builder-387916"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider };
