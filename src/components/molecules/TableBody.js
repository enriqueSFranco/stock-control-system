import { html } from "lit";
import TableRowCreator from "../mixins/TableRowCreator";

class TableBody extends TableRowCreator{
    render(){
        return html`
            
        `;
    }
}

window.customElements.define('table-body', TableBody);