import {Component} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

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

  constructor(
    private authService: AuthService,
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

  getWeatherData() {

  }
}
