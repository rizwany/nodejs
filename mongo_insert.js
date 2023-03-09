const dbConnection = require('./mongodb');
//const dbConnect = require('./mongodb');

const insertData = async ()=>{
const db = await dbConnection();
//console.log(db)
const result = await db.insertMany(
        [
            {name:'max 6',brand:'micromax',price:420,category:'mobile'},
            {name:'max 7',brand:'micromax',price:520,category:'mobile'},
            {name:'max 8',brand:'micromax',price:620,category:'mobile'}
        ]   
    );
    if(result.acknowledged){
        console.log("Records Saved!")
    }
    
}
insertData();
console.log("End..")