import React from 'react'
import ReactDOM  from 'react-dom/client'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Title from './components/Title'
import Footer from './components/Footer'
import List from './components/List'
import './style.css'



let items = [
  {
    "index": 0,
    "task": "Clean your room", 
    "priority": "Low",
    "time": '18.30',
  },
  { 
    "index": 1,
    "task": "Workout", 
    "priority": "Medium",
    "time": '21.30',
  },
  {
    "index": 2,
    "task": "Movie Time", 
    "priority": "Medium",
    "time": '22.30',
  },
  {
    "index": 3,
    "task": "Cooking", 
    "priority": "High",
    "time": '17.00',
  },
  {
    "index": 4,
    "task": "Lecture", 
    "priority": "High",
    "time": '8.00',
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

