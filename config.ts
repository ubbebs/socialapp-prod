import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import dotenv from 'dotenv'

dotenv.config()

const {
  FIREBASE_CONFIG_APIKEY,
  FIREBASE_CONFIG_PROJECTID,
  FIREBASE_CONFIG_MESSAGINGSENDERID,
  FIREBASE_CONFIG_APPID,
  FIREBASE_CONFIG_DATABASEURL,
} = process.env

const config = {
  firebaseConfig: {
    apiKey: FIREBASE_CONFIG_APIKEY,
    authDomain: `${FIREBASE_CONFIG_PROJECTID}.firebaseapp.com`,
    projectId: FIREBASE_CONFIG_PROJECTID,
    storageBucket: `${FIREBASE_CONFIG_PROJECTID}.appspot.com`,
    messagingSenderId: FIREBASE_CONFIG_MESSAGINGSENDERID,
    appId: FIREBASE_CONFIG_APPID,
    databaseURL: FIREBASE_CONFIG_DATABASEURL,
  },
}

const app = initializeApp(config.firebaseConfig)
const db = getDatabase(app)

export { app, db }
