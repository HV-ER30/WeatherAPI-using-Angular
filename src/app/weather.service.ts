import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweather(city: string, units: string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c555c6928317fd7a79a8844a54ae8d17&units=' + units);
  }
}
