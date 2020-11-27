const express = require ('express')
const axios = require ('axios')

const url = `https://services.odata.org/TripPinRESTierService/People/('Henry')`


//Chamando o Nome Henry que não tras resultado, por que não existe, por isso vai dar Status = 500

axios.get( url)
  .then(function(response){
    console.log(response.data); 
    console.log(response.status); 
  });  

 
//Incluindo uma pessoa  

axios.post('https://services.odata.org/TripPinRESTierService/People', {
   UserName: 'Igor', // This is the body part
       FirstName: 'Barros',
        MiddleName: 'Null',
        Gender: 'Male',
        Age: 'Null'
  })
  .then(function (response) {
    console.log(response);
   })
 
//Deletando Usuário anterior

UrlDelete = 'https://services.odata.org/TripPinRESTierService/People'

  axios
  .delete(UrlDelete, {
    params: { UserName: 'Igor'},
    headers: {
      token: 'TOKEN',
    },
  }) 
  .then(function (response) {
    
 })
  .catch(function (error) {
   console.log(error);
  });

 //Chamando as localidades que contenham a palavra District 

UrlAndress = `https://services.odata.org/TripPinRESTierService/Airports?$filter=contains(Location/Address, 'District')`

axios.get( UrlAndress)
  .then(function(response){
    console.log(response.data); 
    console.log(response.status); 
  });  