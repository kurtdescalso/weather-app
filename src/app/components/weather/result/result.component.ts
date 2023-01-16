import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {WeatherService} from 'src/app/services/weather.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  displayedColumns = [
    "date",
    "temp",
    "description",
    // "main",
    "pressure",
    "humidity",
  ]

  constructor(
    public weather: WeatherService,
    private router: Router,
  ) {}

  goBack() {
    this.router.navigate(["home"]);
  }
}
