const { MongoClient } = require('mongodb');
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const port = 3000

app.use(cors())
app.use(bodyparser.json())

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
client.connect()

// Database Name
const dbName = 'passop';

// Getting all the passwords from database "passop"
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
  res.json(findResult)
})

// Save a password
app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password)
    res.send({success : true, result : findResult})
})

// Delete a Password by ID
app.delete('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password)
    res.send({success : true, result : findResult})
})



app.listen(port, () => {
  console.log(`Example app listening on http://Localhost:${port}`)
})
