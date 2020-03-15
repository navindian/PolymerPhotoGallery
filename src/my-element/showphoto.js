import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/polymer/lib/elements/dom-module.js';
import '@polymer/iron-ajax/iron-ajax.js'
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';



export class showphotos extends PolymerElement{
    static get template(){
        return html`
        <app-route
        route="{{route}}"
        pattern="/:imgurl"
        data="{{params}}"
        tail="{{tailObject}}">
        </app-route>
        
        <img src="{{urlString}}" alt='loading'>`
    }

static get properties() {

    return {
        url:{
            type:String,
            value:""
        },
        tailObject:{
            type:String,
            value:""

        },
        myroute:{},
        urlString:{
            type:String

        }
    };
      
  }
 
  static get observers() {
    return [
      '_routeChanged(route.*)'
    ]
  } 
  _routeChanged(route){
      this.url=""
      this.url='https:'+this.tailObject.path
      var arg=this.params.imgurl
    //   console.log("+>",this.tailObject)
    //   console.log("=",arg)
      this.urlString=""
      if(arg){

          for(let i=0;i<arg.length;i++){
              if(arg[i]=="%"){
                  this.urlString+="/"
                }
                else{
                    this.urlString+=arg[i]
                }
                
            }
        }
        console.log(this.urlString)
      
    //   if(this.params.al)
    //   this.url=this.url+this.params.albumId
   
      }
    }
    

customElements.define('show-photo',showphotos)