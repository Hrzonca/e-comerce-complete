# e-comerce-complete

## Decription 
This application is the backend for an e-commerce site. This back end was set up using node, sequalize, express and dotenv files. The user is able to change the url to display the caetegories the user chooses. They are also able to create, update and delete categories, products and tags. 
Below are the requirements of the application: 

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation 
npm init -y

npm i mysql2

npm i sequelize

npm dotenv

## Usage
Run the below commands and answer the questions
mysql -u root -p

after entering the password, enter:

source db/schema.sql;

quit

npm run seed

npm start

## Walk-through
The GET routes for categories, products, and tags
![GET video](https://drive.google.com/file/d/1dWyQ0zWFsx7qeuASxU4u60M8-7jUV5js/view)

The POST, PUT, and DELETE routes for categories, products, and tags.
![POST, PUT, DELETE](https://drive.google.com/file/d/1zWaDsxn3jZTp70zDpXCy0bQr7QabzZci/view)
## Questions 
Contact me with any questions: [link text](hgielah@gmail.com), [link text](https://github.com/Hrzonca)
 