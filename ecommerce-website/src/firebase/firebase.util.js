import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDs2YlE2DRmMhNcuPS1segXTMn_hDexx2c',
	authDomain: 'ecommerce-website-b1fd4.firebaseapp.com',
	databaseURL: 'https://ecommerce-website-b1fd4.firebaseio.com',
	projectId: 'ecommerce-website-b1fd4',
	storageBucket: 'ecommerce-website-b1fd4.appspot.com',
	messagingSenderId: '65117153951',
	appId: '1:65117153951:web:5315be892e1da9af85d0aa',
	measurementId: 'G-WEPPVTBTV0',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
