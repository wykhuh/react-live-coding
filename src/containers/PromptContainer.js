var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
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
