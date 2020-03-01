# GameStateSync

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9 and uses [Angular Material v7](https://v7.material.angular.io/)

## Folder structure and navigation

This repo consists of:
  - The application project
  - Libraries:
    - core-data - Singleton services, reusable and universal components and other features were there should be only one instance in the app
    - material - A "barrel roll" that consists of all the angular material components

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Commands ran so far:

1- Creating the core-data library adjacent to the default app project:
  > $ ng g library core-data --entryFile=index

2- Creating the angular material library to the default app project:
  > `$ ng g library core-data --entryFile=index`

3- Install the Angular Material packages (grab 7.3.7, it probably is compatible with angular 7.2)
  > `$ npm install --save @angular/material@7.3.7 @angular/cdk@7.3.7 @angular/animations@7.2.16`


Tricks, tips and remember: 

Add the flag `--project=project` after every generate angular CLI command in which you want to generate the new files
Use the flag --dryRun=true to check which files will be created for the forementioned command
