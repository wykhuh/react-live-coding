var axios = require('axios');
var githubConfig = require('../config/secret').github;

var param = '?client_id=' + githubConfig.clientId
  + "&client_secret=" + githubConfig.clientSecret;

function getUserInfo(username) {
  // axios returns a promise
  return axios.get('https://api.github.com/users/' + username + param);
}

getUserInfo('wykhuh')
.then(function(res){
  // headers - show your rate limit
  // data - info about the user
  console.log('github', res)
})

var helpers = {
  getPlayersInfo: function() {
    // fetch data from github
  }
};

module.exports = helpers;
