import ItemList from "./ItemList/ItemList";
import { productosArray }  from "../../data/products";
import { useState } from 'react';
import { useEffect } from 'react';

const ItemListContainer = ( {greeting} ) => {

  const [productos, setProductos] = useState([]);

    useEffect(() => {
      const traerProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productosArray);
        }, 2000);
      });
      traerProductos.then((resolve) => {
        setProductos(resolve);
      });
      traerProductos.catch((error) => {
        console.log(error);
      });
    }, []);

  return (
    <div>
      <div> {greeting} </div>
      <ItemList items={productos} />
    </div>
  )
};

export default ItemListContainer;
