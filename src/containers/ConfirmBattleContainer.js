var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },

  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
      />
    )
  }
})

module.exports = ConfirmBattleContainer;
