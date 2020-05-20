# Anthem API (unofficial)

## Setup:

- Make sure you have `Git` installed and setup on your system.
- Download `Docker` for your preferred operating system.
- Clone this repository to your computer
- Navigate to the project directory in your terminal and run the following:

  ```
  $ docker-compose up
  ```

  You should see output in the console as the docker images for your database and node API are built and then started.

  The last output you see should say something like

  ```
  Anthem API online. Listening on port 8000
  ```

To test that you can hit the API, open a web browser and navigate to `localhost:800` or use an API tool like `Postman`, or `curl` from your terminal.

You should recieve a message like: "Anthem API"

## Running locally without Docker

```
$ npm i && npm start
```
