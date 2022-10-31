import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { IcurrentWeather } from '../icurrent-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

 current : IcurrentWeather; 
  constructor(private weatherService : WeatherService) {
    this.current = {
      city : '',
      country : '',
      description : '',
      temperature : 0,
      date : new Date(),
      image :''
    }
   }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Redmond', 'US')
    .subscribe(data => this.current = data);
  }

}
