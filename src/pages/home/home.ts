import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  city = 'Hulluch';

  constructor(
    public navCtrl: NavController,
    private storage: Storage
  ) {
  }

  ionViewWillEnter () {
    this.storage.get('city').then(city => {
      if (null !== city) {
        this.city = city;
      }
    });
  }

}