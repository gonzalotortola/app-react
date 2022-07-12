import React from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import './itemDetail.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

import {CardMedia, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const ItemDetail = ({ item }) => {

    const {addToCart, priceTotal} = useContext(CartContext);

    const [cant, setCant] = useState(0);

    const [addedToCart, setAddedToCart] = useState(false);

    const onAdd = (quantityToAdd) => {
        console.log("Cantidad recibida: " + quantityToAdd);
        setCant(quantityToAdd);
        setAddedToCart(true);
        addToCart(item, quantityToAdd);
        priceTotal(item, quantityToAdd);
    }

    return (
        <>
            <div className="detail-card">
                <div className="detail-img-center">
                    <CardMedia className="detail-img"
                    component="img"
                    height="auto"
                    image={item.pictureURL}
                    alt={item.name}
                />
                </div>
                
                <div className="detail-card-body">
                    <Typography className="detail-name" gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography className="detail-tagline" gutterBottom variant="h5" component="div">
                        {item.tagline}
                    </Typography>
                    <Typography className="detail-description" variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    <Typography className="detail-price" gutterBottom variant="h5" component="div">
                        $ {item.price.toLocaleString('es-AR')}
                    </Typography>
                    <div className="detail-buttons">
                        {
                            addedToCart === false ?
                            <>
                                <ItemCount className="itemCount" onAdd={onAdd} stock={item.stock} initial={1}/>
                                <Typography className="stock" gutterBottom variant="h5" component="div">
                                    Stock disponible: {item.stock}
                                </Typography>
                            </>
                            :
                            <>
                                <Link to="/cart" className="verCarritoLink">
                                    <Button className="verCarritoButton" variant="outlined" startIcon={<ShoppingCartOutlinedIcon />}>Ver carrito</Button>
                                </Link>
                            </>
                        }
                    </div>                   
                </div>
            </div>
        </>
    )
};

export default ItemDetail;