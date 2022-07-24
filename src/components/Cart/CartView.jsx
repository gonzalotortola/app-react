import * as React from 'react';
import { useContext, useEffect, useState } from 'react';

import { CartContext } from '../../context/CartContext';

import { Button, Typography, Container, TextField, Tooltip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Link } from 'react-router-dom';

import { createBuyOrder } from '../../services/firestore'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import CheckoutView from './CheckoutView';
import EmptyCartMsg from './EmptyCartMsg';


const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root:{
          fontFamily: 'Poppins, sans-serif',
          '&.Mui-focused': {
            color: '#ff9900',
          },
        },    
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins, sans-serif',
          '&:after': {
            borderBottom: '2px solid #ff9900',
          },
        },    
      },
    },
  },
});


const CartView = () => {

  const [orderDone, setOrderDone] = useState(false);

  const [cartOrder, setCartOrder] = useState([]);

  const [totalPriceOrder, setTotalPriceOrder] = useState("");

  const [orderID, setOrderID] = useState("");

  const [orderDate, setOrderDate] = useState({});

  const {cart, clearCart, deleteItem, priceTotal} = useContext(CartContext);

  const [openClear, setOpenClear] = useState(false);

  const [openBuy, setOpenBuy] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);


  const [buyer, setBuyer] = useState( {
      name: "",
      phone: "",
      email: "",
    },
  );
  
  const [somethingInCart, setSomethingInCart] = useState(false);
  
  useEffect(() => {
      if (cart.length > 0){
          setSomethingInCart(true);
      }else {
          setSomethingInCart(false);
      }
  }
  , [cart]);

  const handleChange = (evt) => {
    const field = evt.target.name;
    const value = evt.target.value;

    setBuyer({
        ...buyer,
        [field]: value,
    })
  };


  function handleBuyOrder(evt) {

    evt.preventDefault();
    
    const dataOrder = {
      buyer,
      items: cart,
      total: priceTotal()
    };

    if (buyer.name === "") {
      setOpenAlert(true);
    } else if (buyer.email === "") {
      setOpenAlert(true);
    } else if (buyer.phone === "") {
      setOpenAlert(true);
    } else {
      setOpenBuy(false);

      createBuyOrder(dataOrder).then(( orderDataCreated ) => {
        setOrderID(orderDataCreated.id);
        setTotalPriceOrder(dataOrder.total);
        setCartOrder(cart);
        setOrderDone(true);
        setOrderDate(Date.now());
        clearCart();
      });
    };
  }


  const handleClickOpenClear = () => {
    setOpenClear(true);
  };

  const handleCloseClear = () => {
    setOpenClear(false);
  };

  const handleClearCart = () => {
    clearCart();
    setOpenClear(false);
  }

  const handleClickOpenBuy = () => {
    setOpenBuy(true);
  };

  const handleCloseBuy = () => {
    setOpenBuy(false);
  };

  return (
    <>
      { somethingInCart === true ?
        <Container sx={{display: 'flex', justifyContent: 'center' }}>
          <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center', maxWidth: 1280, minWidth: 650 , margin: '2rem', borderRadius: 0, boxShadow: 'none'}}>
            <Table stickyHeader sx={{ maxWidth: 1280, minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontFamily: 'Poppins, sans serif', fontSize: '.9rem', fontWeight: 500}}>Producto</TableCell>
                  <TableCell align="left" sx={{fontFamily: 'Poppins, sans serif', fontSize: '.9rem', fontWeight: 500}}>Precio</TableCell>
                  <TableCell align="center" sx={{fontFamily: 'Poppins, sans serif', fontSize: '.9rem', fontWeight: 500}}>Cantidad</TableCell>
                  <TableCell align="left" sx={{fontFamily: 'Poppins, sans serif', fontSize: '.9rem', fontWeight: 500, maxWidth: 'fit-content'}}>Subtotal</TableCell>
                  <TableCell size="small" />
                </TableRow>
              </TableHead>
              
              <TableBody>

                { cart.map((item) => (
                  <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                    <TableCell component="th" scope="row" sx={{display: "flex", alignItems: "center"}}>
                      <Link to={`../item/${item.id}`}>
                        <img src={item.pictureURL} alt={item.name} style={{minHeight: 100, maxHeight: 100}}/>
                      </Link>
                      <Link to={`../item/${item.id}`} style={{textDecoration: 'none', }}>
                        <Typography sx={{paddingLeft: '1rem', fontFamily: 'Poppins, sans serif', fontSize: '1.1rem', fontWeight: 600, color: "#000",
                                      '&:visited': { color: "#000"}, '&:hover': { color: "#ff9900"}}}>
                          {item.name}
                        </Typography>
                      </Link> 
                    </TableCell>
                    <TableCell component="th" scope="row" align="left"
                    sx={{fontFamily: 'Poppins, sans serif', fontSize: '1rem', fontWeight: 400}}>
                      $ {parseFloat(item.price).toLocaleString('es-AR')}
                      </TableCell>
                    <TableCell component="th" scope="row" align="center"
                    sx={{fontFamily: 'Poppins, sans serif', fontSize: '1rem', fontWeight: 400}}>

                    {item.quantity}

                      </TableCell>
                    <TableCell component="th" scope="row" align="left"
                    sx={{fontFamily: 'Poppins, sans serif', fontSize: '1rem', fontWeight: 500}}>
                      <span>${(parseFloat(item.price) * item.quantity).toLocaleString('es-AR')}</span>
                      </TableCell>
                    <TableCell component="th" scope="row" align="left" size='small'>
                      <Tooltip title="Eliminar producto">
                        <IconButton aria-label="delete" size="large" onClick={ () => deleteItem(item.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>                  
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell colSpan={2} align="left"></TableCell>
                  <TableCell align="center" sx={{fontFamily: 'Poppins, sans serif', fontSize: '1.5rem', fontWeight: 400, paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
                    Total a pagar:
                  </TableCell>
                  <TableCell align="left" sx={{fontFamily: 'Poppins, sans serif', fontSize: '1.5rem', fontWeight: 400, paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
                    <span>${priceTotal().toLocaleString('es-AR')}</span>
                  </TableCell>                  
                </TableRow>

                <TableRow>
                  <TableCell colSpan={2} align="left"></TableCell>
                  <TableCell align="right" >
                    <Button onClick={handleClickOpenClear}
                          sx={{marginTop: '1em', color: '#fff', backgroundColor: '#bcbcbc', border: 'none', boxShadow:'none',
                            fontSize: '1em', fontFamily: 'Poppins, sans-serif', fontWeight: 300, borderRadius: 0, textTransform: 'none',
                            '&:hover': {
                              color: '#fff',
                              backgroundColor: '#444444',
                              border: 'none',
                            },
                          }}
                          variant="outlined">
                        Eliminar todo
                      </Button>
                  </TableCell>
                  <TableCell>
                    <Button 
                        sx={{marginTop: '1em', color: '#fff', backgroundColor: '#ff9900', border: 'none', boxShadow:'none',
                          fontSize: '1.2em', fontFamily: 'Poppins, sans-serif', fontWeight: 400, borderRadius: 0, textTransform: 'none',
                          '&:hover': {
                            color: '#fff',
                            backgroundColor: '#ca7900',
                            border: 'none',
                          },
                        }}
                        variant="outlined"
                        onClick={handleClickOpenBuy}>
                      Finalizar compra
                    </Button>
                  </TableCell>                  
                </TableRow>                
              </TableBody>
            </Table>
          </TableContainer>

          <Dialog
            open={openClear}
            onClose={handleCloseClear}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
              style: {
                borderRadius: 0,
                boxShadow: 'none',
              },
            }}
          >
            <DialogTitle id="alert-dialog-title" sx={{fontFamily: 'Poppins, sans-serif', fontWeight: 400}}>
              {"Eliminar todo"}
            </DialogTitle>
            <DialogContent sx={{borderRadius: 0}}>
              <DialogContentText id="alert-dialog-description" sx={{fontFamily: 'Poppins, sans-serif', fontWeight: 400}}>
                ¿Está seguro que desea eliminar todo el contenido del carrito?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseClear} sx={{textTransform: "none", fontFamily: 'Poppins, sans-serif', fontWeight: 400, borderRadius: 0, color: '#444444'}}>Cancelar</Button>
              <Button onClick={handleClearCart} autoFocus sx={{textTransform: "none", fontFamily: 'Poppins, sans-serif', fontWeight: 400, borderRadius: 0, color: '#fff', backgroundColor: '#ff9900',
                            '&:hover': {
                            color: '#fff',
                            backgroundColor: '#ca7900',
                            border: 'none',
                          },}}>
                Aceptar
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={openBuy}
            onClose={handleCloseBuy}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
              style: {
                borderRadius: 0,
                boxShadow: 'none',
              },
            }}
          >
            <DialogTitle id="alert-dialog-title" sx={{fontFamily: 'Poppins, sans-serif', fontWeight: 400}}>
              {"Confirmación de compra"}
            </DialogTitle>
            <DialogContent sx={{borderRadius: 0}}>
              <DialogContentText id="alert-dialog-description" sx={{fontFamily: 'Poppins, sans-serif', fontWeight: 400}}>
                Ingrese sus datos personales:
              </DialogContentText>
              <ThemeProvider theme={theme}>
                  <form>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      name="name"
                      label="Nombre completo"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      required={true}
                    />                    
                    <TextField
                      autoFocus
                      margin="dense"
                      id="email"
                      name="email"
                      label="Correo electrónico"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      required={true}
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="phone"
                      name="phone"
                      label="Número de teléfono"
                      type="text"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      required={true}
                    />
                  </form>
                  </ThemeProvider>
                  <Collapse in={openAlert}>
                    <Alert severity="error" sx={{fontFamily: 'Poppins'}} onClose={() => {setOpenAlert(false)}}>
                      Por favor, complete todos los campos.
                    </Alert>
                    </Collapse>
              </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseBuy} sx={{textTransform: "none", fontFamily: 'Poppins, sans-serif', fontWeight: 400, borderRadius: 0, color: '#444444'}}>Cancelar</Button>
              <Button onClick={handleBuyOrder} type="submit" form="buyConfirmation" autoFocus sx={{textTransform: "none", fontFamily: 'Poppins, sans-serif', fontWeight: 400, borderRadius: 0, color: '#fff', backgroundColor: '#ff9900',
                            '&:hover': {
                            color: '#fff',
                            backgroundColor: '#ca7900',
                            border: 'none',
                          },}}>
                Finalizar compra
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      : orderDone === false ?
        <EmptyCartMsg />
      :        
          <CheckoutView cartOrder={cartOrder} totalPriceOrder={totalPriceOrder} orderID={orderID} orderDate={orderDate}/>
      }
    </>
  )}

export default CartView;