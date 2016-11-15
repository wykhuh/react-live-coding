var React = require('react');

function ConfirmBattle(props) {
  return(
    props.isLoading  ? <p>Loading</p> : <div>Confirm Battle</div>
  )
}

module.exports = ConfirmBattle;
