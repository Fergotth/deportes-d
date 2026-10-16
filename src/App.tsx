//import { useState } from 'react'
import './App.css'

import {
    ArrowRight, ArrowUpRight,
    Truck, Shirt, ShieldCheck,
    CloudUpload, Image, Palette,
    Settings, CircleCheck, MapPin,
    MessageCircle, Ruler, CircleHelp,
    Mail
} from 'lucide-react';

function App() {

  return (
    <main className="App">

      <nav className="App__nav">
        <img src="/logo.png" alt="Logo" className="nav__logo" />

        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/contact">Uniformes</a></li>
          <li><a href="/galeria">Galeria</a></li>
          <li><a href="/contact">Contacto</a></li>
          <li><a href="/quote">Cotizar</a></li>
          <li><a href="/about">Acerca de</a></li>
        </ul>

        <button className="nav__button button-active">Contactanos <ArrowRight size={20} /></button>
      </nav>

      <section className="App__header group-sections">
        <div className="App__header-content">
          <span>TU EQUIPO. TU IDENTIDAD.</span>
          <span>Diseña hoy el</span>
          <span>uniforme de <strong>tu equipo</strong></span>
          <span>Uniformes deportivos personalizados con la mejor calidad,</span>
          <span>diseños únicos y el estilo que te distingue.</span>

          <button className="App__header-button button-active">Explorar <ArrowRight size={20} /></button>

          <div className="App__header-footer">
            <div>
              <Shirt size={35} strokeWidth={1} />
              <label className="App__header-footer-label">
                <small>Diseños</small>
                <small>100% Personalizados</small>
              </label>
            </div>

            <div>
              <Truck size={35} strokeWidth={1} />
              <label className="App__header-footer-label">
                <small>Envios</small>
                <small>a todo el pais</small>
              </label>
            </div>

            <div>
              <ShieldCheck size={35} strokeWidth={1} />
              <label className="App__header-footer-label">
                <small>Garantia</small>
                <small>de calidad</small>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="App__designs group-sections">
        <div>
          <label className="App__designs-label">Diseños <strong>destacados</strong></label>
        </div>

        <div className="App__designs-cards">
          <div className="cards__card">
            <img src="/elite.png" alt="Diseño 1" />
            <div>
              <span>Modelo Élite</span>
              <span>Diseño moderno y elegante</span>  
              <button>Ver detalles<ArrowRight size={20} /></button>
            </div>
          </div>

          <div className="cards__card">
            <img src="/jersey.png" alt="Diseño 2" />
            <div>
              <span>Modelo Jersey</span>
              <span>Comodidad y estilo en cada jugada</span>  
              <button>Ver detalles<ArrowRight size={20} /></button>
            </div>
          </div>

          <div className="cards__card">
            <img src="/casaca.png" alt="Diseño 3" />
            <div>
              <span>Modelo Casaca</span>
              <span>Tradición y rendimiento en el campo</span>  
              <button>Ver detalles<ArrowRight size={20} /></button>
            </div>
          </div>

          <div className="cards__card">
            <img src="/classic.png" alt="Diseño 4" />
            <div>
              <span>Modelo Classic</span>
              <span>Diseños que elevan tu juego</span>  
              <button>Ver detalles<ArrowRight size={20} /></button>
            </div>
          </div>

          <div className="cards__card">
            <img src="/henley.png" alt="Diseño 5" />
            <div>
              <span>Modelo Henley</span>
              <span>Gran popularidad por su estetica y comodidad</span>  
              <button>Ver detalles<ArrowRight size={20} /></button>
            </div>
          </div>

        </div>
      </section>

      <section className="App__banner group-sections">
        <div className="App__banner-content">
          <div>
            <div className="banner-content__group1">
              <div>
                <CloudUpload size={100} strokeWidth='1' className='banner-content__upload'/>
              </div>
              <div>
                <span className="banner-content__title">¿Tienes una idea en mente?</span>
                <span>Sube tu logo, un boceto o cuentanos tu idea y la hacemos realidad.</span>
              </div>
            </div>

            <div className="banner-content__instructions">
              <Image size={40} strokeWidth={2} /><span>Sube tu Archivo</span>
              <Palette size={40} strokeWidth={2} /><span>Define colores</span>
              <Settings size={40} strokeWidth={2} /><span>Personalizamos</span>
              <CircleCheck size={40} strokeWidth={2} /><span>Recibe tu cotizacion</span>
            </div>
          </div>

          <button className="button-active">
            <span>Personaliza y cotiza ahora </span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      
      <section className="App__footer group-sections">

          {/* Invitación a cotizar */}
          <div className="footer__cta">
              <div className="footer__cta-content">
                  <span>¿LISTO PARA COMENZAR?</span>
                  <h2>¿Listo para vestir a tu equipo?</h2>
                  <p>
                      Cuéntanos tu idea y hagamos realidad el uniforme
                      que representa a tu equipo.
                  </p>
              </div>

              <a href="/quote" className="footer__cta-button button-active">
                  Solicitar cotización
                  <ArrowUpRight size={20} />
              </a>
          </div>

          {/* Contenido principal */}
          <div className="footer__main">

              {/* Información de marca */}
              <div className="footer__brand">
                  <div className="footer__brand-logo">
                      <img src="/logo.png" alt="Deportes D" />
                      <div>
                          <strong>Deportes D</strong>
                          <span>Uniformes que unen pasiones.</span>
                      </div>
                  </div>

                  <p>
                      Creamos uniformes deportivos personalizados que
                      representan la identidad, pasión y esencia de
                      cada equipo.
                  </p>

                  <div className="footer__location">
                      <MapPin size={17} />
                      <span>México</span>
                  </div>
              </div>

              {/* Navegación */}
              <div className="footer__column">
                  <h3>Explora</h3>

                  <a href="/">Inicio</a>
                  <a href="/uniformes">Uniformes</a>
                  <a href="/galeria">Galería de diseños</a>
                  <a href="/personaliza">Personalización</a>
                  <a href="/quote">Cotizaciones</a>
                  <a href="/contact">Contacto</a>
              </div>

              {/* Servicios */}
              <div className="footer__column">
                  <h3>Nuestros servicios</h3>

                  <a href="/uniformes">Uniformes personalizados</a>
                  <a href="/uniformes">Diseño de casacas</a>
                  <a href="/uniformes">Jerseys deportivos</a>
                  <a href="/personaliza">Personalización de logos</a>
                  <a href="/quote">Cotizaciones por equipo</a>
              </div>

              {/* Ayuda */}
              <div className="footer__column footer__help">
                  <h3>Información y ayuda</h3>

                  <a href="/quote">
                      <MessageCircle size={17} />
                      Solicitar cotización
                  </a>

                  <a href="/envios">
                      <Truck size={17} />
                      Información de envíos
                  </a>

                  <a href="/tallas">
                      <Ruler size={17} />
                      Guía de tallas
                  </a>

                  <a href="/preguntas">
                      <CircleHelp size={17} />
                      Preguntas frecuentes
                  </a>

                  <a href="/contact">
                      <Mail size={17} />
                      Atención al cliente
                  </a>
              </div>
          </div>

          {/* Información inferior */}
          <div className="footer__bottom">
              <span>
                  © {new Date().getFullYear()} Deportes D.
                  Todos los derechos reservados.
              </span>

              <div className="footer__legal">
                  <a href="/privacidad">Aviso de privacidad</a>
                  <a href="/terminos">Términos y condiciones</a>
              </div>
          </div>

          <div className="footer__signature">
              <ShieldCheck size={15} />
              <span>Diseñado para equipos que buscan destacar.</span>
          </div>

      </section>

    </main>
  );
}

export default App;
