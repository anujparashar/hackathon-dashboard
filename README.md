# HackIdeas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## dependencies

Run `npm install` to get dependencies of angular material, bootstrap and font awesome.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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


<!-- ALL THE ASSUMPTIONS MADE WHILE DEVELOPING THIS APPLIACATION -->

<!-- ABOUT THE APPLICATION -->
This application is developed keeping scalibility and reusability in mind. Its Feature includes
1.  "View challenges"
2. "Add Challenges",
3. "Delete Challenges"

feature 1 2 and 3 are meant for the admin users(userid: admin1) while guest user can only access feature 1(userid: candidate1).

# every module structure is setup keeping some standards in mind like you may find 2 folders one as VIEWS and other one as COMPONENTS => views folder is acting as dumb component which can act as placeholdes for all the smart components.

# DUMB COMPONENTS: dont contain much logic , they normally subscribe to data and pass to the smart components
# SMART COMPONENTS: heart of components and much of the logic part will be done on these components only

# No password has been set for any user they simply can login by entering random number

# mock-data folder contains following info:
1. user-data.ts => this file is providing data for authentication purpose
2. challenge-data.ts =>  this file is storing all the data related to challenges whih is acting as our database for now.

# constant folder contains following info
1. challenge-action-config.ts => provides configuration of all the actions that can be performed with an challenge(likes, likes count)
2. dashboard-tab-features.ts =>  whatever tabs(features) we are showing in dashboard, those are controlled by this file constants. In future if we want to add any new feature we can simply add this feature in this file and that tab will automatically be shown in header.

# style.scss is used for setting global css and size as 62.5% to make 1rem = 10px as application standard

<!-- MODULES INFO -->

# authentication module:
This is the very first module which gets loaded when you serve the application

# dashboard module
this is the modules which act as holder of all the other modules as after authentication you will land on this module only.

# view challenge
this is the module which gets loaded for the guest users where users can only see/like challenges

# Challenge-management:
This module is for admin access where admin can add and delete the challenges.

# GUARDS
2 guards have been implemented: 1. AUTH GUARD for authentication 2. manage-challenge-feature guard for guarding admin role functionalities.


<!--  -->
<!-- TEST CASES -->
52 test cases are written (much more are possible but because of time conatraints only this much are done right now)
=> 49 are passing
=> 2 are failing



<!-- END -->