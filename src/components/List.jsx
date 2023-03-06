
import ListItem from './ListItem'

export default function List (props) {

    const list = props.list.map((item, id) => ({...item, id}))

    return(
        <ul className="listItems">
            {list.map(item => <ListItem key={item.id} item={item}/>)}
        </ul>
    )

}
    
        // {/* <div className="list">
        //     <input type="checkbox"></input>
        //     <p className="textarea">Project Due</p>
        //     <div className="variants">
        //         <span><p>High</p></span>
        //         <p className="time">11.59</p>
        //         <i>Icon</i>
        //     </div>
        // </div>
        // <div className="list">
        //     <input type="checkbox"></input>
        //     <p className="textarea">Class</p>
        //     <div className="variants">
        //         <span><p>Medium</p></span>
        //         <p className="time">17.00</p>
        //         <i>Icon</i>
        //     </div>
        // </div>
        // <div className="list">
        //     <input type="checkbox"></input>
        //     <p className="textarea">Workout</p>
        //     <div className="variants">
        //         <span><p>Low</p></span>
        //         <p className="time">21.30</p>
        //         <i>Icon</i>
        //     </div>
        // </div>
        // <div className="list">
        //     <input type="checkbox"></input>
        //     <p className="textarea">Movie time with sister</p>
        //     <div className="variants">
        //         <span><p>Low</p></span>
        //         <p className="time">22.30</p>
        //         <i>Icon</i>
        //     </div>
        // </div> */}
        // </div>
    
