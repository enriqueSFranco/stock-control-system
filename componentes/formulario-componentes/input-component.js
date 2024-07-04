import { LitElement, html, css } from 'lit';

/**
 * `input-component` es un componente de LitElement que representa un input HTML con etiqueta asociada.
 * 
 * Propiedades:
 * - label: Etiqueta que se muestra junto al input.
 * - id: ID del input.
 * - type: Tipo de input (texto, número, etc.).
 * - value: Valor actual del input.
 * - placeholder: Texto de relleno que se muestra cuando el input está vacío.
 * - required: Booleano que indica si el input es obligatorio.
 * 
 * Eventos:
 * - input-change: Se dispara cuando cambia el valor del input. Detalles: { id: string, value: string }
 * 
 * Estilos:
 * - label: Texto de color blanco.
 * - input: Ancho del 90%, padding y margen de 10 píxeles, texto centrado.
 */
class InputComponent extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      id: { type: String },
      type: { type: String }, // Propiedad para especificar el tipo de input
      value: { type: String },
      placeholder: { type: String },
      required: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      /* Estilos del input */
      label {
        color: white;
      }

      input {
        width: 90%;
        padding: 10px 10px;
        margin: 10px 10px;
        text-align: center;
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
      <label for="${this.id}">${this.label}:</label>
      <input
        type="${this.type}"
        id="${this.id}"
        .value="${this.value}"
        placeholder="${this.placeholder}"
        ?required="${this.required}"
        @input="${this._handleInputChange}"
      />
    `;
  }

  /**
   * Maneja el evento de cambio (`input`) del input.
   * Dispara un evento personalizado `input-change` con los detalles `id` y `value` del input.
   * 
   * @param {Event} e - Evento de cambio del input.
   * @private
   */
  _handleInputChange(e) {
    const prop = e.target.id;
    this.dispatchEvent(new CustomEvent('input-change', { detail: { id: prop, value: e.target.value } }));
  }
}

// Define el componente personalizado `input-component` para su uso en HTML.
customElements.define('input-component', InputComponent);
