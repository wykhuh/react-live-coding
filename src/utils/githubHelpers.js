var axios = require('axios');
var githubConfig = require('../config/secret').github;

var param = '?client_id=' + githubConfig.clientId
  + "&client_secret=" + githubConfig.clientSecret;

function getUserInfo(username) {
  // axios returns a promise
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function(players) {
    return axios.all(
      [getUserInfo(players[0]), getUserInfo(players[1])],
    ).then(function(info) {
      return [info[0].data, info[1].data];
    })
    .catch(function(err) {
      console.warn('error in getPlayersInfo', err);
    });
  },
};

module.exports = helpers;
