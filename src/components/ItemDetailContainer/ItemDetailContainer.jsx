import ItemDetail from "./ItemDetail/ItemDetail";
import { productosArray }  from "../../data/products";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [producto, setProducto] = useState([]);

    useEffect(() => {
      const traerProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
          const itemFound = productosArray.find(item => { return item.id === parseInt(id) });
          resolve(itemFound);
        }, 2000);
      });
      traerProducto.then((resolve) => {
        setProducto(resolve);
      });
      traerProducto.catch((error) => {
        console.log(error);
      });
    }, [id]);

  return (
    <div>
        <div className="container">
          <ItemDetail key={producto.id} item={producto}/>
        </div>
    </div>
  )
};

export default ItemDetailContainer;