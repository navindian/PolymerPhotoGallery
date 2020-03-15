import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/polymer/lib/elements/dom-module.js';
import '@polymer/iron-ajax/iron-ajax.js'
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

import './photos.js';

export class ContactDomRepeaterDemo extends PolymerElement{
    static get template(){
//       return html`
//       <script src="../../node_modules/bootstrap/dist/css/bootstrap.min.css" type="stylesheet"></script>
//       <style>
//       :host{
//             color:black;
//       }
//       ul{
//             list-style:none;
//       }
//       li{
//             display:flex;
//       }
//       li img{
//             border-radius:50%;
//             height:100px;
//             width:100px;
//             padding:30px;
//       }
//       h2{
//             line-height:80px;
//       }
//       span{
//             line-height:120px;
//       }
//       </style>
//       <iron-ajax
//               auto
//               url="https://jsonplaceholder.typicode.com/albums"
              
//               handle-as="json"
//               on-response="handleResponse"></iron-ajax>
      
//     <ul>
//     <template is="dom-repeat" items="{{contacts}}" >
//     {{_returnHTML(item)}}
//     <dom-template1 myitem="item" on-click="handleClick"></dom-template1>
//     </button>
//     </template>

    
//     </ul> 
//       `;
      return html`
        <script src="../../node_modules/bootstrap/dist/css/bootstrap.min.css" type="stylesheet"></script>
        <style>
        :host{
              color:black;
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
        <app-location route="{{route}}"></app-location>
        <app-route
            route="{{route}}"
            pattern="/:view"
            data="{{routeData}}"
            tail="{{subroute}}">
     </app-route>

     

        <iron-ajax
                auto
                url="https://jsonplaceholder.typicode.com/albums"
                
                handle-as="json"
                on-response="handleResponse"></iron-ajax>
        
      <ul>
      <template is="dom-repeat" items="{{contacts}}" >
      <button class="" on-click="handleClick" id="{{item.id}}">
      <my-child selected="{{item}}"></my-child>
      {{item.userId}}
      
      {{item.title}}
      
      </button>
      </template>


      </ul> 
        `;
    }

//     _returnHTML(item){
//           console.log(item)
//           let item1=item
//           console.log(item1,"asdsad",this.item1)
//           return html`
//           {{item1.userId}}
//           {{item1.title}}`
//     }
    static get properties(){
        return {
          contacts:{
              type:Array,
              value:[]
          },
          item1:{type:Object,
      value:[]}
        }
    }
    handleResponse(event, request) {
        var resData = request.response;
        this.contacts = resData;
        console.log(this.contacts)
        }
        handleClick(e){
              var args=e.target.getAttribute('id');
                            console.log(args)
                            this.set('route.path', '/photos/'+args)


    }
  
  }
  class ContactDomRepeaterDemo1 extends PolymerElement{
      static get template(){
            return html`
            {{mySelected.userId}}`
      }
      static get properties(){
            return {
                  mySelected:{type:Object,
                        value:[]}
            }
      }
  }
  
  customElements.define('demo-template', ContactDomRepeaterDemo);
  customElements.define('my-child', ContactDomRepeaterDemo1);
  
