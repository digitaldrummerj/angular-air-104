# Angular Air Episode 104 Demo

Code that I demoed during the recording of Angular Air Episode 104

## Run locally

1. Clone repo
1. If you don't already have sails and grunt-cli npm modules globally installed, open command prompt and run

    ```bash
    npm install -g sails grunt-cli
    ```
1. Open command prompt, navigate to this directory and run

    ```bash
    npm install
    ```

1. This demo uses Postgres for the ShowWithModelController.  Either create the local.js file below with the correct url for Postgres or open the api\models\ShowWithModel and comment out the connection property.

    ```JavaScript
    module.exports = {
        postgres: {
         url: '',
        },
    };
    ```
1. From the command prompt in this directory, start the application by running

    ```bash
    sails lift
    ```

## Postman

If you are using Postman to play with the API, I have exported my collections I used on the show to the postman directory.