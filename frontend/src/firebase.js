import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyA0-psgnWyYrBkL6f8WjatV9kyQ65PELIc",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "ecommerce-3f37b.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "ecommerce-3f37b",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "ecommerce-3f37b.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "1089922629327",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:1089922629327:web:5555f9cd623cd824eec1ba",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-QL0J5WMN38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Analytics safely
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}

export { analytics };
export default app;
