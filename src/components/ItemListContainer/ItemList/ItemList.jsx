import Item from './Item/Item'
import { useState } from 'react';
import { useEffect } from 'react';

import './itemList.scss';

export default function ItemList({items}) {

    const [productos, setProductos] = useState([]);

    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(items);
        }, 2000);
    });

    const resultadoProductos = async () => {
        try {
          const resultado = await promesaProductos;
          setProductos(resultado);
        } catch (error) {
          console.error(error);
          alert('No podemos cargar los productos en este momento.');
        }
    };

    useEffect(() => {
        resultadoProductos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div className="container">
          {productos.map(item => <Item key={item.id} {...item}/>)}
      </div>
  )
}
