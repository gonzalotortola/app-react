import React from 'react';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';


function AsesoraBtn() {
  return (
    <Button component={Link} to="/" variant="h3"
                sx={{fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '14px',
                    borderRadius: 0,
                    color: '#fff', 
                    backgroundColor: '#ff9900',
                    padding: '.8rem 1rem',
                    textTransform: 'none',

                    '&:hover': {
                    color: '#fff',
                    backgroundColor: '#ca7900',
                    border: 'none',
                    },
                }}>
            ¡Convertite en asesora!
        </Button>
    )
}

export default AsesoraBtn