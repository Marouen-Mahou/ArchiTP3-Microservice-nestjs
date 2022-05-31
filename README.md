# TP3 Software Architecture
## Microservices

Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are

- Highly maintainable and testable
- Loosely coupled
- Independently deployable
- Organized around business capabilities
- Owned by a small team

The microservice architecture enables the rapid, frequent and reliable delivery of large, complex applications. It also enables an organization to evolve its technology stack.

## Architecture Implemented
In this project we have two main microservices (Planning Microservice & Forecast Microservice) built with Nest.js and connected via TCP.protocole with the security microservice.

![Screenshot](arch.png)

### Forecast Backend
Forecast backend microservice is the buisness layer of the forecast microservice. It communicates with it is own MongoDB database ( Forecast ) to retrive and manipulate data then return it
to the user that requested it. 

### Forcast UI
Forecast UI it is the frontend layer of the forecast microservice. It is only responsiblities is to recive data from the Backend layer and display the data provided
and communicates with the only end point Security microservice to insure the authentification of the service client.

### Planning Backend
Planing backend microservice is the buisness layer of the planning microservice. It communicates with it is own MongoDB database ( Planning ) to retrive and manipulate data then return it
to the user that requested it. 

### Planning UI
Planning UI it is the frontend layer of the forecast microservice. It is only responsiblities is to recive data from the Backend layer and display the data provided
and communicates with the only end point Security microservice to insure the authentification of the service client.

### Security MicroService
Security microservice is the endpoint responsible of routing requests to the right microservice via TCP.protocol provided by nest.js and check the password provided
by  the client to insure the authenticity.

## How to run code
#### Run security microservice
```
cd security 
npm install
npm run start
```

#### Run forecast microservice
```
cd forecast-backend 
npm install
npm run start
```

#### Run planning microservice
```
cd planning-backend 
npm install
npm run start
```

#### Run forecast frontend
```
cd forecast-ui 
npm install
npm run serve
```

#### Run planning frontend
```
cd planning-ui
npm install
npm run serve
```
