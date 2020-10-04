# EAT-DA-BURGER

![License: MIT](https://img.shields.io/badge/license-MIT%20License-blue.svg) ![badge: Made With-JavaScript](https://img.shields.io/badge/Made%20With-JavaScript-Yellow) ![badge: Uses-express-handlebars](https://img.shields.io/badge/Uses-express--handlebars-red) ![badge: Uses-MySQL](https://img.shields.io/badge/Uses-MySQL-orange)

This Heroku DB application wil create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). (It is designed via the MVC design pattern)

Here is the [deployed application](https://nameless-mountain-99722.herokuapp.com/).

## Table of Contents
[Deployed Application](https://github.com/Rogers-Development-Services/EAT-DA-BURGER#deployed-application)

[Installation](https://github.com/Rogers-Development-Services/EAT-DA-BURGER#installation)

[Usage](https://github.com/Rogers-Development-Services/EAT-DA-BURGER#usage)

[Screenshots](https://github.com/Rogers-Development-Services/EAT-DA-BURGER#screenshots)

[Testing](https://github.com/Rogers-Development-Services/EAT-DA-BURGER#testing)

[Future Updates](https://github.com/Rogers-Development-Services/EAT-DA-BURGER#future-updates)

[Questions](https://github.com/Rogers-Development-Services/EAT-DA-BURGER#questions)

[Credits](https://github.com/Rogers-Development-Services/EAT-DA-BURGER#credits)

[License](https://github.com/Rogers-Development-Services/EAT-DA-BURGER#license)

## Deployed Application

Here is an example of our app in action: 

![EAT-DA-BURGER!](./public/assets/img/burger.gif)

## Installation

Download this package, open your command line interface and run npm install. This should install the following dependencies aswell: Express and MySQL. If for some reason, you need to install the dependencies individually run npm install "dependency_name".

Next run the following command to install the app: 

```bash
npm install 
```

```bash
npm install express
```

Note: This app is run on a Heroku server, it is not necessary to download.

## Usage 

If you have downloaded the repository and have cloned the package to your machine, and have installed all dependencies, begin by typing "npm start". 

```bash
npm start 
```

(The following directions apply to running the application on Heroku)

Next, will see two sections on the page divided by the headings "Burgers Available!" and "Burgers Eaten!". If you don't see any specific burgers on the screen you just need to add one! 

Navigate your cursor to the form below "Burger Name", click inside the field and write out your prefered burger. Then click the "Order Burger" Button and you will see it appear underneath the first section "Burgers Available!". 

If you want to devour a burger, simiply click on the "DEVOUR IT!" Button next to the burger name and the burger will move into the eaten category.

Note: When adding burgers, please only add one burger name per each order.

### Screenshots

![Deployed Application](https://user-images.githubusercontent.com/38272211/95003762-5d647f80-0597-11eb-9f07-3575ac4d702b.JPG)

## Testing

Testing Instructions: Currently, there are no written tests for this application, but if you wish to write your, change the scripts property in package json file.

```bash
npm install jest
```

```bash
npm test
```

## Future Updates
This application is a work in progress, future updates will include: 
1. Added CSS styling
2. Add Bootstrap Grid Layout
2. Provide functionality for:
    * Limiting amount of burgers to be ordered
    * Validate characters used for typing burger name to only include upper or lowercase strings with spacing
    * Adding protection of API keys in Node with environment variables
3. General Refactoring

## Questions

Share with us with any comments or questions to help us grow! 

GitHub Profile: 
[Rogers-Development-Services](https://www.github.com/Rogers-Development-Services)
[Portfolio](https://rogers-development-services.github.io/Portfolio/index.html)


Email: 
[matthew.shane.rogers@gmail.com](matthew.shane.rogers@gmail.com)

## Credits

Code template provided by Trilogy Education 

Thanks to [Steven Jirjis](https://www.linkedin.com/in/stevenjirjis/), [Chris Stead](https://github.com/cmstead), and [Andrew Kil](https://github.com/andrew-kil) for troubleshooting and debugging assistance.

## Licenses
Licensed under the MIT License lincense.