import React from "react"
import ListItem from "./ListItem"
import Show from "./Show"

export default  function List (props) {

    const list = props.list.map((item, id) => ({...item, id}))

    const [show, showItems] = React.useState

    function onUpdateItemHandler(updatedItem){
        const updatedList =  list.map(item => item.id === updatedItem.id ?
            {...item, complete: !item.complete } : item)
            props.onUpdate(updatedList)
    }

    function onDeleteItemHandler(deletedItem) {
        const updatedList = list.filter(item => item.id !== deletedItem.id)
        props.onDelete(updatedList)
    }
    const remaining = list.filter(item => !item.complete).length

    function onClickButtonHandler(){
        const updatedList = list.filter(item => !item.complete)
        props.onHide(updatedList)
    }

    if(list.length){
        list.sort((a, b) => {
            if(a.priority < b.priority){return -1}
            else if(a.priority > b.priority){return 1}
            else{return 0}
        })   

        list.reverse()
    return(
      <ul className='listItems'>
      {list.map(item => <ListItem key={item.id} item={item} 
      onUpdateItem={onUpdateItemHandler}
      onDeleteItem={onDeleteItemHandler} />)}
      <Show remaining={remaining} onClickButton={onClickButtonHandler}/>
      </ul>
      ) }else{
        return(
            <p className="isNoItem">There are no items on your list.</p>
        )
        }          
  }
    

    
