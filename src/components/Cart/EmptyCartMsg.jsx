import React from 'react';
import {Container, Paper, Typography} from '@mui/material';
import ReturnBtn from './ReturnBtn'

export default function EmptyCartMsg() {
  return (
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
            <ReturnBtn />
        </Paper>
    </Container>
  )
}
