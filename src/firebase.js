import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
	apiKey: 'AIzaSyCExbcklPuYXvtMYHmKY6flLKhew6X7IwE',
	authDomain: 'unichat-37da3.firebaseapp.com',
	projectId: 'unichat-37da3',
	storageBucket: 'unichat-37da3.appspot.com',
	messagingSenderId: '1042431190456',
	appId: '1:1042431190456:web:96872aede57b62045edb4d',
}).auth()

