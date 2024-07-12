/**
 * Filename: OrderView.js
 * Author: Luis Antonio Montoya Morales
 * Description: Orders view template
 */

import { html, css } from "lit";
import BDManager from "../mixins/BDManager";
import { ORDERS_HEADERS } from "../../shared/constants.d";

class OrdersView extends BDManager{
    static get is(){
        return "orders-view";
    }

    static get styles(){
        return [
            css`
                :host{
                    width:80%;
                    margin: 0 auto;
                    background-color: white;
                    display: flex;
                    flex-wrap: wrap;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 10px 10px rgba(0, 0, 0, 0.3);
                }
            `
        ]
    }

    connectedCallback(){
        super.connectedCallback();
    }

    _showProductInfo(item){
        console.log("show ", item)
        const toshow = "Product List:\n".concat(item.productos.map(product =>{
            return `Product: ${this._findIn("productos", product.id).nombre} | ${product.quantity}pzs`;
        }).join("\n"));
        alert(toshow);
    }

    _renderOrders(){
        console.log(this._data.orders, ORDERS_HEADERS);
        if(this._data.orders.length > 0){
            return html`
                <data-table .tableHeaders=${ORDERS_HEADERS} .tableData=${this._data.orders.map((item) =>{
                    return {
                        ...item,
                        products: html`<alert-trigger @click=${()=>this._showProductInfo(item)} .text=${"Show Products"}></alert-trigger>`
                    }
                })}></data-table>
            `;
        }
        return html`<nodata-loaded></nodata-loaded>`;
    }

    render(){
        return html`
            ${this._renderOrders()}
        `;
    }
}

window.customElements.define(OrdersView.is, OrdersView);