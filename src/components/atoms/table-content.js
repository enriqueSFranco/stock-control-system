import { LitElement, css, html } from 'lit'

import './table-row.js'

export class TableContent extends LitElement {
  static styles = css``

  render () {
    return html`
      <tbody>
        ${this.trucks.map((truck) => html`
            <table-row .truck="${truck}"></table-row>
        `)}
      </tbody>
    `
  }
}

window.customElements.define('table-content', TableContent)
