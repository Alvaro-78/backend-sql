const express = require ('express');
const cors = require ('cors')
const router = require ('./router');
const db = require ('./db');

const app = express();
const port = 3000;

// Middleware

app.use(express.json());
app.use(cors());
app.use(router);


// Conection to localhost 3000

db.then(() => {
    app.listen(port, () => {
        console.log(`Server app listening at http://localhost:${port}`);   
    });
}).catch((err)=>console.log(err.message));


