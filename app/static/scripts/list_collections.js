const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const url = 'mongodb+srv://root:SAdmin1@mongo-dev-db-0e9wb.mongodb.net/slither?retryWrites=true&w=majority';

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {

    if (err) throw err;

    const db = client.db("mongo-dev-db");

    db.listCollections().toArray().then((docs) => {

        console.log('Available collections:');
        docs.forEach((doc, idx, array) => {
            console.log(doc.name)
        });

    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});

export function hello() {
    return "Hello";
}