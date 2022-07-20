import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ReturnButton() {
  return (
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
  )
}
