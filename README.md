# [chess.earth](https://chess.earth)

## 🛠 Installation

First, make sure to have a [Docker](https://docker.com) daemon running.

__Build & launch the project Docker image.__

```shell
docker-compose up # Launch the local server.
open http://localhost:3000
```

## 🏯 Project architecture

```shell
.
├── Dockerfile # Development Docker file.
├── README.md
├── api/ # Fetch & parse content from Contentful API.
├── assets/ # global css / fonts / images...
├── components/ # Page's components.
├── docker-compose.yml
├── heroku.yml # Automatic deployment on Heroku (can specify a Dockerfile).
├── layouts/ # Application Layouts.
├── middleware/ # Pre-requesties for a route change (for exemple: fetching contentful data).
├── node_modules/
├── nuxt.config.js # Global app configuration.
├── package-lock.json
├── package.json
├── pages/ # Pages's entry points.
├── plugins/ # Custom front-end libraries (google-map-api, i18n, animate.css, ...).
├── static/ # Accessible directily.
└── store/ # Data storage and accessors.
```

## 👩‍💻 Everyday actions

```shell
# Launch the services.
docker-compose up # Start.
docker-compose stop # Stop.
docker-compose up -d # Start (deamon).
docker-compose logs -f # Outputs the latest containers logs and follow the log output.
docker-compose run app npm i --save <package-name> # Install a NPM package.
```

## 🥞 Stack

👉 [NuxtJS](https://nuxtjs.org/), the rendering framework.<br/>
👉 [Docker](https://docker.com), the development environment.<br/>
👉 [Heroku](https://dashboard.heroku.com/apps/chess-earth), where the code is hosted.<br/>

## 🏗 Deployments

Every commit on the `master` branch triggers a deployment on [Heroku](https://dashboard.heroku.com/apps/chess-earth).

## 🎳 Developers

- [David Miotti](mailto:david@muxumuxu.com)

---

Made with ❤ by [Muxu.Muxu](https://muxumuxu.com).