const { Pessoa } = require('./mod1');
const axios = require('axios');
//const p1 = new Pessoa('Luiz');


axios('https://otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e));