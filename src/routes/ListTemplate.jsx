import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import {doc, getDoc, updateDoc, deleteDoc} from 'firebase/firestore'
import db from "../db"
import ListItem from "../components/ListItem"
import Show from "../components/Show"
import Form from "../components/Form"
import Title from "../components/Title"



export default function ListTemplate(){

    const [toggleButton, setToggleButton] = React.useState(false)

    const navigate = useNavigate()
    const params = useParams()
    const [list, setList] = React.useState({
        title: '',
        tasks: []
    })

    let relist = list.tasks.map((item, id) => ({...item, id}))
    const unCompleted = list.tasks.filter(item => !item.complete)

    React.useEffect(() => {
        getDoc (doc(db, 'lists', params.id))
        .then(document => {
            setList({
                title: document.data().title,
                tasks: document.data().tasks
            })
        } )
    },[params.id])

    function submitHandler(e){
        e.preventDefault()
        updateDoc(doc(db, 'lists', params.id), list)
        .then()
    }

    function onChangeHandler(e){
        setList({
            ...list,
            title: e.target.value
        })
    }

    async function onAddHandler (task){
        const newList = {...list, tasks: [...list.tasks, task]}
        setList(newList)
        await updateDoc(doc(db, 'lists', params.id), newList)
        .then()
      }


    async function onUpdateItemHandler(updatedItem){
        const updatedList =  relist.map( (item) => item.id === updatedItem.id ?
            {...item, complete: !item.complete } : item)
            const newList = {...list, tasks: updatedList}
            setList(newList)
            await updateDoc(doc(db, 'lists', params.id), newList)
            .then()
    }

    async function onDeleteItemHandler(deletedItem) {
        const updatedList = relist.filter(item => item.id !== deletedItem.id)
        const newList = {...list, tasks: updatedList}
        setList(newList)
        await updateDoc(doc(db, 'lists', params.id), newList)
        .then()
    }

    function clickHandler(){
        deleteDoc(doc(db, 'lists', params.id))
        .then(() => navigate('/'))
    }


    function onClickButton(){
        setToggleButton( prev => !prev)
        console.log(toggleButton)
          } 


    const remaining = list.tasks.filter(item => !item.complete).length

    const priorityOrder = { High: 0, Medium: 1, Low: 2 };

    function compareTasks(a, b) {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }

    if(list.tasks.length){
            relist.sort(compareTasks) 
    return(
        <>
        <form onSubmit={submitHandler}>
        <input name="title" type="text" className="form-control listTitle"
        value={list.title} onChange={onChangeHandler}></input>
        </form>
        <Title/>
        <Form onAdd={onAddHandler}/>
        <ul className='listItems'>
        {relist.map((item) => <ListItem key={item.id} item={item} 
        onUpdateItem={onUpdateItemHandler}  onDeleteItem={onDeleteItemHandler}
        toggleButton={toggleButton}/>)}
            <Show toggleButton={toggleButton} remaining={remaining} onClickButton={onClickButton}/>
        </ul>
        <div className="deleteList">
        <button className="btn deleteButton" onClick={clickHandler}>Delete List</button>
        </div>
        </>
        ) 
    }else{
    return(
        <>
        <form onSubmit={submitHandler}>
        <input name="title" type="text" className="form-control listTitle"
        value={list.title} onChange={onChangeHandler}></input>
        </form>
        <Title/>
        <Form onAdd={onAddHandler}/>
        <p className="isNoItem">There are no items on your list.</p>
        </>
        )
        
    }     
}     


    