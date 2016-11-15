var React = require('react');
var transparentBg = require('../styles').transparentBg;

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

    // else go to /playerTwo/:playerOne
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render: function() {
    return(
      <div style={transparentBg} className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUser}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={this.state.username}
                onChange={this.onUpdateUser}
                placeholder="Github Username"/>
            </div>
            <div className="form-group col-sm-3 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = PromptContainer;
