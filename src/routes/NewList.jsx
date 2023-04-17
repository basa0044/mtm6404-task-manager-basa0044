import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { collection, addDoc } from 'firebase/firestore'
import db from "../db";

export default function NewList(props){

    const navigate = useNavigate()

    const[list, setList] = React.useState(
        {
            title: '',
            tasks: [{
                complete: false,
                priority: 'Urgent',
                task: 'Create a to do list!',
                time: '8.00'
            }]
        }
    )

    function submitHandler(e){
        e.preventDefault()
        const c = collection(db, 'lists')
        addDoc(c, list)
        .then(document => navigate('/lists/' + document.id))

    }

    function changeHandler(e){
        setList({
            ...list,
            title: e.target.value
        })
    }
    

    return(
        <>
        <div className="newForm">
        <form onSubmit={submitHandler} className="newPageForm">
            <h1 className="mb-3">New Page</h1>
            <label htmlFor="name">Title</label>
            <input id="name" type="text" className="form-control" value={list.title} onChange={changeHandler}></input>
            <div className="mt-3 buttons--container">
            <Link className="btn btn-dark btn--cancel" to="/">Cancel</Link>
            <button className="btn btn-primary btn--save" type="submit">Save</button>
            </div>
        </form>
        </div>
        </>
    )
}