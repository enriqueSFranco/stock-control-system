/**
 * Filename: OrdersManagement.js
 * Author: 
 * Description: Entry point for orders management feature
 */

import { LitElement, html } from "lit";
import "../components/templates/BBVATemplate"

class OrdersManagement extends LitElement{
    static get is(){
        return 'orders-management';
    }

    render(){
        return html`
            <bbva-template>
                <div>OrdersManagement</div>
            </bbva-template>
        `;
    }
}

window.customElements.define(OrdersManagement.is, OrdersManagement);