'use strict';

const axios = require('axios');

module.exports.followers = async (event, context) => {
  
  /*
   * query the github api, and send the results in json format.
   */

  const userId = event.queryStringParameters.id;
  console.log(userId);
  const response = await axios.get(`https://api.github.com/users/${userId}/followers`)
    .then(res => {
      return {
        statusCode: 200,
        body: JSON.stringify(res.data),
      };
    })
    .catch(error => {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'error'
        }),
      };
    })

    return response;

};
