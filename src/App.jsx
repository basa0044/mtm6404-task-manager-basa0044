import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Title from './components/Title'
import List from './components/List'
import Footer from './components/Footer'
import './style.css'
import NewItem from './components/NewItem'


function App (){  

  const initialData = [
    { task: 'Meeting with the team', complete: true},
    {task: 'Project Due', complete: false},
   ]  
  
  const [list, setList] = React.useState(initialData)
  
  

  return(
    <div>
      <Header/>
      <Navbar/>
      <Title/>
      <NewItem/>
      <List list={list}/>
      <Footer/>
    </div>
  )
}

export default App

