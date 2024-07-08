/**
 * Filename: StockControl.js
 * Author: Luis Antonio Montoya Morales
 * Description: Entry point for orders preview feature
 */

import { LitElement, html, css } from "lit";
import "../components/templates/BBVATemplate"
import "../components/templates/OrdersView"

const dummyData = [
    {
        id: "202034",
        ruta_encargada: "UL-202032",
        estado: "Enviando",
        total: 40000,
        cliente: "Ricardo Figueroa",
        fecha: "20/10/2024"
    },
    {
        id: "202034",
        ruta_encargada: "UL-202032",
        estado: "Enviando",
        total: 40000,
        cliente: "Ricardo Figueroa",
        fecha: "20/10/2024"
    },
    {
        id: "202034",
        ruta_encargada: "UL-202032",
        estado: "Enviando",
        total: 40000,
        cliente: "Ricardo Figueroa",
        fecha: "20/10/2024"
    },
    {
        id: "202034",
        ruta_encargada: "UL-202032",
        estado: "Enviando",
        total: 40000,
        cliente: "Ricardo Figueroa",
        fecha: "20/10/2024"
    },
    {
        id: "202034",
        ruta_encargada: "UL-202032",
        estado: "Enviando",
        total: 40000,
        cliente: "Ricardo Figueroa",
        fecha: "20/10/2024"
    }
]

class OrdersPage extends LitElement{
    static get is(){
        return 'orders-page';
    }

    static get properties(){
        return {
            orders: {
                type: Array,
                attribute: false
            }
        }
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

    constructor(){
        super();
        window.localStorage.setItem("orders", JSON.stringify(dummyData));
        this.orders = [];
    }

    connectedCallback(){
        super.connectedCallback();
        this._loadOrders();
    }

    _loadOrders(){
        let data = JSON.parse(window.localStorage.getItem("orders"));
        console.log(data, data && Array.isArray(data));
        this.orders = (data && Array.isArray(data)) ? data : [];
    }

    render(){
        return html`
            <bbva-template>
                <main>
                    <h1 style="text-align: center; text-transform: uppercase">Pedidos</h1>
                    <orders-view .data=${this.orders}></orders-view>
                </main>
            </bbva-template>
        `;
    }
}

window.customElements.define(OrdersPage.is, OrdersPage);