import { LitElement, html, css } from "lit";
import "../organisms/BBVAHeader"


class BBVATemplate extends LitElement{
    static get is(){
        return 'bbva-template';
    }

    static get styles(){
        return [
            css`
                bbva-header{
                    margin-bottom: 30px;
                }
            `
        ]
    }

    render(){
        return html`
            <bbva-header .version=${"Stock Control System"}></bbva-header>
            <slot></slot>
        `;
    }
}

window.customElements.define(BBVATemplate.is, BBVATemplate);