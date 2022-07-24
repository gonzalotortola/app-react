import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './quienessomos.scss';


export default function QuienesSomos() {
  return (
    <div>
        <div className="encabezado">
            <div className="div-imagen">
                <img className="foto-encabezado" src="https://gonzalotortola.github.io/waymara-coder/assets/img/encabezados/Quienes-encabezado.png" alt="" />
            </div>
            
            <div class="titulo-encabezado">
                <h1>¿QUIÉNES SOMOS?</h1>
            </div>
        </div>

        <div className="padre-qs">
            <div className="parrafo-qs">
                <h2>Nuestra historia</h2>
                <p>
                    En Waymara, apoyamos la independencia y libertad de las personas.
                    Este fue nuestro compromiso desde que se fundó la compañía, y hoy, sigue vigente, inspirando y motivando a cada una de las personas que trabajan y colaboran con ella.
                </p>
                <a href="#">Conocé más   {'>'}</a>
            </div>
            <div className="imagen-qs">
                <img src="https://info01.yanbal.com/yanbal/institucionales/fotos/nuestra-historia.png" alt="Nuestra historia"/>
            </div>
            
            <div className="imagen-qs">
                <img src="https://info01.yanbal.com/yanbal/institucionales/fotos/alma-latina.png" alt="Alma Latina"/>
            </div>
            <div className="parrafo-qs">
                <h2>Somos Alma Latina</h2>
                <p>
                    Estamos orgullosos de ser Latinos. Disfrutamos de la diversidad de esta región, del carácter de su gente, del color que le dan a la vida y la pasión que los caracteriza. Compartimos esa valentía, superación y optimismo.
                </p>
                <a href="#">Conocé más   {'>'}</a>
            </div>
            
            <div className="parrafo-qs">
                <h2>Somos innovación</h2>
                <p>
                    Contamos con centros de innovación de ingredientes e investigación y desarrollo en cosméticos en Europa y Estados Unidos; además de Centros de innovación y diseño de bijouterie también en Estados Unidos, con científicos y expertos de todo el mundo.
                </p>
                <a href="#">Conocé más   {'>'}</a>
            </div>
            <div className="imagen-qs">
                <img src="https://info01.yanbal.com/yanbal/institucionales/fotos/innovacion.png" alt="Innovación" />
            </div>
        </div>
        <div style={{margin: '0 15% 2rem 15%'}}>
            <Accordion sx={{boxShadow: 'none'}}>
                <AccordionSummary sx={{background: '#ff9900', color: "#fff"}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography sx={{fontFamily: 'Poppins, sans-serif'}}>PRODUCTO</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography sx={{fontFamily: 'Poppins, sans-serif', fontSize: '15px', marginTop: '.5rem'}}>
                    Nos enfocamos en crear un impacto social positivo a través de productos desarrollados con el menor impacto ambiental. Queremos entregarte productos de la más alta calidad. Por ello, nos preocupamos por contar con fórmulas seguras que no incluyan insumos que sean cuestionados.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{boxShadow: 'none'}}>
                <AccordionSummary sx={{background: '#ff9900', color: "#fff"}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography sx={{fontFamily: 'Poppins, sans-serif'}}>MEDIO AMBIENTE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography sx={{fontFamily: 'Poppins, sans-serif', fontSize: '15px', marginTop: '.5rem'}}>
                    Minimizamos nuestro impacto ambiental mediante el uso responsable y sostenible de los recursos, y previniendo la contaminación. Nuestra belleza está libre de crueldad animal, aplicamos reglamentaciones internacionales de la industria cosmética, cumpliendo con las exigencias normativas de la Unión Europea que prohíben hacer pruebas en animales, respecto a materias primas y producto final.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{boxShadow: 'none', fontFamily: 'Poppins, sans-serif'}}>
                <AccordionSummary sx={{background: '#ff9900', color: "#fff"}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography sx={{fontFamily: 'Poppins, sans-serif'}}>PERSONAS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography sx={{fontFamily: 'Poppins, sans-serif', fontSize: '15px', marginTop: '.5rem'}}>
                    Nos preocupamos por el bienestar de cada uno de nuestros principales grupos de interés. Promovemos el trato con equidad, respeto e igualdad, sin discriminación por motivos de origen, raza, sexo, idioma, religión, orientación sexual, identidad de género, opinión, condición o de cualquier otra índole.                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
  )
}
