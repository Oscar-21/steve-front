/**
*
* Grid
*
*/

import React, { Component } from 'react';
import './style.css';
import './styleM.css';

class EventStore extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentWillMount() {
    fetch('http://react.app/api/events'
    ).then(response => 
      response.json()
    ).then((json) => {
      this.setState({ events: json });
    });
  }


  handleJoin = (EventID, EventName, Participants) => {
    fetch(`http://react.app/api/join/${EventID}/${Participants}?token=${sessionStorage.getItem('token')}`
    ).then((response) => { 
      return response.json();
    }).then((json) => {
      if (json.error) {
        alert(json.error)
      } else if (json.success) {
        alert(`joined ${EventName}`);
      }
    });
  }

  render() {
    return (
      <div>
        <div className="grid">

          { this.state.events.map((events, index) => (
              <div className="gridItem">
                <img
                  onClick={ () => {this.handleJoin(events.id, events.name, events.participants)} }
                  src={events.image} 
                  className="gridImage" 
                  alt="" 
                />
                {events.name} {events.category} {events.date}
              </div>
          ))}
        test
        </div>
      </div>
    );
  }
}
export default EventStore;
