import { LitElement, html } from "lit";

class NoDataLoaded extends LitElement{
    static get is(){
        return "nodata-loaded";
    }

    render(){
        return html`
            <div>No data for now!</div>
        `;
    }
}

window.customElements.define(NoDataLoaded.is, NoDataLoaded);