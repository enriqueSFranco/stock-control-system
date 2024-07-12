import { LitElement, html, css } from "lit";
import "../atoms/RouteLink"

class NavLink extends LitElement{
    static get is(){
        return "nav-link";
    }

    static get properties(){
        return {
            to: String,
            _isActive: Boolean
        }
    }
    
    constructor(){
        super();
        this.to = "#"
        this._isActive = false;
    }

    connectedCallback(){
        super.connectedCallback();
        this.addEventListener("popstate", this._handleBubble)
    }

    _handleBubble(){
        console.log(window.location.pathname == this.to);
        if(window.location.pathname == this.to){
            this._isActive = true;
            console.log("Current location is equal to this nav");
        }
        else{
            this._handleBubble = false;
        }
    }

    render(){
        return html`
            <route-link @popstate=${this._handleBubble} .to=${this.to}>
                <slot></slot>
            </route-link>
        `;
    }
}

window.customElements.define(NavLink.is, NavLink);