import { LitElement, css, html } from 'lit'

export class MyBadge extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .badge {
      display: grid;
      place-content: center;
      padding: 0.3em 0.6em;
      border-radius: 4px;
      background-color: #ccc;
    }
  `

  static properties = {
    text: { type: String },
    textColor: { type: String },
    bgColor: { type: String }
  }

  render () {
    return html`
      <span class="badge">${this.text}</span>
    `
  }
}

window.customElements.define('my-badge', MyBadge)
