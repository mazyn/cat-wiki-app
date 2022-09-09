<!-- Please update value in the {}  -->

<h1 align="center">The CatWiki App :octocat:</h1>

<div align="center">
   Solution for the CatWiki challenge from <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://cat-wiki-mazyn.herokuapp.com">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/mazyn/cat-wiki-app">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/f4NJ53rcfgrP6sBMD2jt">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
  - [Cloning the repos](#cloning-the-repos)
  - [Installing dependencies](#installing-dependencies)
  - [Configuring your environment](#configuring-your-environment)
  - [Running the API](#running-the-api)
  - [Running the app](#running-the-app)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

<figure>

![screenshot](https://i.imgur.com/J49uVwt.png)

<p align="center">
  <i>Device Mockup created from <a href="https://deviceframes.com/templates/iphone-13">iPhone mockups</a></i>
</p>

</figure>

---

The CatWiki let's you search for information and pictures of your favourite cat breed! 🐱 Learn more about their personality, origin, life-span, and much more! You can see the working demo [here](https://cat-wiki-mazyn.herokuapp.com).

I built this project using **Angular**, a technology that I've worked with since 2018. I also used **Nest**, which is an incredible framework I've been wanting to use for a long time! I've also learned a lot about **Tailwind**, my new favourite CSS framework to work on modern applications!

Overall, it was a pretty fun project to work on. I've learned a lot and revisited a bunch of technologies that I usually don't work with on a daily-basis. It was an excellent challenge proposed by the [Devchallenges.io](https://devchallenges.io) team!

Also, I'm cat lover, onwer of 4 cats 🤎

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- <img src="https://angular.io/assets/images/favicons/favicon.ico" alt="Angular logo" width="14" height="14" /> [Angular](https://angular.io)
- <img src="https://camo.githubusercontent.com/37368c07ba573d5b2ecc8b6b724e847541a281c0fc135ee41fdd4aae61cda243/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f642f64352f5461696c77696e645f4353535f4c6f676f2e737667" alt="Tailwind logo" width="14" height="14" /> [Tailwind](https://tailwindcss.com)
- <img src="https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae" alt="TypeScript logo" width="14" height="14" /> [TypeScript](https://www.typescriptlang.org)
- <img src="https://nestjs.com/apple-touch-icon.50147714.png" alt="Nest logo" width="14" height="14" /> [Nest](https://nestjs.com)
- <img src="https://expressjs.com/images/favicon.png" alt="Express logo" width="14" height="14" /> [Express](https://expressjs.com)
- <img src="https://www.prisma.io/images/favicon-16x16.png" alt="Prisma logo" width="14" height="14" /> [Prisma](https://www.prisma.io)
- <img src="https://www.postgresql.org/favicon.ico" alt="PostgreSQL logo"  width="14" height="14" /> [PostgreSQL](https://www.postgresql.org)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/f4NJ53rcfgrP6sBMD2jt) was to build an application to complete the given user stories:

* 🔍 Search for cat breeds and select a breed of your choice
* 🥳 See the most popular searched cat breeds summary on the homepage
* 🔟 See the top 10 most searched cat breeds
* 📊 See the breed details including description, temperament, origin, life span, adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly
* 📸 See photos of the breeds
* 📱 On mobile, when the user selects the search option, a modal for breed search should pop up
* 🔗 Go to an article about cats when clicking on read more on "Why you should have a cat" section
* ➡️ Go to the top 10 cats by clicking "see more" in the dashboard

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download) (which comes with [npm](http://npmjs.com)) installed on your computer.

> 🧶 Regarding the package manager
> 
> For better compatibility, we recommend using [yarn](https://yarnpkg.com) as your main package manager, since the project was built using it. You can try running the project with _npm_, and it will probably run fine. But beware that there might be bugs or unexpected behaviours in the application.

### Cloning the repos

From your command line:
```bash
# Clone the cat wiki api repository
$ git clone https://github.com/mazyn/cat-wiki-api

# Then, clone this repository
$ git clone https://github.com/mazyn/cat-wiki-app
```

### Installing dependencies

After that, CD into the api folder, then install the dependencies by running:
```bash
$ yarn
```

Or with npm
```bash
$ npm install
```

### Configuring your environment

Next, you should configure an `.env` file, using the pre-existing [`.env.example`](https://github.com/mazyn/cat-wiki-api/blob/master/.env.example) file in the project as a template. If you want to know more about dotenv files, you can read this [article](https://www.codementor.io/@parthibakumarmurugesan/what-is-env-how-to-set-up-and-run-a-env-file-in-node-1pnyxw9yxj) about it.

Be aware that you'll need a [PostgreSQL](https://www.postgresql.org) instance running on your local machine, or on [Docker](https://www.docker.com), for the API to run properly. After that, you'll just need to set the DATABASE_URL in the `.env` file.

**You'll also need an API key from the https://thecatapi.com, so make sure to go there and get your key!**

### Running the API

To run the app, first start the API service on _development_ mode. This will start the service listening on **PORT** `8080` _(you can change this in the `.env` file)_:
```bash
$ yarn run start:dev
```

You should see an output similar to this:
```
[3:54:26 PM] Starting compilation in watch mode...

[3:54:28 PM] Found 0 errors. Watching for file changes.

[Nest] 217982  - 08/30/2022, 3:54:29 PM     LOG [NestFactory] Starting Nest application...
...
[Nest] 217982  - 08/30/2022, 3:54:29 PM     LOG [Bootstrap] Environment: DEVELOPMENT
...
[Nest] 217982  - 08/30/2022, 3:54:29 PM     LOG [Bootstrap] 🚀 Server ready at http://0.0.0.0:8080
```

### Running the app

Lastly, to run the app, CD into the `cat-wiki-app` folder. Then, edit the `src/environments/environment.ts` file, and replace the `catApiUrl` property with the url of the API you just started. Like so:

```js
  catApiUrl: "http://localhost:8080/v1" // don't forget to add the "/v1" at the end!
```

Install the app dependencies:
```bash
$ yarn
```

Then, just run the app 😉
```bash
$ yarn start
```

You should see an output like the following:
```
** Angular Live Development Server is listening on 0.0.0.0:4200, open your browser on http://localhost:4200/ **


✔ Compiled successfully.
```

That's it! Now you have the CatWiki App running locally on your machine! 🥳

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [Node.js](https://nodejs.org/)
- [Chalk](https://www.npmjs.com/package/chalk), for adding colourful logs
- [lodash](https://www.npmjs.com/package/lodash), for making array mutations easy
- [Angular Universal](https://github.com/angular/universal), for SSR
- [Swiper](https://www.npmjs.com/package/swiper), for photo gallery
- [@ng-select](https://www.npmjs.com/package/@ng-select/ng-select), for easy management of select dropdowns
- [aos](https://github.com/michalsnik/aos), for incredible on-scroll animations

## Contact

- LinkedIn https://www.linkedin.com/in/gilmar-alves-filho-46bb40164
- GitHub [@mazyn](https://github.com/mazyn)

If you wanna help me, you can [buy me a coffee!](https://www.buymeacoffee.com/gilmar.filho) ☕
