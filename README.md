# Project Title

## Jobify

## Description

Jobify is a web application that enables users to manage their job listings and track their job search progress. The application is built using a React front-end and a Node.js back-end. With Jobify, users can create an account and log in to access their job listings.

Using Jobify, users can add details about their job listings such as the job title, location,whether the job is remote or not and etc. The application makes it easy for users to track the progress of their job search by allowing them to mark jobs as applied, interview scheduled, or rejected.

Overall, Jobify is a valuable tool for anyone who is actively looking for a job or wants to keep track of their job search progress. It provides a simple and intuitive interface for managing job listings and offers valuable insights into the progress of the job search..

## Used Technologies

In this build, I used React Node.js, Express.js, MongoDB, Mongoose, TypeScript, Morgan, Dotenv, Cookie-parser, JSON Web Token (JWT), bcrypt, Axios and etc.

## How to install

Download and run npm install, then create a .env file at the root of the project and set the following environment variables:

```bash
PORT=
MONGO_URI=
JWT_SECRET=
JWT_LIFETIME=
```

Mongo uri example:

```bash
MONGO_URI=mongodb+srv://giorgi:yourClusterPassword@yourClusterName.zi9vxpj.mongodb.net/yourDatabaseName?retryWrites=true&w=majority
```

then run npm start.

### Test user

| Email      | Password          |
| :--------- | :---------------- |
| `email`    | johnDoe@gmail.com |
| `password` | secret            |
