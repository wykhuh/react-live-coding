var React = require('react');
var transparentBg = require('../styles').transparentBg;

function Prompt(props) {
  return (
    <div style={transparentBg} className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={props.username}
              onChange={props.onUpdateUser}
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

module.exports = Prompt;
