import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import {doc, getDoc, updateDoc, deleteDoc} from 'firebase/firestore'
import db from "../db"
import ListItem from "../components/ListItem"
import Show from "../components/Show"
import Form from "../components/Form"
import Title from "../components/Title"


export default function ListTemplate(){

    const navigate = useNavigate()
    const params = useParams()
    const [list, setList] = React.useState({
        title: '',
        tasks: []
    })

    let relist = list.tasks.map((item, id) => ({...item, id}))

    const[completedItems, setCompletedItems] = React.useState(false)

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

    function onAddHandler (task){
        setList({...list, tasks: [...list.tasks, task]})
      }

    function onUpdateItemHandler(updatedItem){
        const updatedList =  relist.map( (item) => item.id === updatedItem.id ?
            {...item, complete: !item.complete } : item)
            setList({...list, tasks: updatedList})
    }

    function onDeleteItemHandler(deletedItem) {
        const updatedList = relist.filter(item => item.id !== deletedItem.id)
        setList({...list, tasks: updatedList})
    }

    function clickHandler(){
        deleteDoc(doc(db, 'lists', params.id))
        .then(() => navigate('/'))
    }

    // function showRemaining(){
    //     if(!completedItems){
    //         relist.filter(item => !item.complete)
    //         setCompletedItems(state => !state)
    //     }else{       
    //         setCompletedItems(state => !state)
    //     }
        
        
    // }

    const remaining = list.tasks.filter(item => !item.complete).length

    if(list.tasks.length){
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
        onUpdateItem={onUpdateItemHandler}  onDeleteItem={onDeleteItemHandler}/>)}
            <Show remaining={remaining}/>
        </ul>
        <div className="deleteList">
        <button className="btn btn-danger deleteButton" onClick={clickHandler}>Delete List</button>
        </div>
        </>
        ) 
    }else{
    return(
        <p className="isNoItem">There are no items on your list.</p>
        )
    }     
}     


    