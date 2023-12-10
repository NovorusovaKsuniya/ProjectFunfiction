var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("funfiction");
database.dropDatabase()
database = client.db("funfiction");
const funf = database.collection("funf");
const result = await funf.insertOne({name:"Кефер"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()