import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './item.scss'

import {Card, CardMedia, CardContent} from '@mui/material';
import Typography from '@mui/material/Typography';

const Item = ({item}) => {
    return (
        <Card className="card" sx={{ maxWidth: 345 }}>
            <div className="img-center">
                <CardMedia className="img"
                component="img"
                height="auto"
                image={item.pictureURL}
                alt={item.name}
                />
            </div>
            
            <CardContent className="card-body">
                <Typography className="name" gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography className="description" variant="body2" color="text.secondary">
                    {item.description} 
                </Typography>
                <Typography className="price" gutterBottom variant="h5" component="div">
                    ${item.price.toLocaleString('es-AR')}
                </Typography>
                <ItemCount className="itemCount" stock={item.stock} initial={1}/>
            </CardContent>
        </Card>
    )
};

export default Item;