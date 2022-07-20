import React from 'react';
import './footer.scss';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
                                <a>Indumentaria</a>
                                <ul>
                                    <li className="sub-link"><a href="pages/urban.html">Urban</a></li>
                                    <li className="sub-link"><a href="pages/energy-life.html">Energy Life</a></li>
                                </ul>
                            </li>      
                            <li className="link"><a href="pages/cosmetica.html">Cosmética</a></li>       
                            <li className="link"><a href="pages/perfumeria.html">Perfumería</a></li>
                        </ul>
                    </li>

                    <li className="elemento">
                        <h5 className="titulo">
                            Sobre Waymara
                        </h5>
                        <ul>
                            <li className="link"><a href="">Nuestra historia</a></li>
                            <li className="link"><a href="">Compromiso sustentable</a></li>
                            <li className="link"><a href="">Nuestros valores</a></li>
                            <li className="link"><a href="">Carrera Empresarial</a></li>
                        </ul>
                    </li>

                    <li className="elemento">
                        <h5 className="titulo">
                            Ayuda 
                        </h5>
                        <ul>
                            <li className="link"><a href="">Guía de talles</a></li>
                            <li className="link"><a href="">Preguntas frecuentes</a></li>
                            <li className="link"><a href="">Política de devoluciones</a></li>
                            <li className="link"><a href="">Código corporativo de ética</a></li>
                            <li className="link"><a href="">Códigos de producto</a></li>
                        </ul>
                    </li>
            </ul>
            
            <div>
                <ul className="contenedor-redes">
                    <li className="titulo-redes-list">
                        <h4 className="titulo-redes">Síguenos en nuestras redes</h4>
                        <ul className="contenedor-iconos-redes">
                            <li className="iconos-redes">
                                <a href="https://instagram.com/waymara.arg/" target="_blank">
                                    <InstagramIcon fontSize="large" />
                                </a>
                            </li>
                            <li className="iconos-redes">
                                <a href="https://facebook.com/waymara.argentina/" target="_blank">
                                    <FacebookIcon fontSize="large"/>
                                </a>
                            </li>
                            <li className="iconos-redes">
                                <a href="https://youtube.com/" target="_blank">
                                    <YouTubeIcon fontSize="large"/>
                                </a>
                            </li>
                            <li className="iconos-redes">
                                <a href="https://wa.me/5493813150993" target="_blank">
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
                <a href="">Términos y condiciones</a>
                <a href="">Política de privacidad</a>
                <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" target="_blank">Defensa al consumidor</a>
                <a href="">Botón de arrepentimiento</a>
            </nav>
        </div>

        <div className="copyright">
            <p> Diseñado por Gonzalo Tórtola</p>
        </div>

    </div>
  )
}
