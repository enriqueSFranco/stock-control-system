import { LitElement, css, html } from "lit";
import TableRowCreator from "../mixins/TableRowCreator";

class DataTable extends TableRowCreator{
    static get properties(){
        return {
            tableHeaders: Array,
            tableData: Array
        }
    }

    static styles = [
        css`
            :host{
                margin: 2rem;
                width: 100%;
            }

            table {
                border-collapse: collapse;
                width: 100%;
            }
        `,
        css`
            td, th{
                padding: 10px;
                text-align: left;
            }

            th{
                background-color: #032744;
                color: #fff;
            }

            tr {
                border-bottom: 1px solid #ddd;
            }

            tr:hover {
                background-color: #cacaca5f;
            }
        `
    ]
    
    render(){
        console.log(this.tableHeaders, this.tableData)
        return html`
            <table>
                <thead>
                    ${this._renderRow(this.tableHeaders,true)}
                </thead>
                <tbody>
                    ${this._renderRows(this.tableData)}
                </tbody>
            </table>
        `;
    }
}

window.customElements.define("data-table", DataTable);