const {MongoClient, Collection} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const databse = 'e-comm';

async function getData(){

    let result = await client.connect();
    let db = result.db(databse);
    let collection = db.collection('products');
    let data = await collection.find({}).toArray();
    console.log(data);
}

getData();
