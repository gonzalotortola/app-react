import Item from '../../Item/Item';

import './itemList.scss';

const ItemList = ({items}) => {
    return (
      <div className="container">
          { items.map((item) => (
            <Item key={item.id} item={item}/>
          ))}
      </div>
  )
}

export default ItemList;
