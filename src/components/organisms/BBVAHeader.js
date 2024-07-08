/**
 * Filename: BBVAHeader.js
 * Author: Luis Antonio Montoya Morales
 * Description: Header for the app
 */

import { LitElement, html, css } from "lit";
import "../atoms/RouteLink"
import '../molecules/NavBar'

class BBVAHeader extends LitElement{
    static get is(){
        return "bbva-header";
    }
    
    static get properties(){
        return{
            version: String
        }
    }

    static get styles(){
        return [
            css`
                :host{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    background-color: var(--background);
                    padding: 10px 0;
                    z-index: 1000;
                    width: 100%;
                    height: 45px;
                    box-shadow: 0 2px 5px var(--shadow-color);
                    overflow: hidden;
                }

                .logo {
                    height: 100%;
                    color: var(--text-color);
                    font-size: 1.8rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                .logo img {
                    height: 35px;
                    width: 120px;
                    margin: 0 20px;

                }
            `
        ]
    }

    render(){
        return html`
            <route-link to="/">
                <div class="logo">
                    <img src="/Imagenes/bbva.png" alt="Logo"/>
                    ${this.version}
                </div>
            </route-link>
            <nav-bar></nav-bar>
        `;
    }
}

window.customElements.define(BBVAHeader.is, BBVAHeader);