import { LitElement, html, css } from 'lit'
import "./components/atoms/RouteLink"
import "./components/templates/DOMRouter"

export class StockControlApp extends LitElement {
  _routes = [
    {path: "/", component: html`<route-link to="/hola">Ir a Hola</route-link>`},
    {path: "/hola", component: html`<route-link to="/">Ir a inicio</route-link><route-link to="/nose">Ir a nose</route-link>`},
  ]

  _notFound = html`<route-link to="/">No encontre la ruta</route-link>`

  static get styles(){
    return [
      css`
        :host{
          --background: #022744;
          --text-color: #fff;
          --dimed-color: rgba(0, 0, 0, 0.2);
          --nothing-color: #f8cd51;
          --nothing-color2: #028484;
        }
      `
    ]
  }

  constructor() {
    super();
  }


  render () {
    return html`
      <dom-router .routes=${this._routes} .notFound=${this._notFound}></dom-router>
    `
  }
}

window.customElements.define('stockcontrol-app', StockControlApp);
