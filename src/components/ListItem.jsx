export default function ListItem (props) {
    return(
        <div className="list">
            <input type="checkbox" checked={props.item.complete}></input>
            <span className="textarea">{props.item.task}</span>
            <div className="variants">
                <span>High</span>
                <p className="time">{props.item.time}</p>
                <i>Icon</i>
            </div>
        </div>
        )
}