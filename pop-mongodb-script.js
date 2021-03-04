var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const axios = require('axios');

/*   axios.get('https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset=hipertensao&q=&rows=5&sort=tempo&facet=tempo&facet=regiao&facet=aces').then(resp => {

      console.log(resp.data);
  });
 */

function axiosCallNhits(dataset) {
  axios.get('https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset='+dataset+'&q=&rows=0')
  .then(resp => {
    axiosCallDataset(dataset, resp.data.nhits);
  });
}

function axiosCallDataset(dataset, nhits) {
  nhits = 1;
  axios.get('https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset='+dataset+'&q=&rows='+nhits+'')
  .then(resp => {
    console.log(resp.data);
    /* var obj1 = resp.data.records;
  
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("Test_DB");
      
       dbo.collection("test").insertOne(obj1, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        console.log(response1.data);
      });
     
      db.close(); 
    }); */
  })
  .catch(error => {
    console.log(error);
  }); 
}

//var a = axiosCallNhits('https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset=hipertensao&q=&rows=0');
var ab = axiosCallNhits('hipertensao');




/*   axios.all([
    axios.get('https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset=hipertensao&q=&rows=0&sort=tempo&facet=tempo&facet=regiao&facet=aces')

  ]).then(axios.spread((response1) => {
    var obj1 = response1.data;
    //console.log(obj1);
  
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("Test_DB");
      
       dbo.collection("test").insertOne(obj1, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        console.log(response1.data);
      });
     
      db.close(); 
    });
    
  
  })).catch(error => {
    console.log(error);
  }); */

 
 


/* MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Test_DB");
  var myobj = { name: "Company Inc", address: "Highway 37" };

  dbo.collection("test").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result._id);
  
  });

  dbo.collection("test").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  db.close();
});
  */