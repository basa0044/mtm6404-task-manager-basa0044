import React from 'react'
import ReactDOM  from 'react-dom/client'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Title from './components/Title'
import Footer from './components/Footer'
import List from './components/List'
import Form from './components/Form'
import './style.css'


function App (){  

  let items = [
    {
      complete: false,
      task: "Clean your room", 
      priority: "Low",
      time: '18.30',
    },
    { 
      complete: false,
      task: "Workout", 
      priority: "Medium",
      time: '21.30',
    },
    {
      complete: false,
      task: "Movie Time", 
      priority: "Medium",
      time: '22.30',
    },
    {
      complete: false,
      task: "Cooking", 
      priority: "High",
      time: '17.00',
    },
    {
      complete: true,
      task: "Lecture", 
      priority: "High",
      time: '8.00',
    }
    ]

  const [list, setList] = React.useState(items)

  function onAddHandler (task){
    setList([...list, task])
  }

  function onUpdateHandler(list){
    setList(list)
  }

  return(
    <div>
      <Header/>
      <Navbar/>
      <Title/>
      <Form onAdd={onAddHandler}/>
      <List list={list} onUpdate={onUpdateHandler}/>
      <Footer/>
    </div>
  )
}

export default App

