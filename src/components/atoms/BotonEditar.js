import { LitElement, html, css } from 'lit';
import { BaseButtonStyle } from '../../styles/styles';

/**
 *  Autor: Brayan Gil Perez
 * `boton-editar` es un componente de LitElement que representa un botón de editar.
 * 
 * Estilos:
 * - .btn-editar: Estilos CSS para el botón de editar.
 *   - padding: 5px arriba y abajo, 10px a los lados.
 *   - border: Borde sin estilo.
 *   - margin: 0 en vertical, 5px en horizontal.
 *   - color: Texto blanco.
 *   - border-radius: Bordes redondeados.
 *   - background-color: Fondo verde.
 * 
 * Eventos:
 * - editar-clicked: Se dispara cuando se hace clic en el botón de editar.
 */
class BotonEditar extends LitElement {
  static styles = [
    BaseButtonStyle,
    css`
      .btn-editar {
        background-color: green;
      }
  `]

  /**
   * Renderiza el componente.
   * 
   * @returns {TemplateResult} Resultado del template HTML renderizado.
   */
  render() {
    return html`
      <button class="btn btn-editar" @click="${this._handleClick}">Editar</button>
    `;
  }

  /**
   * Maneja el evento de clic (`click`) del botón.
   * Dispara un evento personalizado `editar-clicked`.
   * 
   * @private
   */
  _handleClick() {
    this.dispatchEvent(new CustomEvent('editar-clicked', { bubbles: true, composed: true }));
  }
}

// Define el componente personalizado `boton-editar` para su uso en HTML.
customElements.define('boton-editar', BotonEditar);