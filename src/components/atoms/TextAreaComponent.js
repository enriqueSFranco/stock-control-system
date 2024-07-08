import { LitElement, html, css } from 'lit';

/**
 * Autor: Brayan Gil Perez
 * `textarea-component` es un componente de LitElement que representa un textarea HTML.
 * 
 * Propiedades:
 * - label: Etiqueta que se muestra encima del textarea.
 * - value: Contenido actual del textarea.
 * 
 * Eventos:
 * - textarea-change: Se dispara cuando cambia el contenido del textarea. Detalles: { value: string }
 * 
 * Estilos:
 * - label: Texto de color blanco y margen inferior de 4px.
 * - textarea: Ancho del 95%, padding y margen de 4px, permite redimensionamiento vertical, altura mínima de 100px,
 *   bordes redondeados, borde de 1px sólido color #ccc, tamaño de fuente 1em, caja que incluye el borde.
 */
class TextareaComponent extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      value: { type: String }
    };
  }

  static get styles() {
    return css`
      label {
        color: white;
        margin-bottom: 4px;
      }

      textarea {
        width: 95%;
        padding: 4px;
        margin: 4px;
        resize: vertical;
        min-height: 100px;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 1em;
        box-sizing: border-box;
      }
    `;
  }

  /**
   * Renderiza el componente.
   * 
   * @returns {TemplateResult} Resultado del template HTML renderizado.
   */
  render() {
    return html`
      <label>${this.label}</label>
      <textarea
        .value="${this.value}"
        @input="${this._handleChange}"
      ></textarea>
    `;
  }

  /**
   * Maneja el evento de cambio (`input`) del textarea.
   * Dispara un evento personalizado `textarea-change` con el nuevo valor del textarea.
   * 
   * @param {Event} e - Evento de cambio del textarea.
   * @private
   */
  _handleChange(e) {
    this.dispatchEvent(new CustomEvent('textarea-change', {
      detail: { value: e.target.value },
      bubbles: true,
      composed: true
    }));
  }
}

// Define el componente personalizado `textarea-component` para su uso en HTML.
customElements.define('textarea-component', TextareaComponent);