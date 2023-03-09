const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const ProductsModel = mongoose.model("products", productSchema);
  let data = new ProductsModel({
    name: "Note 1",
    price: 200,
    brand: "Samsung",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", productSchema);
  let data = await Product.updateOne(
    { name: "m8" },
    {
      $set: { price: 700,name:'max 008' }
    }
  );
};

const deleteInDB = async ()=> {
    const Product = mongoose.model("products", productSchema);
    //let data = await Product.deleteMany({name:'max 008'});
    let data = await Product.deleteOne({name:'max 008'});
}

const findInDB = async ()=> {
    const Product = mongoose.model("products", productSchema);
    let data = await Product.find({name:'sam 7'});
    //let data = await Product.find();
    console.log(data)   
}
//saveInDB();
//updateInDB();
//deleteInDB();
findInDB();