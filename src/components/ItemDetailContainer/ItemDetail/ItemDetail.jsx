import React from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import './itemDetail.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';



import {CardMedia, ToggleButtonGroup, ToggleButton, Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const ItemDetail = ({ item }) => {

    const [cant, setCant] = useState(0)

    const [addedToCart, setAddedToCart] = useState(false)

    const onAdd = (quantityToAdd) => {
        console.log("Cantidad recibida: " + quantityToAdd)
        setCant(quantityToAdd)
        setAddedToCart(true)
    }

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

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
                        $ {item.price}
                    </Typography>
                    <div className="detail-buttons">
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChange}
                            >
                            <ToggleButton sx={{ borderRadius: 0 }} disabled value="XS">XS</ToggleButton>
                            <ToggleButton sx={{ borderRadius: 0 }} value="S">S</ToggleButton>
                            <ToggleButton sx={{ borderRadius: 0 }} value="M">M</ToggleButton>
                            <ToggleButton sx={{ borderRadius: 0 }} value="L">L</ToggleButton>
                            <ToggleButton sx={{ borderRadius: 0 }} disabled value="XL">XL</ToggleButton>
                            <ToggleButton sx={{ borderRadius: 0 }} disabled value="XXL">XXL</ToggleButton>
                        </ToggleButtonGroup>

                        {
                            addedToCart === false ?
                            <ItemCount className="itemCount" onAdd={onAdd} stock={item.stock} initial={1}/>
                            :   <Link to="/cart" className="verCarritoLink">
                                    <Button className="verCarritoButton" variant="outlined" startIcon={<ShoppingCartOutlinedIcon />}>Ver carrito</Button>
                                </Link>
                        }
                    </div>                   
                </div>
            </div>
        </>
    )
};

export default ItemDetail;