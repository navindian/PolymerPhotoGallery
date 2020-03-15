import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ContactDomRepeaterDemo} from './demo'
import '@polymer/iron-ajax/iron-ajax.js'
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import './photos.js';
import './demo.js';
import './showphoto.js';

class MyElement extends PolymerElement{
  static get template(){
      return html`
      
      <app-location route="{{route}}"></app-location>
        <app-route
            route="{{route}}"
            pattern="/:view"
            data="{{routeData}}"
            tail="{{subroute}}">
     </app-route>

     <iron-pages selected="[[routeData.view]]" attr-for-selected="name">
     <show-photo name="showphoto" route="{{subroute}}"></show-photo>
     <demo-template name="" route="{{subroute}}"></demo-template>
     <my-photos name="photos" route="{{subroute}}"></my-photos>
     
     </iron-pages>
     
            `;
  }

}
customElements.define('my-element', MyElement);
