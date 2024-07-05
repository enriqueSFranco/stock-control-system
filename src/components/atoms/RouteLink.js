/**
 * Filename: RouteLink.js
 * Description: Page navigator class
 * Author: Luis Antonio Montoya Morales
 */

import { LitElement, html, css } from "lit";

class RouteLink extends LitElement{
    static get is(){
        return 'route-link';
    }

    static get properties(){
        return {
            to: String
        }
    }

    static get styles(){
        return [
            css`
                a {
                    color: inherit;
                    text-decoration: none;
                    transition: inherit;
                    transform: inherit;
                    font-size: inherit;
                    font-weight: inherit;
                    font-family: inherit;
                }
                a:link {
                    color: inherit;
                }

                a:hover{
                    color: var(--yellow-color);
                }
            `
        ]
    }

    constructor(){
        super();
        this.to = "#"
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