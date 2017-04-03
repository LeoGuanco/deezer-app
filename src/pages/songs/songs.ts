import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeezerService } from '../../providers/deezer-service'
/*
  Generated class for the Songs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html',
  providers: [ DeezerService ]
})
export class SongsPage {
  public playlist : any;
  public songs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService) {
    this.playlist = navParams.get('playlist');
    this.songs = [];
  }

  ionViewDidLoad() {
    this.ds.getPlaylistSongs(this.playlist.id).subscribe( song => {
      this.songs = song.data;
    })
  }

}
