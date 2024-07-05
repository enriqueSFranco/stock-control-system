/**
 * Filename: RouteTracking.js
 * Author: 
 * Description: Entry point for stock control feature
 */

import { LitElement, html, css } from "lit";
import "../components/templates/BBVATemplate";
import "../components/templates/ListComponent";
import "../components/templates/FormularioComponent"
import "../components/templates/BBVATemplate"

class StockControl extends LitElement {
  static get is () {
    return 'stock-control';
  }

  static get properties () {
    return {
      listaProductos: { type: Array },
      objProducto: { type: Object },
      editando: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.listaProductos = []; // Inicializa la lista de productos vacía
    this.objProducto = {
      id: '',
      nombre: '',
      estado: '',
      precio: '',
      categoria: '',
      cantidad: '',
      descripcion: ''
    }; // Inicializa el objeto de producto con valores por defecto
    this.editando = false; // Inicializa el modo de edición como falso

    // Escucha eventos del componente formulario-component
    this.addEventListener('editar-producto', this._editarProducto);
    this.addEventListener('agregar-producto', this._agregarProducto);
  }

  static get styles () {
    return css`
          /* Estilos aquí */
          .div-titulo {
            width: 100%;
            height: 100px;
            margin-top: 10px;
            padding-top: 10px;
            margin-bottom:  0px ;
            padding-bottom: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
    
          .div-titulo h1 {
            
            font-weight: 300;
          }
    
          .contenedor {
            width: 100%;
            height: calc(100vh - 100px);
            display: flex;
            justify-content: center;
          }
    
          .div-formulario {
            width: 25%;
            height: 760px;
            margin: 15px 15px;
            background-color: #022744;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            box-shadow: 10px 10px rgba(0, 0, 0, 0.3);
          }
    
          .div-formulario h2 {
            margin-top: 10px;
            font-weight: 300;
            font-size: 2em;
            color: whitesmoke;
          }
    
          .div-stock {
            width: 70%;
            height: calc(100% - 50px);
            margin: 15px 15px;
            background-color: #022744;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
            box-shadow: 10px 10px rgba(0, 0, 0, 0.3);
          }
    
          .div-stock h2 {
            margin-top: 10px;
            font-weight: 300;
            font-size: 2em;
            color: whitesmoke;
          }
    
          .div-stock .div-productos {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1px;
            padding: 0 2px;
          }
        `;
  }


  render () {
    return html`
            <bbva-template>
                <div>
                    <div class="div-titulo">
                        <h1>Administracion De Productos</h1>
                    </div>
                    <div class="contenedor">
                        <div class="div-formulario">
                        <h2>Agregar Producto</h2>
                        <formulario-component
                            .objProducto="${this.objProducto}"
                            .editando="${this.editando}"
                            @agregar-producto="${this._agregarProducto}"
                            @editar-producto="${this._editarProducto}"
                        ></formulario-component>
                        </div>
                        <div class="div-stock">
                        <h2>Productos En Stock</h2>
                        <div class="div-productos">
                            <lista-component
                            .listaProductos="${this.listaProductos}"
                            @cargar-producto="${this._cargarProducto}"
                            @eliminar-producto="${this._eliminarProducto}"
                            ></lista-component>
                        </div>
                        </div>
                    </div>
                </div>
            </bbva-template>
        `;
  }

  /**
 * Método para manejar la adición de un nuevo producto a la lista.
 * Actualiza `listaProductos` con el nuevo producto recibido como detalle del evento.
 * 
 * @param {CustomEvent} e - Evento personalizado que contiene el detalle del nuevo producto.
 */
  _agregarProducto (e) {
    const nuevaProducto = e.detail;
    this.listaProductos = [...this.listaProductos, nuevaProducto];
  }

  /**
   * Método para manejar la edición de un producto existente en la lista.
   * Actualiza el producto correspondiente en `listaProductos` con los detalles del producto editado recibidos como detalle del evento.
   * 
   * @param {CustomEvent} e - Evento personalizado que contiene el detalle del producto editado.
   */
  _editarProducto (e) {
    const productoEditado = e.detail;
    const index = this.listaProductos.findIndex(item => item.id === productoEditado.id);
    if (index !== -1) {
      this.listaProductos[index] = productoEditado;
      this.listaProductos = [...this.listaProductos]; // Forzar la actualización de la lista
    }
    this.editando = false; // Finaliza el modo de edición
    this.objProducto = { // Reinicia el objeto de producto a valores por defecto
      id: '',
      nombre: '',
      estado: '',
      precio: '',
      categoria: '',
      cantidad: '',
      descripcion: ''
    };
  }

  /**
   * Método para manejar la eliminación de un producto de la lista.
   * Filtra `listaProductos` para excluir el producto con el ID recibido como detalle del evento.
   * 
   * @param {CustomEvent} e - Evento personalizado que contiene el ID del producto a eliminar.
   */
  _eliminarProducto (e) {
    const id = e.detail;
    this.listaProductos = this.listaProductos.filter(item => item.id !== id);
  }

  /**
   * Método para manejar la carga de un producto seleccionado para editar desde la lista.
   * Actualiza `objProducto` con los detalles del producto seleccionado recibidos como detalle del evento.
   * Activa el modo de edición (`editando`).
   * 
   * @param {CustomEvent} e - Evento personalizado que contiene los detalles del producto seleccionado para editar.
   */
  _cargarProducto (e) {
    this.objProducto = { ...e.detail };
    this.editando = true; // Activa el modo de edición
  }
}

window.customElements.define(StockControl.is, StockControl);