# ![mofejeun](static/images/mofejeun_logo.jpg)Mofejeun/"I want to eat"

Mofejeun is a recipe sharing website designed to help users find recipes and share their own with others.

![Multi device mockup](https://user-images.githubusercontent.com/46917417/125065602-e8842000-e0a9-11eb-9040-de66168f53d7.png)

[See live site.](https://mofejeun-app.herokuapp.com/)

## Table of Contents

- **[User Experience](#User-Experience)**
  - [Project Goals](#Project-Goals)
    - [User Stories](#User-Stories)
- **[Design](#Design)**
  - [Fonts](#Fonts)
  - [Colours](#Colours)
  - [Layout](#Layout)
- **[Features](#Features)**
  - [Existing Features](#Existing-Features)
  - [Future Features](Future-Features)
- **[Technologies](#Technologies)**
  - [Site architecture](#Site-architecture)
  - [Languages](#Languages)
  - [Libraries](#Libraries)
  - [Editors](#Editors)
  - [Tools](#Tools)
  - [Platforms](#Platforms)
- **[Testing](#Testing)**
  - [Validation](#Validation)
  - [Manual Testing](#Manual-Testing)
  - [Known Issues](#Known-Issues)
- **[Deployment](#Deployment)**
  - [Database Deployment](#Database-Deployment)
  - [Deployment Platform](#Deployment-Platform)
- **[Credits](#Credits)**
  - [Media](#Media)
  - [Acknowledgements](#Acknowledgements)

## User Experience

### Project Goals

The project goal is to produce a recipe sharing website that allows users to share recipes.

### User Stories

- (US001) - As a site user I want to able to browse through recipes and see ratings given by other users.
- (US002) - As a site user I want to search recipes by name so that I can find specific recipes.
- (US003) - As a site user I want to search and filter recipes by African region to explore new recipes from specific regions.
- (US004) - As a site user I want to be able to select recipes as favourites so that I can quickly access them when revisiting the site at a later date.
- (US005) - As a site user I want to upload my recipes to share with other site users.
- (US006) - As a site user I want to be able to see feedback on my recipes so I can see how much other users liked the recipe.
- (US007) - As a site user I want to be able to edit the recipes I upload to the website to add improvements or correct mistakes.
- (US008) - As a new user I want to be able to register on the site in order to be able to upload my recipes.
- (US009) - As a registered user I want to be able to log in to access the recipes I've uploaded and view any recipes I've added as favourites.
- (US010) - As an admin user I want to be able to edit content to ensure all content uploaded on the site doesn't contain any offensive material.

##  Design

### Fonts

The font used throughout the site is [Judson](https://fonts.google.com/specimen/Judson). This was used as it's a clear and stylish font and was obtained from Google Fonts.

### Colours

Sandy Beach was chosen as it's associated with hot and foreign countries of which the African continent has many such nations. Corvette was used as it's a complementary colour to Sandy Beach.

### ![pallet](https://user-images.githubusercontent.com/46917417/114956465-d3a34200-9e56-11eb-8820-60b325ba3eac.png)

- Sandy Beach (#ffd9b3) - Main site brand colour
- Corvette (#e6ad73) - Complementary colour

### Layout

The site is designed to work and be usable on various devices from mobile phones to desktop computers with a responsive layout. The minimum targeted screen width is 320 pixels wide and a maximum tested width of 2560 pixels.

All initial wireframes are available below:

- [Home Page](https://user-images.githubusercontent.com/46917417/114956660-414f6e00-9e57-11eb-8026-04371aa5ae42.png)
- [Recipe Page](https://user-images.githubusercontent.com/46917417/114956704-51ffe400-9e57-11eb-9968-682fd258a147.png)
- [Search Page](https://user-images.githubusercontent.com/46917417/114956743-67750e00-9e57-11eb-8f8f-519f1dc90a5e.png)

## Features

The site allows users to upload and edit their recipes. Site users can also search for recipes by recipe name or recipe description.

### Existing Features

- (**US001**): On the home page, the user is presented with the first recipe uploads.
- (**US002**): On the home page, there is a search function where users can search for recipes by recipe name and description.
- (**US005, US0008**): Users can register and log into the site and are then able to upload their recipes to the website.
- (**US007**): Users can edit recipes that they have uploaded and other site users are not able to make any amendments.
- (**US009**): Once users are logged in, they can access their profile page which will list the recipes they have uploaded and from which users can edit their recipes.
- (**US010**): The admin user account is able to edit and delete any recipe uploaded on to the site, therefore recipes can be moderated so that nothing can be uploaded which is against site rules.

### Future Features

- (**US003**): An advanced search function where recipes are grouped by African region to allow better user interaction and allow users to browse in a more focused manner.
- (**US004**): A favourite function so that recipes can be favourited by users so that users can go back to their profiles to quickly access recipes in more detail that drew their attention.
- (**US006**): A rating and comments system so that users can rate and leave comments and reviews on the uploaded recipes. This will improve interaction with the site and provide a much improved user experience.
- (**US007**): Add a confirmation protocol for deletion of recipes by users to avoid accidental deletion.
- (**US005**): Provide a more user friendly input method for the recipe ingredients and recipe steps. I would utilise a way to list out the individual ingredients and steps to provide an enhanced user experience.
- (**US001**): Incorporate functional pagination to improve the user experience of browsing through and searching for recipes.

## Technologies

### Site architecture

<summary>The site uses a python server backend and Mongodb database. Server code is implemented in the following files:</summary>

- app.py
  - Main server code. Flask initialisation, database interface, and server routes.

<details>
<summary>Front end HTML is generated by the following Jinja templates:</summary>

- base.html
  - Defines the main site structure and navigation. All other templates extend this one.
- home.html
  - Generates the main landing page.
- login.html
  - Generates the login page. Performs user login..
- register.html
  - Generates the register page. Performs user registration.
- recipe.html
  - Generate individual recipe page.
- add_recipe.html
  - Generates the add recipe page.
- edit_recipe.html
  - Generates the edit recipe page.
- user_profile.html
  - Generates the user profile page.


</details>

<summary>Pages are styled through the following css file:</summary>

- style.css
  - Defines global styles used by all pages.

<summary>The site also uses the following JavaScript file for dynamic functionality:</summary>

- script.js
  - Code used by all pages.
    - Initialises materialize components.

### Languages

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
  - Used to create the site layout.
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - Used to style and colour HTML.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - Used to create the site's dynamic elements.
- [Python](https://www.python.org/)
  - Used for the backend server and running queries to the database.
- [Jinja](https://jinja.palletsprojects.com/en/2.11.x/)
  - Used to generate and manipulate the site templates.

### Libraries

- [Flask](https://flask.palletsprojects.com/en/1.1.x/)
    - The project uses the Flask micro-web framework to perform web server tasks.
- [Wekzeug](https://palletsprojects.com/p/werkzeug/)
    - The project uses the Werkzeug WSGI library to manage the Web Server Gateway Interface and related tasks.
- [JQuery](https://jquery.com)
    - The project uses JQuery for DOM manipulation.
- [Materialize](https://materializecss.com/)
    - The project uses Materialize to aid in responsive design.

### Editors

- [Balsamic](https://balsamiq.com/)
  - Used to create the website's wireframes.

### Tools

- [Git](https://git-scm.com/)
  - Used for version control (via github desktop).
- [Github desktop](https://desktop.github.com/)
  - Used to push updates and synchronise local code with the remote repository.
- [Github](https://github.com/)
  - Used to store the project repository and deploy the site via github pages.
- [MongoDB](https://www.mongodb.com/3)
  - Used for the backend database.

### Platforms

- [Heroku](https://www.heroku.com/platform)
  - The project uses Heroku as it's deployment platform.

## Testing

### Validation

- [HTML](https://user-images.githubusercontent.com/46917417/117382931-7dff0a00-aed7-11eb-9833-56752e4f4c59.png)
There is a header within the html section within the jinja code.

- [CSS](https://user-images.githubusercontent.com/46917417/117435117-664e7280-af25-11eb-9066-a58d6199e9c3.png)
No issues found.

- [Python](https://user-images.githubusercontent.com/46917417/125053656-4a8a5880-e09d-11eb-911f-0277a417414a.png)
No issues found.

### Manual Testing
- [Attempted to login with the incorrect password](https://user-images.githubusercontent.com/46917417/125058509-401e8d80-e0a2-11eb-88d3-4c63e65d1223.png) - error message successfully shows up.
- [Attempted to register an account on the website](https://user-images.githubusercontent.com/46917417/125058838-8ffd5480-e0a2-11eb-8af7-395e1bd1ce8f.png) - successfully registered and taken to the profile page.
- [Tested to see if admin is able to edit or delete recipes not made by the admin](https://user-images.githubusercontent.com/46917417/125059065-d783e080-e0a2-11eb-8091-38009c8ec3cd.png) - option to edit or delete recipes is available as admin.
- [Tested to see if recipe can be deleted](https://user-images.githubusercontent.com/46917417/125059359-25004d80-e0a3-11eb-950a-21306ef1fe72.png) - successfully executed
- [Test recipe before editing.](https://user-images.githubusercontent.com/46917417/125059634-71e42400-e0a3-11eb-9d1c-aa1b2bad5459.png) [Tested to see whether i could edit this test recipe](https://user-images.githubusercontent.com/46917417/125060129-f20a8980-e0a3-11eb-8088-346337f04256.png) - successfully executed
- [Tested to see whether I can add blank recipes to website](https://user-images.githubusercontent.com/46917417/125061692-81646c80-e0a5-11eb-83d9-f8c172bf11e4.png) - not able to us fields are required to be filled. I went through each instance leaving each field empty in turn to see whether I could enter a recipe with even just one blank field and wasn't able to and got the "Please fill in this field message" instead of the recipe being added.
- [Tested to see whether I can log out of an account](https://user-images.githubusercontent.com/46917417/125064786-eb324580-e0a8-11eb-916d-91f62eff7912.png) - sucessfully executed

### Known Issues
- Needs pagination functionality to work effectively.

## Deployment

### Database Deployment

The site uses a Mongodb database for data storage and retrieval.

#### Connecting to Mongodb

From the CLI:

`mongo "mongodb<url connection string>" --username root`

Input the root password when prompted

#### Creating or selecting a database

From the MongoDB CLI:

`use <database>`

#### Creating a collection

From the MongoDB CLI:

`db.<collection>.insert(<document>)`

#### Adding an index

From the MongoDB CLI:

`db.<collection>.createIndex({<fields>:<type>}{<options>})`

### Deployment Platform

The site is deployed to Heroku at: https://mofejeun-app.herokuapp.com/

#### Creating a Heroku app

<details>
<summary>From the Heroku dashboard:</summary>

- Select "New"

  - Select "Create new app" 

  ![Create Heroku app step one](dev/images/docs/new_heroku_app.png)

- Add new app details to form

  - Add app name
  - Select region
  - Click create app

  ![Create Heroku app step 2](dev/images/docs/new_heroku_app2.png)
</details>

#### Setting Environment variables

<details>
<summary>From the Heroku dashboard:</summary>

- Select the app from the list

  ![Environment Variables1](dev/images/docs/environment_variables1.png)

- Select "Settings" from the menu

  - From the settings menu select "Reveal Config Vars"
  - Add environment variables in key value pairs
  - Click "Add" to add each key/value pair
</details>

#### Deployment
<details>
<summary>Creating the required deployment files in the repository:</summary>

- requirements.txt
  - Lists the required python modules for Heroku to install on deployment.
  - To create
    - from the project root directory type:
    - pip freeze > requirements.txt
- Procfile
  - Tells heroku what command to use to start the app.
  - To create
    - Type the following command into the project root directory:
    - echo web: python app.py > Procfile
- slugignore (optional)
  - Lists files and directories that shouldn't be deployed to the live app, like testing and development files. Uses a similar syntax to .gitignore.
  - Create a text file.
    - List the files and directories to be excluded from the live deployment
    - Save to the project root directory as ".slugignore"
</details>

<details>
<summary>From the Heroku dashboard:</summary>

- Select the app from the list

- Select "Deploy" from the menu

- Connect app to github

  - Scroll to the "Connect to GitHub" section
  - Select github user
  - Add repo name and select search
  - Click connect button next to repository name

  ![heroku connect to github](dev/images/docs/heroku_connect_github.png)

- Manual deployment

  - Scroll to the "Manual deploy" section
  - Select the deployment branch
  - Select "Deploy Branch"

  ![heroku manual deploy](dev/images/docs/heroku_manual_deploy.png)
</details>

#### Automatic Deployment

<details>
<summary>From the Heroku dashboard:</summary>

- Select the app from the list

- Select "Deploy" from the menu

- Ensure app is connected to github repository

- Enable automatic deployment

  - Scroll to Automatic deployment
  - Select the deployment branch "Choose a branch to deploy" dropdown
    - This will usually be the main branch
  - Select "Enable Automatic Deploys"

  ![heroku automatic deploy](dev/images/docs/heroku_automatic_deploy.png)
</details>

## Credits

### Media
- [Africa travel map, decorative symbol of Africa continent with wild animals silhouettes](https://www.shutterstock.com/image-vector/africa-travel-map-decorative-symbol-continent-644884147) by [baldyrgan](https://www.shutterstock.com/g/baldyrgan)
- [West Africa Rice Jollof with Boiled Egg and Beef](https://www.shutterstock.com/image-photo/west-africa-rice-jollof-boiled-egg-1282284820) by [Linda Hughes Photography](https://www.shutterstock.com/g/lindahughesphotography)
- [Street Food Grilled Bananas in Uganda](https://www.shutterstock.com/image-photo/street-food-grilled-bananas-uganda-577629280) by [Nickolas warner](https://www.shutterstock.com/g/Nickolas+warner)

### Acknowledgements
- Assistance and guidance from my mentor Dick Vlaanderen
- Assistance from Code Institute tutors