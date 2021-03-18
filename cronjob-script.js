const { Client } = require('pg');
const sql = require('sql');
const client = new Client({user: 'claudio',host: 'localhost',database: 'MDS',password: 'postgres',port: 5433,});
const axios = require('axios');
var myObject = {} // empty Object
//var key = 'records';
myObject = []; // empty Array, which you can push() values into+



const hipertensao = sql.define({
  name: 'hipertensao',
  columns: [
    'contagem_de_utentes_inscritos_com_hipertensao_arterial_com_pressao_arterial_inferior_a_150_90_mmhg_n',
    'regiao',
    'ponto_ou_localizacao_geografica',
    'proporcao_hipertensos_65_a_com_pa_150_90',
    'tempo',
    'aces'
  ]
});

const diabetes = sql.define({
  name: 'diabetes',
  columns: [
    'contagem_de_utentes_inscritos_com_hipertensao_arterial_com_pressao_arterial_inferior_a_150_90_mmhg_n',
    'regiao',
    'ponto_ou_localizacao_geografica',
    'proporcao_hipertensos_65_a_com_pa_150_90',
    'tempo',
    'aces'
  ]
});

async function executeQuery(data, sqlObj){
    
  try {

      data.records.forEach(element => {
        myObject.push(element.fields); 
      });
  
      JSON.stringify(myObject); 

      console.log(myObject);

      /* let datasetInsert = sqlObj.insert(myObject).toQuery();
      
      client.connect();

      const resDatasetInsert = await client.query(datasetInsert);
      console.log(resDatasetInsert); */
 
  } catch (err) {
      console.log(err.stack);
  } finally {
      client.end();
  }

}

function axiosCallNhits(dataset, sqlObj) {
    axios.get('https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset='+dataset+'&q=&rows=0')
    .then(resp => {
      axiosCallDataset(dataset, resp.data.nhits, sqlObj);
    });
  }
  
  function axiosCallDataset(dataset, nhits, sqlObj) {
    nhits = 2;
    axios.get('https://transparencia.sns.gov.pt/api/records/1.0/search/?dataset='+dataset+'&q=&rows='+nhits+'')
    .then(resp => {
  
      /* console.log(resp.data);
      resp.data.records.forEach(element => {
        myObject[key].push(element.fields); 
      });
  
      JSON.stringify(myObject); */

      //console.log(myObject);
      executeQuery(resp.data, sqlObj);
    
    })
    .catch(error => {
      console.log(error);
    }); 
  }
  
//mensal 
//axiosCallNhits('hipertensao', hipertensao);

// mensal
axiosCallNhits('diabetes', diabetes);



