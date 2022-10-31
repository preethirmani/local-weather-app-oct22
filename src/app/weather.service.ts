import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IcurrentWeatherData } from './icurrent-weather-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient : HttpClient) { }

  getCurrentWeather(search : string | number, country?: string){

    let uriParams = ''
    if(typeof(search) == 'string') {
      uriParams = `q= ${search}`

    } else {
       uriParams = `zip= ${search}`
    }

    if(country) {
      uriParams = `${uriParams},${country}`
    }

    return this.httpClient.get<IcurrentWeatherData>(`https://api.openweathermap.org/data/2.5/weather?${uriParams}&appid=${environment.appId}`).pipe(map(data => this.transformToIcurrentWeatherData(data)));
  }

  transformToIcurrentWeatherData(data:IcurrentWeatherData) {
    return {
      city : data.name,
      country : data.sys.country,
      temperature : data.main.temp * 9/5 - 459.67,
      date : new Date(data.dt * 1000),
      image : `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      description : data.weather[0].description
    }
  }
}
