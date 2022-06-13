import * as React from 'react';
import {Button} from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import "./itemCount.scss";
import { useState } from 'react';

export default function ItemCount ( {stock, initial} ) {

    const [count, setCount] = useState(initial);

    function resta() {
        if (count > initial) {
            setCount(count-1)
            return count
        }
    }    

    function suma() {
        if (count < stock) {
            setCount(count + 1)
            return count        
        }
    }
    
    return (
        <div className="centerContainer">
            <div className="itemCountContainer">
                <div className="counterContainer">
                    <Button className="counterButton"
                            variant="contained"
                            onClick={resta}
                            disabled={count === initial ? true : null}
                    >
                        -
                    </Button>
                    <p>{count}</p>
                    <Button className="counterButton"
                            variant="contained"
                            onClick={suma}
                            disabled={count === stock ? true : null}
                    >
                        +
                    </Button>
                </div>
                <Button className="carritoButton" variant="outlined" startIcon={<AddShoppingCartOutlinedIcon />}>Agregar al carrito</Button>

            </div>
        </div>
    )
}