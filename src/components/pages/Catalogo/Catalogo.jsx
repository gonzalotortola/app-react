import React from 'react';

import './catalogo.scss'

export default function Catalogo() {
  return (
    <div>
        <div className="encabezado">
            <div className="div-imagen">
                <img className="foto-encabezado" src="https://gonzalotortola.github.io/waymara-coder/assets/img/encabezados/Catalogo-encabezado.png" alt="Mirá nuestro catálogo con los últimos lanzamientos"/>
            </div>
        </div>

        <div className="grid-padre-cat">
            
            <div id="hijo0-cat">
                <article>
                    <iframe title="Catálogo 2 - Año 2 de Waymara Argentina" id="desktop" style={{width:"900px",height:"600px"}} src="https://online.fliphtml5.com/cjsxr/oity/"  seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe>
                </article>
            </div>

            <div id="hijo1-cat">
                <h2>Conocé nuestros lanzamientos</h2>
            </div>

            <div id="hijo2-cat">
                <article>
                    <iframe width="368" height="207" src="https://www.youtube.com/embed/-EJdOl5zZBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </article>
                <h3 class="titulo-video">WaySkin: Lo mejor para tu piel</h3>
            </div>

            <div id="hijo3-cat">
                <article>
                    <iframe width="368" height="207" src="https://www.youtube.com/embed/bxaxFxrAlA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </article>
                <h3 className="titulo-video">#UrbanByWaymara: ropa que marca tendencia</h3>
            </div>
        </div>
    </div>
  )
}
