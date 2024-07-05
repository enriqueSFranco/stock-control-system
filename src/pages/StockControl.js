/**
 * Filename: RouteTracking.js
 * Author: 
 * Description: Entry point for stock control feature
 */

import { LitElement, html } from "lit";
import "../components/templates/BBVATemplate"

class StockControl extends LitElement{
    static get is(){
        return 'stock-control';
    }

    render(){
        return html`
            <bbva-template>
                <form-element></form-element>
            </bbva-template>
        `;
    }
}

window.customElements.define(StockControl.is, StockControl);