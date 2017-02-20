const React = require('react')
const ReactDOM = require('react-dom')
/*const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { shows } = require('../public/data')
const { store } = require('./Store')
const { Provider } = require('react-redux')

*/
const ReactRouter = require('react-router')
const { Router, Route, hashHistory } = ReactRouter

const ShowProfile = require('./ShowProfile')
const EditProfile = require('./EditProfile')
const DriverProfile = require('./DriverProfile')

class App extends React.Component {

  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={EditProfile} />
        <Route path='/show-profile' component={ShowProfile} />
        <Route path='/driver-profile' component={DriverProfile} />
      </Router>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
