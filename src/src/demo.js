import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-ajax/iron-ajax.js'
export class ContactDomRepeaterDemo extends PolymerElement{
    static get template(){
        return html`
        <style>
        :host{
              color:#00a6b8;
        }
        ul{
              list-style:none;
        }
        li{
              display:flex;
        }
        li img{
              border-radius:50%;
              height:100px;
              width:100px;
              padding:30px;
        }
        h2{
              line-height:80px;
        }
        span{
              line-height:120px;
        }
        </style>
        <iron-ajax
                auto
                url="./assets/data/contacts.json"
                handle-as="json"
                on-response="handleResponse"></iron-ajax>
        
      <ul>
      <template is="dom-repeat" items="{{contacts}}">
          <li><img src="{{item.img}}"/><h2>{{item.name}} <br><i>Email:{{item.email}}</i></h2></li>
      </template>
      </ul> 
        `;
    }
  
    static get properties(){
        return {
          contacts:{
              type:Array,
              value:[]
          }
        }
    }
    handleResponse(event, request) {
        var resData = request.response;
        this.contacts = resData;
        console.log(this.contacts)
        }
  
  }
  
  customElements.define('demo-template', ContactDomRepeaterDemo);
  
