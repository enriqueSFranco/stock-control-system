import { LitElement, html } from "lit";
import "../components/templates/BBVATemplate"

class WarehouseManagement extends LitElement{
    static get is(){
        return 'warehouse-management';
    }

    render(){
        return html`
            <bbva-template>
                <div>WarehouseManagement</div>
            </bbva-template>
        `;
    }
}

window.customElements.define(WarehouseManagement.is, WarehouseManagement);