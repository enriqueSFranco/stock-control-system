/**
 * Filename: OrdersManagement.js
 * Author: [Tu Nombre]
 * Description: Entry point for orders management feature
 */

import { html, css } from "lit";
import BDManager from "../mixins/BDManager";


class OrdersForm extends BDManager {
    static get is() {
        return 'orders-form';
    }
    static get styles() {
        return css`
            /* Estilos generales */
            :host {
                display: block;
                font-family: 'Arial', sans-serif;
                background-color: white;
                padding: 20px;
            }

            /* Contenedor del formulario */
            .form-container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            /* TÃ­tulo del formulario */
            h2 {
                text-align: center;
                color: #004481; /* Azul BBVA */
                margin-bottom: 20px;
            }

            /* Campos del formulario */
            form label {
                display: block;
                margin-bottom: 8px;
                color: #004481; /* Azul BBVA */
            }

            form input,
            form select,
            form textarea {
                width: 100%;
                padding: 12px;
                margin-bottom: 16px;
                border: 1px solid #ccc;
                border-radius: 5px;
                box-sizing: border-box;
                font-size: 16px;
            }

            /* BotÃ³n de guardar */
            form button {
                width: 100%;
                padding: 12px;
                background-color: #004481; /* Azul BBVA */
                color: white;
                font-size: 18px;
                font-weight: bold;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            form button:hover {
                background-color: #00335f; /* Azul BBVA mÃ¡s oscuro al pasar el mouse */
            }
        `;
    }

    connectedCallback(){
        super.connectedCallback();
        this.addEventListener("-input", this._handleUserInput);
        this.addEventListener("-input", this._handleUserInput);
        this.addEventListener("-input", this._handleUserInput);
    }

    handleSubmit(e) {
        e.preventDefault();
        const order = {
            holderName: this.shadowRoot.getElementById('holder-name').value,
            orderSelect: this.shadowRoot.getElementById('order-select').value,
            orderTime: this.shadowRoot.getElementById('order-time').value,
            totalProducts: this.shadowRoot.getElementById('total-products').value
        };
        this._notifyStockControl(order);
        this.shadowRoot.querySelector('form').reset();
    }

    _notifyStockControl(order) {
        const event = new CustomEvent('order-added', { detail: { order } });
        this.dispatchEvent(event);
    }

    _handleUserInput(){

    }

    render() {
        return html`
            <h2>Agregar Pedido</h2>
            <div class="form-container">
                <form @submit="${this.handleSubmit}">
                    <label for="holder-name">Nombre del Titular</label>
                    <input type="text" id="holder-name" name="holder-name" required />

                    <label for="order-select"></label>
                    
                    <select id="order-select" name="order-select" required>
                        <option value="pedido1">Producto 1</option>
                        <option value="pedido2">Producto 2</option>
                        <option value="pedido3">Producto 3</option>
                    </select>

                    <label for="order-time">Hora del Pedido</label>
                    <input type="time" id="order-time" name="order-time" required />

                    <label for="total-products">Total de Productos</label>
                    <input type="number" id="total-products" name="total-products" required />
                    <button type="submit">Guardar Pedido</button>
                </form>
            </div>
        `;
    }
}

window.customElements.define(OrdersForm.is, OrdersForm);