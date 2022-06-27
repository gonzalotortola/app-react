import ItemList from "./ItemList/ItemList";
import { productosArray }  from "../../data/products";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ( {greeting} ) => {

  const [productos, setProductos] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
      const traerProductos = new Promise((resolve) => {
        setTimeout(() => {
          if (categoryId === undefined)
          resolve(productosArray);
          else {
            const itemsFound = productosArray.filter(item => { return item.category === categoryId});
            resolve(itemsFound);
          }
        }, 2000);
      });
      traerProductos.then((resolve) => {
        setProductos(resolve);
      });
      traerProductos.catch((error) => {
        console.log(error);
      });
    }, [categoryId]);

  return (
    <div>
      <div> {greeting} </div>
      <ItemList items={productos} />
    </div>
  )
};

export default ItemListContainer;
