import { LitElement, css, html } from 'lit'

export class DeliveryTraking extends LitElement {
  static styles = css``

  render () {
    return html`
      <section>
        <header>
          <h1>Planificación de ruta</h1>
        </header>
      <!-- content -->
      </section>
    `
  }
}

window.customElements.define('delivery-traking', DeliveryTraking)
