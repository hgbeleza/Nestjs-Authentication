<h1 align="center">Authentication in Nestjs</h1> 

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project was made following the step-by-step <a href="https://docs.nestjs.com/security/authentication">documentation of NestJS.</a>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Routes
After run the project, the server will running on host `http://localhost:3000`.

### `/auth/signup`
To register the user, use this route. In the request body, you should send a JSON like this:
```json
{
  "username": "user1",
  "email": "example@email.com",
  "password": "yourpassword"
}
```
Alright, the response of the request will return a JSON of the user without the password that was registered, for security reasons.

### `/auth/signin`
Now let's proceed with logging in using the information provided during the registration. This will return a `JWT` (JSON Web Token).
```json
{
  "email": "example@email.com",
  "password": "yourpassword"
}
```
Ex response:
```
{
  access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

## Contributing
All contributions are welcome!
