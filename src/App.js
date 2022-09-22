import React from 'react';
import { connect } from 'react-redux';
import { incplayerone, decplayerone, incplayertwo, decplayertwo, playeroneownscore, playertwoownscore } from './Actions';

const App = ({ Argentina, Chile, incplayerone, decplayerone, incplayertwo, decplayertwo, playeroneownscore, playertwoownscore }) => {
  return (
    <div>
      <center>
        <h2>Playerone Details:</h2>
        <p>Name : {Argentina.name} || {' '} Score : {Argentina.score}</p>
        <button onClick={() => incplayerone()}>Add</button>{' '}
        <button onClick={() => decplayerone()}>Substract</button>{' '}
        <button onClick={() => playeroneownscore(12)}>Payload</button>
        <hr />
        <h2>Playertwo Details:</h2>
        <p>Name : {Chile.name} || {' '} Score : {Chile.score}</p>
        <button onClick={() => incplayertwo()}>Add</button>{' '}
        <button onClick={() => decplayertwo()}>Substract</button>{' '}
        <button onClick={() => playertwoownscore(1222)}>Payload</button>
      </center>
    </div>
  )
}

const mapStateToProps = state => ({
  Argentina: state.Argentina,
  Chile: state.Chile
})
export default connect(mapStateToProps, { incplayerone, decplayerone, incplayertwo, decplayertwo, playeroneownscore, playertwoownscore })(App);