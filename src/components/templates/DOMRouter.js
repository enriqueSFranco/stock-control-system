/**
 * Filename: DOMRouter.js
 * Description: Page routing class
 * Author: Luis Antonio Montoya Morales
 */

import { LitElement, html } from 'lit'

export class DOMRouter extends LitElement {

  static get properties(){
    return{
      routes: {
        type: Array
      },
      notFound: {
        type: Object
      },
      _currentPath: String
    }
  }


  constructor() {
    super();
    this._currentPath = window.location.pathname;
    this.routes = [];
    this.notFound = html`
      <div>
        404 Not Found
      </div>
    `;
  }

  connectedCallback(){
    super.connectedCallback();
    window.addEventListener('popstate', this._handleRouteChange.bind(this));
  }

  disconnectedCallback(){
    super.disconnectedCallback();
    window.removeEventListener('popstate', this._handleRouteChange.bind(this));
  }

  _handleRouteChange(event){
    console.log(event, window.location.pathname);
    this._currentPath = window.location.pathname;
    this.requestUpdate();
  }

  _getToRender(){
    console.log(this.routes, this._currentPath);
    let component = this.routes.find(route => route.path == this._currentPath);
    console.log(component);
    return component ? component.component : this.notFound;
  }

  render () {
    return html`${this._getToRender()}`
  }
}

window.customElements.define('dom-router', DOMRouter)
