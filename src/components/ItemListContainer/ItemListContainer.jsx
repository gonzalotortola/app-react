import "./itemLC.scss"
import ItemCount from "./ItemCount/ItemCount"

export default function ItemListContainer(props) {
  return (
    <div>
      <div className="saludo">{props.greeting}</div>
      <ItemCount className="itemCount" stock={5} initial={1}/>
    </div>
  )
}
