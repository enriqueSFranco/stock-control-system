/**
 * Filename: OrderCard.js
 * Author: Luis Antonio Montoya Morales
 * Description: Displays order info
 */

import { LitElement, html, css } from "lit";

class OrderCard extends LitElement{
    static get is(){
        return "order-card";
    }

    static get properties(){
        return {
            order: Object
        }
    }

    static get styles(){
        return [
            css`
                :host{
                    background-color: var(--light-blue-traslucent);
                    transition: background-color 0.4s ease;
                    border-radius: 10px;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    margin: 5px
                }

                :host(:hover){
                    background-color: var(--light-blue);
                }

                .header-container{
                    font-weight: 500;
                    font-size: 18px;
                    color: var(--yellow-color);
                }
            `
        ];
    }

    constructor(){
        super();
        this.order = {}
    }

    render(){
        console.log(this.order);
        return html`
            <div class="header-container">
                ${this.order.id}
            </div>
            <div>
                ${this.order.fecha}
                ${this.order.cliente}
                ${this.order.ruta_encargada}
                ${this.order.estado}
                ${this.order.total}
            </div>
        `;
    }
}

window.customElements.define(OrderCard.is, OrderCard);