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

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
    this.handleLoggedIn = this.handleLoggedIn.bind(this);
  }

  handleLoggedIn() {
    console.log('testme');
    //this.setState({ loggedIn: true, });
  }
   
  render() {
    return (
      <div>

        <NavBar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/account' component={Account} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' render={() => <SignIn stuff={this.handleLoggedIn} />} />
          <Route path='/events' component={EventStore} />
          <Route render= { function() { return <p>Not Found</p> } } />
        </Switch>
	
      </div>
    );
  }
}
export default App;
