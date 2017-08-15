import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/styles';

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
      this.setState({ events: json });
    });
  }

  handleJoin = (EventID, EventName) => {
    fetch(`http:/\/react.app/api/join/${EventID}?token=${this.state.token}`
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

  handleLocation = () => {
   console.log(this.state.id);
  }

  render() {
    return (
      <div>

        <h1>Events</h1>

        <table style={styles.EventStore.tableStyle}>

          <tr style={styles.EventStore.tableRow}>
            <td style={styles.EventStore.tableDataCell}>Name</td>
            <td style={styles.EventStore.tableDataCell}>Category</td>
            <td style={styles.EventStore.tableDataCell}>Date</td>
          </tr>

          { this.state.events.map((events, index) => (
            <tr>
              <td 
                style={styles.EventStore.eventName} 
                onClick={() => {
                  this.handleJoin(events.id, events.name)} 
                }
              >
                {events.name}
              </td>
              <td>{events.category}</td>
              <td>{events.date}</td>
            </tr>
          ))}

        </table>          
        <button onClick={this.handleLocation}> Location </button>
      </div>    
    ); 
  }
}
export default EventStore;
