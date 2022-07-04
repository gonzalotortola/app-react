import "./cart-widget.scss";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from "react-router-dom";




export default function CartWidget() {
  
  const {quantityInCart} = useContext(CartContext);

  return (
        <Button component={Link} to="/cart"
                className="carrito"
                sx={{
                  color: "#ff9900",
                  borderRadius: 0,
                  fontFamily: "Poppins, sans serif",
                  fontWeight: 600,
                  height: "100%",
                  ':hover' : {
                    backgroundColor: "#ff9900",
                    color: "#fff",                    
                  }
                }}
                startIcon={<ShoppingCartOutlinedIcon />}>
          {quantityInCart() === 0 ? null : quantityInCart()}
        </Button>
  )
}
