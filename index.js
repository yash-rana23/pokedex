import React from 'react'
import ReactDom from 'react-dom'

import Pokegame from './pokegame.js'

class App extends React.Component {
  render() {
    return (
      <div class='app'>
        <Pokegame />
      </div>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'))
