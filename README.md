# Movies Explorer App (back-end)

### *Educational purpose project from [Яндекс.Практикум](https://practicum.yandex.ru/web/)*


This project includes [backend](https://github.com/letStayFoolish/movies-explorer-api) part as a server-side for front-end app [movies-explorer-frontend](https://github.com/letStayFoolish/movies-explorer-frontend).

## Functionality

### Client
- Create new user
- Login with registered user
- Update user's information (name, email)
- Logout

### Movies 
- Add movie/s to favorites
- Read movies from user's favorites
- Remove movie/s from favorite list


[//]: # (## Screenshots)

[//]: # (<img src="./backend/assets/screen-new-02.png" width="100%">)

[//]: # (<details><summary><b>Show all</b></summary>)

[//]: # (<img src="./frontend/src/images/SIGN_UP.png" width="100%">)

[//]: # (<img src="./frontend/src/images/LOG_IN.png" width="100%">)

[//]: # (<img src="./frontend/src/images/wallpapers/SUCCESS.png" width="100%">)

[//]: # (<img src="./frontend/src/images/wallpapers/FAIL.png" width="100%">)

[//]: # (<img src="./frontend/src/images/wallpapers/main-popup_1280.png" width="100%">)

[//]: # (<img src="./frontend/src/images/wallpapers/screen-mobile-01.png" width="49.6%">)

[//]: # (<img src="./frontend/src/images/wallpapers/screen-mobile-02.png" width="49.6%">)

[//]: # (</details>)

[//]: # ()
[//]: # (<hr>)

## Technologies:
### Backend:

- Node.js;
- Express
- MongoDB
- mongoose
- JWT in cookie,
- Nginx
- pm2
- Celebrate
- Winston
- Jest\* (request testing, backend side)


## Connections

### Server

IP 84.201.158.81  
Frontend: https://more-movies.nomoredom.nomoredomainsicu.ru <br>
Backend: https://api.more-movies.nomoredomainsicu.ru <br>

### Local

[//]: # (Frontend: http://localhost:3000 <br>)
Backend: http://localhost:3000 <br>


## How to install and run locally

It may happen that Mesto can not be available due to hosting expiration. You have ability to download and run this app\repo locally.  
So, if you don't want to deploy this app locally, you can also check frontend part using [Mesto frontend](https://github.com/letStayFoolish/react-mesto-auth)

## Usage

### Backend

* Settings for backend. All commands are located in package.json:

Clone repository:

    git clone https://github.com/letStayFoolish/movies-explorer-api/
You can do it just by click [here](https://github.com/letStayFoolish/movies-explorer-api/).

Install dependencies:

    npm install

Run app:

`npm run start` — start server    
`npm run dev` — start server hot-reload


### Directories

`/routes` - folder with routes files

`/controllers` - folder with controllers files (users & cards)

`/models` - folder with schemas (users & cards)

`/middlewares` - middleware functions are used to perform tasks that occur in between receiving a request and sending a response

`utils`  - used to store utility functions and modules that are used across different parts of the application.


## Project's checklists:

- [Checklist](https://code.s3.yandex.net/web-developer/static/new-program/web-diploma-criteria-2.0/index.html#backend).


## License

````
This project is licensed under the Yandex Practicum License.
````
<hr>

Copyright (c) _2023_ _Nemanja Karaklajic_
