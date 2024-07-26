import { initializeApp } from "firebase/app"; // Importing Firebase app initialization function
import { getAuth } from "firebase/auth"; // Importing Firebase authentication service

// Firebase configuration object containing keys and identifiers for your app
const firebaseConfig = {
  apiKey: "AIzaSyD1F6lbyRDeejP8wJY-wrYCwfY3cQ4jIxU", // API key for your Firebase project
  authDomain: "food-app-a9263.firebaseapp.com", // Auth domain for your Firebase project
  projectId: "food-app-a9263", // Project ID for your Firebase project
  storageBucket: "food-app-a9263.appspot.com", // Storage bucket for your Firebase project
  messagingSenderId: "424971672222", // Messaging sender ID for your Firebase project
  appId: "1:424971672222:web:a211848c895c01bd7e398f", // App ID for your Firebase project
  measurementId: "G-HDDV01BVD8" // Measurement ID for analytics (optional)
};

// Initializing Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Getting the authentication service from the initialized Firebase app
export const auth = getAuth(app); // Exporting the authentication service for use in other parts of your app
