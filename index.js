
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config();
const express=require('express')

const { MongoClient, ServerApiVersion } = require('mongodb');
const Port=process.env.PORT;
const app=express();
app.use(cors())
app.use(express.json())





const uri = process.env.MONGODB_URI;


app.listen(Port,()=>{
    console.log(`server Running on ${Port}`)
})



const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  
  }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send("Server Is Running Fine")
})
