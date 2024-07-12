import { LitElement, html } from "lit";
import TableRowCreator from "../mixins/TableRowCreator";

class TableHead extends TableRowCreator{

    render(){
        return html`
            
        `;
    }
}

window.customElements.define("table-head", TableHead);