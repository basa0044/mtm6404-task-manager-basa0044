import React from "react"
import Header from "../components/Header"
import Title from "../components/Title"
import Navbar from "../components/Navbar"
import Form from "../components/Form"
import List from "../components/List"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"

export default function ListTemplate(){

    let items = [
        {
          complete: false,
          task: "Clean your room", 
          priority: "Low",
          time: "10.30",
        },
        { 
          complete: false,
          task: "Workout", 
          priority: "Medium",
          time: "10.30",
        },
        {
          complete: false,
          task: "Movie Time", 
          priority: "Medium",
          time: "10.30",
        },
        {
          complete: false,
          task: "Cooking", 
          priority: "Urgent",
          time: "10.30",
        },
        {
          complete: true,
          task: "Lecture", 
          priority: "Urgent",
          time: "10.30",
        }
        ]
    
    
      const [list, setList] = React.useState(() => 
       JSON.parse(localStorage.getItem('list')) || items)

       function onAddHandler (task){
        setList([...list, task])
      }
    
    
      function onUpdateHandler(list){
        setList(list)
      }
    
      function onDeleteHandler (list){
        setList(list)
      }
    
      function onHideHandler (list){
        setList(list)
      }

      function handleTitle(list){
        const lists = []
        lists.push((list, index) => <NavLink to={"/lists"+index} ></NavLink>)
      }
    
      React.useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
      }, [JSON.stringify(list)])

    return(
        <>
        <Header/>
        <Navbar handleTitle={handleTitle}/>
        <Title/>
        <Form onAdd={onAddHandler}/>
        <List list={list} onUpdate={onUpdateHandler} onDelete={onDeleteHandler} onHide={onHideHandler}/>
        <Footer/>
        </>
    )
}