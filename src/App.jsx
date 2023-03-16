import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Title from './components/Title'
import Footer from './components/Footer'
import List from './components/List'
import './style.css'



let items = [
  {
      "index": 0,
      "task": "Cooking", 
      "priority": "High",
      "time": 10.30,
  },
  { 
      "index": 1,
      "task": "Cooking", 
      "priority": "High",
      "time": 10.30,
  },
  {
      "index": 2,
      "task": "Cooking", 
      "priority": "High",
      "time": 10.30,
  }
  ]

function App (){  

  return(
    <div>
      <Header/>
      <Navbar/>
      <Title/>
      <List items={items} />
      <Footer/>
    </div>
  )
}

export default App

