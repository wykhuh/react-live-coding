var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
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

  render: function() {
    return(
      <div style={transparentBg} className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form>
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
