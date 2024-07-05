/**
 * Filename: RouteLink.js
 * Description: Page navigator class
 * Author: Luis Antonio Montoya Morales
 */

import { LitElement, html } from "lit";

class RouteLink extends LitElement{
    static get is(){
        return 'route-link';
    }

    static get properties(){
        return {
            to: String
        }
    }

    constructor(){
        super();
        this.to = "/"
    }

    connectedCallback(){
        super.connectedCallback();
        this.addEventListener('click', this._handleRouteChange);
    }

    /**
     * Fires popstate event, overwrite user history, 
     * popstate event must be handled by <dom-router> 
     * component
     * @param {Object} event 
     */
    _handleRouteChange(event){
        event.preventDefault();
        window.history.pushState({}, '', this.to);
        window.dispatchEvent(new PopStateEvent('popstate', {
            bubbles: true,
            composed: true
        }))
    }

    /**
     * 
     * @returns Rendereable lit element template
     */
    render(){
        return html`
            <a href="${this.to}" @click=${this._handleRouteChange}>
                <slot></slot>
            </a>
        `
    }
}

window.customElements.define(RouteLink.is, RouteLink);