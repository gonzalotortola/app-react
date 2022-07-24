import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Container } from '@mui/material';

import { Link } from 'react-router-dom';

import ReturnBtn from './ReturnBtn';




const CheckoutView = ({cartOrder, totalPriceOrder, orderID, orderDate}) => {

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center'}}>
          <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'start', margin: '2rem 2rem 0 2rem', backgroundColor: '#F9F9F9', padding: '2rem'}}>
            <Typography sx={{fontFamily: 'Poppins, sans serif',
                          fontSize: '1.2rem',
                          fontWeight: 500,
                          marginRight: '1rem',
                        }}>
              Detalle de su compra
            </Typography>
            <Container style={{display: 'flex', justifyContent: 'start', margin: 0, paddingLeft: 0, paddingRight: 0}}>

              <Typography sx={{fontFamily: 'Poppins, sans serif',
                            fontSize: '.8rem',
                            fontWeight: 400,
                            cursor: 'pointer',
                            color: '#656565',
                            marginRight: '.3rem',
                            '&:hover': { color: "#929292"}}}>
                #{orderID}
              </Typography>

              <Typography sx={{fontFamily: 'Poppins, sans serif',
                            fontSize: '.8rem',
                            fontWeight: 400,
                            color: "#ADADAD"
                          }}>
                · {new Intl.DateTimeFormat('es-AR', {day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric' }).format(orderDate)}
              </Typography>
            </Container>
          </Container>
            
          <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center', maxWidth: 1280, minWidth: 650 , margin: '1rem 2rem', borderRadius: 0, boxShadow: 'none'}}>
              
              <Table sx={{ maxWidth: 1280, minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                      <TableRow>
                          <TableCell align="left" sx={{fontFamily: 'Poppins, sans serif', fontSize: '.9rem', fontWeight: 500}}>Producto</TableCell>
                          <TableCell align="left" sx={{fontFamily: 'Poppins, sans serif', fontSize: '.9rem', fontWeight: 500}}>Precio</TableCell>
                          <TableCell align="center" sx={{fontFamily: 'Poppins, sans serif', fontSize: '.9rem', fontWeight: 500}}>Cantidad</TableCell>
                          <TableCell align="left" sx={{fontFamily: 'Poppins, sans serif', fontSize: '.9rem', fontWeight: 500}}>Subtotal</TableCell>
                      </TableRow>
                  </TableHead>
              
                  <TableBody>
                      { cartOrder.map(item => (
                          <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                              <TableCell component="th" scope="row" sx={{display: "flex", alignItems: "center"}}>
                                <Link to={`../item/${item.id}`}>
                                  <img src={item.pictureURL} alt={item.name} style={{minHeight: 100, maxHeight: 100}}/>
                                </Link>
                                <Link to={`../item/${item.id}`} style={{textDecoration: 'none'}}>
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
                                  <span>
                                      ${(parseFloat(item.price) * item.quantity).toLocaleString('es-AR')}
                                  </span>
                              </TableCell>                                   
                          </TableRow>
                      ))}                    
                      <TableRow>
                          <TableCell colSpan={2} align="left"></TableCell>
                          <TableCell align="center" sx={{fontFamily: 'Poppins, sans serif', fontSize: '1.5rem', fontWeight: 400, paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
                              Total
                          </TableCell>
                          <TableCell align="left" sx={{fontFamily: 'Poppins, sans serif', fontSize: '1.5rem', fontWeight: 400, paddingTop: '1.5rem', paddingBottom: '1.5rem'}}>
                              <span>${totalPriceOrder.toLocaleString('es-AR')}</span>
                          </TableCell>                  
                      </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>
          
          <ReturnBtn />
    </Container>
  )
}
    
export default CheckoutView;
