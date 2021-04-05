# Pro Shop E-Commerce MERN App

### Technologies 

| ReactJs | Redux |Boostrap|Router|
| --------| ------|--------|------|
|Node|Express|JwToken	|MongoDb|

### Description
This app was built to demostrate a fully fucntional E-commerce app, built using Reactjs, redux for state management, bootstrap for clean and responsive design, server built using node and Express, NoSQL data base with mongodb.

In this app the user can view a carrossel with the top listed products, and a full list of products with limited amount per page and pagination, it includes searching functionality. 
Each products has its own details, reviews and rating.

The user can register using name email and password, and login with email and password validation, giving them access to buy any product as well as leaving a review(limited to one per user per product). 

Payment is processed by paypal API, storing the users shipping address in the db. As a user you can review your orders and order status (payed and if it was shipped) and you can update your user information (name email and password). 

As an admin you can edit products as well as adding new ones. Admin also has a list of all users, and has the ability to delete or edit the users name and email(Not the password)as well as give or remove admin privilege. Admin also has an page that lists all orders and their status(payed and if sent/shipped) and can see the details of the order and marke them as sent(shipped). 

In the back end JsonWebToken is used for user validation and security. It also uses bcrypt for password hashing to guarantee that the users password is anonymous 


### Usage

You can register a new user if you would like or use one of the the following:

> Normal User : pedro@example.com Password : 1234
 
> Admin user : admin@example.com Password : 1234

>Paypal sandbox user : pedro@example.com	Password: 123456789

##### Live version [HERE](https://proshop88.netlify.app/)

##### Link for the back end repo [HERE](https://github.com/Pedro-Goncal/proshop-eCommerce-MERN-api)
#### For more info please visit my [LinkedIn](https://www.linkedin.com/in/pedro-goncalves88/)



Thank you for your support I hope you enjoy this app.