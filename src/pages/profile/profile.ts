import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaylistPage } from '../playlist/playlist';
import { DeezerService } from '../../providers/deezer-service'
/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [ DeezerService ]
})
export class ProfilePage {
  public users: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService) {
    this.users = [];
  }

  ionViewDidLoad() {
    this.ds.getUsers().subscribe( usersIDs => {
      usersIDs.map( userID => {
        this.ds.getUserDetail(userID).subscribe( user => {
          this.users.push(user);          
        });
      });
    });
  }

  goToPlaylist(user){
    this.navCtrl.push(PlaylistPage, {user: user});
  }

}
