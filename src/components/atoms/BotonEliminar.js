import { LitElement, html, css } from 'lit';
import { BaseButtonStyle } from '../../styles/styles';

/**
 * Autor: Brayan Gil Perez
 * `boton-eliminar` es un componente de LitElement que representa un botón de eliminar con confirmación.
 * 
 * Estilos:
 * - .btn-eliminar: Estilos CSS para el botón de eliminar.
 *   - padding: 5px arriba y abajo, 10px a los lados.
 *   - border: Borde sin estilo.
 *   - margin: 0 en vertical, 5px en horizontal.
 *   - color: Texto blanco.
 *   - border-radius: Bordes redondeados.
 *   - background-color: Fondo rojo.
 * 
 * Eventos:
 * - eliminar-clicked: Se dispara cuando se hace clic en el botón de eliminar después de confirmar.
 */
class BotonEliminar extends LitElement {
  static styles = [
    BaseButtonStyle,
    css`
      .btn-eliminar {
        background-color: red;
    }
  `]
    

  /**
   * Renderiza el componente.
   * 
   * @returns {TemplateResult} Resultado del template HTML renderizado.
   */
  render() {
    return html`
      <button class="btn btn-eliminar" @click="${this._handleClick}">Eliminar</button>
    `;
  }

  /**
   * Maneja el evento de clic (`click`) del botón.
   * Muestra una confirmación y dispara un evento personalizado `eliminar-clicked` si el usuario confirma.
   * 
   * @private
   */
  _handleClick() {
    if (confirm('¿Estás seguro que deseas eliminar este producto?')) {
      this.dispatchEvent(new CustomEvent('eliminar-clicked', { bubbles: true, composed: true }));
    }
  }
}

// Define el componente personalizado `boton-eliminar` para su uso en HTML.
customElements.define('boton-eliminar', BotonEliminar);