import React from 'react';

import './contacto.scss';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';



export default function Contacto() {
  return (
    <div>
        <div className="encabezado">
            <div class="div-imagen">
                <img class="foto-encabezado" src="https://gonzalotortola.github.io/waymara-coder/assets/img/encabezados/Contacto-encabezado.png" alt="Contactá a Waymara"/>
            </div>
            
            <div className="titulo-encabezado">
                <h1>WAYMARA RESPONDE</h1>
            </div>
        </div>       

        <div className="grid-padre-cont">
            <div className="formulario-container">
                <h3 className="titulos-cont">Contáctanos vía mail</h3>

                <form>                    
                    <div className="center-form-items">
                        <input type="text" className="input-corto" name="nombres" id="nombres" placeholder="Nombre/s" required/>
                        <input type="text" className="input-corto" name="apellidos" id="apellidos" placeholder="Apellido/s" required/>
                    </div>
                    
                    <input type="email" className="input-largo" name="email" id="email" placeholder="Correo electrónico" required />
                    <input type="text" className="input-largo" name="localidad" id="localidad" placeholder="Localidad" />
                    
                    <div className="center-form-items">
                        <input type="text" className="input-corto" name="telefono" id="telefono" placeholder="Teléfono"/>
                        <label className="chkbox-container">¿Es celular?
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    
                    <select name="Asunto" className="input-largo" id="Asunto" placeholder="Selecciona un asunto" required>
                        <option value="0" selected >Selecciona un asunto</option>
                        <option value="1">Mi producto no llega</option>
                        <option value="2">Mi producto vino abierto/roto/fallado</option>
                        <option value="3">Aún no aparece el código de seguimiento del envío</option>
                        <option value="4">Otro</option>
                    </select>
                    <textarea name="mensaje" className="input-textarea" placeholder="Escribe aquí tu mensaje" id="mensaje" cols="30" rows="10"></textarea>
                    
                    <div className="center-form-items">
                        <input type="submit" className="boton-enviar" name="enviar" value="ENVIAR   >" id="enviar" />
                        <input type="reset" className="boton-reestablecer" name="reestablecer" value="REESTABLECER" id="reestablecer" />   
                    </div>
                </form>
            </div>

            <div id="wsp-cont">
                <h3 className="titulos-cont">Vía WhatsApp</h3>
                <a className="wsp-btn" href="https://whatsapp.com">
                    <WhatsAppIcon fontSize="large" className="wsp-ico"/>
                    +54 9 381 1234 567
                </a>
            </div>

            <div id="horarios-cont">
                <h3 className="titulos-cont">Horarios de atención</h3>
                <p>Lunes a sábado de 8 a 20hs.</p>
                <p>Tiempo de respuesta promedio: <span>2 días</span></p>
            </div>
        </div>
    </div>
  )
}
