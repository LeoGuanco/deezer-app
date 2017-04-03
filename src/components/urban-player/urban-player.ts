import { Component,Input } from '@angular/core';

/*
  Generated class for the UrbanPlayer component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'urban-player',
  templateUrl: 'urban-player.html'
})
export class UrbanPlayerComponent {
  @Input() text : string;

  constructor() {
    console.log(this.text);    
  }

}
