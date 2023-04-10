import React from "react"
import { Link, useParams } from "react-router-dom"
import {doc, getDoc, updateDoc} from 'firebase/firestore'
import db from "../db"
import ListItem from "../components/ListItem"
import Show from "../components/Show"
import Form from "../components/Form"


export default function ListTemplate(){

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

    

    function onChangeHandler(e){
        console.log(list)
    }

    function onAddHandler (task){
        setList({...list, tasks: [...list.tasks, task]})
      }

    function onUpdateItemHandler(updatedItem){
        const updatedList =  relist.map( (item) => item.id === updatedItem.id ?
            {...item, complete: !item.complete } : item)
            setList({...list, tasks: updatedList})
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
        <input name="title" type="text" className="form-control listTitle"
        value={list.title} onChange={onChangeHandler}></input>
        <Form onAdd={onAddHandler}/>
        <ul className='listItems'>
        {relist.map((item) => <ListItem key={item.id} item={item} 
        onUpdateItem={onUpdateItemHandler} />)}
            <Show remaining={remaining}/>
        </ul>
        </>
        ) 
    }else{
    return(
        <p className="isNoItem">There are no items on your list.</p>
        )
    }     
}     


    