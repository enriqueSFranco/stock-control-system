import { LitElement, html, css } from 'lit';

/**
 * Autor: Brayan Gil Perez
 * `select-component` es un componente de LitElement que representa un elemento select HTML.
 * 
 * Propiedades:
 * - label: Etiqueta que se muestra junto al select.
 * - id: ID del select.
 * - options: Array de opciones para el select, cada opción tiene { value: string, label: string }.
 * - value: Valor seleccionado actualmente en el select.
 * - type: Tipo de select (si aplica).
 * 
 * Eventos:
 * - select-change: Se dispara cuando cambia la selección del select. Detalles: { id: string, value: string }
 * 
 * Estilos:
 * - label: Texto de color blanco.
 * - select: Ancho del 100%, padding y margen de 10 píxeles, texto centrado.
 */
class SelectComponent extends LitElement {
  static get properties() {
    return {
      label: { type: String },
      id: { type: String },
      options: { type: Array },
      value: { type: String },
      type: { type: String } // Agregamos la propiedad type
    };
  }

  static get styles() {
    return css`
      label {
        color: white;
      }

      select {
        width: 100%;
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
      <select
        id="${this.id}"
        @change="${this._handleSelectChange}"
        required
      >
        ${this.options.map(option => html`
          <option
            value="${option.value}"
            ?selected="${option.value === this.value}"
          >
            ${option.label}
          </option>
        `)}
      </select>
    `;
  }

  /**
   * Maneja el evento de cambio (`change`) del select.
   * Dispara un evento personalizado `select-change` con los detalles `id` y `value` del select.
   * 
   * @param {Event} e - Evento de cambio del select.
   * @private
   */
  _handleSelectChange(e) {
    this.dispatchEvent(new CustomEvent('select-change', {
      detail: {
        id: this.id,
        value: e.target.value
      }
    }));
  }
}

// Define el componente personalizado `select-component` para su uso en HTML.
customElements.define('select-component', SelectComponent);