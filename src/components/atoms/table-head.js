import { LitElement, css, html } from 'lit'

import { TABLE_HEAD } from '../../shared/constants.d.js'

export class TableHead extends LitElement {
  static styles = css``

  render () {
    return html`
      <thead>
          <tr>
            ${TABLE_HEAD.map(tableHeadText => html`<th>${tableHeadText}</th>`)}
          </tr>
        </thead> 
    `
  }
}

window.customElements.define('table-head', TableHead)
