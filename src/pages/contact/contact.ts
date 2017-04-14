import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) 
  {}

  enviar(){
    let alert = this.alertCtrl.create({
      title: 'Contacto',
      subTitle: 'Su peticion a sido enviada correctamente',
      buttons: ['OK']
    });
    alert.present();
  }
 
}
