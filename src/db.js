import {initializeApp} from 'firebase/app'
import {getFirestore, enableIndexedDbPersistence} from 'firebase/firestore' 
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJUF8IOU8vWWucKcCKqq0eHJV4dEajpCA",
    authDomain: "task-manager-3540d.firebaseapp.com",
    projectId: "task-manager-3540d",
    storageBucket: "task-manager-3540d.appspot.com",
    messagingSenderId: "152439935993",
    appId: "1:152439935993:web:5324eefa3ee668bddd2328"
  };

  // intitialize firebase
  const app = initializeApp(firebaseConfig)

// establish a connection to firestore
  const db = getFirestore(app)
  enableIndexedDbPersistence(db)
  export default db