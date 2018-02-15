import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WeatherProvider } from '../../providers/weather/weather';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 // http://api.openweathermap.org/data/2.5/weather?q=Lille,fr&appid=6c3ed53824c8e24f514e5cf4e43ee3af
  city;
  weather;

  // api2 = [{name: 'Titi'}, {name: 'Toto'},{name: 'Tata'}];
  // observable = Observable.interval(1000).take(this.api2.length).map(key => this.api2[key]);

  // api = new Observable(observer =>{
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  // });

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    public WeatherProvider: WeatherProvider,
  ) {
  }

  ionViewWillEnter () {
    this.storage.get('city').then(city => {
      if (null !== city) {
        this.city = city;
        this.WeatherProvider.getWeather(this.city).then(result => this.weather = result).catch(() => console.log('rien'));
      }

    });
        // // var subscription = this.api.subscribe(number => console.log(number));
        // var subscription = this.observable.subscribe(number => console.log(number));
    
  }

}