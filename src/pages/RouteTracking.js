/**
 * Filename: RouteTracking.js
 * Author: 
 * Description: Entry point for route tracking feature
 */

import { LitElement, html } from "lit";
import "../components/templates/BBVATemplate"

class RouteTracking extends LitElement {
  static get is () {
    return 'route-tracking'
  }

  render () {
    return html`
            <bbva-template>
                <div>RouteTracking</div>
            </bbva-template>
        `;
  }
}

window.customElements.define(RouteTracking.is, RouteTracking)
