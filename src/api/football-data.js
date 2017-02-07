var axios = require('axios');

// the open weather map api needs to be entered here along with you api key
const OPEN_WEATHER_MAP_URL = 'http://api.football-data.org/v1/fixtures/';


module.exports={
  getWeather:function(location){
    var encodedLocation = encodeURIComponent (location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}`/* all this code is executed as a regular jav script expression*/

    return axios.get(requestUrl, {
      headers: { "X-Auth-Token": "8921bea73c794f8b848353c45f0eeebd" }
    }).then(function (res){
      console.log('Response: ', res);
    },function (res){
      throw new Error(res.data.message);
    });
  },
};
