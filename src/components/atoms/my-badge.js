import { LitElement, css, html } from 'lit'

export class MyBadge extends LitElement {
  static styles = css`
  :host {
    display: block;
  }
  .badge {
    width: fit-content;
    display: grid;
    place-content: center;
    padding: 0.3em 0.6em;
    border-radius: 4px;
    font-size: 12px;
  }
  `

  static properties = {
    text: { type: String },
    textColor: { type: String },
    bgColor: { type: String }
  }

  constructor() {
    super()
    this.textColor = '#000'
    this.bgColor = '#ccc'
  }

  render () {
    return html`
      <span class="badge" style="background-color: ${this.bgColor}; color: ${this.textColor}">${this.text}</span>
    `
  }
}

window.customElements.define('my-badge', MyBadge)
