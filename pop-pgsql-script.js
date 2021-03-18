/* var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const axios = require('axios');
var myObject = {} // empty Object
var key = 'records';
myObject[key] = []; // empty Array, which you can push() values into


function axiosCallNhits(dataset) {
  axios.get('https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset='+dataset+'&q=&rows=0')
  .then(resp => {
    axiosCallDataset(dataset, resp.data.nhits);
  });
}

function axiosCallDataset(dataset, nhits) {
  nhits = 2;
  axios.get('https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset='+dataset+'&q=&rows='+nhits+'')
  .then(resp => {

    resp.data.records.forEach(element => {
      myObject[key].push(element.fields); 
    });

    JSON.stringify(myObject);
  
     MongoClient.connect(url, function(err, db) {
      if (err) throw err;
        var dbo = db.db("Test_DB");
      dbo.collection(dataset).insertOne(myObject, function(err, res) {
        if (err) throw err;
          console.log("document inserted on colection: "+dataset);
      });
      db.close(); 
    }); 
  })
  .catch(error => {
    console.log(error);
  }); 
}

axiosCallNhits('hipertensao'); */

const { Client } = require('pg');

const client = new Client({
    user: 'claudio',
    host: 'localhost',
    database: 'testdb',
    password: 'postgres',
    port: 5433,
});


async function a(){

  try {
    const query = `
      CREATE TABLE users (
          email varchar,
          firstName varchar,
          lastName varchar,
          age int
      );
    `;

    const query2 = `
    INSERT INTO users (email, firstName, lastName, age)
    VALUES ('johndoe@gmail.com', 'john', 'doe', 21)
    `;
    const res1 = await client.query(query);
    const res2 = await client.query(query2);
    console.log('Table is successfully created');
    console.log(res1);
    console.log(res2);
  } catch (err) {
      console.log(err.stack);
  } finally {
      client.end();
  }

}

client.connect();

a();


