import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SongsPage } from '../songs/songs';
import { DeezerService } from '../../providers/deezer-service'

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/merge';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService, 
              public loading: LoadingController) {
    this.user = this.navParams.get('user');
    console.log(this.user);
    this.playlists = [];
  }

  ionViewDidLoad() {
    let loader = this.loading.create();
    loader.present();
    this.ds.getUserPlaylist(this.user.id).subscribe( playlist => {
      this.playlists = playlist.data;
      loader.dismiss();
    });
  }

  goToSongs(playlist){
    this.navCtrl.push(SongsPage , {playlist:playlist});
  }

}
