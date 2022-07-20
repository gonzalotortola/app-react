import "./cart-widget.scss";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { IconButton, Badge } from "@mui/material";
import { styled } from '@mui/system';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from "react-router-dom";

export default function CartWidget() {
  
  const {quantityInCart} = useContext(CartContext);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {      
      background: '#ff9900',
      border: "1px solid #fff",
      fontFamily: "Poppins, sans-serif"
    },
  }));

  return (
    
      <div>
        <IconButton aria-label="cart" component={Link} to="/cart" className="carrito"
        sx={{ color: "#000" }}>
          <StyledBadge badgeContent={quantityInCart()} color="secondary">
            <ShoppingCartOutlinedIcon />
          </StyledBadge>
        </IconButton>
      </div>    
  )
}
