import { Component,Input,OnInit } from '@angular/core';

/*
  Generated class for the UrbanPlayer component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'urban-player',
  templateUrl: 'urban-player.html'
})
export class UrbanPlayerComponent implements OnInit{  
  @Input() title : string;
  @Input() artist : string;
  @Input() album : string;
  @Input() cover : string;
  @Input() audioSrc : string;

  public audio:         any;
  public ready:         boolean;
  public playing:       boolean;
  public audioPos:      number;
  public audioDuration: number;

  constructor() {
    this.ready = false;
    this.playing = false;
    this.audioPos = 0;
  }

  ngOnInit(){
    this.audio = new Audio();
    this.audio.src = this.audioSrc;
    this.audio.load();

    this.audio.oncanplaythrough = () => {
      this.ready = true;
      this.audioDuration = this.audio.duration;
    };

    this.audio.ontimeupdate = (event) => {
      this.audioPos = this.audio.currentTime;
    };

    this.audio.onended = () => {
      this.audioPos = 0;
      this.playing = false;
    }
  }

  togglePlay(){
    if(!this.playing){
      this.audio.play();
    } else{
      this.audio.pause();
    }

    this.playing = !this.playing;
  }

}
