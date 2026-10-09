const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

let serviceAccount = null;

// 1. Try reading full JSON from FIREBASE_SERVICE_ACCOUNT environment variable (useful on Netlify)
if (process.env.FIREBASE_SERVICE_ACCOUNT) {
  try {
    serviceAccount = typeof process.env.FIREBASE_SERVICE_ACCOUNT === 'string'
      ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
      : process.env.FIREBASE_SERVICE_ACCOUNT;
  } catch (error) {
    console.error('Error parsing FIREBASE_SERVICE_ACCOUNT env var:', error.message);
  }
}

// 2. Try loading local serviceAccountKey.json file
if (!serviceAccount) {
  try {
    serviceAccount = require('./serviceAccountKey.json');
  } catch (error) {
    // If file is missing, try individual environment variables
    if (process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
      serviceAccount = {
        projectId: process.env.FIREBASE_PROJECT_ID || 'ecommerce-3f37b',
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      };
    }
  }
}

let app = null;
let auth = null;

// Initialize Firebase Admin if credentials are provided and not already initialized
if (getApps().length === 0) {
  if (serviceAccount) {
    try {
      app = initializeApp({
        credential: cert(serviceAccount)
      });
      auth = getAuth(app);
      console.log('Firebase Admin initialized successfully');
    } catch (err) {
      console.error('Firebase Admin initialization error:', err.message);
    }
  } else {
    console.warn('Firebase Admin: No service account credentials found.');
  }
} else {
  app = getApps()[0];
  auth = getAuth(app);
}

module.exports = { app, auth };
