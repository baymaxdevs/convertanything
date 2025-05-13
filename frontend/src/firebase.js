import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Import the Firebase configuration
// You need to create a firebase-config.js file based on the firebase-config.example.js template
import firebaseConfig from './firebase-config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const storage = getStorage(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, storage, firestore, auth };