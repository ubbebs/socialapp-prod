import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const {
  VITE_FIREBASE_CONFIG_APIKEY,
  VITE_FIREBASE_CONFIG_PROJECTID,
  VITE_FIREBASE_CONFIG_MESSAGINGSENDERID,
  VITE_FIREBASE_CONFIG_APPID,
  VITE_FIREBASE_CONFIG_DATABASEURL,
} = import.meta.env

const config = {
  firebaseConfig: {
    apiKey: VITE_FIREBASE_CONFIG_APIKEY,
    authDomain: `${VITE_FIREBASE_CONFIG_PROJECTID}.firebaseapp.com`,
    projectId: VITE_FIREBASE_CONFIG_PROJECTID,
    storageBucket: `${VITE_FIREBASE_CONFIG_PROJECTID}.appspot.com`,
    messagingSenderId: VITE_FIREBASE_CONFIG_MESSAGINGSENDERID,
    appId: VITE_FIREBASE_CONFIG_APPID,
    databaseURL: VITE_FIREBASE_CONFIG_DATABASEURL,
  },
}

const app = initializeApp(config.firebaseConfig)
const db = getDatabase(app)

export { app, db }
