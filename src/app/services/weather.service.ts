import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) {}

  getWeatherData(city: string) {
    return this.http.get(`${env.openWeatherApiKey}`)
  }
}
