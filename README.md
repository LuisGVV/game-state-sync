# GameStateSync

This project was created as an excercise on how to structure a simple application that consumes data from a 3rd party library - [Pubnub](https://www.pubnub.com/docs/angular2-javascript/pubnub-javascript-sdk)

This project was generated with:
- [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9
- [Angular](https://v7.angular.io/) version 7.3.9
- [Angular Material v7](https://v7.material.angular.io/)

## Folder structure and navigation

This repo consists of:
  - The application projects component
  - Libraries:
    - core-data - Singleton services, reusable and universal components and other features were there should be only one instance in the app
    - material - A "barrel roll" that consists of all the angular material components

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Improvements and TO-DO's
- Add a nice chart showing centroid
- Add other tabs
- Wire up with another channel from Pubnub?

## Commands ran so far:

1- Creating the core-data library adjacent to the default app project:
> $ `ng g library core-data --entryFile=index`

2- Creating the angular material library to the default app project:
> `$ ng g library core-data --entryFile=index`

3- Install the Angular Material packages (grab 7.3.7, it probably is compatible with angular 7.2)
> `$ npm install --save @angular/material@7.3.7 @angular/cdk@7.3.7 @angular/animations@7.2.16`

4- Create the event service that will subscribe to the game events stream
> `$ ng g service event --flat=false --project=core-data`

5- Create the feature module (which includes routing) and its component
> `$ ng g module events --routing`
> `$ ng g c events`

6- Install `@ngrx/effects`, `@ngrx/entity`, `@ngrx/store` and `@ngrx/store-devtools`
> `$ npm install --save @ngrx/effects@7.4.0, @ngrx/entity@7.4.0, @ngrx/store@7.4.0 @ngrx/store-devtools@7.4.0`


### Tricks, tips and reminders for myself:

Add the flag `--project=project` after every generate angular CLI command in which you want to generate the new files
Use the flag --dryRun=true to check which files will be created for the forementioned command
Use alias in the `tsconfig.json` to shorten import file paths
