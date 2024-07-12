import { LitElement, css, html } from "lit";

class AlertTrigger extends LitElement{
    static styles = [
        css`
            span {
                display: block;
                padding: 8px 4px;
                background-color: #fafafa;
                text-align: center;
                border-radius: 99px;
                width: fit-content;
            }

            span:hover{
                background-color: var(--light-blue);
            }
        `
    ]

    static properties = {
        text: String
    }

    render(){
        return html`<span>${this.text}</span>`;
    }
}

window.customElements.define('alert-trigger', AlertTrigger);