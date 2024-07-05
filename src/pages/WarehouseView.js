import { LitElement, html } from "lit";
import "../components/templates/BBVATemplate"

class WarehouseView extends LitElement{
    static get is(){
        return 'warehouse-view';
    }

    render(){
        return html`
            <bbva-template>
                <div>WarehouseMView</div>
            </bbva-template>
        `;
    }
}

window.customElements.define(WarehouseView.is, WarehouseView);