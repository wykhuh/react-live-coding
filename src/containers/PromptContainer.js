var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      username: ''
    }
  },

  onUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },

  onSubmitUser: function(e) {
    e.preventDefault();
    this.setState({
      username: ''
    })

    // go to /battle?playerOne=xxx&playerTwo=xxxx
    if(this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })

    // else go to /playerTwo/:playerOne
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render: function() {
    return(
      <Prompt
        onSubmitUser={this.onSubmitUser}
        onUpdateUser={this.onUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    )
  }
})

module.exports = PromptContainer;
