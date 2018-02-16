import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherProvider {

  apiKey = '6c3ed53824c8e24f514e5cf4e43ee3af';
  
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }
  getWeather (city){
    // http://api.openweathermap.org/data/2.5/weather?q=Lille,fr&appid=6c3ed53824c8e24f514e5cf4e43ee3af
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +',fr&lang=fr&appid='+this.apiKey)
    .toPromise();
  }

}
