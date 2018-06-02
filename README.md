# Make a NodeJS rest api [medium clone]

## Why do this tutorial

This tutorial for helping people to make their own rest api and maybe use it as boilerplate

## Features

This rest api gonna be for a Medium like website. This is a simple blog place where people can follow author and create a post. People can like the post and get notification when a user they follow create a new one.

- Authentication local + jwt
- User can create a post
- User can delete is own post and update it
- User can follow an other one
- User get notification on following new post
- User can like a post
- User can see all the post they like


### Starting the Project
run `npm run dev:build`  

run `npm run dev`


### Part 1, Setup the tools

#### To add

- editorconfig
- express
- eslint
- babel
- webpack 2

---

### Part 2, Setup of the middlewares and mongodb


- Add mongoose, body-parser, morgan, compression, helmet
- Setup config folder
- Setup constants

---

### Part 3, Users creation


- Create the user model, controller and routes
- Install robomongo, postman
- Add joi for validation with express-validation

---

### Part 4, Add bcrypt and passport


- Add rimraf and clean dist on webpack build
- Crypt the user password
- Create the localStrategy with passport
- Can log a user

---

### Part 5, Add passport-jwt and send less information about the user


- Create a secret password for the jwt
- Add passport-jwt and create the strategy
- Add jsonswebtoken library
- How can I send less info to the front end ? Like I don't want to send the password

---

### Part 6, Creation of a post

- Create the post model
- Add the user id as the author
- Resolve error I did with joi

---

### Part 7, Get a post by his id


- Create the controller, route
- Add http-status library
- Populate User
- User toAuthJSON vs toJSON

---

### Part 8, Get all posts with a list statics method


- Talk about the repos
- Create the controller
- Create a list statics method on post

---

### Part 9, Update a post if author of it


- Create the route and controller
- Create a validation field

---

### Part 10, Delete a post if author of it

- Create the route and controller
- Show the authorization work
- Add prettier and show the magic :)

---

### Part 11, User can favorite a post if auth + increment the favoriteCount


- Create model methods for both user and post
- Add the increment/decrement statics on post

### Part 12, Send if favorite or not with post for help the life of the front-end


- Make route auth
- Make user method
- Make post controller work with the favorite
