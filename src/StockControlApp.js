/**
 * Filename: StockControlApp.js
 * Author: Luis Antonio Montoya Morales
 * Desription: Entry point component for the app
 */

import { LitElement, html, css } from 'lit'

export class StockControlApp extends LitElement {
  _routes = [
    {path: "/", component: html`<orders-page></orders-page>`},
    {path: "/stock-control", component: html`<stock-control></stock-control>`},
    {path: "/orders-management", component: html`<orders-management></orders-management>`},
    {path: "/route-tracking", component: html`<route-tracking></route-tracking>`}
  ]

  _notFound = html`<route-link to="/">No encontré la ruta</route-link>`

  static get styles(){
    return [
      css`
        :host{
          --background: #022744;
          --text-color: #fff;
          --shadow-color: rgba(0, 0, 0, 0.2);
          --yellow-color: #f8cd51;
          --contrast-color: #028484;
          --light-blue-traslucent: #b6dfff8a;
          --light-blue: #addcff;
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