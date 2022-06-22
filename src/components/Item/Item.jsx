import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './item.scss'

import {Card, CardMedia, CardContent, CardActions} from '@mui/material';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

const Item = ({item}) => {
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
            <CardActions className="cardActions">
                <ItemCount stock={item.stock} initial={1}/>
                <Typography className="stock" gutterBottom variant="h5" component="div">
                        Stock disponible: {item.stock}
                </Typography>
            </CardActions>
        </Card>
    )
};

export default Item;