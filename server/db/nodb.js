const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'site';

async function main() {
    await client.connect();
    console.log("mongodb connected");
    const db = client.db(dbName);
    const collection = db.collection('recommendations');

    

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());