# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

In this project,first of all created a Hero interface and array of heroes in mock-heroes.ts file. 
There are 5 components which are heroes,hero-detail,dashboard,hero-search,messages component.
Displaying heroes in the form of list.
Added services to interact with the components.
HeroService will fetch the data synchronously from the mock-heroes.
After importing the HttpClient, HttpClientInMemoryWebApiModule modules.
then, http.get() to fetch the heroes data.
When the HeroService requests heroes from the server, the server will take several minues to respond.
Showing messages.
Then MessageService for sending message to be displayed at the bottom.
Injecting MessageService into the HeroService.
Added navigation.
Get data from a sever using httpClient methods like get(),post() to add a hero,put() for update and delete() for deleting a hero.




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
