import { LitElement, html, css } from "lit";

const TableRowCreator = Superclass => class extends Superclass{
    static properties = {
        rowData: Array
    }
    
    _renderRow(rowData, isHeader = false,){
        console.log(rowData);
        return html`
            <tr>
                ${rowData.map(cellData => isHeader ? 
                    this._renderHeaderCell(cellData) : 
                    this._renderCell(cellData))
                }
            </tr>
        `;
    }

    _renderRows(data, headers){
        console.log(data)
        return html`
            ${data.map(row => {
                return this._renderRow(Object.values(row))
            })}
        `;
    }

    _renderHeaderCell(data){
        return html`<th>${data}</th>`;
    }

    _renderCell(data){
        return html`<td>${data}</td>`
    }
}

export default TableRowCreator(LitElement);