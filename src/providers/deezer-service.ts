import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DeezerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DeezerService {
  public deezerAPI: string;

  constructor(public http: Http) {
    //this.deezerAPI = "https://api.deezer.com/";
    this.deezerAPI = "/deezerAPI/";
  }

  getUsers(){
    return this.http.get('https://api.myjson.com/bins/mcjrb')
    .map( res => res.json());
    
  }

  getUserDetail(userID){
    return this.http.get(this.deezerAPI + "user/" + userID)
    .map( res => res.json());
  }

  getUserPlaylist(userID){
    return this.http.get(this.deezerAPI + "user/" + userID + "/playlists")
    .map( res => res.json());
  }

  getPlaylistSongs(playlistID){
    return this.http.get(this.deezerAPI + "playlist/" + playlistID + "/tracks")
    .map( res => res.json());
  }
}
