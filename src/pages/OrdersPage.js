/**
 * Filename: StockControl.js
 * Author: Luis Antonio Montoya Morales
 * Description: Entry point for orders preview feature
 */

import { LitElement, html, css } from "lit";

class OrdersPage extends LitElement{
    static get is(){
        return 'orders-page';
    }

    static get css(){
        return [
            css`
                :host{
                    width: 100%;
                }
            `
        ]
    }

    render(){
        return html`
            <bbva-template>
                <main>
                    <h1 style="text-align: center; text-transform: uppercase">Pedidos</h1>
                    <orders-view></orders-view>
                </main>
            </bbva-template>
        `;
    }
}

window.customElements.define(OrdersPage.is, OrdersPage);