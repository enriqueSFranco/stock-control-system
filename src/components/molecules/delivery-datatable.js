import { LitElement, css, html } from 'lit'

import '../atoms/table-row.js'
import '../atoms/table-head.js'
import { TRUCKS } from '../../shared/constants.d.js'

export class DeliveryDatatable extends LitElement {
  static styles = css`
    table {
      border-collapse: collapse;
      width: 100%;
    }

    tr {
      border-bottom: 1px solid #ddd;
    }
  `
  static properties = {
    trucks: { type: Array }
  }

  constructor() {
    super()
    this.trucks = TRUCKS
  }

  render () {
    return html`
      <table>
        <table-head></table-head>
        <tbody>
          ${this.trucks.map((truck) => html`
              <table-row .truck="${truck}"></table-row>
            `)}
        </tbody>
      </table>
    `
  }
}

window.customElements.define('delivery-datatable', DeliveryDatatable)
