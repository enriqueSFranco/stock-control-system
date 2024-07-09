import { LitElement, css, html } from 'lit'

import '../atoms/table-row.js'
import '../atoms/table-head.js'
import { formatMonet } from '../../utils/format_money.js'
import { TABLE_HEAD, TRUCKS } from '../../shared/constants.d.js'

export class DeliveryDatatable extends LitElement {
  static styles = css`
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  table th,
  table td {
    padding: 10px;
    text-align: left;
  }
  
  table th {
    background-color: #032744;
    color: #fff;
  }
  
  table tbody tr:hover {
    background-color: #cacaca5f;
  }
  
  tr {
    border-bottom: 1px solid #ddd;
  }
  
  .container {
    margin: 2rem;
  }

  .status-pending {
    color: #f77f00;
  }
  
  .status-delivered {
    color: #4caf50;
  }
  `

  static properties = {
    data: { type: Array, state: true }
  }

  constructor() {
    super()
    this.data = TRUCKS
  }

  render () {
    return html`
    <div class="container">
      <table>
        <thead>
          <tr>
            ${TABLE_HEAD.map((tableHeadText) => html`<th>${tableHeadText}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.data.length > 0 ? this.data.map((truck) => this._renderTableRow(truck)) : html`<tr colspan="${TABLE_HEAD.length}"><td>sin datos</td></tr>`}
        </tbody>
      </table>
    </div>
    `
  }

  // TODO: Pasar a un componente
  _renderTableRow (row) {
    return html`
      <tr>
        ${Object.keys(row).map((key) => this._renderCell(key, row[key]))}
      </tr>
    `
  }

  // TODO: Pasar a un componente
  _renderCell (key, value) {
    if (key === 'estado') {
      // const statusColor = this._getStatusColor(value)
      // TODO: Implementarlo con el componente <my-badge></my-badge>
      return html`<td><my-badge text="${value}" textColor="${value === 'entregado' ? '#118502' : '#f74600'}" bgColor="${value === 'entregado' ? '#00f06c55' : '#f7800073'}"></my-badge></td>`
    } else {
      if (key === 'totalCuenta') {
        const formattedMoney = formatMonet(value)
        return html`<td>${formattedMoney}</td>`
      }
      return html`<td>${value}</td>`
    }
  }

  _getStatusColor (status) {
    return status === 'entregado'
      ? 'status-delivered'
      : 'status-pending'
  }
}

window.customElements.define('delivery-datatable', DeliveryDatatable)
