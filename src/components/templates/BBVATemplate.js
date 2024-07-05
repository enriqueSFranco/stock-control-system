import { LitElement, html } from "lit";
import "../organisms/BBVAHeader"


class BBVATemplate extends LitElement{
    static get is(){
        return 'bbva-template';
    }

    render(){
        return html`
            <bbva-header .version=${"Stock Control System"}></bbva-header>
            <slot></slot>
        `;
    }
}

window.customElements.define(BBVATemplate.is, BBVATemplate);