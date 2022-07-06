import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Typography, Container } from '@mui/material';

import { useState, useEffect } from 'react';

import './cartView.scss';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Link } from 'react-router-dom';


const Cart = () => {

  const {cart, clearCart, deleteItem, priceTotal} = useContext(CartContext);

  const [somethingInCart, setSomethingInCart] = useState(false);

  useEffect(() => {
      if (cart.length > 0){
          setSomethingInCart(true);
      }else {
          setSomethingInCart(false);
      }
  }
  , [cart]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClearCart = () => {
    clearCart();
    setOpen(false);
  }

  return (
    <>
      { somethingInCart === true ?
        <>
          <div style={{display: 'flex', justifyContent: 'center' }}>
            <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center', maxWidth: 1280, minWidth: 650 , margin: '2rem', borderRadius: 0, boxShadow: 'none'}}>
              <Table sx={{ maxWidth: 1280, minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{fontFamily: 'Poppins, sans serif', fontSize: '.9rem', fontWeight: 500}}>Producto</TableCell>
                    <TableCell align="left" sx={{fontFamily: 'Poppins, sans serif', fontSize: '.9rem', fontWeight: 500}}>Precio</TableCell>
                    <TableCell align="center" sx={{fontFamily: 'Poppins, sans serif', fontSize: '.9rem', fontWeight: 500}}>Cantidad</TableCell>
                    <TableCell align="left" sx={{fontFamily: 'Poppins, sans serif', fontSize: '.9rem', fontWeight: 500}}>Subtotal</TableCell>
                    <TableCell size='small'/>
                  </TableRow>
                </TableHead>
                
                <TableBody>

                  { cart.map((item) => (
                    <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row" sx={{display: "flex", alignItems: "center"}}>
                          <img src={item.pictureURL} alt={item.name} style={{minHeight: 100, maxHeight: 100}}/>
                          <span style={{paddingLeft: '1rem', fontFamily: 'Poppins, sans serif', fontSize: '1.1rem', fontWeight: 600}}>{item.name}</span>
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
                        <IconButton aria-label="delete" size="large" onClick={ () => deleteItem(item.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>                  
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell colSpan={2} align="left"></TableCell>
                    <TableCell align="center" sx={{fontFamily: 'Poppins, sans serif', fontSize: '1.5rem', fontWeight: 400, paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>Total a pagar:</TableCell>
                    <TableCell align="left" sx={{fontFamily: 'Poppins, sans serif', fontSize: '1.5rem', fontWeight: 400, paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
                      <span>${priceTotal().toLocaleString('es-AR')}</span>
                    </TableCell>                  
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={2} align="left"></TableCell>
                    <TableCell align="right" >
                      <Button onClick={handleClickOpen}
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
                          variant="outlined">
                        Finalizar compra
                      </Button>
                    </TableCell>                  
                  </TableRow>                
                </TableBody>
              </Table>
            </TableContainer>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              sx={{borderRadius: 0, boxShadow:'none'}}
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
                <Button onClick={handleClose} sx={{fontFamily: 'Poppins, sans-serif', fontWeight: 400, borderRadius: 0, color: '#444444'}}>Cancelar</Button>
                <Button onClick={handleClearCart} autoFocus sx={{fontFamily: 'Poppins, sans-serif', fontWeight: 400, borderRadius: 0, color: '#fff', backgroundColor: '#ff9900',
                              '&:hover': {
                              color: '#fff',
                              backgroundColor: '#ca7900',
                              border: 'none',
                            },}}>
                  Aceptar
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </>
      :
        <Container sx={{padding: '2rem'}}>
          <Paper sx={{display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '2rem',
                      padding: '2rem',
                      bgColor: '#fff',
                      borderRadius: 0,
                      boxShadow: 'none',
                      gap: '.5rem'}}>
            <Typography variant="h3"
              sx={{fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '2rem'}}>
              Tu carrito está vacío
            </Typography>
            <Typography variant="h6"
              sx={{fontFamily: 'Poppins, sans serif',
              fontWeight: 400,
              fontSize: '1rem',
              color: '#8A8A8A'}}>
              ¡Cientos de productos te esperan!
            </Typography>
            <Button component={Link} to="/" variant="h3"
              sx={{fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '1rem',
                  marginTop: '1rem',
                  borderRadius: 0,
                  color: '#fff', 
                  backgroundColor: '#ff9900',
                  padding: '1rem 2rem',

                    '&:hover': {
                    color: '#fff',
                    backgroundColor: '#ca7900',
                    border: 'none',
                    },
              }}>
              Volver a la tienda
            </Button>
          </Paper>          
        </Container>
      }
    </>

  )
}
    
export default Cart;
