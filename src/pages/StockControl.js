import { LitElement, html } from "lit";
import "../components/templates/BBVATemplate"

class StockControl extends LitElement{
    static get is(){
        return 'stock-control';
    }

    render(){
        return html`
            <bbva-template>
                <div>
                    StockControl
                </div>
            </bbva-template>
        `;
    }
}

window.customElements.define(StockControl.is, StockControl);