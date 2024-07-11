import { LitElement, html, css } from "lit";
import "../atoms/BotonEditar.js"; // Ajusta la ruta al archivo BotonEditar.js
import "../atoms/BotonEliminar.js"; // Ajusta la ruta al archivo BotonEliminar.js
import {
  PRODUCTS,
  TABLE_HEAD_PRODUCTS,
} from "../../shared/constants.product.js";

/**
 * `lista-component` es un componente de LitElement que muestra una lista de productos.
 * Permite editar o eliminar productos de la lista.
 *
 * Propiedades:
 * - listaProductos: Array que contiene los productos a mostrar en la lista.
 *
 * Eventos:
 * - cargar-producto: Se dispara al hacer clic en el botón editar de un producto. Detalle: { id, nombre, estado, precio, categoria, cantidad, descripcion }
 * - eliminar-producto: Se dispara al hacer clic en el botón eliminar de un producto. Detalle: ID del producto a eliminar.
 *
 * Estilos:
 * - hr: Línea horizontal que separa los elementos de la lista.
 *   - width: 100% del ancho disponible.
 *   - height: 1px de altura.
 * - p: Estilo de los párrafos que muestran la información de cada producto.
 *   - margin: 10px arriba y abajo, 0 a los lados.
 *   - font-size: 1em.
 *   - color: #ddd para el color del texto.
 *   - width: 100% del ancho disponible.
 *   - overflow: hidden para manejar el desbordamiento de texto.
 */
class ListaComponent extends LitElement {
  static get properties () {
    return {
      listaProductos: { type: Array }
    }
  }

  static get styles () {
    return css`
      /* Estilos aquí */
      hr {
        width: 100%;
        height: 1px;
      }

      table {
        border-collapse: collapse;
        width: 70%;
      }

      table th,
      table td {
        padding: 10px;
        text-align: left;
        /* color: #fff; */
      }

      table th {
        background-color: #032744;
        color: #fff;
      }

      table tbody tr:hover {
        background-color: #cacaca5f;
      }

      tr {
        border-bottom: 1px solid #fff;
      }

      .container {
        margin: 2rem;
        
        background:#fff
      }
    `
  }

  /**
   * Renderiza el componente.
   *
   * @returns {TemplateResult} Resultado del template HTML renderizado.
   */
  render () {
    return html`
      
      <div class="container">
        <table>
          <thead>
            <tr>
              ${TABLE_HEAD_PRODUCTS.map((header) => html` <th>${header}</th> `)}
            </tr>
          </thead>
          <tbody>
            ${this.listaProductos.length > 0
              ? this.listaProductos.map(
                  (producto) =>
                    html`
                      <tr>
                        <td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.estado}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.categoria}</td>
                        <td>${producto.cantidad}</td>
                        <td>${producto.descripcion}</td>
                        <td>
                          <boton-editar
                            @editar-clicked="${() =>
                              this._cargarProducto(producto)}"
                          ></boton-editar>
                        </td>
                        <td>
                          <boton-eliminar
                            @eliminar-clicked="${() =>
                              this._eliminarProducto(producto.id)}"
                          ></boton-eliminar>
                        </td>
                      </tr>
                    `
                )
              : html`
                  <tr>
                    <td colspan="${TABLE_HEAD_PRODUCTS.length}">
                      No hay productos
                    </td>
                  </tr>
                `}
          </tbody>
        </table>
        <div></div>
      </div>
    `
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener("agregar-producto", this._agregarProducto);
    this.addEventListener("editar-producto", this._editarProducto);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("agregar-producto", this._agregarProducto);
    this.removeEventListener("editar-producto", this._editarProducto);
  }

  _agregarProducto (e) {
    this.listaProductos = [...this.listaProductos, e.detail]
  }

  _editarProducto (e) {
    const productoEditado = e.detail
    this.listaProductos = this.listaProductos.map((producto) =>
      producto.id === productoEditado.id ? productoEditado : producto
    )
  }

  /**
   * Se llama cuando hay actualizaciones en las propiedades.
   * Solicita una actualización del componente si la propiedad `listaProductos` cambia.
   *
   * @param {Map} changedProperties - Propiedades que han cambiado.
   */
  updated (changedProperties) {
    if (changedProperties.has('listaProductos')) {
      this.requestUpdate()
    }
  }

  /**
   * Maneja el evento de carga de producto al hacer clic en el botón editar.
   * Dispara el evento `cargar-producto` con los detalles del producto.
   *
   * @param {Object} producto - Producto seleccionado para editar.
   * @private
   */
  _cargarProducto (producto) {
    this.dispatchEvent(
      new CustomEvent("cargar-producto", { detail: producto })
    )
  }

  /**
   * Maneja el evento de eliminación de producto al hacer clic en el botón eliminar.
   * Dispara el evento `eliminar-producto` con el ID del producto a eliminar.
   *
   * @param {String} id - ID del producto a eliminar.
   * @private
   */
  _eliminarProducto (id) {
    this.dispatchEvent(new CustomEvent("eliminar-producto", { detail: id }))
  }
}

// Define el componente personalizado `lista-component` para su uso en HTML.
window.customElements.define('lista-component', ListaComponent)
