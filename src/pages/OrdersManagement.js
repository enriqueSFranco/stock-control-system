/**
 * Filename: OrdersManagement.js
 * Author: 
 * Description: Entry point for orders management feature
 */

import { LitElement, html } from "lit";

class OrdersManagement extends LitElement{
    static get is(){
        return 'orders-management';
    }

    render(){
        return html`
            <bbva-template>
                <h1 style="text-align: center; text-transform: uppercase">Gestión de pedidos</h1>
                <orders-form></orders-form>
            </bbva-template>
        `;
    }
}

window.customElements.define(OrdersManagement.is, OrdersManagement);