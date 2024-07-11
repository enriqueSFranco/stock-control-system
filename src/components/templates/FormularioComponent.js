import { LitElement, html, css } from "lit";
import "../atoms/select-component";
import "../atoms/input-component";
import "../atoms/TextAreaComponent"; // Importan los componente hijos
import {
  TABLE_HEAD_PRODUCTS
} from "../../shared/constants.product.js";

/**
 * `formulario-component` es un componente de LitElement que representa un formulario para la gestión de productos.
 *
 * Propiedades:
 * - objProducto: Objeto que representa los datos del producto a gestionar.
 * - editando: Booleano que indica si se está editando un producto existente.
 *
 * Eventos:
 * - agregar-producto: Se dispara al agregar un nuevo producto. Detalle: { id, nombre, estado, precio, categoria, cantidad, descripcion }
 * - editar-producto: Se dispara al editar un producto existente. Detalle: { id, nombre, estado, precio, categoria, cantidad, descripcion }
 *
 * Estilos:
 * - form: Estilos del formulario principal.
 *   - width: 100% del ancho disponible.
 *   - height: 100% del alto disponible.
 *   - display: Flexbox con dirección de columna, centrado vertical y horizontal.
 * - label: Texto de color blanco.
 * - form input-component, form select-component, form textarea-component: Estilos aplicados a los componentes internos del formulario.
 *   - width: 90% del ancho disponible.
 *   - padding: 4px de relleno.
 *   - margin: 4px de margen.
 *   - text-align: Centro.
 * - button: Estilos del botón de agregar.
 *   - width: 50% del ancho disponible.
 *   - padding: 4px de relleno.
 *   - margin: 4px de margen.
 *   - text-align: Centro.
 *   - background-color: Fondo verde.
 */
class FormularioComponent extends LitElement {
  static get properties () {
    return {
      objProducto: { type: Object },
      editando: { type: Boolean }
    }
  }

