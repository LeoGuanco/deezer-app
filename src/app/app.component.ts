import { Component, ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  rootPage: any;
  public pages: Array<{ title: String, component: any, icon: String }>;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen
              ) {
    this.rootPage = HomePage;

    this.pages = [
      {title: "Inicio",          component: HomePage,    icon: "home"},
      {title: "Perfiles deezer", component: ProfilePage, icon: "person"},
      {title: "Contacto",        component: ContactPage,   icon: "mail"},
      {title: "Acerca de",       component: AboutPage, icon: "information-circle"}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }
}
