const express = require("express");
const dbConnection = require("./mongodb");
const mongodb = require('mongodb')
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let db = await dbConnection();
  let data = await db.find().toArray();
  resp.send(data);
});

app.post("/", async (req, resp) => {
  let db = await dbConnection();
  let result = await db.insertOne(req.body);
  //console.log("sss" + req.body);
  resp.send(result);
});

app.put('/:name', async (req,resp) =>{
    let data = await dbConnection()
    let result = await data.updateOne(
        // {name:"max 6"},
        {name:req.params.name},
        { $set: req.body}
        // {$set:{
        //     "name": "Android 2",
        //     "brand": "Android",
        //     "price": 333,
        //     "category": "mobile"
        //     }
         
    ) 
    //console.log(req.body);
    resp.send({result:"updated"})
})

app.delete('/:id', async (req, resp)=>{
    const data = await dbConnection()
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result)
});

app.listen(4300);
