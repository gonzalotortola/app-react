import React from 'react';
import './item.scss';

import {Card, CardMedia, CardContent, CardActions, Divider, Button} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Item = ({item}) => {

    const {addToCart, priceTotal} = useContext(CartContext);

    const [addedToCart, setAddedToCart] = useState(false);

    const onAdd = (quantityToAdd) => {
        console.log("Cantidad recibida: " + quantityToAdd);
        setAddedToCart(true);
        addToCart(item, quantityToAdd);
        priceTotal(item, quantityToAdd);
    }

    return (
        <Card className="card" sx={{ maxWidth: 345, borderRadius: 0, boxShadow: "none"}}>
            
            <Link to={`../item/${item.id}`} className="img-center">
                <CardMedia className="img"
                component="img"
                height="auto"
                image={item.pictureURL}
                alt={item.name}
                />
            </Link>
            
            <CardContent className="card-body">
                <Link to={`../item/${item.id}`} style={{ textDecoration: 'none' }} >
                    <Typography className="name" gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                </Link>
                <Typography className="price" gutterBottom variant="h5" component="div" sx={{bottom: 0}}>
                    $ {item.price.toLocaleString('es-AR')}
                </Typography>
            </CardContent>
            <Divider />
            <CardActions className="cardActions">
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
            </CardActions>
        </Card>
    )
};

export default Item;