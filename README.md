# Sample Weather App Installation

## Prerequisites
 - [Setup Angular](https://angular.io/guide/setup-local) development environment
 - An [Auth0](https://auth0.com/) account

## Setup Angular Project
Paste the following commands in your terminal:
```sh
git clone https://github.com/kurtdescalso/weather-app
cd weather-app
npm install
```

## Setup Auth0
 - Sign in to [Auth0](https://auth0.com/)
 - Create an **SPA Application** (Angular) in the  Auth0 dashboard
 - **Keep a copy** of your newly created app's **Domain** key, **Client ID**, and **Client Secret**
 - Paste the **Domain** and **Client ID** into their respective fields in _src/environments/environment.ts_

 - Add GitHub Integration:
     - Go to: https://marketplace.auth0.com/integrations/github-social-connection
     - Under Permissions, check ___read:user___
     - Select your Angular App that will use the GitHub integration
     - In the bottom-left corner popup, click the forward button until you find a link to sign up for a GitHub developer account and open the link
     - Sign in to GitHub
     - Click the _"Register a new application"_ button
     - Fill out the necessary information:

    | Field | Value |
    | ----- | ----- |
    | Homepage URL | https://<YOUR DOMAIN> |
    | Authorization callback URL | https://<YOUR DOMAIN>/login/callback |
    
 - Provide your GitHub app **Client ID** and **Secret** to Auth0 GitHub integration page and Save
 - Set the Application URIs to the following:

    | Field | Value |
    | ----- | ----- |
    | Application Login URI | http://<YOUR DOMAIN>/login |
    | Allowed Callback URLs | https://<YOUR DOMAIN>, https://<YOUR DOMAIN>/home, http://localhost:4200, http://localhost:4200/home, http://localhost:4200/home/ |
    | Allowed Logout URLs | https://<YOUR DOMAIN>/logout |
    | Allowed Web Origins | https://<YOUR DOMAIN>, http://localhost:4200 |


## Setup WeatherAPI
 - Create an account with [WeatherAPI](https://www.weatherapi.com/)
 - Paste your **API key** into the 'src/environments/environment.ts' file's **weatherApiKey** field

### Run the application
Test the app by running the following in the project directory:

```sh
ng serve
```
