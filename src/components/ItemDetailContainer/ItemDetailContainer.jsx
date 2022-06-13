import ItemDetail from "./ItemDetail/ItemDetail";
import { productosArray }  from "../../data/products";
import { useState } from 'react';
import { useEffect } from 'react';

let detalleProducto = [productosArray[0]];

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([]);

    useEffect(() => {
      const traerProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(detalleProducto);
        }, 3000);
      });
      traerProducto.then((resolve) => {
        setProducto(resolve);
      });
      traerProducto.catch((error) => {
        console.log(error);
      });
    }, []);

  return (
    <div>
        <div className="container">
          { producto.map((producto) => (
            <ItemDetail key={producto.id} item={producto}/>
          ))}
        </div>
    </div>
  )
};

export default ItemDetailContainer;