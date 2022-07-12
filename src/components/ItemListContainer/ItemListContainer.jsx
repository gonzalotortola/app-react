import ItemList from "./ItemList/ItemList";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


import { traerProductos, traerProductosDeCategoria } from "../../services/firestore";

const ItemListContainer = ( {greeting} ) => {

  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams();

  useEffect(() => {
    if (productos.length > 0){
      setLoading(false);
    }else {
      setLoading(true);
    }
}
, [productos]);

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
      { loading
      ? <div style={{width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <CircularProgress sx={{color: '#ff9900'}} />
        </div>
      :
      <>
        <div> {greeting} </div>
        <ItemList items={productos} />
      </>
      }
    </div>
  )
};

export default ItemListContainer;
