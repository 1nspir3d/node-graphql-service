# Musicify microservices

This application contains multiple services that are used to serve for Musicify App. The follwing microservices exists:

- Albums
- Bands
- Favourites
- Genres
- Tracks
- Users
- Artists

## Prerequisites

1. Install Docker from official [website](https://www.docker.com/products/docker-desktop/). After its installation open Docker and wait for it to start running.
2. Open terminal and execute following commands

```
docker pull mongo
docker run -dp 8080:27017 --name mongo-for-graphql
```

## Installation

1. In each microservice copy and rename env.example to .env
2. If needed apply changes in .env file. Each .env file have _PORT_ variable (by default it's 300${num} in each service)
   and _VERIFY_TOKEN_URL_ (url for jwt verification in Users service)
3. You can install node modules by:

   ```bash
   # separately in each service folder
   npm i

   # separately for each service form the rood directory
   npm run install:%serviceName%

   # for all services (install dependencies for root folder and it will install nested dependencies in postinstall script)
   npm i
   ```

4. To run services:

   ```bash
   # separately in each service folder
   npm run:start:dev

   # separately for each service form the rood directory
   npm run run:%serviceName%

   # all services watch+debug
   npm run run:all:dev

   # all services watch
   npm run run:all

   # all services prod mode
   npm run run:all:prod
   ```

## Working with endpoints which requires authorization

When you successfully created a new user you can login with your credentials to recieve a JWT token.
Right after that you need to setup ```Authorization``` header with it. To do that simple open ```HTTP Headers``` tab at GraphQL playground and set header in format which you can see in following screenshot
![image](https://user-images.githubusercontent.com/62627903/179036056-64f42197-9c9b-4dcd-9f9c-5268efa33d1d.png)

