// Modules
const { MongoClient } = require('mongodb');
const fs = require('fs');

// Create async fn where we will connect to our cluster/ query our db/
async function main() {
  const uri = "mongodb://localhost:27017";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
};

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};



main().catch(console.error);