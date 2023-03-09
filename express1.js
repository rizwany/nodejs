const express = require('express')
const dbConnection = require("./mongodb");
const app = express();

app.get('/', async (req,resp) => {
    let db = await dbConnection();
    data = await db.find().toArray();
    console.log(data)
    resp.send(data)
});

app.listen(5000)