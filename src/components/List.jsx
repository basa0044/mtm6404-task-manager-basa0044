import React from "react"
import ListItem from "./ListItem"
import Show from "./Show"

export default  function List (props) {
    
    const list = props.list.map((item, id) => ({...item, id}))

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

    const hide = list.filter(item => item.complete)

    const color = props.color
    
    if(list.length){    
    return(
      <ul className='listItems'>
      {list.map(item => <ListItem key={item.id} item={item} 
      onUpdateItem={onUpdateItemHandler}
      onDeleteItem={onDeleteItemHandler} variant={color}/>)}
      <Show remaining={remaining} hide={hide} />
      </ul>
      ) }else{
        return(
            <p className="isNoItem">There are no items on your list.</p>
        )
        }          
  }
    

    
