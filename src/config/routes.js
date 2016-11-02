var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home}></Route>
    </Route>
  </Router>
);

module.exports = routes;
