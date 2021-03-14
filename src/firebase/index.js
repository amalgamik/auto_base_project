// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// var firebase = require("firebase/app");

import firebase from '@firebase/app';
import "@firebase/database";
import '@firebase/auth'

// Add the Firebase products that you want to use
const firebaseConfig = {
	apiKey: "AIzaSyCTbuENc0ZyKfYuXR2sp5Q0tGKQwJM9DVU",
	authDomain: "crm-base-9d630.firebaseapp.com",
	databaseURL: "https://crm-base-9d630-default-rtdb.firebaseio.com",
	projectId: "crm-base-9d630",
	storageBucket: "crm-base-9d630.appspot.com",
	messagingSenderId: "76783361399",
	appId: "1:76783361399:web:b525741e10dce3448a1572"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
let db = firebase.database();




export {
	db
};
export {
	firebase
};