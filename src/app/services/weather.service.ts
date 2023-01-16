import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from 'src/environments/environment';

export interface IWeatherData {
  date: string;
  temp: number;
  description: string;
  // main: string;
  pressure: number;
  humidity: number;
}

export interface IWeatherApiComFormat {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: number;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherData: IWeatherData[] = [
    {
      date: "",
      temp: 0,
      description: "",
      // main: "Clear",
      pressure: 0,
      humidity: 0,
    }
  ]
  constructor(
    private http: HttpClient,
  ) {}

  setWeatherData(data: IWeatherData) {
    this.weatherData = [data];
  }

  getWeatherData(city: string) {
    /*
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid${env.openWeatherApiKey}`)
    */
    return this.http.get(
      `http://api.weatherapi.com/v1/current.json?key=${env.weatherApiKey}&q=${city}&aqi=no`
    )
  }
}
