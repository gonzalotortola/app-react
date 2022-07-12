import ItemDetail from "./ItemDetail/ItemDetail";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import { traerUnProducto } from "../../services/firestore";


const ItemDetailContainer = () => {

  const { id } = useParams();

  const [producto, setProducto] = useState({});

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      traerUnProducto(id)
        .then((res) => {
          setProducto(res);
          setLoading(false);
      })
        .catch((error) => {
          console.log(error);
      })
    }
  }, [id]);


  return (
    <>
      { loading
      ? <div style={{width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div >
              <CircularProgress sx={{color: '#ff9900'}} />
            </div>
        </div>
      : <div className="container">
          <ItemDetail key={producto.id} item={producto}/>
        </div>
      }
    </>
  )
};

export default ItemDetailContainer;