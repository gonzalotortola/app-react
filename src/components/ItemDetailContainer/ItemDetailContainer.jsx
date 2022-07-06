import ItemDetail from "./ItemDetail/ItemDetail";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import { traerUnProducto } from "../../services/firestore";


const ItemDetailContainer = () => {

  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (id) {
      traerUnProducto(id)
        .then((res) => {
          setProducto(res);
      })
        .catch((error) => {
          console.log(error);
          setIsError(error);
      })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  if(isError){
    return <p>{isError}</p>
  }

  return (
    <>
    {isLoading === true
    ? <div style={{width: '100%', display: "flex", justifyContent: 'center'}}>
      <CircularProgress />
      </div>
    : <div>
        <div className="container">
          <ItemDetail key={producto.id} item={producto}/>
        </div>
      </div>
      }
    </>
  )
};

export default ItemDetailContainer;