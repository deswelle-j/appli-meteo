import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city = 'Hulluch';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {
    this.storage.get('city').then(city => {
      if (null !== city) {
        this.city = city;
      }
    });
  }

  save () {
    this.storage.set('city', this.city);
  }
}