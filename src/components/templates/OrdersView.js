/**
 * Filename: OrderView.js
 * Author: Luis Antonio Montoya Morales
 * Description: Orders view template
 */

import { LitElement, html, css } from "lit";
import "../atoms/NoDataLoaded";
import "../atoms/OrderCard";

class OrdersView extends LitElement{
    static get is(){
        return "orders-view";
    }

    static get properties(){
        return{
            data: Array
        }
    }

    static get styles(){
        return [
            css`
                :host{
                    width:80%;
                    margin: 0 auto;
                    background-color: var(--background);
                    display: flex;
                    flex-wrap: wrap;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 10px 10px rgba(0, 0, 0, 0.3);
                }
            `
        ]
    }

    constructor(){
        super();
        this.data = [];
    }

    _getCards(){
        console.log(this.data);
        if(this.data.length > 0){
            return this.data.map(order => {
                return html`<order-card .order=${order}></order-card>`;
            });
        }
        return html`<nodata-loaded></nodata-loaded>`;
    }

    render(){
        return html`
            ${this._getCards()}
        `;
    }
}

window.customElements.define(OrdersView.is, OrdersView);