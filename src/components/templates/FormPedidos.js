/**
 * Filename: OrderForm.js
 * Author: Karla Georgina Chiw Lara
 * Description: Order form component
 */

import { LitElement, html, css } from 'lit'
import './BBVATemplate.js'

export class FormPedidos extends LitElement {
	static get is () {
		return 'form-pedidos'
	}

	static get styles () {
		return [
			css`
				.form {
					width: 600px;
				}

        .form-group {
          margin-bottom: 15px;
        }
        .form-group label {
          display: block;
          margin-bottom: 5px;
        }
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px;
          box-sizing: border-box;
        }
        .form-group button {
          display: block;
          margin-top: 10px;
        }
				.wrapper {
					display: grid;
					place-content: center;
					width: 100%;
				}
      `
		]
	}

	static get properties () {
		return {
			products: { type: Array },
			orderProducts: { type: Array },
			total: { type: Number }
		}
	}

	constructor() {
		super()
		this.products = ['Product 1', 'Product 2', 'Product 3']
		this.orderProducts = [{ id: 0, product: '', quantity: 1 }]
		this.total = 0
	}

	render () {
		return html`
		<div class="wrapper">
      <form class="form">
        <!-- <div class="form-group">
          <label for="order-id">Order ID</label>
          <input type="text" id="order-id" name="order-id" />
        </div> -->
        <div class="form-group">
          <label for="order-date">Order Date</label>
          <input type="date" id="order-date" name="order-date" />
        </div>
        <div class="form-group">
          <label for="order-time">Order Time</label>
          <input type="time" id="order-time" name="order-time" />
        </div>
        <div class="form-group">
          <label>Products</label>
          ${this.orderProducts.map(
			(product, index) => html`
              <div class="form-group">
                <select @change=${(e) => this.updateProduct(e, index)}>
                  <option value="">Select a product</option>
                  ${this.products.map(
				(p) => html`<option value=${p}>${p}</option>`
			)}
                </select>
                <input
                  type="number"
                  min="1"
                  .value=${product.quantity}
                  @change=${(e) => this.updateQuantity(e, index)}
                />
              </div>
            `
		)}
          <button type="button" @click=${this.addProduct}>Add Product</button>
        </div>
        <div class="form-group">
          <label>Total</label>
          <input type="text" readonly .value=${this.total} />
        </div>
      </form>
		</div>
    `
	}

	addProduct () {
		this.orderProducts = [
			...this.orderProducts,
			{ id: this.orderProducts.length, product: '', quantity: 1 }
		]
	}

	updateProduct (e, index) {
		const value = e.target.value
		this.orderProducts = this.orderProducts.map((p, i) => {
			if (i === index) {
				return { ...p, product: value }
			}
			return p
		})
	}

	updateQuantity (e, index) {
		const value = parseInt(e.target.value, 10)
		this.orderProducts = this.orderProducts.map((p, i) => {
			if (i === index) {
				return { ...p, quantity: value }
			}
			return p
		})
		this.calculateTotal()
	}

	calculateTotal () {
		this.total = this.orderProducts.reduce((acc, p) => {
			const price = this.getProductPrice(p.product)
			return acc + price * p.quantity
		}, 0)
	}

	getProductPrice (product) {
		// Dummy function to get product price, replace with real implementation
		return 10
	}
}

window.customElements.define(FormPedidos.is, FormPedidos)
