import React, { Component } from 'react';

class EventStore extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      token: sessionStorage.getItem('token'),
    };
  }

  componentWillMount() {
    fetch('http://react.app/api/events'
    ).then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({	events: json });
    });
  }

  showEvents = () => {
    console.log(this.state.events);
  }

  render() {
    return (
      <div>

        <h1>Events</h1>
        <button onClick={this.showEvents}>Events</button>        
      </div>    
    ); 
  }
}
