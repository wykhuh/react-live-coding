var React = require('react');
var styles = require('../styles');
var UserDetails = require('./UserDetails');

function ConfirmBattle(props) {
  return(
    props.isLoading
    ? <p>Loading</p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className="col-sm-6">
          <p className="lead">Player 1</p>
          <UserDetails info={props.playersInfo[0]} />
        </div>
        <div className="col-sm-6">
          <p className="lead">Player 2</p>
          <UserDetails info={props.playersInfo[1]} />
        </div>
      </div>
      <div className='col-sm-8 col-sm-offset-2'>
        <div className='col-sm-12' style={styles.space}>
          <button type="button" className="btn btn-lg btn-success" onClick={props.handleIntiateBattle}>
            Intiate Battle
          </button>
        </div>
        <div className='col-sm-12' style={styles.space}>
          Reselect Players
        </div>
      </div>
    </div>
  )
}

module.exports = ConfirmBattle;
