
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config();
const express=require('express')

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

app.get('/',(req,res)=>{
    res.send("Server Is Running Fine")
})


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

const db= client.db('sportnest')
const db_col=db.collection('facilities_data')
const db_col_2=db.collection('bookings')

app.post('/facility',async (req,res)=>{
    const facilityData=req.body
    const result=await db_col.insertOne(facilityData)

    res.send(result)
})



app.get("/facility", async (req, res) => {
  const ownerEmail = req.query.ownerEmail;

  let query = {};

  if (ownerEmail) {
    query = { ownerEmail };
  }

  const result = await db_col.find(query).toArray();

  res.send(result);
});

app.get('/facility/:id',async(req,res)=>{
  const {id}=req.params
  const result= await db_col.findOne({_id:new ObjectId(id)})
  res.send(result)
})


app.delete("/facility/:id", async (req, res) => {
  const id = req.params.id;

  const result = await db_col.deleteOne({
    _id: new ObjectId(id),
  });

  res.send(result);
});

// for my Bookings

app.post('/bookings',async (req,res)=>{
    const bookingData=req.body
    const result=await db_col_2.insertOne(bookingData)
    res.send(result)
})


app.get('/bookings/:userId', async(req,res)=>{
  const {userId}=req.params

  
  const result= await db_col_2.find({user_id:userId}).toArray()
  res.send(result)
})


app.delete('/bookings/:bookingId',async(req,res)=>{
  const {bookingId}=req.params;
  const result=await db_col_2.deleteOne({_id: new ObjectId(bookingId)})
  res.send(result)
})
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  
  }
}
run().catch(console.dir);

