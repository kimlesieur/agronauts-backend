# Jason & The Argonauts

This project is a backend API made with Node.js/Express to perform CRUD operations on a PostgreSQL database.

You can find the associated frontend API on this repo :  [Argonauts Frontend](https://github.com/kimlesieur/argonauts-frontend)

## How to run this project ? 

To run the project, clone this repo and the [frontend API](https://github.com/kimlesieur/argonauts-frontend).
    1. Install depedencies with `npm i`
    2. Run both the backend and the frontend with `npm start`. 
    3. Don't forget to customize your environment variables in the .env files !

## Dependencies

- [yup](https://www.npmjs.com/package/yup) : JavaScript data validation.
- [body-parser](https://www.npmjs.com/package/body-parser) : parse incoming request bodies in a middleware
- [cors](https://www.npmjs.com/package/cors) : enable CORS policy
- [dotenv](https://www.npmjs.com/package/dotenv) :  loads environment variables from a `.env` file into `process.env`
- [morgan](https://www.npmjs.com/package/morgan) : HTTP request logger middleware for Node.js
- [pg](https://www.npmjs.com/package/pg) : connection to the PostgreSQL database