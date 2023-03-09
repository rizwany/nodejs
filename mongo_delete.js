const dbConnection = require("./mongodb");
//const dbConnect = require('./mongodb');

const updateData = async () => {
  let db = await dbConnection();
 // let result = await db.deleteMany(
  let result = await db.deleteOne(
    { name: "max 7" },
  );
  if(result.acknowledged > 0){
    console.log("Record Deleted!")
  }
  else{
    console.log("Nothing deeted!")
  }
};

updateData();
console.log("End..");
