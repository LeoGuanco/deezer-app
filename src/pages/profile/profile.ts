import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PlaylistPage } from '../playlist/playlist';
import { DeezerService } from '../../providers/deezer-service';

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
  public loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService,
              public loading: LoadingController) {
    this.users = [];
    this.loader = this.loading.create();
  }

  ionViewDidLoad() {
    this.loader.present();

    this.ds.getUsers().subscribe( usersIDs => {
      /*usersIDs.map( userID => {
        this.ds.getUserDetail(userID).subscribe( user => {
          this.users.push(user);          
        });
      });*/

      let sources = usersIDs.map( userID => this.ds.getUserDetail(userID));
      Observable.merge(...sources).subscribe(
        data => this.users.push(data),
        error => console.log(error),
        () => this.loader.dismiss()
      );
    });
  }

  goToPlaylist(user){
    this.navCtrl.push(PlaylistPage, {user: user});
  }

}
