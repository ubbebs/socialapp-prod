import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const config = {
  firebaseConfig: {
    apiKey: 'AIzaSyC7ma7DM2wwi4Yv4Zfp0pvNNz1Jshr4zFA',
    authDomain: 'socialapp-c3f3f.firebaseapp.com',
    projectId: 'socialapp-c3f3f',
    storageBucket: 'socialapp-c3f3f.appspot.com',
    messagingSenderId: '173393245762',
    appId: '1:173393245762:web:13cc41c8516ea2f5285fdb',
    databaseURL:
      'https://socialapp-c3f3f-default-rtdb.europe-west1.firebasedatabase.app/',
  },
}

const app = initializeApp(config.firebaseConfig)
const db = getDatabase(app)

export { app, db }