  static get styles () {
    return css`
      /* Estilos del formulario */
      form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      label {
        color: white;
      }

      form input-component,
      form select-component,
      form textarea-component {
        width: 90%;
        padding: 4px;
        margin: 4px;
        text-align: center;
      }

      button {
        width: 50%;
        padding: 4px;
        margin: 4px;
        text-align: center;
      }

      .btnAgregar {
        z-index: 2;
        background: #028484;
        cursor: pointer;
        border: none;
        padding: 16px 32px;
        color: white;
        font-size: 20px;
        font-weight: bold;
        position: relative;
        border-radius: 12px;
        border-color: rgb(82, 247, 247);
      }

      .btnAgregar:hover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            45deg,
            rgb(116, 231, 218),
            #028888,
            rgb(0, 69, 167),
            #028484,
            rgb(0, 68, 164),
            rgb(22, 233, 208),
            #028484
          ),
          rgb(74, 219, 202);
        background-size: 800%;
        border-radius: 12px;
        filter: blur(8px);
        animation: glowing 20s linear infinite;
      }

      @keyframes glowing {
        0% {
          background-position: 0 0;
        }
        50% {
          background-position: 400% 0;
        }
        100% {
          background-position: 0 0;
        }
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
      <form @submit="${this._validarFormulario}">
        ${TABLE_HEAD_PRODUCTS.map((header) => {
          if (header.toLowerCase() === 'id') {
            return html``
          } else if (header.toLowerCase() === 'categoria') {
            return html`
              <select-component
                label="${header}"
                id="${header.toLowerCase().replace(' ', ' ')}"
                .options="${[
                  { label: 'Televisores', value: 'Televisores' },
                  { label: 'Celulares', value: 'Celulares' },
                  { label: 'Linea Blanca', value: 'Linea Blanca' }
                ]}"
                .value="${this.objProducto[
                  header.toLowerCase().replace(' ', ' ')
                ] || ''}"
                @select-change="${this._handleSelectChange}"
              ></select-component>
            `
          } else if (header.toLowerCase() === 'estado') {
            return html`
              <select-component
                label="${header}"
                id="${header.toLowerCase().replace(' ', ' ')}"
                .options="${[
                  { label: 'Nuevo', value: 'Nuevo' },
                  { label: 'Semi Nuevo', value: 'Semi Nuevo' },
                  { label: 'Reacondicionado', value: 'Reacondicionado' }
                ]}"
                .value="${this.objProducto[
                  header.toLowerCase().replace(' ', ' ')
                ] || ''}"
                @select-change="${this._handleSelectChange}"
              ></select-component>
            `
          } else if (header.toLowerCase() === 'descripcion') {
            return html`
              <textarea-component
                label="${header}"
                id="${header.toLowerCase().replace(' ', ' ')}"
                .value="${this.objProducto[
                  header.toLowerCase().replace(' ', ' ')
                ] || ''}"
                @textarea-change="${this._handleTextareaChange}"
              ></textarea-component>
            `
          } else {
            // Renderiza input-component para todos los demás encabezados
            return html`
              <input-component
                label="${header}"
                id="${header.toLowerCase().replace(' ', ' ')}"
                .value="${this.objProducto[
                  header.toLowerCase().replace(' ', ' ')
                ] || ''}"
                placeholder="${header}"
                required
                @input-change="${this._handleInputChange}"
              ></input-component>
            `
          }
        })}

        <button class="btnAgregar" id="btnAgregar" type="submit">
          ${this.editando ? 'Actualizar' : 'Insertar'}
        </button>
      </form>
    `
  }

  /**
   * Valida el formulario antes de enviarlo.
   * Si está editando, dispara el evento `editar-producto`.
   * Si no está editando, asigna un ID y dispara el evento `agregar-producto`.
   * Limpia el objeto `objProducto` después de enviar.
   *
   * @param {Event} e - Evento de submit del formulario.
   * @private
   */
  _validarFormulario (e) {
    e.preventDefault()

    const { nombre, estado, precio, categoria, cantidad, descripcion } =
      this.objProducto

    if (this.editando) {
      this.dispatchEvent(
        new CustomEvent('editar-producto', { detail: this.objProducto })
      )
      this.editando = false
    } else {
      this.objProducto.id = Date.now()
      this.dispatchEvent(
        new CustomEvent('agregar-producto', { detail: this.objProducto })
      )
    }

    this.limpiarObjeto()
  }

  /**
   * Maneja el cambio en los inputs del formulario.
   * Actualiza el objeto `objProducto` con los nuevos valores.
   *
   * @param {CustomEvent} e - Evento `input-change` de los componentes internos.
   * @private
   */
  _handleInputChange (e) {
    const prop = e.detail.id
    this.objProducto = { ...this.objProducto, [prop]: e.detail.value }
  }

  /**
   * Maneja el cambio en los selects del formulario.
   * Actualiza el objeto `objProducto` con los nuevos valores.
   *
   * @param {CustomEvent} e - Evento `select-change` de los componentes internos.
   * @private
   */
  _handleSelectChange (e) {
    const prop = e.detail.id
    this.objProducto = { ...this.objProducto, [prop]: e.detail.value }
  }

  /**
   * Maneja el cambio en el textarea del formulario.
   * Actualiza el objeto `objProducto` con el nuevo valor de la descripción.
   *
   * @param {CustomEvent} e - Evento `textarea-change` del componente textarea.
   * @private
   */
  _handleTextareaChange (e) {
    this.objProducto = { ...this.objProducto, descripcion: e.detail.value }
  }

  /**
   * Reinicia el objeto `objProducto` a sus valores iniciales.
   *
   * @private
   */
  limpiarObjeto () {
    this.objProducto = {
      id: '',
      nombre: '',
      estado: '',
      precio: '',
      categoria: '',
      cantidad: '',
      descripcion: ''
    }
  }
}

// Define el componente personalizado `formulario-component` para su uso en HTML.
window.customElements.define('formulario-component', FormularioComponent)
