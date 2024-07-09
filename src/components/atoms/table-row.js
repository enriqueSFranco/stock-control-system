import { LitElement, css, html } from 'lit'

import './my-badge.js'

export class TableRow extends LitElement {
  static styles = css`
    tr {
      border-bottom: 1px solid #ddd;
    }
  `

  static get properties () {
    return { truck: { type: Object } }
  }

  render () {
    return html`
      <tr>
        ${Object.values(this.truck).map(row => html`<td>${row}</td>`)}
      </tr>
    `
  }
}

window.customElements.define('table-row', TableRow)
