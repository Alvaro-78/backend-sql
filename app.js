const express = require ('express');
//const router = require ('./router');
const db = require ('./db');

const app = express();
const port = 3000;

// Middleware

app.use(express.json());
//app.use(router);

// Conection to localhost 3000

db.then(() => {
    app.listen(port, () => {
        console.log(`Server app listening at http://localhost:${port}`);   
    });
}).catch(console.log(`Error to conection to http://localhost:${port}`));


