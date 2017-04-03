import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SongsPage } from '../songs/songs';
import { DeezerService } from '../../providers/deezer-service'
/*
  Generated class for the Playlist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
  providers: [ DeezerService ]
})
export class PlaylistPage {
  public user: any;
  public playlists: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService) {
    this.user = this.navParams.get('user');
    console.log(this.user);
    this.playlists = [];
  }

  ionViewDidLoad() {
    this.ds.getUserPlaylist(this.user.id).subscribe( playlist => {
      this.playlists = playlist.data;
      console.log(playlist);
    });
  }

  goToSongs(playlist){
    this.navCtrl.push(SongsPage , {playlist:playlist});
  }

}
