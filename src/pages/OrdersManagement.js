/**
 * Filename: OrdersManagement.js
 * Author: 
 * Description: Entry point for orders management feature
 */

import { LitElement, html } from "lit";
import "../components/templates/BBVATemplate"
import "../components/templates/FormPedidos"

class OrdersManagement extends LitElement{
    static get is(){
        return 'orders-management';
    }

    render(){
        return html`
            <bbva-template>
                <form-pedidos> 
                <div>OrdersManagement</div>
                <form-pedidos>
            </bbva-template>
        `;
    }
}

window.customElements.define(OrdersManagement.is, OrdersManagement);