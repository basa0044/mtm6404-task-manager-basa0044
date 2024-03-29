import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import db from './db';
import {collection, query, onSnapshot} from 'firebase/firestore'
import  { ContextApi }  from './ContextApi'
import 'firebase/firestore';


function App (){


  const[lists, setList] = React.useState([])

  React.useEffect(() => {
      const c = collection(db, 'lists')
      const q = query(c)
      const unsubscribe = onSnapshot(q, (snapshot) => {
          const data = []
          snapshot.forEach(doc => data.push({
              id: doc.id,
              tasks: doc.data().tasks,
              title: doc.data().title
          }))
          setList(data)
      })
  },[])


  return(
    <ContextApi.Provider value={lists}>
      <Navbar/>
      <Footer/>
    </ContextApi.Provider>
  )
}

export default App

