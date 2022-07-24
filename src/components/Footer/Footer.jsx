import React from 'react';
import { Link } from 'react-router-dom'

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import './footer.scss';

export default function Footer() {
  return (
    <div className="footer-color">

        <div className="footer-badges">

            <div className="flex-badges">
                <p>Productos 100% sustentables<span>Estamos comprometidos con nuestro mundo</span></p>

                <div className="badges-container">
                    <img src="https://gonzalotortola.github.io/waymara-coder/assets/img/SVG/footer/SVG/cruelty-free.svg" alt="Productos no testeados en animales" />
                    <img src="https://gonzalotortola.github.io/waymara-coder/assets/img/SVG/footer/SVG/vegan.svg" alt="Productos 100% veganos" />
                    <img src="https://gonzalotortola.github.io/waymara-coder/assets/img/SVG/footer/SVG/bio.svg" alt="Productos biodegradables" />
                    <img src="https://gonzalotortola.github.io/waymara-coder/assets/img/SVG/footer/SVG/hypoallergenic.svg" alt="Formulas seguras e hipoalergenicas" />
                    <img src="https://gonzalotortola.github.io/waymara-coder/assets/img/SVG/footer/SVG/paraben-free.svg" alt="Productos libres de parabenos" />   
                </div>
            </div>
        </div>

        <nav className="footer-organizacion">
            <ul className="contenedor-footer-nav">
                    <li className="elemento">
                        <h5 className="titulo">
                            Productos
                        </h5>
                        <ul>
                            <li className="link">
                                <p>Indumentaria</p>
                                <ul>
                                    <li className="sub-link"><Link to={`../category/urban`}><p>Urban</p></Link></li>
                                    <li className="sub-link"><Link to={`../category/energy`}><p>Energy Life</p></Link></li>
                                </ul>
                            </li>      
                            <li className="link"><Link to={`../category/cosmetica`}><p>Cosmética</p></Link></li>       
                            <li className="link"><Link to={`../category/perfumeria`}><p>Perfumería</p></Link></li>
                        </ul>
                    </li>

                    <li className="elemento">
                        <h5 className="titulo">
                            Sobre Waymara
                        </h5>
                        <ul>
                            <li className="link"><p >Nuestra historia</p></li>
                            <li className="link"><p >Compromiso sustentable</p></li>
                            <li className="link"><p >Nuestros valores</p></li>
                            <li className="link"><p >Carrera Empresarial</p></li>
                        </ul>
                    </li>

                    <li className="elemento">
                        <h5 className="titulo">
                            Ayuda 
                        </h5>
                        <ul>
                            <li className="link"><p >Guía de talles</p></li>
                            <li className="link"><p >Preguntas frecuentes</p></li>
                            <li className="link"><p >Política de devoluciones</p></li>
                            <li className="link"><p >Código corporativo de ética</p></li>
                            <li className="link"><p >Códigos de producto</p></li>
                        </ul>
                    </li>
            </ul>
            
            <div>
                <ul className="contenedor-redes">
                    <li className="titulo-redes-list">
                        <h4 className="titulo-redes">Síguenos en nuestras redes</h4>
                        <ul className="contenedor-iconos-redes">
                            <li className="iconos-redes">
                                <a href="https://instagram.com/waymara.arg/" target="_blank" rel="noreferrer">
                                    <InstagramIcon fontSize="large" />
                                </a>
                            </li>
                            <li className="iconos-redes">
                                <a href="https://facebook.com/waymara.argentina/" target="_blank" rel="noreferrer">
                                    <FacebookIcon fontSize="large"/>
                                </a>
                            </li>
                            <li className="iconos-redes">
                                <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                                    <YouTubeIcon fontSize="large"/>
                                </a>
                            </li>
                            <li className="iconos-redes">
                                <a href="https://wa.me/5493813150993" target="_blank" rel="noreferrer">
                                    <WhatsAppIcon fontSize="large"/>
                                </a>
                            </li>
                        </ul>                          
                    </li>
                </ul>
            </div>
        </nav>
        
        <div className="pie">
            <nav className="pie-contenedor">
                <p>Términos y condiciones</p>
                <p>Política de privacidad</p>
                <p component={Link} to="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" target="_blank">Defensa al consumidor</p>
                <p >Botón de arrepentimiento</p>
            </nav>
        </div>

        <div className="copyright">
            <p> Diseñado por Gonzalo Tórtola</p>
        </div>

    </div>
  )
}
