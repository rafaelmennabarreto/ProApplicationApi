# Pro application

This is an API to calculate which project an pro is eligible to work based in some information like education level, past experiences, internet speed and some others.

For develop this application I started using the package by feature folder structure but this didn't seem like a good approach, because if the application grows it will be replicated a lot of code due to the approach of this format, so I decided to separate in two layers, first layer is Application, in this layer are the controllers and routers file, in the second layer has a domain, here has the application core, in this layer has the entities, useCases, interfaces, validators, value objects and custom errors, I think this approach are more scalable and easy to implement new features

## Technologies

|Technology  |version | Description|
|------------|--------|------------|
| NodeJs     |14.16.1 | is a javascript runtime.|
| Typescript |4.2.4   | an javascript superset to add typing to js|
| Express    |4.17.1  | Framework to make web applications using javascript|
| Morgan     |1.10.0  | HTTP request logger middleware for node.js|
| Jest       |26.6.3  | Jest is a JavaScript Testing Framework with a focus on simplicity.|

## Run Application in development mode

  1. clone this repository
  2. open the project folder and run yarn or npm install
  3. in the project folded run command yarn or npm dev
  4. the server will be started in port 3000

## Run Tests

  1. open the project folder and run yarn or npm install
  2. in the project folded run command yarn or npm test
  3. wait test conclusion to see report

## Generate Build

  1. open the project folder and run yarn or npm install
  2. in the project folded run command yarn or npm build
  3. the build was generated into the dist folder.
