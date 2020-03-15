import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/polymer/lib/elements/dom-module.js';
import '@polymer/iron-ajax/iron-ajax.js'
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';



export class photos extends PolymerElement{
    static get template(){
        return html`
        <app-route
        route="{{route}}"
        pattern="/:albumId"
        data="{{params}}"></app-route>
        
      <iron-ajax
        auto
        url="https://jsonplaceholder.typicode.com/photos"
        handle-as="json"
        on-response="handleResponse"></iron-ajax>
        <template is="dom-repeat" items="{{listOfPhotos}}">
        <img src="{{item.thumbnailUrl}}" width="300" height="200" id="{{item.url}}" on-click="imgResponse">

        <div class="desc">{{item.title}}</div>
        </template>`
    }

static get properties() {

    return {
      listOfPhotos: {
        type: Array,
        value: []
      },
      url:{
          type:String,
          value:"https://jsonplaceholder.typicode.com/photos?albumId="
      },
      photos: {
        type: Object,
        value: {
          albumId: 0,
          id: 0,
          url: "",
          thumbnailUrl: "",
          title: ""
        }
      },
      disp:{
          type:Array,
          value:[]
      },
      urlString:{
          type:String,
          value:""
      },
      route:{
          type:String,
          value:""
      }
    };
  }
  handleResponse(event, request) {
    var resData = request.response;
    this.listOfPhotos = resData;
    // console.log(this.listOfPhotos)
  }
  static get observers() {
    return [
      '_routeChanged(route.*)'
    ]
  } 
  _routeChanged(route){
      this.disp=[]
      
    //   if(this.params.al)
    //   this.url=this.url+this.params.albumId
      if(this.listOfPhotos){
          
        this.listOfPhotos.map((photos) => {
          if(photos.albumId == this.params.albumId) {
            //   this.book = book; 
            this.disp.push(photos)

          }
      });
    //   console.log(this.disp)
      }
    }
    imgResponse(e){
        var arg=""
        this.route.prefix=""

        arg=e.target.getAttribute('id')
        console.log(arg)
        this.urlString=""
        for(let i=0;i<arg.length;i++){
            if(arg[i]=="/"){
                this.urlString+="%"
            }
            else{
                this.urlString+=arg[i]
            }
        }
        console.log(this.urlString)
        console.log(this.route)
        console.log("null",this.route)

        this.set('route.path','/showphoto/'+this.urlString)
    }

}

customElements.define('my-photos',photos)