import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '@auth0/auth0-angular';
import {WeatherService, IWeatherApiComFormat} from 'src/app/services/weather.service';

interface IGitHubUserData {
  name: string;
  nickname: string;
}

interface IDisplayedUserProfile {
  name: string;
  githubLink: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  githubUserData: IDisplayedUserProfile = {
    name: "",
    githubLink: "",
  }

  weatherForm = this.formBuilder.group({
    city: ["", [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private weather: WeatherService,
    private router: Router,
  ) {
    this.authService.getUser()
      .subscribe({
        next: (data) => {
          const profileData = data as IGitHubUserData;
          this.setGitHubUserData(profileData)
        },
        error: (error) => {
          console.log("error")
          console.log(error)
        },
      })
  }

  setGitHubUserData(data: IGitHubUserData) {
    this.githubUserData.name = String(data?.name);
    this.githubUserData.githubLink = `https://github.com/${String(data?.nickname)}`;
  }

  onSubmit() {
    this.weather.getWeatherData(this.weatherForm.value.city as string)
      .subscribe({
        next: (data) => {
          const result = data as unknown as IWeatherApiComFormat;
          this.weather.setWeatherData({
            date: new Date(result.current.last_updated).toLocaleDateString(),
            temp: result.current.temp_f,
            description: result.current.condition.text,
            // main: "",
            pressure: result.current.pressure_mb,
            humidity: result.current.humidity,
          });
          this.router.navigate(["result"]);
        },
        error: (error) => {
          console.log("weather fetch error:")
          console.log(error);
        }
      })
  }
}
