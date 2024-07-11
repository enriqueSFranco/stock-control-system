/**
 * Filename: StockControl.js
 * Author: Luis Antonio Montoya Morales
 * Description: Entry point for orders preview feature
 */

import { LitElement, html, css } from 'lit'
import '../components/templates/BBVATemplate'
import '../components/templates/OrdersView'
import { getLocalStorageItem } from '../utils/store'

class OrdersPage extends LitElement {
	static get is () {
		return 'orders-page'
	}

	static get properties () {
		return {
			orders: {
				type: Array,
				attribute: false,
			},
		};
	}

	static get css () {
		return [
			css`
        :host {
          width: 100%;
        }
      `,
		];
	}

	connectedCallback () {
		super.connectedCallback();
		this.orders = getLocalStorageItem('productos')
	}


	render () {
		return html`
      <bbva-template>
        <main>
          <h1 style="text-align: center; text-transform: uppercase">Pedidos</h1>
          <orders-view .data=${this.orders}></orders-view>
        </main>
      </bbva-template>
    `;
	}
}

window.customElements.define(OrdersPage.is, OrdersPage);
