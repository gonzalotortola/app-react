import React from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import './itemDetail.scss';

import {CardMedia, ToggleButtonGroup, ToggleButton} from '@mui/material';
import Typography from '@mui/material/Typography';

const ItemDetail = ({ item }) => {

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
                        <ItemCount className="itemCount" stock={item.stock} initial={1}/>
                    </div>                   
                </div>
            </div>
        </>
    )
};

export default ItemDetail;