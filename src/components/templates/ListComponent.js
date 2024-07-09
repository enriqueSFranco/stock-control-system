import { LitElement, html, css } from 'lit';
import '../atoms/BotonEditar.js'; // Ajusta la ruta al archivo BotonEditar.js
import '../atoms/BotonEliminar.js'; // Ajusta la ruta al archivo BotonEliminar.js

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
  static get properties() {
    return {
      listaProductos: { type: Array }
    };
  }

  static get styles() {
    return css`
      /* Estilos aquí */
      hr {
        width: 100%;
        height: 1px;
      }

      p {
        margin: 10px 0;
        font-size: 1em;
        color: #ddd;
        width: 100%; 
        overflow: hidden; 
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
      <div class="div-productos">
        ${this.listaProductos.map(
          item => html`
            <p>${item.id} - ${item.nombre} - ${item.estado} - ${item.precio} - ${item.categoria} - ${item.cantidad} - ${item.descripcion}</p>
            <boton-editar @editar-clicked="${() => this._cargarProducto(item)}"></boton-editar>
            <boton-eliminar @eliminar-clicked="${() => this._eliminarProducto(item.id)}"></boton-eliminar>
            <hr />
          `
        )}
      </div>
    `;
  }

  /**
   * Se llama cuando hay actualizaciones en las propiedades.
   * Solicita una actualización del componente si la propiedad `listaProductos` cambia.
   * 
   * @param {Map} changedProperties - Propiedades que han cambiado.
   */
  updated(changedProperties) {
    if (changedProperties.has('listaProductos')) {
      this.requestUpdate();
    }
  }

  /**
   * Maneja el evento de carga de producto al hacer clic en el botón editar.
   * Dispara el evento `cargar-producto` con los detalles del producto.
   * 
   * @param {Object} producto - Producto seleccionado para editar.
   * @private
   */
  _cargarProducto(producto) {
    this.dispatchEvent(new CustomEvent('cargar-producto', { detail: producto }));
  }

  /**
   * Maneja el evento de eliminación de producto al hacer clic en el botón eliminar.
   * Dispara el evento `eliminar-producto` con el ID del producto a eliminar.
   * 
   * @param {String} id - ID del producto a eliminar.
   * @private
   */
  _eliminarProducto(id) {
    this.dispatchEvent(new CustomEvent('eliminar-producto', { detail: id }));
  }
}

// Define el componente personalizado `lista-component` para su uso en HTML.
customElements.define('lista-component', ListaComponent);