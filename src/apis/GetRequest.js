import React from 'react';
const axios = require('axios');

async function GetRequest(apiUrl, token) {
  return await axios
    .get(`${apiUrl}`, {
    })
    .then(getResponse => {
   //   console.log(`${apiUrl}    ` + JSON.stringify(getResponse.data));
      return getResponse.data;
    })
    .catch(function (error) {
 //     console.log(`${apiUrl}  ` + error);
      return error.message;
    });
}

export default GetRequest;
