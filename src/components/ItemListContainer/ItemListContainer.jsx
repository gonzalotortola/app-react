import ItemList from "./ItemList/ItemList";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { traerProductos, traerProductosDeCategoria } from "../../services/firestore";

const ItemListContainer = ( {greeting} ) => {

  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
    traerProductosDeCategoria(categoryId)
      .then((res) => {
        setProductos(res);
    })
      .catch((error) => {
      console.log(error);
    });
  } else {
    traerProductos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, [categoryId]);

  return (
    <div>
      <div> {greeting} </div>
      <ItemList items={productos} />
    </div>
  )
};

export default ItemListContainer;
