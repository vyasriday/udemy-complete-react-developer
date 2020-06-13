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

/**
 *
 * @param {Object} userAuth: User Object that we get from firebase.auth()
 * @param {Object} additionalData: Any additional data
 */
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userId = userAuth.uid;
	const userRef = firestore.doc(`/users/${userId}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				email,
				displayName,
				createdAt,
				...additionalData,
			});
		} catch (e) {
			console.log(e);
		}
	}
	return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

firestore
	.collection('users')
	.doc('ydT13tmrglAMaR9Yo5u1')
	.collection('cartItems')
	.doc('MrfMmWwgrO0tFtjQ2S8B');

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
