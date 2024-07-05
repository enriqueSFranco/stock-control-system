import { LitElement, html, css } from "lit";
import "../atoms/RouteLink"


class NavBar extends LitElement{
    static get is(){
        return 'nav-bar'
    }

    static get styles(){
        return [
            css`
                ul{
                    display: flex;
                    padding: 0 20px;
                    align-items: center;
                    justify-content: space-around;
                }

                li {
                    display: block;
                    width: fit-content;
                    margin: 0 30px;
                    list-style: none;
                    font-size: 1rem;
                    font-weight: 500;
                    text-transform: uppercase;
                }

                li route-link {
                    color: var(--contrast-color);
                    transition: color 0.3s ease;
                }
            `
        ]
    }

    render(){
        return html`
            <ul>
                <li>
                    <route-link to="/stock-control">Stock Management</route-link>
                </li>
                <li>
                    <route-link to="/route-tracking">Route Tracking</route-link>
                </li>
                <li>
                    <route-link to="/warehouse-management">Warehouse Management</route-link>
                </li>
            </ul>
        `;
    }
}

window.customElements.define(NavBar.is, NavBar);