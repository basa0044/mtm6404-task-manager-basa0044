import React from "react"
import ListItem from "./ListItem"

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
    
    if(list.length){    
    return(
      <ul className='listItems'>
      {list.map(item => <ListItem key={item.id} item={item} 
      onUpdateItem={onUpdateItemHandler}
      onDeleteItem={onDeleteItemHandler}/>)}
      </ul>
      ) }else{
        return(
            <p className="isNoItem">There are no items on your list.</p>
        )
        }          
  }
    

    
