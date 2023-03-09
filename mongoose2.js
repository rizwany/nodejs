const express = require("express");
const Product = require("./product");
require("./config");

const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  //let result = await data.insertOne();
  console.log(req.body);
  resp.send(result);
});


app.get('/list', async (req,resp) =>{
  let data = await  Product.find();
  resp.send(data);
})

app.delete('/delete/:_id', async (req,resp)=>{
  let data = await Product.deleteOne({id:req.params})
  console.log(req.params)
  resp.send('done');

})

app.put('/update/:_id', async (req, resp)=>{
  let data = await Product.updateOne(
    req.params,
    {
      $set:req.body
    });
})

app.get('/search/:key', async (req,resp)=>{
    console.log(req.params.key)
    let data = await Product.find(
      {
        "$or":[
          {"name":{$regex:req.params.key}},
          {"brand":{$regex:req.params.key}}
        ]
      }
    );
    resp.send(data);
})

app.listen(5000);
