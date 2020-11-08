const mongoose =  require("mongoose");

const dbPath = "mongodb://127.0.0.1:27017/Umeed";

mongoose.connect(dbPath,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

db.on("error",()=>{
    console.log("error occured while connecting to db")
});

db.once("open",()=>{
    console.log("> successfully opened the database")
})

module.exports = mongoose;