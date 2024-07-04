import { LitElement, html, css } from 'lit';

/**
 * `nav-bar` es un componente que representa la barra de navegación de la aplicación.
 * 
 * Propiedades:
 * - version: String que indica la versión actual de la barra de navegación.
 * 
 * Estilos:
 * - :host: Estilos aplicados al componente `nav-bar`.
 * - .navbar: Estilos para el contenedor principal de la barra de navegación.
 * - .container: Estilos para el contenedor interno que alberga el logo y los elementos de menú.
 * - .logo: Estilos para el logo y título del navbar.
 * - .nav-menu: Estilos para la lista de elementos de menú de navegación.
 * - .nav-menu li: Estilos para los elementos de la lista de menú.
 * - .nav-menu li a: Estilos para los enlaces de la lista de menú.
 * - .nav-menu li a img: Estilos para las imágenes dentro de los enlaces del menú.
 */
class NavBar extends LitElement {
  static get properties() {
    return {
      version: { type: String }
    };
  }

  constructor() {
    super();
    this.version = 'Ejercicio 02 V1'; // Valor por defecto para ejercicio
  }

  static get styles() {
    return css`
      :host {
        display: block;
        background-color: #022744;
        color: #fff;
        position: fixed;
        padding: 10px 0;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        width: 100%;
        height: 45px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }

      .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container {
        width: 85%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        align-items: center;
      }

      .navbar .container .logo img {
        height: 35px;
        width: 120px;
        margin-top: 2px;
      }

      .nav-menu {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
      }

      .nav-menu li {
        margin-right: 20px;
      }

      .nav-menu li a.cont {
        color: #f8cd51;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s ease;
      }

      .nav-menu li a.reg {
        color: #028484;
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s ease;
      }

      .nav-menu li a img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }

      .nav-menu li a:hover {
        color: white;
      }
    `;
  }

  /**
   * Renderiza el componente `NavBar`.
   * 
   * @returns {TemplateResult} Resultado del template HTML renderizado.
   */
  render() {
    return html`
      <nav class="navbar">
        <div class="container">
          <a class="logo"><img src="./Imagenes/bbva.png" alt="Logo"> ${this.version}</a>
          <ul class="nav-menu">
            <li><a class="reg" href="index.html"><img class="img" src="./Imagenes/registro.svg" alt="Registro">Registrar Producto</a></li>
            <li><a class="cont" href="#"><img class="img" src="./Imagenes/contacto.svg" alt="Contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}

// Define el componente personalizado `nav-bar` para su uso en HTML.
customElements.define('nav-bar', NavBar);
