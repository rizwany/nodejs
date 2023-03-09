const dbConnection = require("./mongodb");
//const dbConnect = require('./mongodb');

const updateData = async () => {
  let db = await dbConnection();
  let result = await db.updateMany(
    { name: "max 5" },
    {
      $set: {
        name: "max 51",
        brand: "micromax51",
        price: 620,
        category: "mobile",
      },
    }
  );
  if(result.acknowledged){
    console.log("Record Updated!")
}
};

updateData();
console.log("End..");
