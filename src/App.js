import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Import UI components
import Account from './components/Account';
import About from './components/About';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import EventStore from './components/EventStore';
import NavBar from './components/NavBar';
import Grid from './components/Grid';

class App extends Component {
  render() {
    return (
      <div>

        <NavBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/account' component={Account} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={SignIn} />
          <Route path='/events' component={EventStore} />
          <Route path='/grid' component={Grid} />
          <Route render= { function() { return <p>Not Found</p> } } />
        </Switch>
	
      </div>
    );
  }
}
export default App;
